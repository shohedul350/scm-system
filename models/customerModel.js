const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const customerSchema = mongoose.Schema({
  customerName: {
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
    type: Schema.Types.ObjectId,
    ref: 'Invoice'
    }
  ],
  bill:[
    {
    type: Schema.Types.ObjectId,
    ref: 'Bill'    
    }
  ],
},

{
  timestamps: true,
});
customerSchema.index({ mobile: 'text'});


customerSchema.plugin(mongoosePaginate);
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;



