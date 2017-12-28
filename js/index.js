{
    let items=document.querySelectorAll('.banner2-d1 li');
    let dian=document.querySelectorAll(".banner-yuan1");
    let bannerer=document.querySelector(".banner2-d1");
    let you=document.querySelector(".banner2> .btn-right");
    let zuo=document.querySelector(".banner2> .btn-left");
    // console.log(items);
    // console.log(dian);
    console.log(bannerer,you,zuo,dian)
    dian.forEach(function (ele,index) {
        ele.onclick=function () {
            console.log(3)
            for(let i=0;i<items.length;i++){
                dian[i].classList.remove("active");
                items[i].classList.remove("active");
            }
            // console.log(this)
            this.classList.add("active");
            items[index].classList.add("active");
            n =index;
        };
    });
    //
    let n=0;
    function bannerFn(dir="r") {

        if(dir==="r"){
            n++;
        }else if (dir==="l"){
            n--;
        }
        if(n===items.length){
            n=0;
        }
        if(n===-1){
            n=items.length-1;
        }
        for(let i=0;i<items.length;i++){
            dian[i].classList.remove("active");
            items[i].classList.remove("active");
        }
        dian[n].classList.add("active");
        items[n].classList.add("active");
    }
    let st=setInterval(bannerFn,2000);
    bannerer.onmouseover=function () {
        clearInterval(st);
    }
    bannerer.onmouseout=function () {
        st=setInterval(bannerFn,2000);
    }
    let flag=true;

    you.onclick=function () {
        console.log(1)
        if(flag){
            flag=false;
            bannerFn();
        }
    }
    zuo.onclick=function () {
        console.log(2)
        if(flag) {
            flag=false;
            bannerFn("l");
        }
    }
    items.forEach(function (ele,index) {
        ele.addEventListener("transitionend",
            function(){
                flag=true;
            })
    })
}
