'use strict';

const { Order, OrderItem, product, User } = require('../models');

exports.getAdminOrders = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const offset = (page - 1) * limit;
    
        const totalOrders = await Order.count();
    
        const orders = await Order.findAll({
          include: [
            {
              model: OrderItem,
              as: 'orderItems',
              include: [
                {
                  model: product,
                  as: 'product',
                },
              ],
            },
          ],
          order: [['createdAt', 'DESC']],
          limit: limit,
          offset: offset,
        });
    
        const totalPages = Math.ceil(totalOrders / limit);
    
        if (req.xhr) {
          return res.json({ orders, totalPages, currentPage: page });
        }

    res.render('admin/orders/adminOrders', {title: 'Manage Orders', orders, totalPages, currentPage: page, user: req.user, layout: 'layouts/admin/admin_page_layout',});
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.render('error', { title: 'Error', message: 'Unable to fetch orders.' });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    order.status = status;
    await order.save();

    res.json({ message: 'Order status updated successfully.', order });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Failed to update order status.' });
  }
};

// const orderService = require('../services/orderService');

// exports.createOrder = async (req, res) => {
//   try {
//     const order = await orderService.createOrder(req.body);
//     res.status(200).json({ message: 'Checkout successful', order });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getOrderHistory = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 5;
//     const offset = (page - 1) * limit;

//     const totalOrders = await Order.count({ where: { userId } });

//     const orders = await Order.findAll({
//       where: { userId },
//       include: [
//         {
//           model: OrderItem,
//           as: 'orderItems',
//           include: [
//             {
//               model: Product,
//               as: 'product',
//             },
//           ],
//         },
//       ],
//       order: [['createdAt', 'DESC']],
//       limit: limit,
//       offset: offset,
//     });

//     const totalPages = Math.ceil(totalOrders / limit);

//     if (req.xhr) {
//       return res.json({ orders, totalPages, currentPage: page });
//     }

//     res.render('pages/users/order_history', {
//       title: 'Order History',
//       orders,
//       currentPage: page,
//       totalPages,
//     });
//   } catch (err) {
//     console.error('Error fetching order history:', err);
//     res.render('pages/error', { title: 'Error', message: 'Failed to fetch order history.' });
//   }
// };