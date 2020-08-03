const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  subtitle: { type: String, required: true },
  body: {
    type: String,
    required: true,
    default:
      "LOREM IPSUM Pariatur aliquip minim ea tempor adipisicing ut ullamco anim nisi officia voluptate deserunt quis. Eu quis fugiat sunt aliqua aliquip eu esse do commodo culpa dolor dolor minim amet. Nulla adipisicing commodo non nostrud officia. Proident non eu sunt cillum excepteur ut minim elit incididunt enim. Sint est excepteur dolore mollit qui mollit reprehenderit ullamco consectetur.",
  },
  imageUrl: { type: String, required: false },
  date: { type: Date, default: Date.now },
  slug: { type: String, required: true },
});

module.exports = mongoose.model("Post", PostSchema);
