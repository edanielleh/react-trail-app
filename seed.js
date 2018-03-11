const Trails = require('./server/db/models');
const db = require('./server/db/index.js');


const trails = [{
    id: 1,
    name: "Monument Trail",
    difficulty: "easy",
    type: "out-and-back",
    length: 6.3,
    lat: 39.09811,
    lng: -104.87112
  },
  {
    id: 2,
    name: "Paul Intemann Nature Trail",
    difficulty: "easy",
    type: "out-and-back",
    length: 1.8,
    lat: 38.85653,
    lng: -104.92715
  },
  {
    id: 3,
    name: "Captain Jacks Trail",
    difficulty: "easy",
    type: "out-and-back",
    length: 13.6,
    lat: 39.24243,
    lng: -105.26908
  },
  {
    id: 4,
    name: "Goose Creek Trail",
    difficulty: "moderate",
    type: "out-and-back",
    length: 28.1,
    lat: 38.80049,
    lng: -104.89964
  },
  {
    id: 5,
    name: "Raleigh Peak Trail",
    difficulty: "moderate",
    type: "out-and-back",
    length: 7,
    lat: 39.40005,
    lng: -105.16822
  },
  {
    id: 6,
    name: "Lincoln Mountain Loop Trail",
    difficulty: "moderate",
    type: "loop",
    length: 4.1,
    lat: 39.17442,
    lng: -104.75018
  },
  {
    id: 7,
    name: "Barr Trail to Pikes Peak",
    difficulty: "hard",
    type: "out-and-back",
    length: 23,
    lat: 38.85585,
    lng: -104.93393
  },
  {
    id: 8,
    name: "Bergen Peak and Elk Meadows Trail",
    difficulty: "hard",
    type: "loop",
    length: 8.3,
    lat: 39.65458,
    lng: -105.36646
  },
  {
    id: 9,
    name: "Old Mill and Bulging Elk Trail",
    difficulty: "hard",
    type: "loop",
    length: 12.1,
    lat: 39.49687,
    lng: -105.3818
  }
];

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