const User=require('../models/user');
const Post=require('../models/post');
module.exports.profile=function(req,res){
    // res.render('user_profile',{
    //     title:'users controller'
    // })

    // if(req.params.user_id){
        ////////
        // console.log("******",req.user);
        // console.log(req.params.user_id);
        // User.findById(req.user._id,function(err,user){
            ///////
            // if(user){

                ////
                // console.log(user);
                // return res.render('home',{
                //     title:"User Profile",
                //     user:user
                // });

                //
            // }
            // else{
            //     return res.redirect('/users/sign-in');
            // }
    //     });
    // }else{
    //     return res.redirect('/users/sign-in');
    // }

    //////
// })
// Post.find({},function(err,posts){
//     console.log("user posts",posts);
//    return res.render('home',{
//     title: "Codeial | Home" ,
//     posts:posts
// });
///populate the user
Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
        title: "Codeial | Home" ,
        posts:posts
});
});
}

// reder the sign in page
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        // console.log("isAuthenticated :",req.isAuthenticated());
       return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}

module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
User.findOne({email:req.body.email},function(err,user){
    console.log(user);
if(err)
{
    console.log('error in finding user in signing up');
    return;
}
if(!user){
    User.create(req.body,function(err,user){
     if(err){
        console.log("error in creating user while signing up");
        return;
     }
        return res.redirect('/users/sign-in');
    })
}else{
    return res.redirect('back');
}
});
}

// reder the sign up page
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    });
}


//sign in and create a session for the user
module.exports.createSession=function(req,res){
//steps to authenticate

console.log("Session created");

// return res.redirect('/users/profile');
return res.redirect('/');
//find the user
    // User.findOne({email:req.body.email},function(err,user){
    //     console.log("email:",req.body.email);
    //     console.log("user:",user);
    //     if(err){console.log("error in finding user in signing up");return}

//handle user found
    //  if(user){
    //handle password which don't match
    //  if(user.password!=req.body.password){
    //     return res.redirect('back');
    //  }
     //handle session creation
    //  res.cookie('user_id',user.id);
    //  return res.redirect('/users/profile')
    //  }
    //  else{
    //handle user not found
    // return res.redirect('back');
    //  }

// });

}
//sign in and create a session for the user
module.exports.deleteSession=function(req,res){
    //steps to authenticate
    req.logout();
    return res.redirect('/');
    // console.log("Session deleted");
    // console.log(req.query);
    //find the user
        // User.findOne({_id:req.query.id},function(err,user){
    
    //handle user found
        //  if(user._id==req.query.id){
         //handle session deletion
        //  console.log("if page");
        //  console.log("user_id",user._id);
        //  console.log("req user id",req.query.id);
        //  res.clearCookie('user_id');
        //  return res.redirect('/users/sign-in')
        //  res.end();
        //  }
        //  else{
        // handle user not found
        // console.log("else page");
        // return res.redirect('/users/sign-in');
        //  }
    
    // });
}
    
module.exports.destroySession=function(req,res){
    
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/users/sign-in');
      });
}

