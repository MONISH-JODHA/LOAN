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
    
}