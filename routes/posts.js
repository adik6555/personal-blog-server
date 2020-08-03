//Set up router
const express = require("express");
const router = express.Router();
const PostModel = require("../models/post");
const slugify = require("../helpers/slugify");

//PATHS
router.get("/all", (req, res) => {
  const posts = PostModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: "unable to retrieve articles" });
    });
});

router.post("/add", (req, res) => {
  const post = new PostModel({
    title: req.body.title,
    subtitle: req.body.subtitle,
    slug: slugify.slugify(req.body.title),
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: "unable to add article", error: err.message });
    });
});

router.get("/feed", async (req, res) => {
  try {
    const posts = await PostModel.find().sort({ date: "desc" });
    const response = posts.map((post) => ({
      title: post.title,
      subtitle: post.subtitle,
      date: post.date,
      slug: post.slug,
    }));
    res.json(response);
  } catch (err) {
    res.json({ message: "unable to add article", error: err.message });
  }
});

//Export router
module.exports = router;
