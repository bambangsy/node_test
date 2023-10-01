const express = require('express')
const app = express()

app.get('/',function(req,res){
    console.log('hello')
    res.json(
        {
            message:"hello",
            unit: 3,
            isAcc: true
        }
    )
})


app.listen(3000)