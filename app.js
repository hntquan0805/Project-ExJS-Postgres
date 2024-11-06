const express = require('express');
const { sequelize } = require('./models');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use(express.static('public'));
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

const PORT = process.env.PORT || 10000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
