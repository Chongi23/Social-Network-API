const connection = require('../config/connection');
const { User, Thoughts } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thoughts.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create an array of usernames/emails
  const users = [
      {
          username: "amanda",
          email: "amanda@gmail.com"
      },
      {
          username: "sam",
          email: "sam@gmail.com"
      }
  ];

  //Create an array of thoughts/usernames
  const thoughts = [
      {
          thoughtText: "Well , Hello...",
          username: "Jack"
      },
      {
          thoughtText: "What was I saying ...",
          username: "Carmen"
      }
  ]

  // Add usernames to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete!');
  process.exit(0);
});