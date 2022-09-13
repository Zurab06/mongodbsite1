const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getCategory(req, res) {
    Category.find({}).then((data) => res.json(data));
  },
  postCategory(req, res) {
    Category.create({
      name: "category name",
    }).then(() => res.json("category created"));
  },

  deleteCategory(req, res) {
    Category.findByIdAndDelete(req.params.id).then(() =>
      res.json("category deleteed")
    );
  },
};
