


const express = require("express");
const app = express();
const cors = require("cors");
const mainController = require('./Controller/mainController')
const predictionController = require('./Controller/predictionController')
const path = require('path');




//middleware
app.use(cors());
app.use(express.json()); //req.body

// app.use(express.static(__dirname + '/static'))
// // //serve
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'static/index.html'), (err) => {

//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })

app.get("/totalSum", mainController.totalSum);
app.get ("/totalPred", predictionController.totalPrediction)


app.get("/analyse", mainController.analyse);
app.get("/analysePred", predictionController.analysePrediction)









app.listen(5000, () => {
  console.log("server has started on port 5000");
});

