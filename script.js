let abc=document.querySelector("h5");
let xyz=document.querySelector("#add");

let temp=0;
xyz.addEventListener('click',function(){
    if(temp==0){
        abc.innerHTML="following";
        abc.style.fontWeight=600;
        xyz.innerHTML="unfollow";
        temp=1;
    }else{
        abc.innerHTML="suggested for you";
        abc.style.fontWeight=600;
        xyz.innerHTML="follow";
        temp=0;
    }
});