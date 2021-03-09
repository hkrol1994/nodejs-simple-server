const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/',(req,res)=>{
    const indexPage = path.join(__dirname,"..","public","index.html")
    res.sendFile(indexPage);
})

app.listen(port,()=>{
    console.log('server connected, port:',port)
});
