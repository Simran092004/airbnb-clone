const Booking = require("../models/booking.js");
const Razorpay = require("razorpay");
const Listing = require("../models/listing.js");
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
// Helper Function
function convertDate(dateString) {
  const parts = dateString.split("/");
  return new Date(parts[2], parts[1] - 1, parts[0]);
}
// Booking Form Route
module.exports.renderBookingForm = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }
  const booking = await Booking.find({
    listing: listing._id,
    status: "confirmed",
  });
  res.render("bookings/new.ejs", {
    listing,
    booking,
    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  });
};
// Create Razorpay Order Route
module.exports.createRazorpayOrder = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return res.status(404).json({
      error: "Listing not found",
    });
  }
  const checkInDate = convertDate(req.body.checkIn);
  const checkOutDate = convertDate(req.body.checkOut);
  const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
  if (days <= 0) {
    return res.status(400).json({
      error: "Invalid booking dates",
    });
  }
  const existingBooking = await Booking.findOne({
    listing: listing._id,
    checkIn: {
      $lt: checkOutDate,
    },
    checkOut: {
      $gt: checkInDate,
    },
    status: "confirmed",
  });
  if (existingBooking) {
    return res.status(400).json({
      error: "Selected dates are already booked!",
    });
  }
  const totalAmount = listing.price * days;
  const options = {
    amount: totalAmount * 100,
    currency: "INR",
    receipt: "order_rcptid_" + Date.now(),
  };
  const order = await razorpay.orders.create(options);
  res.json(order);
};
// Create Booking Route
module.exports.createBooking = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }
    const checkInDate = convertDate(req.body.checkIn);
    const checkOutDate = convertDate(req.body.checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Past Date Validation
    if (checkInDate < today) {
      req.flash("error", "Past dates are not allowed");
      return res.redirect(`/bookings/${listing._id}`);
    }
    // Checkout Validation
    if (checkOutDate <= checkInDate) {
      req.flash("error", "Checkout must be after checkin");
      return res.redirect(`/bookings/${listing._id}`);
    }
    // Existing Booking Check
    const existingBooking = await Booking.findOne({
      listing: listing._id,
      checkIn: {
        $lt: checkOutDate,
      },
      checkOut: {
        $gt: checkInDate,
      },
      status: "confirmed",
    });
    if (existingBooking) {
      req.flash("error", "Selected dates are already booked!");
      return res.redirect(`/bookings/${listing._id}`);
    }
    // Total Days
    const days = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24),
    );
    // Total Price
    const totalPrice = listing.price * days;
    // Create Booking
    const booking = new Booking({
      listing: listing._id,
      user: req.user._id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: req.body.guests,
      totalPrice: totalPrice,
      paymentId: req.body.paymentId,
      status: "confirmed",
    });
    await booking.save();
    listing.bookings.push(booking);
    await listing.save();
    req.flash("success", "Payment Successfully Completed & Booking Confirmed!");
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    console.log(err);
    req.flash("error", "Something went wrong");
    res.redirect("/listings");
  }
};
