const express = require('express');
const port = process.env.PORT || 3000;
var app = express();
app.get('/',(req,res)=>{
  res.send('hi this is test scene app');
});

app.listen(port,()=>{
  console.log("listening at port 3000");
});
