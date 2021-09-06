const { Post } = require("../models");

module.exports = {
    galleryController: async (req, res) => {
      const posts = await Post.findAll();
        res.render('gallery', {posts: posts});
    },

    newPostController: (req, res) => {
        res.render("newpost");
    },

    uploadController: async (req, res) => {
      const {media, caption, description, author} = req.body;
      const post = await Post.create({
          media,
          caption,
          description,
          author
      });
      // console.log(req.body);
      res.redirect('/gallery');
  }
}