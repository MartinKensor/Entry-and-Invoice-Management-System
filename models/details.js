const mongoose = require("mongoose");

const visitor_entrySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  Guest_name: {
    type: String,
    required: true
  },

  Guest_email: {
    type: String,
    required: true,
    match: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  },

  Guest_phone: {
    type: String,
    required: true,
    match: /\d{10}/
  },

  Checkin_time: {
    type: String,
    required: true
  },

  Checkout_time: {
    type: String,
    default: "Not checked out yet!"
  },

  Host_name: {
    type: String,
    required: true
  },

  Host_email: {
    type: String,
    required: true,
    match: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  },

  Host_phone: {
    type: String,
    required: true,
    match: /\d{10}/
  }
});

module.exports = mongoose.model("visitor_entry", visitor_entrySchema);
