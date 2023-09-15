const { connect, connection } = require('mongoose');



const connectString =
process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/the-space-networkDB';
 
connect(connectString);
console.log("Connected to The Space Network Data Base")
module.exports = connection;
