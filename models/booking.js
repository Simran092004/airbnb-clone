const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
    listing: {
        type: Schema.Types.ObjectId,
        ref: "Listing",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    checkIn: {
        type: Date,
        default: Date.now
    },
    checkOut: {
        type: Date,
    },

    guests: {
        type: Number,
        default: 1
    },
    totalPrice: {
        type: Number,
        // required: true,
    },
    status: {
        type: String,
        default: "pending",
    },
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);