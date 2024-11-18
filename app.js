const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const indexRoutes = require('./routes/indexRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const teamRoutes = require('./routes/teamRoute');
const testimonialRoutes = require('./routes/testimonialRoutes');
const contactRoutes = require('./routes/contactRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const expressLayouts = require('express-ejs-layouts');


const app = express();
app.set(expressLayouts);
app.set('layout', './layouts/page_layout'); // Default layout
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.render('home');
// });

app.use('/', indexRoutes)
app.use('/about', aboutRoutes);
app.use('/team', teamRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/testimonial', testimonialRoutes);
app.use('/contact', contactRoutes);
app.use('/service', serviceRoutes);
app.use('/booking', bookingRoutes);
app.use(express.static('public'));

app.get("/", indexRoutes);

const PORT = process.env.PORT || 10000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});