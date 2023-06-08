const express = require('express')
const router = express.Router()
const dialogController = require('../../controller/v1/index.js')

/**
 * @swagger
 * /api/v1/:
 *  get:
 *    description: page d'accueil
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', dialogController.home)

/**
 * @swagger
 * /api/v1/dialogs:
 *  get:
 *    description: méthode get question/answer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/dialogs', dialogController.dialogget)

/**
 * @swagger
 * /api/v1/dialogs:
 *  post:
 *    description: méthode post question/answer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/dialogs', dialogController.dialogpost)

/**
 * @swagger
 * /api/v1/dialogs:
 *  delete:
 *    description: méthode delete question/answer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/dialogs', dialogController.dialogdelete)

/**
 * @swagger
 * /api/v1/dialogs:
 *  put:
 *    description: méthode put question/answer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/dialogs', dialogController.dialogput)

module.exports = router