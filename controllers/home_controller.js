// const User=require('../models/user');
const Post=require('../models/post');
module.exports.home=function(req,res){
    // return res.end('<h1>you are on careers page</h1>');
    // Post.find({},function(err,posts){
    //     console.log("user posts",posts);
    //    return res.render('home',{
    //     title: "Codeial | Home" ,
    //     posts:posts
    // });
     
    // });
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
        title: "Codeial | Home" ,
        posts:posts
});
});
}

// module.exports.contacts=function(req,res){
//     return res.end('<h1>you are on contact page</h1>');
// }

// module.exports.careers=function(req,res){
//     return res.end('<h1>you are on careers page</h1>');
// }
// module.exports.home=function(req,res){
//     return res.render('home',{
//         title:"<h1>home</h1>"
//         }
//     );
// }
//    console.log(req.cookies);
//    res.cookie('user_id',99);

//    return res.end('<h1>you are on Home page</h1>');
// }

// npm install cookie-parser