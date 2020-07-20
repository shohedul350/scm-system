const express = require('express');
const { check, validationResult } = require('express-validator');
const errorFormator = require('../../utilis/errorFormator');
// const AuthenTicateAdmin = require('../../middleware/AuthenticateAdmin');

const router = express.Router();
const Customer = require('../../models/customerModel');



//  add new product
//  api/add-customer

router.post('/addCustomer', [
  check('customerName', 'Please provide Customer Name')
    .not()
    .isEmpty(),

  check('address', 'Please provide Address')
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
    const customer = new Customer({
      customerName: req.body.customerName,
      address: req.body.address,
      mobile: req.body.mobile,
      email: req.body.email,
    });
    const newCustomer = await customer.save();
    res.status(200).json({ msg: 'Customer Create Succesfully', customer });
  } catch (error) {
    next(error);
  }
  return 0;
});


//  getAll customer
//  api/getallCustomer


// allItemProduct
router.get('/allCustomer', async (req, res, next) => {
  try {
    const { page, perPage } = req.query;

    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 4,
    };
    const getAllCustomer = await Customer.paginate({ }, options);
    if (!getAllCustomer) {
      return res.status(404).json({ msg: 'Customer Not Found' });
    }
    res.status(200).json(getAllCustomer);
  } catch (error) {
    next(error);
  }
  return 0;
});

//  get single customer
//  api/customer/:id

router.get('/customer/:id', async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ msg: 'customer Not Found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
  return 0;
});

//  update customer by customer id
//  api/update-customer/:id

router.put('/updateCustomer/:id', async (req, res) => {
  try {
    const updateCustomer = await
    Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: 'customer Update Succesfully ', updateCustomer });
  } catch (error) {
    next(error);
  }
});

//  delete  customer by customer id
//  api/deleteCustomer/:id

router.delete('/deleteCustomer/:id', async (req, res, next) => {
  try {
    const deleteCustomer = await
    Customer.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: 'customer Delete Succesfully ', deleteCustomer });
  } catch (error) {
    next(error);
  }
});



router.get('/customerSearch', async (req, res, next) => {
  try {
    const customer = await Customer.find(
      {
        $text: { $search: req.query.term },
      },
    );
    res.json(customer);
  } catch (error) {
    next(error);
  }
});
module.exports = router;