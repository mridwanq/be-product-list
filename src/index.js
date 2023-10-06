require('dotenv').config;
const express = require('express');
const cors = require('cors');
const bearertoken = require('express-bearer-token');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bearertoken());

app.get('/test', (req, res) => {
  res.send('welcome api product list');
});

app.listen(PORT, () => {
  console.log(`server listen on PORT ${PORT}`);
});
