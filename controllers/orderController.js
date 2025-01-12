// controllers/orderController.js
const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(200).json({ message: 'Checkout successful', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
