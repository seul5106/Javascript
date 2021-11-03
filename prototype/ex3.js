function Member(username, password){
    this._username = username;
    this._password = password;
}

Member.prototype = {
    get username(){
        return this._username;
    },

    set username(param){
        this._username = param;
    },

    get password(){
        return this._password;
    },

    set password(param){
        this._password = param;
    },

    login: function(){
        console.log("[Member] 로그인 되었습니다. username = " + this._username + " password = " + this._password);
    },

    logout: function(){
        this.username = "";
        this.password = "";
        console.log("[Member] 로그아웃 되었습니다. username = " + this._username + " password = " + this._password);
    }
};

console.log(Member.prototype);

const member1 = new Member("hello", "1234");

console.log(member1.username);
console.log(member1.password);

member1.login();
member1.logout();

member1.username = "world";
member1.password = "1234";

member1.login();
member1.logout();