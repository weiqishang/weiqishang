var timer;
var count = 0;  //  点击的次数
function active(){
    count++
    
    if( count % 2 != 0 ){
        // 获取两个span标签 :通过标签名称获取
        var span1 = document.getElementsByTagName('span')[0]
        var span2 = document.getElementsByTagName('span')[1]
        // 获取标签内部的内容
        var num1 = span1.innerHTML 
        var num2 = span2.innerHTML 
        // console.log(num1)    // 输出当前获取的内容

        // setInterval( function,time )   每隔time毫秒，执行function函数(方法)
        // 每隔1s，span2标签内部的数字减1
        function calc(){
            num2--  
            if( num2 < 0 ){
                num1--
                if( num1 < 0 ){
                    return
                }
                num1 = num1 < 10 ? '0' + num1 : num1 
                span1.innerHTML = num1
                
                num2 = 8
            }
            num2 = num2 < 10 ? '0' + num2 : num2   // 三元运算符
            span2.innerHTML = num2
        }
        timer = setInterval(calc, 1000)
    } else {
        clearInterval( timer )
        // clearInterval()方法用于停止setInterval()方法执行的代码
        // 需要设定全局变量， var timer = setInterval()
        // 然后，通过clearInterval(timer)停止
    }
}
