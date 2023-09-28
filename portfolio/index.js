var partcount = 1;
var part2 = document.getElementById("part2");
var part3 = document.querySelector(".part3");
var headpart = document.getElementById("headpart");
var profiletitle = document.getElementById("profiletitle");
var profiledes = document.getElementById("profiledes");
var skillstitle = document.getElementById("skillstitle");
var skillsdes = document.getElementById("skillsdes");
var projecttitle = document.getElementById("projecttitle");
var projectcard1 = document.getElementById("projectcard1");
var projectcard2 = document.getElementById("projectcard2");
var projectcard3 = document.getElementById("projectcard3");
var projectcard4 = document.getElementById("projectcard4");
var projectcard5 = document.getElementById("projectcard5");
var projectcard6 = document.getElementById("projectcard6");
var projectcard7 = document.getElementById("projectcard7");

function scrollanim() {
    var profiledistance1 = profiletitle.getBoundingClientRect().top;
    var profiledistance2 = profiledes.getBoundingClientRect().top;
    var skillsdistance1 = skillstitle.getBoundingClientRect().top;
    var skillsdistance2 = skillsdes.getBoundingClientRect().top;
    var projectdistance1 = projecttitle.getBoundingClientRect().top;
    var projectdistance2 = projectcard1.getBoundingClientRect().top;
    var projectdistance3 = projectcard2.getBoundingClientRect().top;
    var projectdistance4 = projectcard3.getBoundingClientRect().top;
    var projectdistance5 = projectcard4.getBoundingClientRect().top;
    var projectdistance6 = projectcard5.getBoundingClientRect().top;
    var projectdistance7 = projectcard6.getBoundingClientRect().top;
    var projectdistance8 = projectcard7.getBoundingClientRect().top;
    if (profiledistance1 < innerHeight) {
        profiletitle.classList.add("anim1");
    }
    else {
        profiletitle.classList.remove("anim1");
    }

    if (profiledistance2 < innerHeight) {
        profiledes.classList.add("anim2");
    }
    else {
        profiledes.classList.remove("anim2");
    }

    if (skillsdistance1 < innerHeight) {
        skillstitle.classList.add("anim1");
    }
    else {
        skillstitle.classList.remove("anim1");
    }

    if (skillsdistance2 < innerHeight) {
        skillsdes.classList.add("anim2");
    }
    else {
        skillsdes.classList.remove("anim2");
    }

    if (projectdistance1 < innerHeight) {
        projecttitle.classList.add("anim3");
    }
    else {
        projecttitle.classList.remove("anim3");
    }

    if (projectdistance2 < innerHeight) {
        projectcard1.classList.add("anim3");
    }
    else {
        projectcard1.classList.remove("anim3");
    }

    if (projectdistance3 < innerHeight) {
        projectcard2.classList.add("anim4");
    }
    else {
        projectcard2.classList.remove("anim4");
    }

    if (projectdistance4 < innerHeight) {
        projectcard3.classList.add("anim5");
    }
    else {
        projectcard3.classList.remove("anim5");
    }

    if (projectdistance5 < innerHeight) {
        projectcard4.classList.add("anim6");
    }
    else {
        projectcard4.classList.remove("anim6");
    }

    if (projectdistance6 < innerHeight) {
        projectcard5.classList.add("anim7");
    }
    else {
        projectcard5.classList.remove("anim7");
    }

    if (projectdistance7 < innerHeight) {
        projectcard6.classList.add("anim8");
    }
    else {
        projectcard6.classList.remove("anim8");
    }

    if (projectdistance8 < innerHeight) {
        projectcard7.classList.add("anim9");
    }
    else {
        projectcard7.classList.remove("anim9");
    }
}
function btmscroll() {
    setTimeout(scrollanim, 500);
    partcount++;
    if (partcount == 2) {
        part2.scrollIntoView();
    }
    else if (partcount == 3) {
        part3.scrollIntoView();
    }
    else if (partcount == 4) {
        part4.scrollIntoView();
    }
    else if (partcount == 5) {
        part4.scrollIntoView();
        partcount = 4;
    }
    console.log(partcount);
}
function topscroll() {
    setTimeout(scrollanim, 500);
    partcount--;
    if (partcount == 3) {
        part3.scrollIntoView();
    }
    else if (partcount == 2) {
        part2.scrollIntoView();
    }
    else if (partcount == 1) {
        part1.scrollIntoView();
    }
    else if (partcount == 0) {
        partcount = 1;
        headpart.scrollIntoView();
    }
    console.log(partcount);
}

