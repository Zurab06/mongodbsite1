const News = require("../models/News.model");


module.exports.newsController = {
  getNews(req, res) {
    News.find({}).then((data) => {
      res.json(data);
    });
  },
  getNewsId(req, res) {
    News.findById(req.params.id).then((data) => {
      res.json(data);
    });
  },
  deleteNews(req, res) {
    News.findByIdAndDelete(req.params.id).then(() => {
      res.json("news deleted");
    });
  },
  patchNews(req, res) {
    const { headline, text, categoryName } = req.body;
    News.findByIdAndUpdate(req.params.id, {
      headline,
      text,
      categoryName,
    }).then((data) => res.json(data));
  },

  postNews(req,res){
    const {headline, text, categoryName} = req.body
News.create({
headline,
text,
categoryName
}).then((data)=>res.json(data))


  }




};
