const Trails = require('./server/db/models');
const db = require('./server/db/index.js');


const trails = [{
    id: 1,
    name: "Monument Trail",
    difficulty: "easy",
    type: "out-and-abck",
    length: 6.3
  },
  {
    id: 2,
    name: "Paul Intemann Nature Trail",
    difficulty: "easy",
    type: "out-and-back",
    length: 1.8
  },
  {
    id: 3,
    name: "Captain Jacks Trail",
    difficulty: "easy",
    type: "out-and-back",
    length: 13.6
  },
  {
    id: 4,
    name: "Goose Creek Trail",
    difficulty: "easy",
    type: "out-and-back",
    length: 28.1
  },
  {
    id: 5,
    name: "Raleigh Peak Trail",
    difficulty: "moderate",
    type: "out-and-back",
    length: 7
  },
  {
    id: 6,
    name: "Lincoln Mountain Loop Trail",
    difficulty: "moderate",
    type: "loop",
    length: 4.1
  },
  {
    id: 7,
    name: "Barr Trail to Pikes Peak",
    difficulty: "hard",
    type: "out-and-back",
    length: 23
  },
  {
    id: 8,
    name: "Bergen Peak and Elk Meadows Trail",
    difficulty: "hard",
    type: "loop",
    length: 8.3
  },
  {
    id: 9,
    name: "Old Mill and Bulging Elk Trail",
    difficulty: "hard",
    type: "loop",
    length: 12.1
  }
]

console.log('Syncing Database');

db.sync({
    force: true
  })
  .then(() => {
    console.log('Seeding database');
    return Promise.all(trails.map(trail => Trails.create(trail)));
  })
  .then(() => console.log('Seeding Successful'))
  .catch(err => {
    console.error('Error while seeding');
    console.error(err.stack);
  })
  .finally(() => {
    db.close();
    return null;
  })