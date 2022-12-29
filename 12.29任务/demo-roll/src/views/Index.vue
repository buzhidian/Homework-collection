<template>
    <div class='index'>
        <h1>H2201B点名表</h1>
        <p class="date">时间:<span class="time">{{ date }}</span></p>
        <div class="box">
            <div class="left">
                <ul>
                    <li :style="item.style" v-for="item in nameArr" :key="item.name">{{ item.name }}</li>
                </ul>
            </div>
            <div class="right">
                <p>
                    天选之人：<span class="name" :style="rollName.style">{{ rollName.name }}</span>
                </p>
                <!-- <audio id="audio" src="./mp3/大野木宣幸 - Battle City.mp3" autoplay controls></audio> -->
                <div class="footer">
                    <ul>
                        <li>
                            <button class="roll" v-if="flag1" @click="setTimer(1)">单人点名</button>
                            <button class="stop" v-else @click="stopTimer(1)">停止</button>
                        </li>
                        <li>
                            <button class="roll" v-if="flag2" @click="setTimer(2)">双人点名</button>
                            <button class="stop" v-else @click="stopTimer(2)">停止</button>
                        </li>
                        <li>
                            <button class="roll" v-if="flag3" @click="setTimer(3)">男生点名</button>
                            <button class="stop" v-else @click="stopTimer(3)">停止</button>
                        </li>
                        <li>
                            <button class="roll" v-if="flag4" @click="setTimer(4)">女生点名</button>
                            <button class="stop" v-else @click="stopTimer(4)">停止</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
export default {
    setup(props, ctx) {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        const data = reactive({
            date: "",
            nameArr: ["张世权", "吴倩", "李宏恩", "宋增杰", "杨志豪", "郝嫚嫚", "侯建荞", "程怀博", "周璇", "张建雨", "孙銘", "孙旭瑶", "章奥博", "王伟宸", "巴钦", "代伊涵", "邓林柯", "张立", "李妍", "薛翔元", "郑锋", "江萌洋", "张宗耀", "章涵语", "高鹏亚", "刘艺", "付高聪", "宋海宇", "王龙翔", "徐婉颖", "韩雨泽"],
            schoolgirls: ["吴倩", "郝嫚嫚", "侯建荞", "周璇", "江萌洋", "孙旭瑶", "李妍", "徐婉颖", "刘艺"],
            schoolboys: [],
            rollName: {
                name: "王龙翔",
                style: ""
            },
            flag1: true,
            flag2: true,
            flag3: true,
            flag4: true,
        });

        // 获取当前时间
        const getTimer = function () {
            var date1 = new Date()
            var year = date1.getFullYear()
            var month = date1.getMonth() + 1
            var datee = date1.getDate()
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
            data.date = getTimer()
            // console.log(data.date);
        }, 1000)

        // 随机数
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }


        function rgb() { //rgb颜色随机
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var rgb = '(' + r + ',' + g + ',' + b + ')';
            return rgb;
        }

        // 名字处理
        data.nameArr.forEach(item => {
            if (!data.schoolgirls.includes(item)) {
                data.schoolboys.push(item)
            }
        })
        // 修改数组类型
        function changeName() {
            let newArr = []
            data.nameArr.forEach(item => {
                newArr.push({
                    name: item,
                    style: ""
                })
            })
            data.nameArr = newArr
            let newArr1 = []
            data.schoolgirls.forEach(item => {
                newArr1.push({
                    name: item,
                    style: ""
                })
            })
            data.schoolgirls = newArr1
            let newArr2 = []
            data.schoolboys.forEach(item => {
                newArr2.push({
                    name: item,
                    style: ""
                })
            })
            data.schoolboys = newArr2
        }
        changeName()
        // console.log(data.nameArr);
        // console.log(data.schoolgirls);
        // console.log(data.schoolboys);
        // 设置li标签字体渐变 
        function setLi() {
            data.nameArr.forEach(item => {
                item.style = `background-image:linear-gradient(to right, rgb${rgb()}, rgb${rgb()})`
            })
        }
        setLi()


        // 设置name标签字体渐变
        function setName() {
            data.rollName.style = `background-image:linear-gradient(to right, rgb${rgb()}, rgb${rgb()})`
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

        // 开始点名
        var timer1
        var timer2
        var timer3
        var timer4

        // 设置定时器
        const setTimer = function (flag) {
            if (flag == 1) {
                data.flag1 = false
                timer1 = setInterval(() => {
                    setLi()
                }, 200);
            } else if (flag == 2) {
                data.flag2 = false
                timer2 = setInterval(() => {
                    setLi()
                }, 200);
            } else if (flag == 3) {
                data.flag3 = false
                timer3 = setInterval(() => {
                    setLi()
                }, 200);
            } else if (flag == 4) {
                data.flag4 = false
                timer4 = setInterval(() => {
                    setLi()
                }, 200);
            }

        }


        // let copy1 = [...data.nameArr]
        // let copy2 = [...data.nameArr]
        // let copy3 = [...data.schoolgirls]
        // let copy4 = [...data.schoolboys]
        // 停止
        const stopTimer = function (flag) {

            if (flag == 1) {
                data.flag1 = true
                data.rollName.name = data.nameArr[getRandom(0, data.nameArr.length - 1)].name

                clearInterval(timer1)
            } else if (flag == 2) {
                data.flag2 = true
                let copy = [...data.nameArr]
                let name1 = data.nameArr[getRandom(0, data.nameArr.length - 1)].name
                data.nameArr.forEach((item, index) => {
                    if (item.name == name1) {
                        copy.splice(index, 1)
                    }
                })
                // console.log(data.nameArr.length);
                let name2 = copy[getRandom(0, copy.length - 1)].name
                data.rollName.name = name1 + "、" + name2

                clearInterval(timer2)
            } else if (flag == 3) {
                data.flag3 = true
                data.rollName.name = data.schoolboys[getRandom(0, data.schoolboys.length - 1)].name
                clearInterval(timer3)
            } else if (flag == 4) {
                data.flag4 = true
                data.rollName.name = data.schoolgirls[getRandom(0, data.schoolgirls.length - 1)].name
                clearInterval(timer4)
            }
            setName()
        }

        return { ...toRefs(data), setTimer, stopTimer };
    },
};
</script>

