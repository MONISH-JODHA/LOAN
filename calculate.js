
const m= document.getElementById("m").value;
const m1= document.getElementById("m1").value;
const m2= document.getElementById("m2").value;
const opt1= document.getElementById("opt1").value;
const opt2= document.getElementById("opt2").value;
const opt3= document.getElementById("opt3").value;
console.log(m,m1,m2);
function test(){
  
    console.log(m,m1,m2);
}

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("mip").addEventListener("click", function() {
        console.log(m+m1);
    })

})
