const express = require("express");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// upload endpoint
app.use(fileUpload());
app.post("/upload", (req, res) => {
  if(req.files === null) {
    return res.status(400).json({msg: "No file uploaded"});
  }
  const file = req.files.file;
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
  });
})


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 
  "mongodb://localhost/pocket_db"); 
// "mongodb://heroku_1l5014pk:uoiouulncm98nh4fguuvvm9qem@ds059524.mlab.com:59524/heroku_1l5014pk");  

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});