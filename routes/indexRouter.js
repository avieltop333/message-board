const { renderIndex } = require("../controllers/indexController");

const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", renderIndex);

module.exports = { indexRouter };
