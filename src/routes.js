const {Router} = require('express');


const routes = Router();
const SendMailController = require('./controllers/SendMailController');

routes.get('/', (request,response) => response.status(200).json({msg:'Foi'}));


routes.post('/send', SendMailController.store);


module.exports = routes;
