'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  task_name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  task_description: {
    type: String,
    required: 'enter brief description about task '
  },
  task_creator: {
    type: String,
    required: 'enter task creator name '
  },
  duration: {
      type: TimeRanges,
      default: TimeRanges.now

  },

  createdAt: {
    type: Date,
    default: Date.now
  },
 
});

module.exports = mongoose.model('Tasks', TaskSchema);
