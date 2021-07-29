const Product = require('../models/productModel');

exports.getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: 'Products not Found!',
        });
    }
};

exports.postAllProduct = async (req, res) => {
    try {
        await Product.insertMany(req.body);
        res.status(200).json({
            message: 'Products added successfully!',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Products added fail!',
        });
    }
};
