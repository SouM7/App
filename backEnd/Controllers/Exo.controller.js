const Exo = require("../Models/Exo.model");
const ExoController = {};


ExoController.createExo = async function (req, res) {
  const exo = new Exo({
    guid : req.body.guid,
    title: req.body.title,
    description: req.body.description, 
    date: req.body.date,
  duration: req.body.duration,
  level: req.body.level,
  students : req.body.students
  });
  try {
    await exo.save();
    res.status(201).json({
      message: "Exo created successfully",
      exo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating exo",
      error,
    });
  }
};


ExoController.getAllExos= async function (req, res) {
  console.log("GET /exos");
  let exos;
  try {
   exos = await Exo.find();
    res.send((exos));
  } catch (error) {
    res.status(500).send(error);
  }
};

ExoController.getSingleExo = async function (req, res) {
  console.log("GET /exos/:id");
  let exo;
  try {
   exo = await Exo.findById(req.params.id);
    res.send(exo);
    if(exo){
      res.send(exo);
    } else {
      console.log("exo not found")
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

ExoController.updateExo= async function(req,res){
  console.log("PUT/ exos/:guid");
  let exo;
  try {
    exo = await Exo.findOneAndUpdate(
      {id : req.params.id},
      {$set: req.body},
      {new : true}
    );
    if (exo){
      res.send(exo);
    }
    else{
      res.status(404).send("Exo not found");
    }
  }
    catch (error) {
      res.status(500).send(error);
    }
}

ExoController.deleteExo = async function(req,res){
  console.log("DELETE/ exos/:guid");
  let exo;
  try {
    exo = await Exo.findOneAndDelete({id : req.params.id});
    if (exo){
      res.send(exo);
    }
    else{
      res.status(404).send("Exo not found");
    }
  }
    catch (error) {
      res.status(500).send(error);
    }
}
  

module.exports = ExoController;
