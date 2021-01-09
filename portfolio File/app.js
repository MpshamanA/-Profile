//スクロール時のアクション
window.addEventListener("scroll", function () {
    //idを取得
    let AboutMe = document.getElementById('AboutMe');
    let topimg = document.getElementById('topimg');
    let test = document.getElementsByClassName('skillItem');
    //位置を取得
    let topimgRect = topimg.getBoundingClientRect();
    let AboutRect = AboutMe.getBoundingClientRect();

    let topimgRectY = pageYOffset + topimgRect.bottom;
    let AboutRectY = pageYOffset + AboutRect.top;
    //topからの距離を取得
    let scroll = document.documentElement.scrollTop;
    //About Me要素-400の位置にきた時に発火
    if (scroll > AboutRectY - 400) {
        document.querySelector(".About img").classList.add("shoIn");
        document.querySelector(".About h2").classList.add("AboutH2Action");
        document.querySelector(".About p").classList.add("AboutpAction");
    } else {
        //document.querySelector(".About img").classList.remove("shoIn");
        document.querySelector("header").classList.remove("headerColor");
    }

    if (scroll > topimgRectY - 60) {
        document.querySelector("header").classList.add("headerColor");
    } else {
        document.querySelector("header").classList.remove("headerColor");
    }

    if (scroll > topimgRectY - 280) {
        document.querySelector(".Introduction").classList.add("IntroductionAction");
    }

    if (scroll > topimgRectY + 300) {
        for (let i = 0; i < test.length; i++) {
            test[i].classList.add("boderShadow");
        }
    }
});