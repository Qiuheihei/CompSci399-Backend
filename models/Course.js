const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({

  courseName: {
    type: String,
    trim: true,
    required: 'Event name cannot be blank',
  },

  courseID: {
    type: String,
    trim: true,
    default: 'TBA',
  },

});

CourseSchema.pre('save', async (next) => {
  next();
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
