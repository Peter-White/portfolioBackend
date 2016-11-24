var express = require('express');
var router = express.Router();
var Project = require('../models/project');

/* GET users listing. */
router.get('/', function(req, res) {
  Project.find({}, function(error, projectList) {
    res.json(projectList);
  });
});

router.get('/:id', function(req, res) {
  Project.find({
    _id: req.params.id
  }, function(error, project) {
    res.json(project);
  });
});

router.post('/', function(req, res) {
  console.log(req.body);
  Project.create({
    title: req.body.title,
    image: req.body.image,
    summary: req.body.summary,
    technologies: req.body.technologies,
    url: req.body.url,
    github: req.body.github,
    desktop: req.body.desktop,
    mobile: req.body.mobile
  }, function(error) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
    });
    console.log(res);
});

router.patch('/:id', function(req, res) {
  Project.findByIdAndUpdate(req.params.id, req.body, {
    overwrite: false
  }, function(error, project) {
    if (error) {
      console.error(error);
      res.sendStatus(400);
    }
    console.log('Changed')
    res.sendStatus(200);
  });
});

router.delete('/:id', function(req, res) {
  Project.remove({
    _id: req.params.id
  }, function(error) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;
