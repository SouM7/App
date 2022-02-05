// create user schema using mongoose
const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const Schema = mongoose.Schema;

const ExoSchema = new Schema({

  guid : Number,
  title : {
      type : string,
      required: true
  },
  description: String, 
  date: Date,
  duration: Number,
  level: String,
  students: [{type: Schema.Types.ObjectId, ref: "Student"}]
  
 });


module.exports = mongoose.model("Exo", ExoSchema);

//Exo.model.js : Schema for exo (id,title,description,date,duration,level) + collection 


