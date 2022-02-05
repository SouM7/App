
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const StudentsRouter = require("./Routers/StudentsRouter");
const ExoRouter = require("./Routers/ExoRouter");
const Port = process.env.PORT || 4000;
const db = mongoose.connection;

app.use(express.json());
app.use('/', StudentsRouter);
app.use('/', ExoRouter);
app.get("/", (req, res) => {
    res.send("Server Connected on Port 4000");
  });

mongooose.connect(process.env.URL , {
    useNewurlParser : true,
    useUnifiedTopology : true}).then(()=>{console.log("Connected to MongoDB")}) 
 
db.on("open", () => {
    console.log("connected to database MongoDb");
  });  

  require("dotenv").config();



app.listen(Port, () => console.log(`Server connected on port ${Port}`));





 //mongooose.connect("mongodb : //localhost:27017/fullstack")
// const app = express();
// app.listen(process.env.PORT , () => console.log("Server connected on port 4000"));

// app.use(express.json());
