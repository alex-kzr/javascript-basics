let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@xxx.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user login');
    },
    logout: function(){
        console.log('the user logged out');
    }
}

user.login();
