const Listing = require("../models/listing");
const Review = require("../models/review");


module.exports.createReview = async(req,res) => {
    let listing = await Listing.findById(req.params.id);
    const newReview = new Review();
    newReview.rating = req.body.review.rating;
    newReview.comment = req.body.review.comment;
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
   req.flash("success", "new Review Created");
    res.redirect(`/listings/${listing._id}`);
 };

 module.exports.destroyReview = async (req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success"," Review Deleted successfully");
    res.redirect(`/listings/${id}`);
};