require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
app.use(express.json());

app.post('/src/deposit',(req, res)=>{
    let {deposit_name, user_id} = body;
    if(req.headers["content-type"]!=='application/json'){
        res.setHeader('Content-Type', 'application/json');
        res.json({
            "message": "Content-type must be application/json."
        })
    }else if(!deposit_name){
        res.setHeader('Content-Type', 'application/json');
        res.json({
            "message": `Missing ${deposit_name}.`
        })
    }else{
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.json({
            "id": user_id,
        })
    }
})
//leave space for Internal Server Error

app.listen(port, () => {
    /* eslint-disable no-alert, no-console */
      console.log(`we are in port: ${port}`);
    /* eslint-enable no-alert */
    });
