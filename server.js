var express = require('express') ;
var app = express();
var port = process.env.PORT || 3000 

app.get('/',(req,res) => res.send("weno y que pasa"));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

app.listen(port) 