// const express = require("express");
const Nexmo = require("nexmo");
// const router = express.Router();
const config = require("../config/db_config");

const nexmo = new Nexmo(
  {
    apiKey: config.NEXMO_API_KEY,
    apiSecret: config.NEXMO_API_SECRET
  },
  { debug: true }
);

exports.send_checkin = function(
  host_number,
  guest_name,
  guest_email,
  guest_number,
  checkin_time
) {
  const message =
    "Following are the details of your visitor at Innovacer: \nName :- " +
    guest_name +
    "\nContact No :- " +
    guest_number +
    "\nE-mail Address :- " +
    guest_email +
    "\nCheck-In Time :- " +
    checkin_time +
    "\nThis message is intended for " +
    guest_email +
    ". Immediately delete if wrongly received.";

  const to = host_number;
  nexmo.message.sendSms(
    config.NEXMO_FROM_NUMBER,
    to,
    message,
    (err, responseData) => {
      if (responseData) {
        console.log(responseData);
      }
    }
  );
};

exports.send_checkout = function(
  guest_email,
  guest_name,
  guest_number,
  checkin_time,
  checkout_time,
  host_name
) {
  const message =
    "Following are the details of your recent visit at Innovacer: \n" +
    "Name :- " +
    guest_name +
    "\nContact No :- " +
    guest_number +
    "\nCheck-In Time :- " +
    checkin_time +
    "\nCheck-Out Time :- " +
    checkout_time +
    "\nHost Name :- " +
    host_name +
    "\nAddress visited :- Innovaccer Office \nThis message is intended for " +
    guest_email +
    ". Immediately delete if wrongly received.";

  const to = guest_number;
  nexmo.message.sendSms(
    config.NEXMO_FROM_NUMBER,
    to,
    message,
    (err, responseData) => {
      if (responseData) {
        console.log(responseData);
      }
    }
  );
};
