const express = require("express")
const app = express();
const cors = require('cors')
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

const infoRoutes = require('./routes/infoRoutes.js')
app.use('/api/v1', infoRoutes)

app.listen(4000, () => {
  console.log("server started on port 4000")
})
