const fm=document.querySelector(".box");
fm.style.display="none";

function myFunction(){
    
    const btn=document.querySelectorAll(".btn");

    if(fm.style.display === "none"){
        fm.style.display="block";
    }
    else{
        fm.style.display="none";
    }
}

function validate(){
    const m=document.getElementById("m").value;
    const m1=document.getElementById("m1").value;
    const m2=document.getElementById("m2").value;
    if(m1=="",m=="",m2==""){
        alert("Please fill all the fields");
    }


}