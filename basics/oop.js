
// object literals

var user1 = {
    email: 'ryu@ninjas.com',
    name:'Ryu',
    login(){
        console.log(this.email, 'has logged in.');
    }
};

class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(this.email, 'just logged in');
        return this;
    }

    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }

    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score); 
        return this; // method chaining
    }
}

// inheritance
class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var user2 = new User('sam@163.com', 'Sam');
user2.logout();


// prototype method

// function Car(make, model){
//     this.make = make;
//     this.model = model;

//     this.drive = function(){
//         console.log(make, model, 'is driving');
//     }
// }

// Car.prototype.ignite = function(){
//     console.log(this.make, this.model, 'has been ignited');
// }

// var car1 = Car('Benz', 'S600');
// car1.drive();
