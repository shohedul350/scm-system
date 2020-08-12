const express = require('express');
const { check, validationResult } = require('express-validator');
const errorFormator = require('../../utilis/errorFormator');
// const AuthenTicateAdmin = require('../../middleware/AuthenticateAdmin');

const router = express.Router();
const Invoice = require('../../models/InvoiceModel');
const Customer = require('../../models/CustomerModel');
const Product = require('../../models/productModel')



//  add new invoice
//  api/addInvoice

router.post('/addInvoice/', [
  // check('customerObject.orderNumber', 'Please provide customer')
  //   .not()
  //   .isEmpty(),

  check('products', 'Please provide product')
    .not()
    .isEmpty(),
],
async (req, res, next) => {
 
  const customer =req.body.customerObject
 const products = req.body.products
  const errors = validationResult(req).formatWith(errorFormator);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.mapped(),
    });
  }

  try {
    const invoice = new Invoice({
      orderNumber:customer.orderNumber,
      customer,
      products
    });
  
  
    const newInvoice = await invoice.save();
    await Customer.findOneAndUpdate(
      {_id: customer.customerId},
      {$push:{'invoice':newInvoice._id}})
    
      products.map(async (product)=>{
        await Product.findOneAndUpdate(
          {_id: product._id},
          {$set: {stock:product.stock }}
          )
      })
     

    res.status(200).json({ msg: 'Invoice Create Succesfully', newInvoice });
  } catch (error) {
    next(error);
  }
  return 0;
});




// all invoice indivisul customer
router.get('/allInvoice/:orderNumber', async (req, res, next) => {
  try {
    const { page, perPage } = req.query;
     const orderNumber = req.params.orderNumber
    
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 10,
    };
    const getAllInvoice = await Invoice.paginate({orderNumber}, options);
   
    if (!getAllInvoice) {
      return res.status(404).json({ msg: 'Invoice Not Found' });
    }

    res.status(200).json(getAllInvoice);
  } catch (error) {
    next(error);
  }
  return 0;
});

//  get single customer
//  api/customer/:id

router.get('/singleInvoice/:id', async (req, res, next) => {
  const invoiceId = req.params.id

  try {
    const invoice = await Invoice.findById(invoiceId)
    if (!invoice) {
      return res.status(404).json({ msg: 'invoice Not Found' });
    }
    res.status(200).json(invoice);
  } catch (error) {
    console.log(error.msg)
    next(error);
  }
  return 0;
});

//  update invoice by invoice id
//  api/update-customer/:id

router.put('/updateInvoice/:invoiceId', async (req, res) => {
  try {
    const updateInvoice = await
    Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: 'Invoice Update Succesfully ', updateInvoice });
  } catch (error) {
    next(error);
  }
});

//  delete  invoice by invoice id
//  api/deleteInvoice/:invoiceId

router.delete('/deleteInvoice/:invoiceId', async (req, res, next) => {
  try {
    const deleteInvoice = await
    Invoice.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: 'Invoice Delete Succesfully ', deleteInvoice });
  } catch (error) {
    next(error);
  }
});



router.get('/invoiceSearch', async (req, res, next) => {
  try {
    const invoice = await Invoice.find(
      {
        $text: { $search: req.query.term },
      },
    );
    res.json(invoice);
  } catch (error) {
    next(error);
  }
});
module.exports = router;