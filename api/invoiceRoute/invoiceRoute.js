const express = require('express');
const { check, validationResult } = require('express-validator');
const errorFormator = require('../../utilis/errorFormator');
// const AuthenTicateAdmin = require('../../middleware/AuthenticateAdmin');

const router = express.Router();
const Invoice = require('../../models/invoiceModel');



//  add new invoice
//  api/addInvoice

router.post('/addInvoie/:customerId', [
  check('customer', 'Please provide Customer')
    .not()
    .isEmpty(),

  check('product', 'Please provide product')
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
    const invoice = new Invoice({
      customer: req.params.id,
      product:req.body.product
    });
    const newInvoice = await Invoice.save();
    res.status(200).json({ msg: 'Invoice Create Succesfully', newInvoice });
  } catch (error) {
    next(error);
  }
  return 0;
});


//  getAll customer
//  api/getallCustomer


// allItemProduct
router.get('/allInvoice/:customerId', async (req, res, next) => {
  try {
    const { page, perPage } = req.query;
    const {customerId} = req.params.id
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 4,
    };
    const getAllInvoice = await Invoice.paginate({customerId}, options);
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

router.get('/invoice/:InvoiceId', async (req, res, next) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ msg: 'invoice Not Found' });
    }
    res.status(200).json(invoice);
  } catch (error) {
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