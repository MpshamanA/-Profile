//import { images } from "./image";
 let images = [
    {
        "path": "img/SQL.png",
        "skill": "SQL",
        "caption": "基本設計、詳細設計、製造、単体テスト、内部結合試験を実務で経験してます。WHERE句で使う好きな演算子はLIKEです。"
    },
    { 
        "path": "img/swift.png",
        "skill": "SWIFT",
        "caption": "UIKitを使いIT用語クイズアプリを作成中。IT用語集という要素も追加し未経験者採用をした企業が最初の課題として使えるように開発する予定です。"
    },
    {
        "path": "img/WEBページ.jpeg",
        "skill": "WEB",
        "caption": "HTML5,CSS3,JavaScriptを使いこのページは作成しています。WordPressを使ってBlogサイトも公開中です。SEOについての理解はしてますがまだまだ学習中です。"
    }

];
//Vueで取得
let app = new Vue({
    el:'#skill',
    data:{
        Photos:[]
    },
    created: function(){
        this.Photos = images;
    }
});

/*  javascriptで取得

    for (let i = 0; i < images.length; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', images[i].path);

    let caption = document.createElement('div');
    caption.className = 'skill-type';
    caption.innerHTML = '<h4>' + images[i].skill + '</h4>' + '<p>' + images[i].caption + '</p>';

    let div = document.createElement('div');
    div.className = 'skillItem';
    div.appendChild(img);
    div.appendChild(caption);

    let skill = document.getElementById('skill');
    skill.className = 'skill';
    skill.appendChild(div);
}; */

//スクロール時のアクション
window.addEventListener("scroll", function () {
    //idを取得
    let AboutMe = document.getElementById('AboutMe');
    let topimg = document.getElementById('topimg');
    let skilList = document.getElementsByClassName('skillItem');
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
        for (let i = 0; i < skilList.length; i++) {
            skilList[i].classList.add("boderShadow");
        }
    }
});