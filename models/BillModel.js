const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const billSchema = mongoose.Schema({
   customer: {
        type: Schema.Types.ObjectId,
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
billSchema.index({ mobile: 'text'});


billSchema.plugin(mongoosePaginate);
const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;



