const express=require('express');
const router=express.Router();
const passport=require('passport');
const userController=require('../controllers/users_controller');

console.log(" user router loaded");
router.get('/profile/:id',passport.checkAuthentication,userController.profile);
router.get('/profile',passport.checkAuthentication,userController.profile);
router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
router.post('/create',userController.create);
router.post('/update/:id',userController.update);
// router.post('/create-session',userController.createSession);

//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate('local',{failureRedirect:'/users/sign-in'},),userController.createSession);
router.get('/delete-session',userController.deleteSession);
router.get('/sign-out',userController.destroySession);
module.exports=router;