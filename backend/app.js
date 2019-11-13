require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
app.use(cors())
app.use(express.json());

app.post('/deposit',(req, res)=>{
    let name = req.body.deposit_name;
    let id = req.body.user_id;
    if(req.headers["content-type"]!='application/json'){
        res.setHeader('Content-Type', 'application/json');
        res.json({
            "message": "Content-type must be application/json."
        })
    }else if(!name){
        res.setHeader('Content-Type', 'application/json');
        res.json({
            "message": "Missing <property name>."
        })
    }else{
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.json({
            "id": id,
        })
    }
})
//leave space for Internal Server Error

app.listen(port, () => {
    console.log(`we are in port: ${port}`)
})

