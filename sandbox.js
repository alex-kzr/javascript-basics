let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@xxx.com',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    login: function(){
        console.log('the user login');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log('this user has written following blogs:');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        });
    } 
}

user.logBlogs();
