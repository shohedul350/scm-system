const express = require('express');
const { check, validationResult } = require('express-validator');
const errorFormator = require('../../utilis/errorFormator');
const upload = require('../../middleware/uploadMiddleware');
// const AuthenTicateAdmin = require('../../middleware/AuthenticateAdmin');

const router = express.Router();
const Product = require('../../models/productModel/Products');



//  upload product
//  api/product/uploadproduct

router.post('/uploadproduct', upload.single('image'), [
  check('name', 'Please provide name')
    .not()
    .isEmpty(),
  // check('image', 'Please provide Image')
  //   .not()
  //   .isEmpty(),
  check('price', 'Please provide Price')
    .not()
    .isEmpty(),
    check('stock', 'Please provide stock')
    .not()
    .isEmpty(),

  check('info', 'please provide Info')
    .not()
    .isEmpty(),
],
async (req, res, next) => {
  const errors = validationResult(req).formatWith(errorFormator);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.mapped(),
    });
  }
  try {
    const product = new Product({
      name: req.body.name,
      image: req.file.path,
      price: req.body.price,
      stock: req.body.stock,
      info: req.body.info,
    });
    const newProduct = await product.save();
    res.status(200).json({ msg: 'Product Upload Succesfully', newProduct });
  } catch (error) {
    next(error);
  }
  return 0;
});


//  getAll product
//  api/product/getallProduct


// allItemProduct
router.get('/allItemProduct', async (req, res, next) => {
  try {
    const { page, perPage } = req.query;

    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 4,
    };
    const getAllProduct = await Product.paginate({ }, options);
    // const getAllProduct = await Product.find();
    if (!getAllProduct) {
      return res.status(404).json({ msg: 'Product Not Found' });
    }
    res.status(200).json(getAllProduct);
  } catch (error) {
    next(error);
  }
  return 0;
});

//  get single product
//  api/product/getproduct/:id

router.get('/singleProduct/:id', async (req, res, next) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    if (!getProduct) {
      return res.status(404).json({ message: 'Product Not Found' });
    }
    res.status(200).json(getProduct);
  } catch (error) {
    next(error);
  }
  return 0;
});

//  update product by product id
//  api/product/updateproduct/:id

router.put('/updateproduct/:id', async (req, res) => {
  try {
    const updateProduct = await
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Product Update Succesfully ', updateProduct });
  } catch (error) {
    res.status(500).json(error);
  }
});

//  delete  product by product id
//  api/product//deleteproduct/:id

router.delete('/deleteProduct/:id', AuthenTicateAdmin, async (req, res, next) => {
  try {
    const deleteProduct = await
    Product.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: 'Product Delete Succesfully Deleted', deleteProduct });
  } catch (error) {
    next(error);
  }
});



router.get('/search', async (req, res, next) => {
  try {
    const product = await Product.find(
      {
        $text: { $search: req.query.term },
      },
    );
    res.json(product);
  } catch (error) {
    next(error);
  }
});
module.exports = router;