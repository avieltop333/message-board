require("dotenv").config();

const path = require("node:path");

const express = require("express");

//import routes
const { indexRouter } = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");

const app = express();

const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.use(express.urlencoded({ extended: false }));
app.use("/new", formRouter);

app.listen(PORT, () => {
  console.log(`listening at PORT ${PORT}`);
});
