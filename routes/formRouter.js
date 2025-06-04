const { Router } = require("express");
const renderForm = require("../controllers/formController");

const formRouter = Router();

formRouter.post("/", renderForm);

module.exports = formRouter;
