// controllers/orderController.js
const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
  const userId = req.user.id; // Assuming user ID is available in req.user

  try {
    const order = await orderService.createOrder(userId);
    res.status(200).json({ message: 'Checkout successful', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
