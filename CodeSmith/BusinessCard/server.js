const express = require("express");
const synapse = require("@synapsejs/synapse");
const path = require("path");
// const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, "./dist")));

app.use("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "./dist/index.html"));
});

app.use((err, req, res, next) => {
  const defErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: "An error occurred",
  };
  const errorObj = { ...defErr, ...err };
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
