const express = require('express');
var app = express();
// end of requires
// server start
var port = process.env.PORT || 8005;
app.listen(port,function() {
  console.log("listening on port 8005");
});
// server stop
// app main start
app.use(express.static('./public'));
// app.get('/',function (req,res) {
// res.sendfile('index.html')
// })
