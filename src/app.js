const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");


const app = express();
let port = 4000;

app.use(bodyParser.json());
app.use('/tasks',routes)


app.listen(port,(err)=>{
    if(err){
        console.log("Some error encounter")
    }
    else{
        console.log(`Server started at ${port}`)
    }
})