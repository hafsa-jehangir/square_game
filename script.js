let s1 = document.getElementById("1");
let s2 = document.getElementById("2");
let s3 = document.getElementById("3");
let s4 = document.getElementById("4");
s1.addEventListener("mouseenter",function (){
    let rand = Math.floor(Math.random()*100);
    s1.innerHTML =`<h1>${rand}</h1>`;
});
s1.addEventListener("mouseleave",function (){
    s1.innerHTML ="<h1>1</h1>";
});
clr = "red";
s2.addEventListener("mouseenter",function (){
    if(clr=="red"){
        s2.style.backgroundColor = "red";
        clr = "green";
    }else{
        s2.style.backgroundColor = "green";
        clr = "red";
    }
});
s2.addEventListener("mouseleave",function (){
    s2.innerHTML ="<h1>2</h1>";
    s2.style.backgroundColor="white";
    
});
s3.addEventListener("mouseenter",function (){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
});
s3.addEventListener("mouseleave",function (){
    s3.innerHTML ="<h1>3</h1>";
    s3.style.backgroundColor="white";
});
s4.addEventListener("click",function (){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(${r2},255,255)`;
    s2.style.backgroundColor=`rgb(255,${r2},255)`;
    s3.style.backgroundColor=`rgb(255,255,${r3})`;
});
s4.addEventListener("mouseleave",function (){
    s4.innerHTML ="<h1>4</h1>";
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
});

