const Listing = require("../models/listing.js");

// // Index Route // //
module.exports.indexListing = async (req, res) => {
    let allListings = await Listing.find({});

      const { location } = req.query; // get the search value from query string

  let listings;

  if (location) {
    // Search listings where location matches user input (case-insensitive)
    listings = await Listing.find({
      location: { $regex: location, $options: "i" },
    });
  } else {
    // If no location filter, show all listings
    listings = await Listing.find({});
  }
    res.render("listings/index", { allListings });
};

// new listings // //
module.exports.newListing = (req, res) => {
    res.render("listings/new");
};

// // Show id route // //
module.exports.showListing = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews", populate:{path:"author"}}).populate("owner");
    if(!listing){

        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
};

// // Create Route // //
module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;

    // console.log(req.file);
    const newListing = new Listing(req.body.listing);
    newListing.image = {url,filename}
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

// // Edit Route // //
module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }

    let isOwner = listing.owner.equals(req.user._id);
    if (!isOwner) {
        req.flash("error", "You do not have permission to edit this listing.");
        return res.redirect(`/listings/${id}`);
    }

    let originalImgUrl = listing.image.url;
    originalImgUrl.replace(/\/upload\//, '/upload/w_250,h_300,c_fill/');
    listing.image.url = originalImgUrl;

    res.render("listings/edit", { listing, originalImgUrl });
};

// // Update Route // //
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    let listing = await Listing.findById(id); // get the updated document
    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

// // Delete Route // //
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};

