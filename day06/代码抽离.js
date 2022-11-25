// 代码抽离 then和catch

const fs = require("fs")

function getMd(url) {
    return new Promise(function (resolve, reject) {
        fs.readFile(url, (err, data) => {
            // if (err) {
            //     reject(err)
            // }
            // resolve(data)
            resolve("----出错---")
        })
    })
}

getMd("./contents/出师表.md").then(res=>{
    console.log(res.toString());
    // return res.toString()
}).catch(err=>{
    console.log(err);
}).then(()=>{
    getMd("./contents/蜀道难.md").then(res=>{
        // console.log(data + "111111111222222"+res.toString());
        console.log("111111111222222"+res.toString());
    })
}).catch(err=>{
    console.log(err);
})



/* function getMd(url) {
    return new Promise(function (resolve, reject) {
        fs.readFile(url, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}
getMd("./contents/出师表.md").then(res=>{
    return res.toString()
}).then((data)=>{
    getMd("./contents/蜀道难.md").then(res=>{
        console.log(data+res.toString());
    })
}) */

/* function getMd(url) {
    return new Promise(function (resolve, reject) {
        fs.readFile(url, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}
getMd("./contents/出师表.md").then(res=>{
    return res.toString()
}).then((data)=>{
    getMd("./contents/蜀道难.md").then(res=>{
        console.log(data+res.toString());
    })
}) */