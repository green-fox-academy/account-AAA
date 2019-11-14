const express = require('express');
let router = express.Router();

router.post('/',(req, res)=>{
  let {deposit_name, user_id} = req.body;
  if(req.headers["content-type"]!=='application/json'){
      res.setHeader('Content-Type', 'application/json');
      res.json({
          "message": "Content-type must be application/json."
      })
  }
  let array = Object.keys(req.body);
  let str = '';
  array.forEach(e=>{
    if (array.includes(e)==false){
      str = str + `<${e}>`;
    }
  })
  if (str.length!=0){
    res.setHeader('Content-Type', 'application/json');
    res.json({
      "message": `Missing ${str}.`
  })
  }
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.json({
        "id": user_id,
    })
})
//leave space for Internal Server Error
module.exports = router;