var dasmain = document.getElementById("dasmain");
var dasbody = document.getElementById("dasbody");
var dasfoot = document.getElementById("dasfoot");
var scpart1 = document.getElementById("scpart1");
var todobody = document.getElementById("todobody");
var todocont = document.getElementById("todocont");
var catatanbody = document.getElementById("catatanbody");
var catatanform = document.getElementById("formcontainer");
var aboutbody = document.getElementById("aboutbody");
var bantuanbody = document.getElementById("bantuanbody");
var jadwalbody = document.getElementById("jadwalbody");
var nav = document.getElementById("nav");
var foot = document.getElementById("foot");
// var todonav = document.getElementById("todonav");
// dasbor
var user = sessionStorage.getItem("username");
var isTodo = 0;
var isCatat = 0;
var isJadwal = 0;
var todo = document.getElementById("todocard");
var catat = document.getElementById("catatcard");
var jadwal = document.getElementById("jadwalcard");
var subtodo1 = document.getElementById("subtodo1");
var subtodo2 = document.getElementById("subtodo2");
var subtodo3 = document.getElementById("subtodo3");
var subtodo4 = document.getElementById("subtodo4");
var subtodo5 = document.getElementById("subtodo5");
var opsi1 = document.getElementById("opsi1");
var opsi2 = document.getElementById("opsi2");
var opsi3 = document.getElementById("opsi3");
var labelopsi1 = document.getElementById("lblopsi1");
var labelopsi2 = document.getElementById("lblopsi2");
var labelopsi3 = document.getElementById("lblopsi3");
var subcatat1 = document.getElementById("subcatat1");
var subcatat2 = document.getElementById("subcatat2");
var subcatat3 = document.getElementById("subcatat3");
var subcatat4 = document.getElementById("subcatat4");
var subcatat5 = document.getElementById("subcatat5");
var btnbuatcatat = document.getElementById("btnbuatcatat");
var subjadwal1 = document.getElementById("subjadwal1");
var subjadwal2 = document.getElementById("subjadwal2");
var subjadwal3 = document.getElementById("subjadwal3");
var btndark = document.getElementById("btndark");
var btnlogout = document.getElementById("btnlogout");
document.getElementById("username").innerHTML = user; // ini juga dipakai untuk seluruh halaman,
function checkopsi()                                  // agar username di navbar sesuai dengan variabel session storage.
{
    if (opsi1.checked) {
        labelopsi1.innerHTML = "<s>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ad.</s>";
    }
    else {
        labelopsi1.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ad.";
    }

    if (opsi2.checked) {
        labelopsi2.innerHTML = "<s>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ad.</s>";
    }
    else {
        labelopsi2.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ad.";
    }

    if (opsi3.checked) {
        labelopsi3.innerHTML = "<s>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ad.</s>";
    }
    else {
        labelopsi3.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ad.";
    }
}
function setdisplay1() {
    if (isTodo == 1) {
        catat.style.display = "none";
        jadwal.style.display = "none";
        todo.style.display = "flex";
        todo.style.overflow = "scroll";
        document.getElementById("scpart1").scrollIntoView(false);
        subtodo1.style.display = "none";
        subtodo2.style.display = "none";
        subtodo3.style.display = "flex";
        subtodo4.style.display = "flex";
        subtodo5.style.display = "flex";
        subcatat1.style.display = "none";
        subcatat2.style.display = "none";
        subjadwal1.style.display = "none";
        subjadwal2.style.display = "none";
        btnbuattodo.style.display = "flex";
        console.log(subtodo1.style.display);
    }
    else if (isTodo == 0) {
        catat.style.display = "block";
        jadwal.style.display = "block";
        todo.style.display = "block";
        todo.style.overflow = "hidden";
        document.getElementById("scpart1").scrollIntoView(false);
        subtodo1.style.display = "";
        subtodo2.style.display = "";
        subtodo3.style.display = "none";
        subtodo4.style.display = "none";
        subtodo5.style.display = "none";
        subcatat1.style.display = "";
        subcatat2.style.display = "";
        subjadwal1.style.display = "";
        subjadwal2.style.display = "";
        btnbuattodo.style.display = "none";
        console.log(subtodo1.style.display);
    }
}
function setdisplay2() {
    if (isCatat == 1) {
        catat.style.display = "flex";
        catat.style.overflow = "scroll";
        todo.style.display = "none";
        jadwal.style.display = "none";
        document.getElementById("scpart1").scrollIntoView(false);
        subtodo1.style.display = "none";
        subtodo2.style.display = "none";
        subcatat1.style.display = "none";
        subcatat2.style.display = "none";
        subjadwal1.style.display = "none";
        subjadwal2.style.display = "none";
        subcatat3.style.display = "flex";
        subcatat4.style.display = "flex";
        subcatat5.style.display = "flex";
        btnbuatcatat.style.display = "flex";
        console.log(subtodo1.style.display);
    }
    else if (isCatat == 0) {
        catat.style.display = "block";
        catat.style.overflow = "hidden";
        todo.style.display = "block";
        jadwal.style.display = "block";
        document.getElementById("scpart1").scrollIntoView(false);
        subtodo1.style.display = "";
        subtodo2.style.display = "";
        subcatat1.style.display = "";
        subcatat2.style.display = "";
        subcatat3.style.display = "none";
        subcatat4.style.display = "none";
        subcatat5.style.display = "none";
        btnbuatcatat.style.display = "none";
        subjadwal1.style.display = "";
        subjadwal2.style.display = "";
        console.log(subtodo1.style.display);
    }
}
function setdisplay3() {
    if (isJadwal == 1) {
        todo.style.display = "none";
        catat.style.display = "none";
        jadwal.style.display = "flex";
        jadwal.style.overflow = "scroll";
        document.getElementById("scpart1").scrollIntoView(false);
        subtodo1.style.display = "none";
        subtodo2.style.display = "none";
        subcatat1.style.display = "none";
        subcatat2.style.display = "none";
        subjadwal1.style.display = "none";
        subjadwal2.style.display = "none";
        subjadwal3.style.display = "";
        btnbuatjadwal.style.display = "flex";
        console.log(subtodo1.style.display);
    }
    else if (isJadwal == 0) {
        todo.style.display = "block";
        catat.style.display = "block";
        jadwal.style.display = "block";
        jadwal.style.overflow = "hidden";
        document.getElementById("scpart1").scrollIntoView(false);
        subtodo1.style.display = "";
        subtodo2.style.display = "";
        subcatat1.style.display = "";
        subcatat2.style.display = "";
        subjadwal1.style.display = "";
        subjadwal2.style.display = "";
        subjadwal3.style.display = "none";
        btnbuatjadwal.style.display = "none";
        console.log(subtodo1.style.display);
    }
}
function todo_open() {
    if (isTodo == 0) {
        todo.style.width = "80%";
        catat.style.width = "0";
        jadwal.style.width = "0";
        isTodo = 1;
        isCatat = 0;
        isJadwal = 0;
    }
    else if (isTodo == 1) {
        todo.style.width = "220px";
        catat.style.width = "220px";
        jadwal.style.width = "220px";
        isTodo = 0;
        isCatat = 0;
        isJadwal = 0;
    }
}
function catat_open() {
    if (isCatat == 0) {
        todo.style.width = "0";
        catat.style.width = "80%";
        jadwal.style.width = "0";
        isTodo = 0;
        isCatat = 1;
        isJadwal = 0;
    }
    else if (isCatat == 1) {
        todo.style.width = "220px";
        catat.style.width = "220px";
        jadwal.style.width = "220px";
        isTodo = 0;
        isCatat = 0;
        isJadwal = 0;
    }
}
function jadwal_open() {
    if (isJadwal == 0) {
        todo.style.width = "0";
        catat.style.width = "0";
        jadwal.style.width = "80%";
        isTodo = 0;
        isCatat = 0;
        isJadwal = 1;
    }
    else if (isJadwal == 1) {
        todo.style.width = "220px";
        catat.style.width = "220px";
        jadwal.style.width = "220px";
        isTodo = 0;
        isCatat = 0;
        isJadwal = 0;
    }
}

