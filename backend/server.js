const express = require("express");
const mongoose = require("mongoose");
const doctors = require('./routes/api/doctors');
const authsDoctor = require('./routes/api/authDoctor');
const users = require('./routes/api/users');
const authsUser = require('./routes/api/authUser');
const profile = require('./routes/api/profile');
const appointment = require('./routes/api/appointment');
const path=require("path")

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// connect to MongoDB;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,useCreateIndex:true })
    .then(() => console.log("MongoDB Connected with server"))
    .catch(err => console.log(err));

//Init Middleware 
app.use(express.json({ extended: false}));

// Use Routes
app.use('/api/doctors', doctors);
app.use('/api/authDoctor', authsDoctor);
app.use('/api/users', users);
app.use('/api/authUser', authsUser);
app.use('/api/profile', profile);
app.use('/api/appointment', appointment);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"client","build")));
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client","build","index.html"))
    );
  } else {
    app.get("/", (req, res) => {
      res.send("Welcome Mukesh Prajapat");
    });
  }
  


const port = process.env.PORT || 5000;
app.listen(port , () => console.log(`Server running on port ${port}`));