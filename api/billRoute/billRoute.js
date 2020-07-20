const express = require('express');
const { check, validationResult } = require('express-validator');
const errorFormator = require('../../utilis/errorFormator');
// const AuthenTicateAdmin = require('../../middleware/AuthenticateAdmin');

const router = express.Router();
const Bill = require('../../models/BillModel');



//  add new bill
//  api/addInvoice

router.post('/addBill/:customerId', [
  check('customer', 'Please provide Customer')
    .not()
    .isEmpty(),

  check('bill', 'Please provide bill')
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
    const bill = new Bill({
      customer: req.params.id,
      bill:req.body.bill
    });
    const newbill = await Bill.save();
    res.status(200).json({ msg: 'Bill Create Succesfully', newbill });
  } catch (error) {
    next(error);
  }
  return 0;
});


//  getAll customer
//  api/getallCustomer


// allItemProduct
router.get('/allBill/:customerId', async (req, res, next) => {
  try {
    const { page, perPage } = req.query;
    const {customerId} = req.params.id
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 4,
    };
    const getAllBill = await Invoice.paginate({customerId}, options);
    if (!getAllBill) {
      return res.status(404).json({ msg: 'Bill Not Found' });
    }
    res.status(200).json(getAllBill);
  } catch (error) {
    next(error);
  }
  return 0;
});

//  get single customer
//  api/customer/:id

router.get('/invoice/:billId', async (req, res, next) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(404).json({ msg: 'bill Not Found' });
    }
    res.status(200).json(bill);
  } catch (error) {
    next(error);
  }
  return 0;
});

//  update bill by invoice id
//  api/update-customer/:id

// router.put('/updateInvoice/:invoiceId', async (req, res) => {
//   try {
//     const updateInvoice = await
//     Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json({ msg: 'Invoice Update Succesfully ', updateInvoice });
//   } catch (error) {
//     next(error);
//   }
// });

//  delete  invoice by invoice id
//  api/deleteInvoice/:invoiceId

router.delete('/deletebill/:billId', async (req, res, next) => {
  try {
    const deleteBill = await
    Bill.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: 'Bill Delete Succesfully ', deleteBill });
  } catch (error) {
    next(error);
  }
});



// router.get('/invoiceSearch', async (req, res, next) => {
//   try {
//     const invoice = await Invoice.find(
//       {
//         $text: { $search: req.query.term },
//       },
//     );
//     res.json(invoice);
//   } catch (error) {
//     next(error);
//   }
// });
module.exports = router;