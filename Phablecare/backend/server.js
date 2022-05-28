/* Depedencies required */
let http = require('http');
let express = require('express');
let app = express();
let port = require('./constants/const').systemConstants.port;
let router = require('./router/router');
let cors = require('cors');

app.use(express.json());
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions));
app.use('/api',router);



/* Create Sever and running on Port */
let server = http.createServer(app);
server.listen(port,() => {
    console.log(`Server Is running at ${port}`);
});