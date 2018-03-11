'use strict'; 

const db = require('./server/db/models')
const app = require('./server')
const PORT = 1337;


db.sync({force:false}) /* drop db = {force: true} */
.then(() => {
  console.log('my-project is synced')
  app.listen(PORT, () => console.log(`we are up and running on port ${PORT}`))
});
