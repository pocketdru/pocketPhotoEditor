const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
//   "mongodb://heroku_1l5014pk:uoiouulncm98nh4fguuvvm9qem@ds059524.mlab.com:59524/heroku_1l5014pk"
  "mongodb://localhost/pocket_db"
);

const userSeed = [{
    email: "test@test.com",
    name: "Test"
  },
  {
    email: "hello@test.com",
    name: "Ima",
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  const photoSeed = [{
      name: "kva"
  }];

  db.Photo
    .remove({})
    .then(() => db.Photo.collection.insertMany(photoSeed))
    .then(data => {
        console.log(data.result.n + "records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });