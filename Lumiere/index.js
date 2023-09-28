let menuState = 0;
function checkMenu() {
    if (menuState == 0) {
        menuState = 1;
        document.getElementById("side").style.transform = "translateX(0)";
        document.getElementById("black").style.display = "flex";
        document.body.style.overflowY = "hidden";
    }
    else if (menuState == 1) {
        menuState = 0;
        if (innerWidth >= 1024) {
            document.getElementById("side").style.transform = "translateX(-29vw)";
        }
        else {
            document.getElementById("side").style.transform = "translateX(-70vw)";
        }
        document.getElementById("black").style.display = "none";
        document.body.style.overflowY = "scroll";
    }
}

function curNews(curNewsParam) {
    const newsScroll = document.getElementById("newsScroll");
    console.log(newsScroll.scrollWidth);
    if (curNewsParam == 1) {
        newsScroll.scrollLeft = 0 / 5 * newsScroll.scrollWidth;
    }
    else if (curNewsParam == 2) {
        newsScroll.scrollLeft = 1 / 5 * newsScroll.scrollWidth;
    }
    else if (curNewsParam == 3) {
        newsScroll.scrollLeft = 2 / 5 * newsScroll.scrollWidth;
    }
    else if (curNewsParam == 4) {
        newsScroll.scrollLeft = 3 / 5 * newsScroll.scrollWidth;
    }
    else if (curNewsParam == 5) {
        newsScroll.scrollLeft = 4 / 5 * newsScroll.scrollWidth;
    }
    let index = curNewsParam;
    const newsDot = document.getElementsByClassName("newsDot");
    console.log(newsDot[0].className);
    const element = document.getElementById("card" + curNewsParam);
    // element.scrollIntoView();
    for (let i = 0; i < newsDot.length; i++) {
        newsDot[i].className = newsDot[i].className.replace(" newsDotActive", "");
    }
    newsDot[index - 1].className += " newsDotActive";
}

const sideProductState = [0, 0, 0];
function expandProduct(productIndex) {
    if (productIndex == 1 && sideProductState[0] == 0) {
        document.getElementById("pc1").style.height = "260px"
        sideProductState[0] = 1;
        document.getElementById("pc2").style.height = "60px"
        sideProductState[1] = 0;
        document.getElementById("pc3").style.height = "60px"
        sideProductState[2] = 0;
    }
    else if (productIndex == 1 && sideProductState[0] == 1) {
        document.getElementById("pc1").style.height = "60px"
        sideProductState[0] = 0;
    }
    else if (productIndex == 2 && sideProductState[1] == 0) {
        document.getElementById("pc2").style.height = "260px"
        sideProductState[1] = 1;
        document.getElementById("pc1").style.height = "60px"
        sideProductState[0] = 0;
        document.getElementById("pc3").style.height = "60px"
        sideProductState[2] = 0;
    }
    else if (productIndex == 2 && sideProductState[1] == 1) {
        document.getElementById("pc2").style.height = "60px"
        sideProductState[1] = 0;
    }
    else if (productIndex == 3 && sideProductState[2] == 0) {
        document.getElementById("pc3").style.height = "260px"
        sideProductState[2] = 1;
        document.getElementById("pc1").style.height = "60px"
        sideProductState[0] = 0;
        document.getElementById("pc2").style.height = "60px"
        sideProductState[1] = 0;
    }
    else if (productIndex == 3 && sideProductState[2] == 1) {
        document.getElementById("pc3").style.height = "60px"
        sideProductState[2] = 0;
    }
}