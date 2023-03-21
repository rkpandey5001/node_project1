const express=require('express');
const router=express.Router();
const passport=require('passport');
const postsController=require('../controllers/posts_controller');

// router.post('/create',postsController.create);
router.post('/create',passport.checkAuthentication,postsController.create);
router.get('/destroy/:id',passport.checkAuthentication,postsController.destroy);
console.log('post controller');
module.exports=router;