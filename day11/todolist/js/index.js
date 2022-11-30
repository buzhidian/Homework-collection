var input = document.getElementById('inp')
var sub = document.getElementById('submit')
var list = document.getElementById('list')
var spans = document.querySelectorAll('.option')

// 添加
input.addEventListener('keyup', function(e) {
    if (e.keyCode == 13 && input.value !="") {
        console.log(list);
        var li = document.createElement('li')
        li.innerHTML = `<button class="checkbox-btn">
                <div class="checkbox"></div>
                </button>
                <button class="checkbox-btn" style="display:none">
                        <svg class="svg-inline--fa fa-check fa-w-16 check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                            <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" ></path>
                        </svg>
                    </button>
                <p class="content">
                    ${input.value}
                </p>
                <button class="close-btn">×</button>`
        //头部添加
        list.insertBefore(li,list.children[0])
        input.value = ''
    }
    getNum()
})

// 点击按钮添加
sub.addEventListener("click",function () {
    if (input.value !="") {
        var li = document.createElement('li')
        li.innerHTML = `<button class="checkbox-btn">
        <div class="checkbox"></div>
        </button>
        <button class="checkbox-btn" style="display:none">
                        <svg class="svg-inline--fa fa-check fa-w-16 check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                            <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" ></path>
                        </svg>
                    </button>
        <p class="content">
            ${input.value}
        </p>
        <button class="close-btn">×</button>`
        //头部添加
        list.insertBefore(li,list.children[0])
        input.value = ''
    }
    getNum()
})

// 切换
list.addEventListener('click',function (e) {
    console.log(e.target.localName);
    // 当点击未完成状态时
    if (e.target.className == 'checkbox') {
        // 让自身button消失
        e.target.parentNode.style="display:none"
        // 让li变为完成状态
        e.target.parentNode.parentNode.className="completed"
        // 让另一个button显示
        e.target.parentNode.nextElementSibling.style = ""
        // 让最后一个button变色
        e.target.parentNode.parentNode.children[e.target.parentNode.parentNode.children.length-1].className = "close-btn close-com"
    }
    if (e.target.localName == 'svg') {
        e.target.parentNode.style="display:none"
        e.target.parentNode.parentNode.className=""
        e.target.parentNode.previousElementSibling.style = ""
        e.target.parentNode.parentNode.children[e.target.parentNode.parentNode.children.length-1].className = "close-btn"
    }
    if (e.target.localName == 'path') {
        e.target.parentNode.parentNode.style="display:none"
        e.target.parentNode.parentNode.parentNode.className=""
        e.target.parentNode.parentNode.previousElementSibling.style = ""
        e.target.parentNode.parentNode.parentNode.children[e.target.parentNode.parentNode.parentNode.children.length-1].className = "close-btn"
    }

    footer()
    getNum()
})


// 删除--事件委托
list.addEventListener('click',function (e) {
    if (e.target.className == 'close-btn'|| e.target.className == "close-btn close-com") {
        e.target.parentNode.remove()
    }
    getNum()
})

// 点击All
spans[0].addEventListener('click',function (e) {
    let lists = document.querySelectorAll("li")
    for(let key in spans){
        spans[key].className = "option"
    }
    spans[0].className = "option active"

    for (const key in lists) {
        lists[key].style = ""
    }
    console.log(e.target);
})
// 点击Active
spans[1].addEventListener('click',function (e) {
    let lists = document.querySelectorAll("li")
    // console.log(lists);

    for(let key in spans){
        spans[key].className = "option"
    }
    spans[1].className = "option active"

    
    for (const key in lists) {
        lists[key].style = ""
        if (lists[key].children) {
            if (lists[key].children[0].style.display == "none") {
                lists[key].style = "display:none"
            }
        }
    }

    console.log(e.target);
})
// 点击Completed
spans[2].addEventListener('click',function (e) {
    let lists = document.querySelectorAll("li")
    for(let key in spans){
        spans[key].className = "option"
    }
    spans[2].className = "option active"

    for (const key in lists) {
        lists[key].style = ""
        if (lists[key].children) {
            if (lists[key].children[0].style.display == "") {
                lists[key].style = "display:none"
            }
        }
    }

    
    console.log(e.target);
})

// 点击Clear completed
spans[3].addEventListener('click',function (e) {
    let removes = document.querySelectorAll(".completed")
    // 删除已完成
    for (const key in removes) {
        // console.log(removes[key].className);
       if (removes[key].style) {
        console.log(removes[key]);
        removes[key].remove()
       }
    }

    // 显示所有未完成
    let lists = document.querySelectorAll("li")
    for (const key in lists) {
        lists[key].style = ""
    }

    // 隐藏按钮
    footer()
    // console.log(e.target);
    getNum()
})

// 封装修改底部按钮的函数
function footer() {
    let removes = document.querySelectorAll(".completed")
    let lists = document.querySelectorAll("li")
    console.log(removes.length);

    // 如果均为完成
    if (removes.length == 0) {
        spans.forEach(item => {
            item.style = "display:none"
        });
        spans[0].style.display = ""
        spans[0].className = "option active"
    }else if (removes.length == lists.length) {   
        // 如果全部已完成
        spans.forEach(item => {
            item.style = "display:none"
        });
        spans[0].style.display = ""
        spans[3].style.display = ""
        // spans[0].className = "option active"
    }else {
        spans.forEach(item => {
            item.style.display = ""
        });
    }
    
    


}



// 封装修改未完成个数的函数
function getNum() {
    let completed = document.querySelectorAll(".completed")
    let txt = document.querySelector(".number")
    txt.innerHTML = `${list.children.length - completed.length} item left`
}