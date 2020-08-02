const path = require('path');
const express = require('express');


const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(5000, () => {
  console.info(`Portifolio is running on port 5000`);
});