// fungsionalitas JSON dengan AJAX
var web_title = document.getElementById("web_title");
var web_slogan1 = document.getElementById("web_slogan1");
var web_slogan2 = document.getElementById("web_slogan2");
var web_slogan3 = document.getElementById("web_slogan3");
var project1 = document.getElementById("project1");
var project1img = document.getElementById("project1_img");
var project2 = document.getElementById("project2");
var project2img = document.getElementById("project2_img");
var project3 = document.getElementById("project3");
var project3img = document.getElementById("project3_img");
var project4 = document.getElementById("project4");
var project4img = document.getElementById("project4_img");
var project5 = document.getElementById("project5");
var project5img = document.getElementById("project5_img");
var project6 = document.getElementById("project6");
var project6img = document.getElementById("project6_img");
var project7 = document.getElementById("project7");
var contact1 = document.getElementById("contact1");
var contact2 = document.getElementById("contact2");
var social1 = document.getElementById("social1");
var social1_icon = document.getElementById("social1_icon");
var social2 = document.getElementById("social2");
var social2_icon = document.getElementById("social2_icon");
var social3 = document.getElementById("social3");
var social3_icon = document.getElementById("social3_icon");
// dibawah ini adalah AJAX (tidak dipakai)
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         var data = JSON.parse(xhttp.responseText);
//         // bagian judul web
//         web_title.innerHTML = data.title;
//         // bagian slogan web
//         web_slogan1.innerHTML = data.slogan[0];
//         web_slogan2.innerHTML = data.slogan[1];
//         web_slogan3.innerHTML = data.slogan[2];
//         //bagian profile dan skills
//         // variabel untuk profile dan skills ada diatas
//         profiletitle.innerHTML = data.profile;
//         profiledes.innerHTML = data.profile_content;
//         skillstitle.innerHTML = data.skills;
//         skillsdes.innerHTML = data.skills_content;
//         //bagian projek
//         projecttitle.innerHTML = data.projects;

//         project1.innerHTML = data.project1[1];
//         project1img.attributes.src = data.project1[0];

//         project2.innerHTML = data.project2[1];
//         project2img.attributes.src = data.project2[0];

//         project3.innerHTML = data.project3[1];
//         project3img.attributes.src = data.project3[0];

//         project4.innerHTML = data.project4[1];
//         project4img.attributes.src = data.project4[0];

//         project5.innerHTML = data.project5[1];
//         project5img.attributes.src = data.project5[0];

//         project6.innerHTML = data.project6[1];
//         project6img.attributes.src = data.project6[0];

//         project7.innerHTML = data.project7;
//         //bagian kontak
//         contact1.innerHTML = data.contact1;
//         contact2.innerHTML = data.contact2;
//         social1.attributes.href = data.social1;
//         social1_icon.attributes.src = data.social1_icon;
//         social2.attributes.href = data.social2;
//         social2_icon.attributes.src = data.social2_icon;
//         social3.attributes.href = data.social3;
//         social3_icon.attributes.src = data.social3_icon;
//         console.log(data);
//     }
// };
// xhttp.open("GET", "webdata.json", true);
// xhttp.send();
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/judul.php", ajaxfunc1);
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/minat.php", ajaxfunc2);
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/profil.php", ajaxfunc3);
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/ketrampilan.php", ajaxfunc4);
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/projek/projek1.php", ajaxfunc5);
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/projek/projek2.php", ajaxfunc6);
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/projek/projek3.php", ajaxfunc7);
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/projek/projek4.php", ajaxfunc8);
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/projek/projek5.php", ajaxfunc9);
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/projek/projek6.php", ajaxfunc10);
ajaxgeturl("https://malisamalisa33.000webhostapp.com/web_data/projek/projek7.php", ajaxfunc11);

function ajaxgeturl(url, func) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =
        function () {
            if (this.readyState == 4 && this.status == 200) {
                func(this);
            }
        }
    xhttp.open("GET", url, true);
    xhttp.send();
}

