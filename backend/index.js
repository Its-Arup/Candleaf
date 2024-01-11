const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.SERVER_PORT || 7001;

app.use("/", (req, res) => {
  try {
    res.status(200).send({ msg: "this is Home page" });
  } catch (error) {
    res.status(400).send({ mag: error.message });
  }
});

app.listen(PORT, async () => {
  try {
    console.log(`server listening on ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
