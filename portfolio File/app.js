//スクロール時のアクション
window.addEventListener("scroll", function () {
    //idを取得
    let sho = document.getElementById('sho');
    let About = document.getElementById('About Me');
    let topimg = document.getElementById('topimg');
    //位置を取得
    let topimgRect = topimg.getBoundingClientRect();
    let AboutRect = About.getBoundingClientRect();
    
    let topimgRectY = pageYOffset + topimgRect.bottom;
    let AboutRectY = pageYOffset + AboutRect.top;
    //topからの距離を取得
    let scroll = document.documentElement.scrollTop;
    //About Me要素-400の位置にきた時に発火
    if (scroll > AboutRectY - 400) {
        document.querySelector(".About img").classList.add("shoIn");
        sho.style.visibility = 'visible';
    } else {
        sho.style.visibility = 'hidden';
        document.querySelector(".About img").classList.remove("shoIn");
        document.querySelector("header").classList.remove("headerColor");
    }

    if(scroll > topimgRectY - 100){
        document.querySelector("header").classList.add("headerColor");
    }else{
        document.querySelector("header").classList.remove("headerColor");

    }
});