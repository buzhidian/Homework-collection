function greeter(person) {
    return "Hellow," + person;
}
var user = "wanglongxiang";
document.body.innerHTML = greeter(user);
// number 
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
// string 
var str1 = '勇者之路';
var str2 = '盾之勇者';
var str = str1 + str2;
console.log(sum, str);
// 对象
// declare function create(o:object | null):void
// create({props:0})
// create(null)
// create(11122)
// create("aaaa")
// create(undefined)
var obj;
obj = { name: "小白", age: 18 };
// 枚举
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["ERROR"] = 500] = "ERROR";
})(CODE || (CODE = {}));
console.log(CODE.SUCCESS);
console.log(CODE['ERROR']);
var CODE1;
(function (CODE1) {
    CODE1[CODE1["SUCCESS"] = 0] = "SUCCESS";
    CODE1[CODE1["ERROR"] = 1] = "ERROR";
})(CODE1 || (CODE1 = {}));
console.log(CODE1.SUCCESS);
console.log(CODE1.ERROR);
var CODE2;
(function (CODE2) {
    CODE2[CODE2["SUCCESS"] = 0] = "SUCCESS";
    CODE2[CODE2["ERROR"] = 500] = "ERROR";
    CODE2[CODE2["WARNING"] = 501] = "WARNING";
})(CODE2 || (CODE2 = {}));
console.log(CODE2.SUCCESS);
console.log(CODE2.ERROR);
console.log(CODE2.WARNING);
// void
function getName1(name, age) {
}
function getName2(name, age) {
    return name + age;
}
