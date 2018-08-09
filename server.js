const express = require('express'),
      parse   = require('body-parser'),
      path    = require('path'),
      app     = express(),
      PORT    = process.env.PORT || 3000;


app.use(express.static(__dirname + "/app/public"));
app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, () => {
      console.log('Running on http://localhost:' + PORT);
});