function logout() {
    sessionStorage.clear();
    window.location.replace("index.html");
}

function darkmode() {
    if (sessionStorage.getItem("dark") == 0) {
        sessionStorage.setItem("dark", 1);
    }
    else if (sessionStorage.getItem("dark") == 1) {
        sessionStorage.setItem("dark", 0);
    }
}

function dasdark() {
    if (sessionStorage.getItem("dark") == 1) {
        btndark.style.backgroundColor = "white";
        btndark.style.color = "black";
        btnlogout.style.backgroundColor = "white";
        btnlogout.style.color = "black";
        dasmain.style.filter = "invert(1)";
        dasbody.style.backgroundColor = "black";
        foot.style.filter = "invert(1)";
        scpart1.style.filter = "invert(1)";
        nav.style.filter = "invert(1)";
    }
    else if (sessionStorage.getItem("dark") == 0) {
        btndark.style.backgroundColor = "rgb(171, 171, 171)";
        btndark.style.color = "white";
        btnlogout.style.backgroundColor = "rgb(171, 171, 171)";
        btnlogout.style.color = "white";
        dasmain.style.filter = "invert(0)";
        dasbody.style.backgroundColor = "#f6f5f4";
        foot.style.filter = "invert(0)";
        scpart1.style.filter = "invert(0)";
        nav.style.filter = "invert(0)";
    }
}
function tododark() {
    if (sessionStorage.getItem("dark") == 1) {
        nav.style.filter = "invert(1)";
        todocont.style.filter = "invert(1)";
        todobody.style.backgroundColor = "black";
    }
    else if (sessionStorage.getItem("dark") == 0) {
        nav.style.filter = "invert(0)";
        todocont.style.filter = "invert(0)";
        todobody.style.backgroundColor = "#f6f5f4";
    }
}
function catatandark() {
    if (sessionStorage.getItem("dark") == 1) {
        nav.style.filter = "invert(1)";
        foot.style.filter = "invert(1)";
        catatanbody.style.backgroundColor = "black";
        catatanform.style.filter = "invert(1)";
    }
    else if (sessionStorage.getItem("dark") == 0) {
        nav.style.filter = "invert(0)";
        foot.style.filter = "invert(0)";
        catatanbody.style.backgroundColor = "white";
        catatanform.style.filter = "invert(0)";
    }
}
function aboutdark() {
    if (sessionStorage.getItem("dark") == 1) {
        nav.style.filter = "invert(1)";
        foot.style.filter = "invert(1)";
        aboutbody.style.backgroundColor = "black";
        aboutbody.style.color = "white";
    }
    else if (sessionStorage.getItem("dark") == 0) {
        nav.style.filter = "invert(0)";
        foot.style.filter = "invert(0)";
        aboutbody.style.backgroundColor = "white";
        aboutbody.style.color = "black";
    }
}
function bantuandark() {
    if (sessionStorage.getItem("dark") == 1) {
        nav.style.filter = "invert(1)";
        foot.style.filter = "invert(1)";
        bantuanbody.style.backgroundColor = "black";
        bantuanbody.style.color = "white";
    }
    else if (sessionStorage.getItem("dark") == 0) {
        nav.style.filter = "invert(0)";
        foot.style.filter = "invert(0)";
        bantuanbody.style.backgroundColor = "white";
        bantuanbody.style.color = "black";
    }
}
function jadwaldark() {
    if (sessionStorage.getItem("dark") == 1) {
        nav.style.filter = "invert(1)";
        foot.style.filter = "invert(1)";
        jadwalbody.style.backgroundColor = "black";
        jadwalbody.style.color = "white";
    }
    else if (sessionStorage.getItem("dark") == 0) {
        nav.style.filter = "invert(0)";
        foot.style.filter = "invert(0)";
        jadwalbody.style.backgroundColor = "white";
        jadwalbody.style.color = "black";
    }
}

