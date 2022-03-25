//const express = require("express");
const nodemailer = require("nodemailer");
const config = require("../config/db_config");

const mailtransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.email,
    pass: config.password
  }
});

exports.send_checkin = function(
  host_email,
  guest_name,
  guest_email,
  guest_number,
  checkin_time
) {
  const text =
    "Following are the details of your visitor at Innovacer: \nName :- " +
    guest_name +
    "\nContact No :- " +
    guest_number +
    "\nE-mail Address :- " +
    guest_email +
    "\nCheck-In Time :- " +
    checkin_time ;

  const to = host_email;

  mailtransport.sendMail(
    {
      from: config.email,
      to,
      subject: guest_name + " is visiting you at Innovacer",
      text
    },
    function(err) {
      if (err) console.log("Email can't be send, due to" + err);
      else console.log("Email sent to host successfully!");
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
  const text =
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
    "\nAddress visited :- Innovaccer Office \nThis mail is intended for " +
    guest_email +
    ". Immediately delete if wrongly received.";

  const to = guest_email;
  console.log(guest_email);

  mailtransport.sendMail(
    {
      from: config.email,
      to,
      subject: "Your visit to " + host_name,
      text
    },
    function(err) {
      if (err) console.log("Email can't be send, due to" + err);
      else console.log("Email sent to visitor successfully!");
    }
  );
};
