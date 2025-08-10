require('dotenv').config();
//const listEndpoints = require('express-list-endpoints');
const app  = require('./app'); 
const port = process.env.PORT || 8081;

//console.log(listEndpoints(app));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});