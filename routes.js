const ExpressRouter = require('express-promise-router');
const db = require('./db');


const router = new ExpressRouter();

router.post('/query', async (request, response)=>{
  let sql = request.body.sql;
  await db.query({rowMode: 'array', text: sql}, (err, result) => {
    console.log(err);
    console.log(result);
    response.send({
      err: err,
      result: result,
    });
  });
});

router.get('/queryget', async (request, response)=>{
  res.send('query get');
});

module.exports = router;
