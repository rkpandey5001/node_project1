const express=require('express');
const router=express.Router();
const passport=require('passport');
const commentsController=require('../controllers/comments_controller');

// router.post('/create',postsController.create);
router.post('/create',passport.checkAuthentication,commentsController.create);
router.get('/destroy/:id',passport.checkAuthentication,commentsController.destroy);
console.log('post controller');
module.exports=router;