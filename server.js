var express = require('express');

var app = express();

app.use('/', express.static('orchestrator', {index: "index.html"}));
app.use('/app-one', express.static('app-one/build'));
app.use('/app-two', express.static('app-two/elements'));
app.use('/app-three', express.static('app-three/elements'));

app.listen(8000);
