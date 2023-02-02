if(document.getElementById("btn-random")){
    const btnRandom = document.getElementById("btn-random");
    btnRandom.addEventListener("click",function(){
        window.location = "/result.html"; 
    });
}

function randomMenu (){
    //데이터
    var menuValue =
    [
        {name:"백반",img:"/images/bakban.png"},
        {name:"잔치국수",img:"/images/noodles-janchi.jpg"},
        {name:"피자",img:"/images/pizza.jpg"},
        {name:"햄버거",img:"/images/hamburger.jpg"},
        {name:"짜장면",img:"/images/zzazangmyeon.jpg"},
        {name:"칼국수",img:"/images/noodles-kal.jpg"},
        {name:"떡볶이",img:"/images/tteokbokki.jpg"},
        {name:"김밥",img:"/images/kimbab.jpg"},
        {name:"돈까스",img:"/images/porkcutlet.jpg"},
        {name:"부대찌개",img:"/images/budezzige.jpg"},
        {name:"샐러드",img:"/images/salad.jpg"},
        {name:"쌀국수",img:"/images/rice-noodles.jpg"},
        {name:"초밥",img:"/images/sushi.jpg"},
        {name:"샌드위치",img:"/images/sandwich.jpg"},
        {name:"라면",img:"/images/ramyeon.jpg"},
        {name:"제육",img:"/images/jeyukbokkeum.jpg"},
    ];

    var shopList = [
        {name:"일번지식당",link:"http://kko.to/0Er-9QITd5", key:["백반","칼국수","잔치국수","제육"]},
        {name:"씬머이",link:"http://kko.to/b_qros1pBj",key:["쌀국수"]},
        {name:"고소미부엌",link:"http://kko.to/AukTyBJyL8",key:["김밥","떡볶이"]},
        {name:"샐러디 태릉입구역점",link:"http://kko.to/5BqBxKK0ZT",key:["샐러드","샌드위치"]},
        {name:"수카츠",link:"http://kko.to/fj4x_MiMN9",key:["돈까스"]},
        {name:"맘스터치 태릉입구역점",link:"http://kko.to/Guy6XZrhVm",key:["햄버거"]},
        {name:"고윤김밥",link:"http://kko.to/FlpF3vnmSp",key:["김밥","돈까스","라면","제육"]},
        {name:"이츠초밥",link:"http://kko.to/axNnJqN0Lt",key:["초밥"]},
        {name:"국수잔치",link:"http://kko.to/axNnJqN0Lt",key:["잔치국수","제육"]},
    ]




    // 데이터의 갯수만큼 난수를 발생
    //Math.floor() = 소숫점을 처리
    let randomValue = Math.floor(Math.random() * menuValue.length);
    console.log();
    var menuName = document.querySelector(".result__menu-name");
    var img = document.querySelector(".result__img");
    var listUl = document.querySelector(".shop-list__ul");

    menuName.innerText = menuValue[randomValue].name;

    //추가적인 정보를 뿌린다
    if(menuName.innerText == menuValue[randomValue].name){
        img.innerHTML = "<img src='" + menuValue[randomValue].img + "'>";
    }

    //데이터 배열을 점포별로 저장하고
    //그 배열의 키워드 값과 메뉴가 가진 키워드 값이 일치하면
    //일치되는 모든 리스트를 불러온다
    for(i=0; i<shopList.length; i++){
        if(shopList[i].key.includes(menuName.innerText)){
            var list = document.createElement("li");
            list.classList.add("shop-list__li");
            list.innerHTML = 
            `<div class="shop-info">
                <p class="shop-info__name">${shopList[i].name}</p>
                <p class="shop-info__link"><a href="${shopList[i].link}" target="blank">${shopList[i].link}</a></p>
            </div>`;
            listUl.append(list);
        }
    }
}
randomMenu();

if(document.getElementById("btn-reload")){
    const btnRandom = document.getElementById("btn-reload");
    btnRandom.addEventListener("click",function(){
        window.location.reload();
    });
}

//이전에 나왔던 결과는 다음에 나오지 않도록 처리하면 좋을 듯 함