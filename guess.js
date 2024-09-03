var b=document.getElementById("two")
    var c=document.getElementById("three")
    
    var d=Math.floor(Math.random()*10+1)
var f=10 
function valuechange(){
    var a=document.getElementById("one").value
    
    if (f==0){
        alert("you loose")
    }else{
        if (d==a){
            b.textContent="you are right and you win"
            alert("you win")
        }else{
            f=f-1
            b.textContent="you are wrong"
            c.textContent="your score:"+f
        }
    }
}