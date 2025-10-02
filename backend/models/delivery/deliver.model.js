const mongoose = require("mongoose");

const deliverSchema = new mongoose.Schema({
  Deliver: {
    type: mongoose.Schema.ObjectId,
    default: "DeliverModel",
    required: false,
  },
  DeliveryPO: {
    type: mongoose.Schema.ObjectId,
    default: "PurchaseOrderModel",
    required: true,
  },
  DeliverInvoice:{
    type: mongoose.Schema.ObjectId,
    ref: "DeliverInvoiceModel",
    required: false,
  },
  from_address: {
    type: String,
    default: "",
    required: true,
  },
  to_address: {
    type: String,
    default: "",
    required: true,
  },
});

deliverSchema.virtual('status').get(()=>{
  return `${this.Deliver} ${this.DeliveryPO} ${DeliverInvoice}`
}).set((v)=>{
  const [d,dpo,di] = v.split(" ")
  if(di){
    return "Invoicing"
  }
  if(d){
    return "Delivering"
  }
  if(dpo){
    return "Requesting"
  }
})

module.exports = mongoose.model("DeliverModel", deliverSchema);