require("dotenv").config();
const mongoose = require("mongoose");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const Listing = require("./models/listing");
// ✅ Mapbox setup
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({
    accessToken: mapToken
});
// ✅ Main function
async function updateListings() {
    try {
        // 🔌 Use SAME DB as app.js
        await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
        console.log("✅ Connected to DB");
        const listings = await Listing.find({});
        console.log(`📦 Found ${listings.length} listings`);
        for (let listing of listings) {
            try {
                let geoData = await geocodingClient.forwardGeocode({
                    query: listing.location,
                    limit: 1
                }).send();
                if (geoData.body.features.length > 0) {
                    listing.geometry = geoData.body.features[0].geometry;
                    await listing.save();
                    console.log(`✅ Updated: ${listing.title}`);
                } else {
                    console.log(`❌ No result for: ${listing.location}`);
                }
            } catch (err) {
                console.log(`⚠️ Error for: ${listing.location}`);
            }
        }
        console.log("🎉 All listings processed!");
        mongoose.connection.close();
    } catch (err) {
        console.log("❌ DB Error:", err);
    }
}
// ▶️ Run
updateListings();