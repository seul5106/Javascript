const MyClass = function(){
    console.log("---MyClass의 객체가 생성되었습니다.---");
    this.age = 20;
    this.name = "노드";
};

MyClass.prototype.say = function() {
    console.log("이름: " + this.name);
    console.log("나이: " + this.age);

};

module.exports = MyClass;