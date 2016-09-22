
//  var timer = null
 var count = 0 
 function active() {
 count ++
 if (count % 2 != 0) {
     var span1  = document.getElementsByTagName('span')[0]
var span2  = document.getElementsByTagName('span')[1]
var num1 = span1.innerHTML
 var num2 = span2.innerHTML
 
   function time() {
           num2--
           if (num2<0) {
               num1--
               num2=59
           }
           if (num1<0) {
               return
           }
           span1.innerHTML=num1
                       num2 = num2 < 10 ? '0' + num2 : num2   // 三元运算符
           span2.innerHTML=num2
   
   
  }
  timer=  setInterval(time,100)
  }else{
        clearInterval( timer )
      
    }

  }
    // num2--  
    //         if( num2 < 0 ){
    //             num1--
    //             if( num1 < 0 ){
    //                 return
    //             }
    //             num1 = num1 < 10 ? '0' + num1 : num1 
    //             span1.innerHTML = num1
                
    //             num2 = 8
    //         }
    //         num2 = num2 < 10 ? '0' + num2 : num2   // 三元运算符
    //         span2.innerHTML = num2 