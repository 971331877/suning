{
    let items=document.querySelectorAll('.banner2-d1 li');
    let dian=document.querySelectorAll(".banner-yuan1");
    let bannerer=document.querySelector(".banner2-d1");
    let you=document.querySelector(".banner2> .btn-right");
    let zuo=document.querySelector(".banner2> .btn-left");
    // console.log(items);
    // console.log(dian);
   // console.log(bannerer,you,zuo,dian)
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
// 返回顶部
{
    let totop=document.querySelector(".aside p");
    totop.onclick=function () {
        //     document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let speend=st*30/500;
        let t= setInterval(function () {
            st-=speend;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;

        },30)
    }
}
//
{
    let topbanr=document.querySelector(".dh");
    console.log(topbanr);
    let letbars=document.querySelector(".aside");
    // let floors=document.querySelectorAll(".floor");
    let flag=true;
    window.onscroll=function () {
        if(flag){
        let st= document.documentElement.scrollTop;
        if(st>1300){
            topbanr.style.display="block";
            // topbanr.style.top="0"
        }else{
            topbanr.style.display="none"
            // topbanr.style.top="-40"
        }
        if(st>2300){
            letbars.style.display="block";
        }else{
            letbars.style.display="none";
        }

        floors.forEach(function (ele,index) {
            if(st>ele.offsetTop-260){
                for(let i=0;i<btns.length;i++){
                    btns[i].classList.remove("active");
                }
                btns[index].classList.add("active");
            }

        })
    }
    }




    //  跳转楼层
    let btns=document.querySelectorAll(".aside li");
    console.log(btns);
    let floors=document.querySelectorAll(".zhengti .floor");
    console.log(floors)
    btns.forEach(function (ele,index) {
        ele.onclick=function () {
            flag=false;
            console.log(1)
            let ot=floors[index].offsetTop;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)*30/300;
            let time=0;
            let t=setInterval(function () {
                now+=speed;
                time+=30;
                if(time==300){
                    clearInterval(t);
                    now=ot;
                    flag=true;
                }
                document.documentElement.scrollTop=now;
            },30)
            // document.documentElement.scrollTop=ot;
        }
    });
}
