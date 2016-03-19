var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'./client')));

require('./server/config/environment.js')
require('./server/config/routes.js')(app)
app.listen(8000, function(){
  console.log('listening on: 8000')
})
