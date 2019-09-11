const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const connection = require('./config');
const cors = require('cors');

const routes = require('./routes/getRoutes');

app.use(cors());

app.use('/', routes);
app.use('/users', routes);
app.use('/tasks', routes);
app.use('/login', routes);

app.listen(PORT, function() {
  console.log('App is running successfully.', PORT);
});
