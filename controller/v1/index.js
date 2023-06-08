const express = require("express")
const app = express()
const {Sequelize} = require("sequelize")
const Chat = require("../../models/Chat")

app.use(express.json())

/*app.post('/createchat', (req, res) => {
    const chat = Chat.build({ question: req.body.question, answer: req.body.answer});
    (async function save(){
        await chat.save();
        console.log(chat);
        console.log('Chat was saved to the database!');
    })()
    res.status(200).json({
        message: "created"
    })
})

app.patch('/updatechat', async (req, res) =>{
    const updatechat = Chat.update({ question: req.body.question, answer: req.body.answer}, {
        where: {
            id: req.body.id
        }
    });
    res.status(200).json({
        message: "updated"
    })
})

app.delete('/deletechat', async (req, res) =>{
    const deletechat = await Chat.destroy({
        where: {
            id: req.body.id
        }
    });
    console.log('Chat was deleted to the database!');
    res.status(200).json({
        message: "deleted"
    })
})*/

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../../db/database.sqlite'
});

;(async function connect(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})()


const dialogController = {
    home: (req, res) => {
        res.send('Hello World!')
    },
    dialogget: async (req, res) => {
        const allchats = await Chat.findAll();
    
        res.status(200).json({
            data: allchats
        })
    },
    dialogpost: (req, res) => { 
        const chat = Chat.build({ question: req.body.question, answer: req.body.answer});
        (async function save(){
            await chat.save();
            console.log(chat);
            console.log('Chat was saved to the database!');
        })()
        res.status(200).json({
            message: "created"
        })
    },
    dialogput: async (req,res) => {
        const updatechat = Chat.update({ question: req.body.question, answer: req.body.answer}, {
            where: {
                id: req.body.id
            }
        });
        res.status(200).json({
            message: "updated"
        })
    },
    dialogdelete: async (req,res) => {
        const deletechat = await Chat.destroy({
            where: {
                id: req.body.id
            }
        });
        console.log('Chat was deleted to the database!');
        res.status(200).json({
            message: "deleted"
        })
    }
}

/*const dialogs = [
   {
        question: "salut",
        answer: "coucou"
    },
    {
        question: "ça va ?",
        answer: "bien et toi ?"
    },
    {
        question: "quel age as-tu ?",
        answer: "22 ans"
    },
    {
        question: "Quel temps fait-il ?",
        answer: "Il pleut"
    }
]

const dialogController = {
    home: (req, res) => {
        res.send('Hello World!')
    },
    dialogget: (req, res) => {
        res.status(200).json({ message: dialogs })
    },
    dialogpost: (req, res) => { 
        console.log(req.body.question)
        let matchFound=false;
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
    }
}
*/ 
module.exports = dialogController