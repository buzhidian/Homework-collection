var input = document.getElementById('inp')
var sub = document.getElementById('submit')
var list = document.getElementById('list')
var spans = document.querySelectorAll('.option')

// 添加
input.addEventListener('keyup', function(e) {
    if (e.keyCode == 13 && input.value !="") {
        console.log(list);
        var li = document.createElement('li')
        li.innerHTML = `<input type="checkbox" class="checkbox-btn">
                <p class="content">
                    ${input.value}
                </p>
                <button class="close-btn">X</button>`
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
        li.innerHTML = `<input type="checkbox" class="checkbox-btn">
                <p class="content">
                    ${input.value}
                </p>
                <button class="close-btn">X</button>`
        //头部添加
        list.insertBefore(li,list.children[0])
        input.value = ''
    }
    getNum()
})

// 切换
list.addEventListener('change',function (e) {
    if (e.target.className == 'checkbox-btn') {
        
        if (e.target.checked == true) {
            e.target.parentNode.className = "completed"
        }else{
            e.target.parentNode.className = ""
        }
    }
    getNum()
})


// 删除--事件委托
list.addEventListener('click',function (e) {
    if (e.target.className == 'close-btn') {
        e.target.parentNode.remove()
    }
    getNum()
})

// 点击All
spans[0].addEventListener('click',function (e) {
    let checkbox = document.querySelectorAll('.checkbox-btn')
    for(let key in spans){
        spans[key].className = "option"
    }
    spans[0].className = "option active"

    for (const key in checkbox) {
        if (checkbox[key].parentNode) {
            checkbox[key].parentNode.style.display = ""
        }
    }
    console.log(e.target);
})
// 点击Active
spans[1].addEventListener('click',function (e) {
    let checkbox = document.querySelectorAll('.checkbox-btn')

    for(let key in spans){
        spans[key].className = "option"
    }
    spans[1].className = "option active"

    for (const key in checkbox) {
        if (checkbox[key].parentNode) {
            checkbox[key].parentNode.style.display = ""
        }
        if (checkbox[key].checked == true) {
            checkbox[key].parentNode.style.display = "none"
        }
    }

    console.log(e.target);
})
// 点击Completed
spans[2].addEventListener('click',function (e) {
    let checkbox = document.querySelectorAll('.checkbox-btn')
    for(let key in spans){
        spans[key].className = "option"
    }
    spans[2].className = "option active"

    for (const key in checkbox) {
        if (checkbox[key].parentNode) {
            checkbox[key].parentNode.style.display = ""
        }
        if (checkbox[key].checked == false) {
            checkbox[key].parentNode.style.display = "none"
        }
    }

    
    console.log(e.target);
})

// 点击Clear completed
spans[3].addEventListener('click',function (e) {
    let removes = document.querySelectorAll(".completed")
    for (const key in removes) {
       removes[key].remove()
    }
    console.log(e.target);
    getNum()
})

function getNum() {
    let completed = document.querySelectorAll(".completed")
    let txt = document.querySelector(".number")
    txt.innerHTML = `${list.children.length - completed.length} item left`
}