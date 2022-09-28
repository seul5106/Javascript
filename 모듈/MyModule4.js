var HelloWorld = function() {
    console.log("---HelloWorld의 객체가 생성되었습니다.---");
};

HelloWorld.prototype.say = function() {
    console.log("Hello World");
};

module.exports = new HelloWorld();