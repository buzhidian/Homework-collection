const fs = require("fs")

// 调用方法读取文件
// fs.readFile("./文本.md",(err,data)=>{
//     if (err) {
//         throw err
//     }
//     console.log(data.toString());
// })

const pro1 = new Promise(function (resolve, reject) {
    fs.readFile("./文本.md", (err, data) => {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})

pro1.then(res => {
    console.log(res.toString());
}).catch(err => {
    // console.log(111);
    console.log("读取失败");
})