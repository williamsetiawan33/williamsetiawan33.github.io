let state = 1;
const menuFunc = {
    toogleMenu: function () {
        if (state == 0) {
            document.getElementById("mobilenav").style.height = "300px";
            document.getElementById("menuLine1").style.opacity = "0";
            document.getElementById("menuLine1").style.transform = "rotate(45deg)";
            document.getElementById("menuLine2").style.transform = "rotate(45deg)";
            document.getElementById("menuLine3").style.transform = "rotate(-45deg)";
            document.getElementById("menuLine3").style.opacity = "0";
            document.getElementById("menuLine4").style.opacity = "1";
            state = 1;
        }
        else if (state == 1) {
            document.getElementById("menuLine1").style.transform = "rotate(0deg)";
            document.getElementById("menuLine2").style.transform = "rotate(0deg)";
            document.getElementById("menuLine3").style.transform = "rotate(0deg)";
            document.getElementById("mobilenav").style.height = "60px";
            document.getElementById("menuLine1").style.opacity = "1";
            document.getElementById("menuLine3").style.opacity = "1";
            document.getElementById("menuLine4").style.opacity = "0";
            state = 0;
        }
    },
    toogleCloseMenu: function () {
        document.getElementById("menuLine1").style.transform = "rotate(0deg)";
        document.getElementById("menuLine2").style.transform = "rotate(0deg)";
        document.getElementById("menuLine3").style.transform = "rotate(0deg)";
        document.getElementById("mobilenav").style.height = "60px";
        document.getElementById("menuLine1").style.opacity = "1";
        document.getElementById("menuLine3").style.opacity = "1";
        document.getElementById("menuLine4").style.opacity = "0";
        state = 0;
    }
}
const toogleMenu = (function toogleMenu() {
    if (state == 0) {
        document.getElementById("mobilenav").style.height = "300px";
        document.getElementById("menuLine1").style.opacity = "0";
        document.getElementById("menuLine1").style.transform = "rotate(45deg)";
        document.getElementById("menuLine2").style.transform = "rotate(45deg)";
        document.getElementById("menuLine3").style.transform = "rotate(-45deg)";
        document.getElementById("menuLine3").style.opacity = "0";
        document.getElementById("menuLine4").style.opacity = "1";
        state = 1;
        return menuFunc.toogleMenu;
    }
    else if (state == 1) {
        document.getElementById("menuLine1").style.transform = "rotate(0deg)";
        document.getElementById("menuLine2").style.transform = "rotate(0deg)";
        document.getElementById("menuLine3").style.transform = "rotate(0deg)";
        document.getElementById("mobilenav").style.height = "60px";
        document.getElementById("menuLine1").style.opacity = "1";
        document.getElementById("menuLine3").style.opacity = "1";
        document.getElementById("menuLine4").style.opacity = "0";
        state = 0;
        return menuFunc.toogleMenu;
    }
})()

// rumit yak, padahal bisa dibikin simpel tinggal panggil toogleMenu sekali aja, wkwkwk
// tapi ini buat latihan ngebikin objek dan ngepakai js self invoke

// url opener function
function openLink(url) {
    if (url == "ig") {
        window.location.href = "https://www.instagram.com/williamsetiawan33/";
    }
    else if (url == "yt") {
        window.location.href = "https://www.youtube.com/channel/UCMbJrVWPEfuwDZLLAmOCptQ";
    }
    else if (url == "git") {
        window.location.href = "https://github.com/lilymalisa";
    }
}

// night mode function
nightState = 1; // nightState is changed to 1, because night function requires elements that not fully loaded when there is an ajax mechanism
const postTab = document.getElementsByClassName("postTab");

