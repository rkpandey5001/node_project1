{
    let createPost=function()
    {
        let newPostForm=$('#new-post-form');
        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type:'post',
                url:'/posts/create',
                data:newPostForm.serialize(),
                success:function(data){
                    console.log(data);
                    let newPost=newPostDom(data.data.post);
                    $('#posts-list-container>ul').prepend(newPost);
                    deletePost($(' .delete-post-button',newPost));
                },error:function(error){
                    console.log(error.responseText);
                }
            });
        });
    }

    //method to create a post in DOM
    let newPostDom=function(post)
    {
        return $(`<li id="post-${post._id}">
    <p>
      <small>
        <a class="delete-post-button" href="/posts/destroy/${post._id}">delete</a>
      </small>
    
    </p>

    ${post.content}
    <small><br>Posted by:<span style='font-size:15px;'>&#128104;</span>
    ${post.user.name}
    </small></div>
    <div>Posted at :📅<%= post.createdAt.toDateString().substr(3,12) %></div>
    </div>
    
    <div class="post-comments">
 
        <form action="/comments/create" method="post">
            <input type="text" name="content" placeholder="Type here to add comment...">
            <input type="hidden" name="post" value="${post._id}">
            <input type="submit" value="Add Comment">
        </form>
     
      <div class="post-comments-list">
        <ul id="post-comments-${post._id}">
          
        </ul>
      </div>
    </div>
     </li>`);
    }

    //method to delete a post
    let deletePost=function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();
            $.ajax({
                type:'get',
                url:$(deleteLink).prop('href'),
                success:function(data){
                      $(`#post-${data.data.post._id}`).remove();
                },
                error:function(error){
                console.log(error.responseText);
                }
            });
        });
    }
    createPost();
}