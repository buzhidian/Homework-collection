var time = document.querySelector(".time")
var rolls = document.querySelectorAll(".roll")
var stops = document.querySelectorAll(".stop")
var namebtn = document.querySelector(".name")
var ul = document.querySelector(".left ul")

function getTimer() {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var datee = date.getDate()
    datee = datee < 10 ? '0' + datee : datee
    var time = year + '-' + month + '-' + datee

    function getTimerr() {
        var time = new Date()
        var hour = time.getHours()
        hour = hour < 10 ? '0' + hour : hour
        var minute = time.getMinutes()
        minute = minute < 10 ? '0' + minute : minute
        var second = time.getSeconds()
        second = second < 10 ? '0' + second : second
        return hour + ':' + minute + ':' + second
    }
    return time + ' ' + getTimerr()
}
// 设置时间
let timer = setInterval(() => {
    let date = getTimer()
    console.log(date);
    time.innerHTML = date
}, 1000)


let nameArr = ["张世权", "吴倩", "李宏恩", "宋增杰", "杨志豪", "郝嫚嫚", "侯建荞", "程怀博", "周璇", "张建雨", "孙銘", "孙旭瑶", "章奥博", "王伟宸", "巴钦", "代伊涵", "邓林柯", "张立", "李妍", "薛翔元", "郑锋", "江萌洋", "张宗耀", "章涵语", "高鹏亚", "刘艺", "付高聪", "宋海宇", "王龙翔", "徐婉颖", "韩雨泽"]
let schoolgirls = ["吴倩", "郝嫚嫚", "侯建荞", "周璇", "江萌洋", "孙旭瑶", "李妍", "徐婉颖", "刘艺"]
let schoolboys = []
nameArr.forEach(item => {
    if (!schoolgirls.includes(item)) {
        schoolboys.push(item)
    }
})
nameArr.forEach(item => {
    let li = document.createElement("li")
    li.innerHTML = item
    ul.appendChild(li)
})
// console.log(schoolgirls.length);
// console.log(schoolboys.length);

// 随机数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// 开始点名
var timer1
var timer2
var timer3
var timer4
rolls.forEach((item, index) => {
    // console.log(item);
    item.onclick = function () {
        item.style = "display:none"
        item.nextElementSibling.style.display = ""

        if (index == 0) {
            timer1 = setInterval(() => {
                setLi()
            }, 100);
        }
        if (index == 1) {
            timer2 = setInterval(() => {
                setLi()
            }, 100);
        }
        if (index == 2) {
            timer3 = setInterval(() => {
                setLi()
            }, 100);
        }
        if (index == 3) {
            timer4 = setInterval(() => {
                setLi()
            }, 100);
        }
    }

})
// 停止
stops.forEach((item, index) => {
    item.onclick = function () {
        item.previousElementSibling.style.display = ""
        item.style.display = "none"


        // 单人点名
        if (index == 0) {
            let names = nameArr[getRandom(0, nameArr.length - 1)]
            namebtn.innerHTML = names

            // 停止定时器
            clearInterval(timer1)
        }
        // 双人点名
        if (index == 1) {
            let name1 = nameArr[getRandom(0, nameArr.length - 1)]
            // 剔除name1
            let arr2 = []
            nameArr.forEach(item => {
                if (item != name1) {
                    arr2.push(item)
                }
            })

            // console.log(arr2.length);
            let name2 = arr2[getRandom(0, arr2.length - 1)]
            namebtn.innerHTML = name1 + "、" + name2

            // 停止定时器
            clearInterval(timer2)
        }
        // 男生点名
        if (index == 2) {
            let names = schoolboys[getRandom(0, schoolboys.length - 1)]
            console.log(names);
            namebtn.innerHTML = names

            // 停止定时器
            clearInterval(timer3)
        }
        // 女生点名
        if (index == 3) {
            let names = schoolgirls[getRandom(0, schoolgirls.length - 1)]
            namebtn.innerHTML = names
            console.log(names);

            // 停止定时器
            clearInterval(timer4)
        }

        setName()

    }

})


function rgb() { //rgb颜色随机
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = '(' + r + ',' + g + ',' + b + ')';
    return rgb;
}

// 设置li标签字体渐变 
function setLi() {
    let lis = document.querySelectorAll(".left ul li")
    lis.forEach(item => {
        let rgb1 = rgb()
        let rgb2 = rgb()
        // console.log(rgb1);
        item.style.backgroundImage = `linear-gradient(to right, rgb${rgb1}, rgb${rgb2})`
        // item.style="display:none"
    })
}
setLi()

// 设置name标签字体渐变
function setName() {
    let names = document.querySelector(".name")
    let rgb1 = rgb()
    let rgb2 = rgb()
    // console.log(names);
    names.style.backgroundImage = `linear-gradient(to right, rgb${rgb1}, rgb${rgb2})`
}
setName()


// 播放音乐
function palyMusic() {
    let music = document.querySelector("#audio")
    console.log(music);
    // music.load()
    // music.paly()
}
// palyMusic()