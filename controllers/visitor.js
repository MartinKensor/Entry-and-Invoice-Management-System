var mongoose = require("mongoose");
var Visitor_entry = require("../models/details");
var sms = require("../api/send_sms");
var mail = require("../api/send_mail");
var moment = require("moment");

exports.checkin = function(req, res) {
  const time = moment().format("h:mm a");
  var visitor_entry = new Visitor_entry({
    _id: new mongoose.Types.ObjectId(),
    Guest_name: req.body.guest_name,
    Guest_email: req.body.guest_email,
    Guest_phone: req.body.guest_number,
    Checkin_time: time,
    Host_name: req.body.host_name,
    Host_email: req.body.host_email,
    Host_phone: req.body.host_number
  });
  visitor_entry.save(function(err, result) {
    if (err) {
      res.json({
        message: "Sorry! Error Occurred, Please try again."
      });
    } else {
      mail.send_checkin(
        visitor_entry.Host_email,
        visitor_entry.Guest_name,
        visitor_entry.Guest_email,
        visitor_entry.Guest_phone,
        visitor_entry.Checkin_time
      );

      sms.send_checkin(
        visitor_entry.Host_phone,
        visitor_entry.Guest_name,
        visitor_entry.Guest_email,
        visitor_entry.Guest_phone,
        visitor_entry.Checkin_time
      );

      res.json({
        message: "Guest Checked In!"
      });
    }
  });
};

exports.checkout = function(req, res) {
  const Gmail = req.body.guest_email;
  console.log(Gmail);
  const Time = moment().format("h:mm a");
  Visitor_entry.findOneAndUpdate(
    { Guest_email: Gmail , Checkout_time: "Not checked out yet!"},
    { $set: { Checkout_time: Time } },
    { new: true },
    function(err, result) {
      if (err) {
        res.json({
          message: "Something went wrong"
        });
      } else {
        console.log(result);
        if(!(result==null || result===undefined))
        {
          sms.send_checkout(
            result.Guest_email,
            result.Guest_name,
            result.Guest_phone,
            result.Checkin_time,
            result.Checkout_time,
            result.Host_name
          );

          mail.send_checkout(
            result.Guest_email,
            result.Guest_name,
            result.Guest_phone,
            result.Checkin_time,
            result.Checkout_time,
            result.Host_name
          );
          res.json({
            message: "Checked out successfully"
          });
        }
        else{
          // res.send({data: "Failed"});
          res.json({message: "User already checked out"});
        }
      }
    }
  );
};
exports.entrydetails = function(req, res) {
  Visitor_entry.find({}, function(err, result) {
    if (err) {
      res.json({
        message: "Sorry! No data available."
      });
    } else {
      res.json({
        data: result
      });
    }
  });
};
