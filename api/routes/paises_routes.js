const paisesRouter = require("express").Router();
var paisesController = require('../controllers/paises_controller');

paisesRouter.get("/", paisesController.list_all_paises);
paisesRouter.post("/", paisesController.crear);



module.exports = paisesRouter;
