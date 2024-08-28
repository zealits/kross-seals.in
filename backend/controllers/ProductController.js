const Product = require('../models/ProductModel.js');


exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product
    });
  } catch (error) {
    next(error); 
  }
};


exports.getAllProducts = async (req, res, next) => {
  try {
    const { l1, l2, l3 } = req.query;

    
    const filter = {};
    if (l1) filter['category.level1'] = l1;
    if (l2) filter['category.level2'] = l2;
    if (l3) filter['category.level3'] = l3;

    
    const products = await Product.find(filter);

    res.json({ products });
  } catch (err) {
    next(err); 
  }
};
