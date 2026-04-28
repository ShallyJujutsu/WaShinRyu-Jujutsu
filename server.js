

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


 const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


require("./routes/api-routes.js")(app);

//CONFIGURE FOR HEROKU DEPLOYMENT

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));
// Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile('client/build', 'index.html');
  });
}


// // serve PORT running here
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))
