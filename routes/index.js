var express = require('express');

const persona = require('../database/persona');
const PERSONA = persona.model;
const PERSONASCHEMA = persona.schema;

const mascota = require('../database/mascota');
const MASCOTA = mascota.model;
const MASCOTASCHEMA = mascota.schema;

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/persona', async(req, res, next) => {
  var params = req.body;
  params["fechaRegistro"] = new Date();
  var persona = new PERSONA(params);
  var result = await persona.save();
  res.status(200).json(result);
});

router.get("/persona", async(req, res) => {
  var list = await PERSONA.find({});
  res.status(200).json(list);
});

router.patch('/persona', async(req, res, next) => {
  var params = req.body;
  var id = req.query.id;
  if(id == null){
    res.status(300).json({
       msn: "Introducir id del usuario que desea actualizar"
    });
    return;
  }
  var result = await PERSONA.findOneAndUpdate({_id: id},params);
  res.status(200).json(result)
});

router.delete("/persona", async(req, res) => {
  var id = req.query.id;
  if(id == null){
    res.status(300).json({
       msn: "Introducir id del usuario que desea actualizar"
    });
    return;
  }
  var result = await PERSONA.remove({_id: id})
  res.status(200).json(result);
});




router.post('/mascota', async(req, res, next) => {
  var params = req.body;
  var mascota = new MASCOTA(params);
  var result = await mascota.save();
  res.status(200).json(result);
});

router.get("/mascota", async(req, res) => {
  var list = await MASCOTA.find({});
  res.status(200).json(list);
});

router.patch('/mascota', async(req, res, next) => {
  var params = req.body;
  var id = req.query.id;
  if(id == null){
    res.status(300).json({
       msn: "Introducir id del usuario que desea actualizar"
    });
    return;
  }
  var result = await MASCOTA.findOneAndUpdate({_id: id},params);
  res.status(200).json(result)
});

router.delete("/mascota", async(req, res) => {
  var id = req.query.id;
  if(id == null){
    res.status(300).json({
       msn: "Introducir id del usuario que desea actualizar"
    });
    return;
  }
  var result = await MASCOTA.remove({_id: id})
  res.status(200).json(result);
});

module.exports = router;
