const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

app.use(express.json());
app.use(require('./routes/news.route'))
app.use(require("./routes/categories.route"));
app.use(require("./routes/comment.route"));

async function startServer() {
  try {
    await mongoose.connect(
      "mongodb+srv://gaunt0066:Panzerkampf06@cluster0.6m4r7dq.mongodb.net/news?retryWrites=true&w=majority"
    );
    console.log("mongodb is started");
    app.listen(port, () => {
      console.log("server has been started");
    });
  } catch (error) {
    console.log(error);
  }
}
startServer();
