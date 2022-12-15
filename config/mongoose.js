const mg = require('mongoose');

mg.connect('mongodb://localhost:27017/st2')
const DB = mg.connection;

DB.on('error', console.error.bind(console, "error connecting to the databse"));

DB.once('open', function () {
    console.log("connected to the databse");
});

