const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const apiRouter = require("./routes/apiRoutes.js");

const PORT = 9000;

//Configuration of Body-parser
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlEncodedParser);

//Configuration of API Router
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome To Express Server</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT : http://localhost:${PORT}`);
});
