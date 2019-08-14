const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
    gradeName: { type: String, required: true }
});

const Grade = mongoose.model("Grade", GradeSchema);

module.exports = {
    GradeSchema, Grade
}
