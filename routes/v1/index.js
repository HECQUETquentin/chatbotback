const express = require('express')
const router = express.Router()
const dialogController = require('../../controller/v1/index.js')

router.get('/', dialogController.home)

router.get('/dialogs', dialogController.dialogs)

router.post('/dialogs', (req, res) => { 
    console.log(req.body.question)
    let matchFound=false;
    const dialogs=[
        {
            question : "salut",
            answer : "coucou"
        },
        {
            question : "ca va?",
            answer : "oui et toi?"
        },
        {
            question : "quel age as tu?",
            answer : "22 ans"
        }
    ]
    dialogs.forEach(dialog =>{
        if(dialog.question === req.body.question){
            matchFound = true;
            res.status(200).json({Response : dialog.answer})
            return
        }
    })
    if(!matchFound){
        res.status(200).json({message: "pas de réponse a vous apporter"})
    }
})

module.exports = router