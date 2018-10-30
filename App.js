const express = require('express');
const cors = require('cors');

const app = express();

const PurchasedRoute = require('./routes/purchased');

app.use(express.static(__dirname + '/public'));
app.use(cors());

app.use('/api/PurchasedItem', PurchasedRoute);

app.get('/api/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;

const listener = app.listen(PORT, () => {
  const host = listener.address().address;
  const port = listener.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
