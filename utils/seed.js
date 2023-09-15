const connection = require('../config/connection');
const { User, Thoughts } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

   // Drop existing users
   await User.deleteMany({});
  // Drop existing thoughts
  await Thoughts.deleteMany({});

 

  // Create an array of usernames/emails/friends
  const users = [
      {
          username: "Carmen",
          email: "Carmen@gmail.com",
          friends: ["Natalia"],
          thoughts: "Is this going to work?"
      },
      {
          username: "Sam",
          email: "ring@gmail.com",
         friends: ["Natalia", "Korra", "Inosuke"],
         thoughts: "Can your read this?"
      },
      {
        username: "Natalia",
        email: "canciones@gmail.com",
        friends: ["Carmen", "Sam"],
        thoughts: "I hope the biopsy goes well."
    },
    {
        username: "Korra",
        email: "avatar@gmail.com",
        friends: ["Sam", "Inosuke"],
        thoughts: "Did I wash my coat?"
    },
    {
        username: "Inosuke",
        email: "nodemons@gmail.com",
        friends: ["Korra", "Sam"],
        thoughts: "Do you know the muffin man?"
       
    },
  ];

  //Create an array of thoughts/usernames
  const thoughts = [
      {
          thoughtText: "Well , Hello...",
          username: "Sam"
      },
      {
          thoughtText: "What was I saying ...",
          username: "Carmen"
      },
      {
        thoughtText: "can I do this?",
        username: "Korra"
    },
    {
        thoughtText: "How are we doing?",
        username: "Inosuke"
    },
    {
        thoughtText: "nunca suficiente para mi.",
        username: "Natalia"
    }


  ]

  // Add usernames to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thoughts.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete!');
  process.exit(0);
});