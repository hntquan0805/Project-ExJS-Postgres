const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('home');
});

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use(express.static('public'));

// app.get("/", (req, res) => {
//   res.send('<a href="/products">Go to Product Page</a> | <a href="/users/register">Register</a>');
// });

const PORT = process.env.PORT || 10000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});