const express = require('express');
//const cors = require('cors');
const app = express();
const routeConfig = require('./src/config/routeConfig.js');

app.use(express.json());
//app.use(cors());

routeConfig.init(app);

app.listen(8000, function(){
    console.log('Server side running on port 8000');
});
