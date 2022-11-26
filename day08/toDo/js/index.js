var input = document.getElementById('inp')
var sub = document.getElementById('submit')

// 添加
input.addEventListener('keyup', function(e) {
    var list = document.getElementById('list')
    if (e.keyCode == 13 && input.value !="") {
        console.log(list);
        var li = document.createElement('li')
        li.innerHTML = `<li class="">
                <input type="checkbox" class="checkbox-btn">
                <p class="content">
                    ${input.value}
                </p>
                <button class="close-btn">X</button>
            </li>`
        //头部添加
        list.insertBefore(li,list.children[0])
        input.value = ''
    }
})

// 点击按钮添加
sub.addEventListener("click",function () {
    var list = document.getElementById('list')
    if (input.value !="") {
        var li = document.createElement('li')
        li.innerHTML = `<li class="">
                <input type="checkbox" class="checkbox-btn">
                <p class="content">
                    ${input.value}
                </p>
                <button class="close-btn">X</button>
            </li>`
        //头部添加
        list.insertBefore(li,list.children[0])
        input.value = ''
    }
})

// 切换


// 删除--事件委托
list.addEventListener('click',function (e) {
    if (e.target.className == 'close-btn') {
        e.target.parentNode.remove()
    }
})
