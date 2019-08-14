const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    roomName: { type: String, required: true },
    gradeID : {type:String, required:true}
})

const Room = mongoose.model('Room', RoomSchema);

module.exports = {
    Room, RoomSchema
}