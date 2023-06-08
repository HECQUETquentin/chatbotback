const express = require("express")
const app = express()
const {Sequelize} = require("sequelize")
const Chat = require("../../models/Chat")

app.use(express.json())

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
        res.send('Vous êtes bien connecté à l\'API!')
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

module.exports = dialogController