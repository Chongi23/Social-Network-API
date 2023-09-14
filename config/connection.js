const { connect, connection } = require('mongoose');



const connectString =
process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetDB';
 
connect(connectString);
console.log("Connected to SocialNetDB")
module.exports = connection;
