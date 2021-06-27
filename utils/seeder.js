// Push all the rooms into db
const Room = require ("../models/room");
const mongoose = require('mongoose');

const rooms = require ("../data/rooms.json");

mongoose.connect('mongodb://localhost:27017/bnb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }).then(con => console.log("Connected to local db"));

const seedRooms = async () => {
    try {
        await Room.deleteMany();
        console.group('Rooms are deleted');

        await Room.insertMany(rooms);
        console.log('All rooms are added');
        
        process.exit()

    } catch (error) {
        console.log(error.message);
        process.exit()
    }
}

seedRooms()