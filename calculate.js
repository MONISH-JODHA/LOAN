
const m= document.getElementById("m").value;
const n=parseInt(m);
const m1= document.getElementById("m1").value;
const n1=parseInt(m1);
const m2= document.getElementById("m2").value;
const n2=parseInt(m2);
const opt1= document.getElementById("opt1").value;
const o1=opt1.replace("Monthly","12");
const opt2= document.getElementById("opt2").value;
const o2=opt2.replace("Quaterly","4");
const opt3= document.getElementById("opt3").value;
const o3=opt3.replace("Yearly","1");
console.log(m,m1,m2,o1,o2,o3);
console.log(n+n1);
var l=12;
var j=n*n1*n2/100;
var k= j/l;
// if (document.getElementById("opt1").addEventListener("click",function(){

// }) ){
//     k=j/o1;
// }

// else if (document.getElementById("opt2").addEventListener("click",function(){

// }) ){
//      k=j/o2;
// }

// else if (document.getElementById("opt3").addEventListener("click",function(){

// }) ){
//      k=j/o3;
// }

// document.addEventListener("DOMContentLoaded",function(){
//     console.log("ready")
//     document.getElementById("mip").addEventListener("click", function() {
        
                
       

       

//      })
//         console.log("value of k is ",k);
       
// })
// document.body.appendChild("value of k is "+k)
function test(){
    console.log("fxn working");
    document.getElementById("output").innerHTML="You to pay "+k+" in a Installment";
    console.log("svsfv "+k);
   
}
yess 