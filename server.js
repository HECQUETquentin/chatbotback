const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const cors = require('cors')
//const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Dialog API',
            description: 'Dialog API Information',
            contact: {
                name: 'Developer Name',
            },
            servers: ['http://localhost:3000'],
        },
    },
    apis: ['./routes/v1/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/v1', require('./routes/v1'))

/*app.get('/', middleware, (req, res) => {
    res.send('Hello')
})*/

app.get('*', (req, res) => {
    //res.status(404).json({ message: 'Not found'}) bonne pratique
    res.sendFile(__dirname + "/view/404.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*mongoose.connect('mongodb+srv://qhecquet22:Rathalos=91!@stjo.d4uqlnt.mongodb.net/')
.then(() =>{console.log('Connected to database')})
.catch((error) => {console.log('Connection failed:', error)})
*/
/*function middleware(req, res, next){
    console.log('coucou')
    next()
}*/