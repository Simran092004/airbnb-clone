const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing.js');
const { isLoggedIn,isOwner,validateListing } = require('../middleware.js');
const listingController = require('../controllers/listings.js');
const multer  = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });

//Index/Create Route
router.route("/")
.get( listingController.index)
.post(isLoggedIn, validateListing, upload.single('listing[image]'), wrapAsync(listingController.createListing
    ));

// New Route 
router.get('/new', isLoggedIn,wrapAsync(listingController.renderNewForm));

// Search Route
router.get('/search', wrapAsync(listingController.searchListings));

// Filter Route
router.get('/filter/:category', wrapAsync(listingController.filterCategory));

//Show/Update/Delete Route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put( isLoggedIn,isOwner,validateListing,upload.single('listing[image]'), wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

// Edit Route
router.get('/:id/edit', isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm
));

module.exports = router;