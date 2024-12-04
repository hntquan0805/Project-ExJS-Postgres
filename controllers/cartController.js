import db from '../models/index';

// exports.getCart = async (req, res) => {
//   try {
//         const cart = await db.Cart.findOne({
//         include: { model: db.Product },
//         });

//         res.render('cart', { cart: cart || { Products: [] } });
//     } catch (err) {
//         console.error('Error fetching cart:', err);
//     }
// };

// exports.addToCart = async (req, res) => {
//   const { productId } = req.body;

//   try {
//     let cart = await db.Cart.findOne();
//     if (!cart) {
//       cart = await db.Cart.create();
//     }

//     const product = await db.Product.findByPk(productId);
//     if (!product) {
//       return res.status(404).send('Product not found');
//     }

//     const cartItem = await db.CartItem.findOne({
//       where: {
//         id: product.id,
//         cartId: cart.id,
//       },
//     });

//     if (cartItem) {
//       cartItem.quantity += 1;
//       await cartItem.save();
//     } else {
//       await db.CartItem.create({
//         id: productId,
//         quantity: 1,
//         cartId: cart.id,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       });
//     }

//     res.redirect('/cart');
//   } catch (err) {
//     console.error('Error adding product to cart:', err);
//     res.status(500).send('Internal Server Error');
//   }
// };

exports.increaseQuantity = async (req, res) => {
  const { productId } = req.body;

  try {
        const cart = await db.Cart.findOne();

        if (!cart) {
        return res.status(404).send('Cart not found');
        }

        const cartItem = await db.CartItem.findOne({
        where: {
            cartId: cart.id,
            id: productId,
        },
        });

        if (!cartItem) {
        return res.status(404).send('Product not found in cart');
        }

        cartItem.quantity += 1;
        await cartItem.save();

        res.redirect('/cart');
    } catch (err) {
        console.error('Error increasing quantity:', err);
        res.status(500).send('Internal Server Error');
    }
};

exports.removeFromCart = async (req, res) => {
  const { productId } = req.body;

  try {
        const cart = await db.Cart.findOne();

        if (!cart) {
        return res.status(404).send('Cart not found');
        }

        const cartItem = await db.CartItem.findOne({
        where: {
            cartId: cart.id,
            id: productId,
        },
        });

        if (!cartItem) {
        return res.status(404).send('Product not found in cart');
        }

        await cartItem.destroy();

        res.redirect('/cart');
    } catch (err) {
        console.error('Error removing product from cart:', err);
        res.status(500).send('Internal Server Error');
    }
};

exports.decreaseQuantity = async (req, res) => {
  const { productId } = req.body;

  try {
        const cart = await db.Cart.findOne();

        if (!cart) {
        return res.status(404).send('Cart not found');
        }

        const cartItem = await db.CartItem.findOne({
        where: {
            cartId: cart.id,
            id: productId,
        },
        });

        if (!cartItem) {
        return res.status(404).send('Product not found in cart');
        }

        if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        await cartItem.save();
        } else {
        await cartItem.destroy();
        }

        res.redirect('/cart');
    } catch (err) {
        console.error('Error decreasing quantity:', err);
        res.status(500).send('Internal Server Error');
    }
};