const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/',(req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Running on  http://localhost:${process.env.PORT || 3001}`);
});
