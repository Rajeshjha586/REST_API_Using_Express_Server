import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/usersRoutes.js";

const app = express();
const PORT = 5000;

//Configuration bodyParser(middleware)
app.use(bodyParser.json());

//Routes Handler
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  console.log("Namastey ExpressJS Server");

  res.send("HomePage");
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT : http://localhost:${PORT}`);
});
