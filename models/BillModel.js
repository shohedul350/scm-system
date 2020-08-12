const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const billSchema = mongoose.Schema({
   customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
   totalBill:[
    {
    type: Number,
    required: true,  
    }
  ],
 
},

{
  timestamps: true,
});
billSchema.index({ customer: 'text'});


billSchema.plugin(mongoosePaginate);
const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;



