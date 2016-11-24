var mongoose = require('mongoose');
var autopopulate = require('mongoose-autopopulate');

var projectSchema = new mongoose.Schema({
  title: String,
  image: String,
  summary: String,
  technologies: String,
  url: String,
  github: String,
  desktop: Boolean,
  mobile: Boolean
},
{
  timestamps: true
});

projectSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;
