const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PurchasedRoute = require('./routes/purchased');
const ColorsRoute=require('./routes/colors');
const CustomerTypeRoute=require('./routes/customer_type');
const CustomersRoute=require('./routes/customers');
const ExpenseRoute=require('./routes/expense');
const HistoryRoute=require('./routes/history');
const InvoiceRoute=require('./routes/invoice');
const ReportRoute=require('./routes/report');
const SizeRoute=require('./routes/size');
const SmellRoute=require('./routes/smell');
const ViewRoute=require('./routes/view');
const WaitingListRoute=require('./routes/waiting_list');
const CandleTypeRoute=require('./routes/candle_type');
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/PurchasedItem', PurchasedRoute);
app.use('/api/Candle_type', CandleTypeRoute);
app.use('/api/Colors', ColorsRoute);
app.use('/api/customer_type', CustomerTypeRoute);
app.use('/api/customers', CustomersRoute);
app.use('/api/expense', ExpenseRoute);
app.use('/api/history', HistoryRoute);
app.use('/api/invoice', InvoiceRoute);
app.use('/api/report', ReportRoute);
app.use('/api/size', SizeRoute);
app.use('/api/smell', SmellRoute);
app.use('/api/view', ViewRoute);
app.use('/api/waiting_list', WaitingListRoute);

app.get('/api/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;

const listener = app.listen(PORT, () => {
  const host = listener.address().address;
  const port = listener.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