function ajaxfunc1(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    web_title.innerHTML = data.judul;
    console.log(data);
}
function ajaxfunc2(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    web_slogan1.innerHTML = data.minat[0];
    web_slogan2.innerHTML = data.minat[1];
    web_slogan3.innerHTML = data.minat[2];
    console.log(data);
}
function ajaxfunc3(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    profiletitle.innerHTML = data.profil;
    profiledes.innerHTML = data.profil_des;
    console.log(data);
}
function ajaxfunc4(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    skillstitle.innerHTML = data.ketrampilan;
    skillsdes.innerHTML = data.ketrampilan_des;
    console.log(data);
}
function ajaxfunc5(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    project1.innerHTML = data.nama;
    project1img.attributes.src = data.gambar;
    console.log(data);
}
function ajaxfunc6(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    project2.innerHTML = data.nama;
    project2img.attributes.src = data.gambar;
    console.log(data);
}
function ajaxfunc7(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    project3.innerHTML = data.nama;
    project3img.attributes.src = data.gambar;
    console.log(data);
}
function ajaxfunc8(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    project4.innerHTML = data.nama;
    project4img.attributes.src = data.gambar;
    console.log(data);
}
function ajaxfunc9(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    project5.innerHTML = data.nama;
    project5img.attributes.src = data.gambar;
    console.log(data);
}
function ajaxfunc10(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    project6.innerHTML = data.nama;
    project6img.attributes.src = data.gambar;
    console.log(data);
}
function ajaxfunc11(xhttp) {
    var data = JSON.parse(xhttp.responseText);
    project7.innerHTML = data.nama;
    console.log(data);
}

