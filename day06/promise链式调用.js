const fs = require("fs")

function getChu() {
    return new Promise(function (resolve, reject) {
        fs.readFile("./contents/出师表.md", (err, data) => {
            // if (err) {
            //     reject(err)
            // }
            // resolve(data)
            resolve("出师表出错")
        })
    })
}

function getShu() {
    return new Promise(function (resolve, reject) {
        fs.readFile("./contents/蜀道难.md", (err, data) => {
            // if (err) {
            //     reject(err)
            // }
            // resolve(data)
            resolve("蜀道难出错")
        })
    })
}

function getTao() {
    return new Promise(function (resolve, reject) {
        fs.readFile("./contents/桃花源记.md", (err, data) => {
            // if (err) {
            //     reject(err)
            // }
            // resolve(data)
            resolve("桃花源记出错")
        })
    })
}

getChu().then(res => {
    console.log(res.toString());
    // return res.toString()
}).then(() => {
    // console.log(data,"42");
    getShu().then(res=>{
        console.log(res.toString(),"44");
    })
    // const result = getShu().then(res => res.toString())
    // console.log(result, "47");
    // return data + '11111111111111111111111111' + result
}).then(() => {
    // console.log(data,"50");
    getTao().then(res=>{
        console.log(res.toString());
    })
    // let result = getTao().then(res => res.toString())
    // console.log(result, "55");
    // console.log(data + '2222222222222222222222222222' + result, "56");
}).catch(err=>{
    console.log(err);
})





/* function getChu() {
    return new Promise(function (resolve, reject) {
        fs.readFile("./contents/出师表.md", (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
            resolve("出师表出错")
        })
    })
}
function getShu() {
    return new Promise(function (resolve, reject) {
        fs.readFile("./contents/蜀道难.md", (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
            resolve("蜀道难出错")
        })
    })
}
function getTao() {
    return new Promise(function (resolve, reject) {
        fs.readFile("./contents/桃花源记.md", (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}
getChu().then(res => {
    console.log(res.toString(), "Chu");
}).then(() => {
    getShu().then(res => {
        console.log(res.toString(), "Shu");
    })
}).then(() => {
    getTao().then(res => {
        console.log(res.toString(), "Tao");
    })
}) */

/* function getChu() {
    return new Promise(function (resolve, reject) {
        fs.readFile("./contents/出师表.md", (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
            resolve("出师表出错")
        })
    })
}
function getShu() {
    return new Promise(function (resolve, reject) {
        fs.readFile("./contents/蜀道难.md", (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
            resolve("蜀道难出错")
        })
    })
}
function getTao() {
    return new Promise(function (resolve, reject) {
        fs.readFile("./contents/桃花源记.md", (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}
getChu().then(res => {
    console.log(res.toString(), "Chu");
}).then(() => {
    getShu().then(res => {
        console.log(res.toString(), "Shu");
    })
}).then(() => {
    getTao().then(res => {
        console.log(res.toString(), "Tao");
    })
}) */

