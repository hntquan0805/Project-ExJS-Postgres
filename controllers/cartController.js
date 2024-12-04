const cartService = require('../services/cartService');

exports.getCart = async (req, res) => {
    // Check for authenticated user
    if (!req.isAuthenticated()) {
        return res.render('users/unauthenticated', { title: 'Unauthenticated' });
    }

    //Add dummy product to cart
    // for (let i = 0; i < 5; i++) {
    //     await cartService.addProductToCart(req.user.id, i, Math.floor(Math.random() * 10));
    // }

    const cart = await cartService.getCart(req.user.id);
    
    console.log(JSON.stringify(cart, null, 2));
    res.render('products/cart', { title: 'Cart', cart : cart });
}

exports.increaseQuantity = async (req, res) => {
    const { productId } = req.body;
    try {
        const newQuantity = await cartService.increaseQuantity(req.user.id, productId);
        if (newQuantity < 0){
            return res.status(500).json('Error descreasing quantity');
        }
        const totalPrice = await cartService.totalPrice(req.user.id);
        if (totalPrice <0 ){
            return res.status(500).json('Error re-calculating total price');
        }
        const roundedTotalPrice = Math.round(totalPrice * 100) / 100;
        res.status(200).json({quantity: newQuantity,  totalPrice : roundedTotalPrice });
    } catch (err) {
        console.error('Error increasing quantity:', err);
        res.status(500).send('Internal Server Error');
    }
};
  
exports.removeFromCart = async (req, res) => {
    console.log(req.body);
    const { productId } = req.body;
    try {
        await cartService.removeFromCart(req.user.id, productId);
        const totalPrice = await cartService.totalPrice(req.user.id);
        if (totalPrice < 0){
            res.status(500).json("Error removing item from cart");
        }
        const roundedTotalPrice = Math.round(totalPrice * 100) / 100;
        res.status(200).json({ totalPrice : roundedTotalPrice });
    }
    catch (err) {
        console.error('Error removing product from cart:', err);
        res.status(500).json('Internal Server Error');
    }
};
  
exports.decreaseQuantity = async (req, res) => {
    const { productId } = req.body;
    try {
        const newQuantity=  await cartService.decreaseQuantity(req.user.id, productId);
        if (newQuantity < 0){
            return res.status(500).json('Error descreasing quantity');
        }
        const totalPrice = await cartService.totalPrice(req.user.id);
        if (totalPrice < 0 ){
            return res.status(500).json('Error re-calculating total price');
        }
        const roundedTotalPrice = Math.round(totalPrice * 100) / 100;
        res.status(200).json({quantity: newQuantity,  totalPrice : roundedTotalPrice });
    } catch (err) {
        console.error('Error decreasing quantity:', err);
        return res.status(500).json('Internal Server Error');
    }
};