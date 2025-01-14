'use strict';

const { Order, OrderItem, product, User } = require('../models');

exports.getAdminOrders = async (req, res) => {
    try {
        const { page = 1, status } = req.query;
        const limit = parseInt(req.query.limit) || 5;
        const offset = (page - 1) * limit;
        
        const whereCondition = status ? { status } : {};

        const totalOrders = await Order.count();
    
        const orders = await Order.findAll({
            where: whereCondition,
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