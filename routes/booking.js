const express = require("express");
const router = express.Router();
const wrapAsync =
require("../utils/wrapAsync.js");
const { isLoggedIn } =
require("../middleware.js");
const bookingController =
require("../controllers/bookings.js");
// Booking Form Route
router.route("/:id")
.get(
    isLoggedIn,
    wrapAsync(
        bookingController.renderBookingForm
    )
)
.post(
    isLoggedIn,
    wrapAsync(
        bookingController.createBooking
    )
);
// Create Razorpay Order Route
router.post(
    "/:id/create-order",
    isLoggedIn,
    wrapAsync(
        bookingController.createRazorpayOrder
    )
);
module.exports = router;