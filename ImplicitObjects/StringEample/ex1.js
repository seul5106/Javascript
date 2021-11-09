const email = "seul5106@gmail.com";
const substring1 = email.substring(0,8);
const substring2 = email.substring(9);
console.log(substring1);
console.log(substring2);

p = email.indexOf("@");
id = email.substring(0,p);
domain = email.substring(p+1);
console.log(id);
console.log(domain);