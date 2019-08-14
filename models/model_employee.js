const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    empID: { type: String, required: true },
    sex: { type: String, required: true },
    dob: { type: String, required: true },
    major: { type: String, required: true },
    position: { type: String, required: true },
    roomID: { type: String, required: true },
});


const Employee = mongoose.model('Employee', EmployeeSchema);


module.exports = {
    Employee, EmployeeSchema
}