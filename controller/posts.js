const { Post } = require('../models');

const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      authorId: req.user.id,
    });
    return res.json({
      status: 0,
      message: 'Berhasil membuat data posts',
      data: post
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create post', error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    if (post.authorId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });

    post.content = req.body.content;
    await post.save();
   return res.json({
      status: 0,
      message: 'Berhasil memperbarui data posts',
      data: post
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update post', error: error.message });
  }
};


const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
   return res.json({
      status: 0,
      message: 'Berhasil mengambil data posts',
      data: posts
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    return res.json({
      status: 0,
      message: 'Berhasil mengambil data post',
      data: post
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    if (post.authorId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });

    await post.destroy();
    return res.json({
      status: 0,
      message: 'Berhasil menghapus data post',
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete post', error: error.message });
  }
};

module.exports = {
    createPost,
    updatePost,
    getAllPosts,
    getPostById,
    deletePost
} 






