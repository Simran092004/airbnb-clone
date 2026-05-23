const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {isLoggedIn,validateReview,isreviewAuthor}=require("../middleware.js");
const reviews = require("../controllers/reviews.js");

// Post Review Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviews.createReview));

// Delete Review Route
router.delete("/:reviewId",isLoggedIn,isreviewAuthor,wrapAsync(reviews.deleteReview));
    
module.exports = router;