<style lang='scss' scoped>
* {
    padding: 0;
    margin: 0;
    list-style: none;
    font-family: "楷体";
    color: #fff;
}

.index {
    background: url(../../public/xxxx.gif);
}

audio {
    background-color: #fff;
    display: none;
}

h1 {
    text-align: center;
    margin-top: 20px;
}

.date {
    text-align: right;
    padding: 30px;
    margin-right: 50px;
    font-size: 20px;
}

.date span {
    display: inline-block;
    width: 200px;
}

.box {
    display: flex;
}

.left {
    flex: 1;
    /* background-color: pink; */
    padding: 20px;
}

.left ul {
    display: flex;
    width: 100%;
    /* background-color: azure; */
    flex-wrap: wrap;
}

.left ul li {
    width: 16%;
    font-size: 24px;
    /* background-color: aquamarine; */
    text-align: center;
    margin: 30px 0;

    /* 字体渐变 */
    background-image: linear-gradient(to right, orange, purple);
    -webkit-background-clip: text;
    color: transparent;
    /* font-size: 30px; */
}

.right {
    flex: 1;
    /* background-color: aqua; */
    padding: 20px;
}


.right p {
    padding: 170px 0 170px 30px;
    font-size: 40px;
}

.right p span {
    font-size: 60px;
    background-image: linear-gradient(to right, orange, purple);
    -webkit-background-clip: text;
    color: transparent;
}

.footer {
    padding: 30px;

}

.footer ul {
    display: flex;
    width: 100%;
    justify-content: space-around;

}

.footer ul li button {
    border: 0;
    border-radius: 20px;
    background-color: #67c23a;
    color: #fff;
    height: 40px;
    line-height: 40px;
    /* padding: 20px; */
    padding: 0 20px;
    font-size: 16px;
    font-family: "微软雅黑";
    cursor: pointer;
    overflow: hidden;
}
</style>
