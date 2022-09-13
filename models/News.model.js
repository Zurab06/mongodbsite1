const mongoose = require("mongoose");
const NewsSchema = mongoose.Schema({
  headline: String,
  text: String,
  categoryName: {type: mongoose.SchemaTypes.ObjectId},
  categoriesID: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
});
const News = mongoose.model("News", NewsSchema);
module.exports = News;
