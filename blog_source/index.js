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
nightState = 0;
const nightFunc = {
    toogleNight: function () {
        if (nightState == 0) {
            const fader = document.getElementsByClassName("fader");
            const faderLength = document.getElementsByClassName("fader").length;
            console.log("night mode 1");
            console.log("");
            console.log(fader);
            document.getElementById("part1").style.backgroundColor = "black";
            document.getElementById("part2").style.backgroundColor = "black";
            document.getElementById("part1").style.color = "white";
            document.getElementById("part2").style.color = "white";

            for (let i = 0; i < faderLength; i++) {
                fader[i].style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))";
            }

            // fader[0].style.backgroundColor = "red";

            document.getElementById("toBlack").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))";

            document.getElementById("nightBtn").style.backgroundColor = "white";
            document.getElementById("nightBtnSub").style.right = "3px";
            document.getElementById("nightBtnSub").style.backgroundColor = "black";

            document.getElementById("mobileNightBtn").style.backgroundColor = "white";
            document.getElementById("mobileNightBtnSub").style.right = "3px";
            document.getElementById("mobileNightBtnSub").style.backgroundColor = "black";

            nightState = 1;
            setTimeout(menuFunc.toogleCloseMenu, 500);
        }
        else if (nightState == 1) {
            const fader = document.getElementsByClassName("fader");
            const faderLength = document.getElementsByClassName("fader").length;
            console.log("night mode 0");
            document.getElementById("part1").style.backgroundColor = "white";
            document.getElementById("part2").style.backgroundColor = "white";
            document.getElementById("part1").style.color = "black";
            document.getElementById("part2").style.color = "black";

            for (let i = 0; i < faderLength; i++) {
                fader[i].style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1))";
            }

            document.getElementById("toBlack").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 1))";

            document.getElementById("nightBtn").style.backgroundColor = "black";
            document.getElementById("nightBtnSub").style.right = "20px";
            document.getElementById("nightBtnSub").style.backgroundColor = "white";

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
        document.getElementById("part1").style.backgroundColor = "white";
        document.getElementById("part2").style.backgroundColor = "white";
        document.getElementById("part1").style.color = "black";
        document.getElementById("part2").style.color = "black";

        let fader = document.getElementsByClassName("fader");
        for (let i = 0; i < fader.length; i++) {
            fader[i].style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1))";
        }

        document.getElementById("toBlack").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 1))";

        document.getElementById("nightBtn").style.backgroundColor = "black";
        document.getElementById("nightBtnSub").style.right = "20px";
        document.getElementById("nightBtnSub").style.backgroundColor = "white";

        document.getElementById("mobileNightBtn").style.backgroundColor = "black";
        document.getElementById("mobileNightBtnSub").style.right = "20px";
        document.getElementById("mobileNightBtnSub").style.backgroundColor = "white";

        nightState = 0;
        return nightFunc.toogleNight;
    }
    else if (nightState == 1) {
        document.getElementById("part1").style.backgroundColor = "black";
        document.getElementById("part2").style.backgroundColor = "black";
        document.getElementById("part1").style.color = "white";
        document.getElementById("part2").style.color = "white";

        let fader = document.getElementsByClassName("fader");
        for (let i = 0; i < fader.length; i++) {
            fader[i].style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))";
        }

        document.getElementById("toBlack").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))";

        document.getElementById("nightBtn").style.backgroundColor = "white";
        document.getElementById("nightBtnSub").style.right = "3px";
        document.getElementById("nightBtnSub").style.backgroundColor = "black";

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
    if (pos > 400) {
        document.getElementById("topBtn").style.opacity = 1;
    }
    else {
        document.getElementById("topBtn").style.opacity = 0;
    }

    if (window.innerWidth < 768) {
        if (pos >= 1600) {
            document.getElementById("card-container").style.opacity = "1";
            document.getElementById("checkPoint1").style.opacity = "1";
        }
        else {
            document.getElementById("card-container").style.opacity = "0";
            document.getElementById("checkPoint1").style.opacity = "0";

        }

        if (pos >= 3000) {
            document.getElementById("part2Content").style.opacity = "1";
            document.getElementById("checkPoint2").style.opacity = "1";
        }
        else {
            document.getElementById("part2Content").style.opacity = "0";
            document.getElementById("checkPoint2").style.opacity = "0";

        }
    }
    else {
        document.getElementById("card-container").style.opacity = "1";
        document.getElementById("checkPoint1").style.opacity = "1";
        document.getElementById("part2Content").style.opacity = "1";
        document.getElementById("checkPoint2").style.opacity = "1";
    }
}