// bagian modal 1
var modalc = document.getElementById("modalc");
var modalcardmodalc = document.querySelector(".modalcardmodalc");
var modalcardpos = 1;
var modalcard1 = document.getElementById("modalcard1");
var modalcard2 = document.getElementById("modalcard2");
var modalcard3 = document.getElementById("modalcard3");
var modalcard4 = document.getElementById("modalcard4");
var modalcard5 = document.getElementById("modalcard5");
var modalcard6 = document.getElementById("modalcard6");
var modalcard7 = document.getElementById("modalcard7");
var modalcard8 = document.getElementById("modalcard8");
var modalcard9 = document.getElementById("modalcard9");
var modalcard10 = document.getElementById("modalcard10");
var modalcard11 = document.getElementById("modalcard11");
var modalcard = [modalcard1, modalcard2, modalcard3, modalcard4, modalcard5, modalcard6, modalcard7, modalcard8, modalcard9, modalcard10, modalcard11];
var mainmodalcard = document.getElementById("mainmodalcard");
function myFunction(event) {
    var pos = document.getElementById("modalcard1").offsetWidth;
    var y = event.deltaY;
    console.log(y);
    if (y > 0) {
        modalcardmodalc.scrollLeft += pos;
    } else {
        modalcardmodalc.scrollLeft -= pos;
    }
}
function scrollleft() {
    var pos = document.getElementById("modalcard1").offsetWidth;
    modalcardmodalc.scrollLeft -= pos;
    setTimeout(previousmodalcard, 500);
}
function scrollright() {
    var pos = document.getElementById("modalcard1").offsetWidth;
    modalcardmodalc.scrollLeft += pos;
    setTimeout(nextmodalcard, 500);
}
function nextmodalcard() {
    if (modalcardpos == 1) {
        modalcardpos = 2;
        modalcard[0].classList.remove("selectedmodalcard");
        modalcard[1].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 2) {
        modalcardpos = 3;
        modalcard[1].classList.remove("selectedmodalcard");
        modalcard[2].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 3) {
        modalcardpos = 4;
        modalcard[2].classList.remove("selectedmodalcard");
        modalcard[3].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 4) {
        modalcardpos = 5;
        modalcard[3].classList.remove("selectedmodalcard");
        modalcard[4].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 5) {
        modalcardpos = 6;
        modalcard[4].classList.remove("selectedmodalcard");
        modalcard[5].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 6) {
        modalcardpos = 7;
        modalcard[5].classList.remove("selectedmodalcard");
        modalcard[6].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 7) {
        modalcardpos = 8;
        modalcard[6].classList.remove("selectedmodalcard");
        modalcard[7].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 8) {
        modalcardpos = 9;
        modalcard[7].classList.remove("selectedmodalcard");
        modalcard[8].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 9) {
        modalcardpos = 10;
        modalcard[8].classList.remove("selectedmodalcard");
        modalcard[9].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 10) {
        modalcardpos = 11;
        modalcard[9].classList.remove("selectedmodalcard");
        modalcard[10].classList.add("selectedmodalcard");
    }
    checkpos();
    console.log(modalcardpos);
}
function previousmodalcard() {
    if (modalcardpos == 2) {
        modalcardpos = 1;
        modalcard[1].classList.remove("selectedmodalcard");
        modalcard[0].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 3) {
        modalcardpos = 2;
        modalcard[2].classList.remove("selectedmodalcard");
        modalcard[1].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 4) {
        modalcardpos = 3;
        modalcard[3].classList.remove("selectedmodalcard");
        modalcard[2].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 5) {
        modalcardpos = 4;
        modalcard[4].classList.remove("selectedmodalcard");
        modalcard[3].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 6) {
        modalcardpos = 5;
        modalcard[5].classList.remove("selectedmodalcard");
        modalcard[4].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 7) {
        modalcardpos = 6;
        modalcard[6].classList.remove("selectedmodalcard");
        modalcard[5].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 8) {
        modalcardpos = 7;
        modalcard[7].classList.remove("selectedmodalcard");
        modalcard[6].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 9) {
        modalcardpos = 8;
        modalcard[8].classList.remove("selectedmodalcard");
        modalcard[7].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 10) {
        modalcardpos = 9;
        modalcard[9].classList.remove("selectedmodalcard");
        modalcard[8].classList.add("selectedmodalcard");
    }
    else if (modalcardpos == 11) {
        modalcardpos = 10;
        modalcard[10].classList.remove("selectedmodalcard");
        modalcard[9].classList.add("selectedmodalcard");
    }
    checkpos();
    console.log(modalcardpos);
}
function checkpos() {
    if (modalcardpos == 1 || modalcardpos == 4 || modalcardpos == 7 || modalcardpos == 10) {
        mainmodalcard.style.backgroundImage = "URL(img/projek/bread-1284438_1920.jpg)";
    }
    else if (modalcardpos == 2 || modalcardpos == 5 || modalcardpos == 8 || modalcardpos == 11) {
        mainmodalcard.style.backgroundImage = "URL(img/projek/coffee-4648041_1920.jpg)";
    }
    else if (modalcardpos == 3 || modalcardpos == 6 || modalcardpos == 9) {
        mainmodalcard.style.backgroundImage = "URL(img/projek/fried-rice-3023040_1920.jpg)";
    }
}
function tomodalcard(modalcardnumber) {
    if (modalcardnumber == 1) {
        modalcardpos = 1;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[0].classList.add("selectedmodalcard");
        checkpos();
    }
    else if (modalcardnumber == 2) {
        modalcardpos = 2;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[1].classList.add("selectedmodalcard");
        checkpos();
    }
    else if (modalcardnumber == 3) {
        modalcardpos = 3;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[2].classList.add("selectedmodalcard");
        checkpos();
    }
    else if (modalcardnumber == 4) {
        modalcardpos = 4;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[3].classList.add("selectedmodalcard");
        checkpos();
    }
    else if (modalcardnumber == 5) {
        modalcardpos = 5;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[4].classList.add("selectedmodalcard");
        checkpos();
    }
    else if (modalcardnumber == 6) {
        modalcardpos = 6;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[5].classList.add("selectedmodalcard");
        checkpos();
    }
    else if (modalcardnumber == 7) {
        modalcardpos = 7;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[6].classList.add("selectedmodalcard");
        checkpos();
    }
    else if (modalcardnumber == 8) {
        modalcardpos = 8;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[7].classList.add("selectedmodalcard");
        checkpos();
    }
    else if (modalcardnumber == 9) {
        modalcardpos = 9;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[8].classList.add("selectedmodalcard");
        checkpos();
    }
    else if (modalcardnumber == 10) {
        modalcardpos = 10;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[9].classList.add("selectedmodalcard");
        checkpos();
    }
    else if (modalcardnumber == 11) {
        modalcardpos = 11;
        for (var i = 0; i <= 10; i++) {
            modalcard[i].classList.remove("selectedmodalcard");
        }
        modalcard[10].classList.add("selectedmodalcard");
        checkpos();
    }
    console.log(modalcardpos);
}
function showmodal1() {
    modalc.style.display = "flex";
    modalc.style.opacity = "0%";
    modalc.classList.add("modalfadeforward");
    setTimeout(function () { modalc.style.opacity = "100%"; modalc.classList.remove("modalfadeforward") }, 300);
}
function hidemodal1() {
    modalc.classList.add("modalfadebackward");
    setTimeout(function () { modalc.style.opacity = "0%"; modalc.classList.remove("modalfadebackward") }, 300);
    setTimeout(function () { modalc.style.display = "none" }, 300);
}