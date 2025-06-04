const messages = require("../models/messages");

function renderIndex(req, res) {
  res.render("index", { messages: messages });
}

module.exports = { renderIndex };