const nightFunc = {
    toogleNight: function () {
        if (nightState == 0) {
            console.log("night mode 1");

            document.getElementById("postContainer").style.backgroundColor = "rgb(71, 65, 74)";
            document.body.style.backgroundColor = "black";
            document.getElementById("postTitle").style.color = "white";
            document.getElementById("postDate").style.color = "white";
            document.getElementById("postContent").style.color = "white";
            for (let i = 0; i < postTab.length; i++) {
                postTab[i].style.color = "rgb(71, 65, 74)";
            }

            document.getElementById("mobileNightBtn").style.backgroundColor = "white";
            document.getElementById("mobileNightBtnSub").style.right = "3px";
            document.getElementById("mobileNightBtnSub").style.backgroundColor = "black";

            nightState = 1;
            setTimeout(menuFunc.toogleCloseMenu, 500);
        }
        else if (nightState == 1) {
            console.log("night mode 0");

            document.getElementById("postContainer").style.backgroundColor = "rgb(239, 239, 239)";
            document.body.style.backgroundColor = "white";
            document.getElementById("postTitle").style.color = "black";
            document.getElementById("postDate").style.color = "black";
            document.getElementById("postContent").style.color = "black";
            for (let i = 0; i < postTab.length; i++) {
                postTab[i].style.color = "rgb(239, 239, 239)";
            }

            document.getElementById("mobileNightBtn").style.backgroundColor = "black";
            document.getElementById("mobileNightBtnSub").style.right = "20px";
            document.getElementById("mobileNightBtnSub").style.backgroundColor = "white";

            nightState = 0;
            setTimeout(menuFunc.toogleCloseMenu, 500);
        }
    }
}

const toogleNight = (function toogleNight() {
    if (nightState == 0) {
        document.getElementById("postContainer").style.backgroundColor = "rgb(239, 239, 239)";
        document.body.style.backgroundColor = "white";
        document.getElementById("postTitle").style.color = "black";
        document.getElementById("postDate").style.color = "black";
        document.getElementById("postContent").style.color = "black";
        for (let i = 0; i < postTab.length; i++) {
            postTab[i].style.color = "rgb(239, 239, 239)";
        }

        document.getElementById("mobileNightBtn").style.backgroundColor = "black";
        document.getElementById("mobileNightBtnSub").style.right = "20px";
        document.getElementById("mobileNightBtnSub").style.backgroundColor = "white";

        nightState = 0;
        return nightFunc.toogleNight;
    }
    else if (nightState == 1) {
        document.getElementById("postContainer").style.backgroundColor = "rgb(71, 65, 74)";
        document.body.style.backgroundColor = "black";
        document.getElementById("postTitle").style.color = "white";
        document.getElementById("postDate").style.color = "white";
        document.getElementById("postContent").style.color = "white";
        for (let i = 0; i < postTab.length; i++) {
            postTab[i].style.color = "rgb(71, 65, 74)";
        }

        document.getElementById("mobileNightBtn").style.backgroundColor = "white";
        document.getElementById("mobileNightBtnSub").style.right = "3px";
        document.getElementById("mobileNightBtnSub").style.backgroundColor = "black";

        nightState = 1;
        return nightFunc.toogleNight;
    }
})()

// scroll position function
function scrollCheck() {
    let pos = window.scrollY;
    console.log(pos);
    if(pos > 400) {
        document.getElementById("topBtn").style.opacity = 1;
    }
    else {
        document.getElementById("topBtn").style.opacity = 0;
    }
}

// data api handling
const queryString = window.location.search;
const param = new URLSearchParams(queryString);
const postParam = param.get("post");
if (isNaN(postParam)) {
    window.location.href = "404.html";
}

console.log(postParam);
console.log("");
const ajax = new XMLHttpRequest();
ajax.onload = function () {
    let data = JSON.parse(this.responseText);
    if (data == null) {
        window.location.href = "404.html";
    }
    console.log(data);
    document.getElementById("navTitle").innerHTML = "Cerita portfolio | " + data.title;
    document.getElementById("postTitle").innerHTML = data.title;
    document.getElementById("postDate").innerHTML = data.date + " | " + data.tag;
    document.getElementById("postContent").innerHTML = data.content;
    toogleNight();
}
ajax.open("GET", "http://localhost/ajax/ajax.php" + "?post=" + postParam);
ajax.send();