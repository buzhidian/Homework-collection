function greeter(person:string) {
    return "Hellow,"+person
}
let user = "wanglongxiang"
document.body.innerHTML = greeter(user)


// number 
let num1:number = 10
let num2:number = 20

let sum:number = num1 + num2

// string 
let str1:string = '勇者之路'
let str2:string = '盾之勇者'

let str:string = str1 + str2

console.log(sum,str);


// 对象
// declare function create(o:object | null):void
// create({props:0})
// create(null)
// create(11122)
// create("aaaa")
// create(undefined)

let obj:{name:string,age:number}
obj = {name:"小白",age:18}

// 枚举
enum CODE {
    SUCCESS = 200,
    ERROR = 500,
}
console.log(CODE.SUCCESS);
console.log(CODE['ERROR']);

enum CODE1 {
    SUCCESS,
    ERROR,
}
console.log(CODE1.SUCCESS);
console.log(CODE1.ERROR);

enum CODE2 {
    SUCCESS,
    ERROR = 500,
    WARNING,
}
console.log(CODE2.SUCCESS);
console.log(CODE2.ERROR);
console.log(CODE2.WARNING);


// void
function getName1(name:string,age:number):void {
    
}

function getName2(name:string,age:number):string {
    return name + age    
}

// 交叉类型
interface use {
    name:string,
    age:number
}
interface per {
    sex:number
}
type allInfo = use & per
let person:use & per = {name:"小明",age:12,sex:1}

// 联合类型
let allType: number | string
allType = 1
allType = "aedd"

// allType = false  //不能将类型“boolean”分配给类型“string | number”

// 类型断言
// 有时候一个数据的值是多变的,并不是单一,这个时候我们就要告诉编译器,我知道我要什么,我自己检查了,不需要你检查。我自己定义他的类至
/**
 * 类型断言有两种写法
 * 1.“尖括号”语法
 * 2.as写法
 */


// interface  接口
interface Person {
    name:string,
    age:number,
    sex:number,
    isJob:boolean,
    hobby:string[],
    formerName:[string,string,string]
}
let person1: Person = {
    name: "小明",
    age:14,
    sex:1,
    isJob:false,
    hobby:["吸烟","喝酒","烫头"],
    formerName:["小云","小花","小晴"]
}