// akhir dasbor

// index
document.getElementById('regiscontainer').style.display = "none";
document.getElementById("regisbtn").disabled = true;
document.getElementById("regisbtn").style.backgroundColor = "grey";
var moveduser = sessionStorage.getItem("fixuser");
if (moveduser != "") {
    document.getElementById('username').value = moveduser;
}
function regisopen() {
    document.getElementById('regiscontainer').style.display = 'flex';
}
function regisclose() {
    document.getElementById('regiscontainer').style.display = 'none';
}
function validate() {
    var input1 = document.getElementById("regispass1");
    var input2 = document.getElementById("regispass2");
    var pass = input2.value;
    if (input1.value == input2.value && pass.length >= 8) {
        document.getElementById("regisbtn").disabled = false;
        document.getElementById("regisbtn").style.backgroundColor = "rgb(78, 134, 255)";
        document.getElementById("regisbtn").style.cursor = "pointer";
    }
    else {
        document.getElementById("regisbtn").disabled = true;
        document.getElementById("regisbtn").style.backgroundColor = "grey";
        document.getElementById("regisbtn").style.cursor = "default";
    }
}
function moveuser() {
    sessionStorage.setItem("fixuser", document.getElementById("regisusername").value)
}
// akhir index

// todo
function tambahtodo() {
    var btnc = document.getElementById("formbtnc");
    var divi = document.createElement("div");
    var inputdivi = document.createElement("input");
    inputdivi.setAttribute("type", "text");
    inputdivi.setAttribute("class", "taskname");
    inputdivi.setAttribute("placeholder", "nama tugas");
    divi.appendChild(inputdivi);
    form.insertBefore(divi, btnc)
}