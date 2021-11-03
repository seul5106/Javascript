function User4(){
    this._id = null;
    this._email = null;
}

Object.defineProperty(User4.prototype, "id", {
    get: function() {
        console.log("id에 대한 getter 호출됨");
        return this._id;
    },
    set: function(param) {
        console.log("id에 대한 setter 호출됨")
        this._id = param;
    }



});

Object.defineProperty(User4.prototype, "email", {
    get: function() {
        console.log("email에 대한 getter 호출됨");
        return this._email;
    },
    set: function(param) {
        console.log("email에 대한 setter 호출됨");
        this._email = param;
    }

});

const freind = new User4();
freind.id = "친구";
console.log(freind.id);

freind.email = "fir@gmail.com";
console.log(freind.email);