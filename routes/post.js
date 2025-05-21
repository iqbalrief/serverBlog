var express = require('express');
var router = express.Router();

const { generateToken } = require('../utils/auth');
const postCtrl = require('../controller/posts');


router.post('/', generateToken, postCtrl.createPost);
router.put('/:id', generateToken, postCtrl.updatePost);
router.get('/', generateToken, postCtrl.getAllPosts);
router.get('/:id', generateToken, postCtrl.getPostById);
router.delete('/:id', generateToken, postCtrl.deletePost);


module.exports = router;
