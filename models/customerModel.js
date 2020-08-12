const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const customerSchema = mongoose.Schema({
  orderNumber: {
    type: String,
    required: true
  },
  vendor: {
    type: String,
    maxlength: 50,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  invoice:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Invoice'
    }
  ],
  bill:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bill'   
    }
  ],
},

{
  timestamps: true,
});
customerSchema.index({ orderNumber: 'text'});


customerSchema.plugin(mongoosePaginate);
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;



