const messages = require("../models/messages");

function renderForm(req, res) {
  console.log(req.body.name); // This will log form data on POST
  console.log(req.body.message); // This will log form data on POST

  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });

  res.redirect("/");
}

module.exports = renderForm;
