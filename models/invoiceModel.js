const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const invoiceSchema = mongoose.Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  product:[{
    name: {
        type: String,
        maxlength: 50,
        required: true,
      },
    unit: {
      type: String,
      required: true,
    },
    quantity: {
        type: Number,
        required: true, 
      },
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
  }
},

{
  timestamps: true,
});
invoiceSchema.index({ mobile: 'text' });


invoiceSchema.plugin(mongoosePaginate);
const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;



