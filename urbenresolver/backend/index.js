const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000

const mongoDB = require("./db")

mongoDB();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World Snehal!')
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
    
  );
  next();
})

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayCatg"));
app.use('/api', require("./Routes/CompRegister"));
app.use('/api', require("./Routes/UserData"));
app.use('/api', require("./Routes/ComplaintData"));
app.use('/api', require("./Routes/ComplaintCatg"));
app.use('/api', require("./Routes/TotalComplaint"));
app.use('/api', require("./Routes/fetchComplaintsByCategory"));




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})