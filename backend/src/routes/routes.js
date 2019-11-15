const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
  let {deposit_name, user_id} = req.body;
  if(req.headers["content-type"]!=='application/json'){
    res.status(415).json({
          "message": "Content-type must be application/json."
      })
  }
  let req_body_keys = Object.keys(req.body);
  let curr_key = '';
  req_body_keys.forEach(e=>{
    if (!req_body_keys.includes(e)){
      curr_key = curr_key + `<${e}>`;
    }
  })
  if (str.length!=0){
    res.status(400).json({
      "message": `Missing ${curr_key}.`
  })
  }
    res.status(200).json({
        "id": user_id,
    })
})
//leave space for Internal Server Error
module.exports = router;