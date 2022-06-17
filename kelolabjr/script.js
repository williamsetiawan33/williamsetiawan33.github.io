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
var subcatat1 = document.getElementById("subcatat1");
var subcatat2 = document.getElementById("subcatat2");
var subcatat3 = document.getElementById("subcatat3");
var subcatat4 = document.getElementById("subcatat4");
var subcatat5 = document.getElementById("subcatat5");
var btnbuatcatat = document.getElementById("btnbuatcatat");
var subjadwal1 = document.getElementById("subjadwal1");
var subjadwal2 = document.getElementById("subjadwal2");
document.getElementById("username").innerHTML = user;
function setdisplay1()
{
    if (isTodo == 1)
    {
        catat.style.display = "none";
        jadwal.style.display = "none";
        document.getElementById("scpart1").scrollIntoView(false);
        subtodo1.style.display = "none";
        subtodo2.style.display = "none";
        subcatat1.style.display = "none";
        subcatat2.style.display = "none";
        subjadwal1.style.display = "none";
        subjadwal2.style.display = "none";
        console.log(subtodo1.style.display);
    }
    else if (isTodo == 0)
    {
        catat.style.display = "block";
        jadwal.style.display = "block";
        document.getElementById("scpart1").scrollIntoView(false);        
        subtodo1.style.display = "";
        subtodo2.style.display = "";
        subcatat1.style.display = "";
        subcatat2.style.display = "";
        subjadwal1.style.display = "";
        subjadwal2.style.display = "";
        console.log(subtodo1.style.display);
    }
}
function setdisplay2()
{
    if (isCatat == 1)
    {
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
    else if (isCatat == 0)
    {
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
function setdisplay3()
{
    if (isJadwal == 1)
    {
        todo.style.display = "none";
        catat.style.display = "none";
        document.getElementById("scpart1").scrollIntoView(false);
        subtodo1.style.display = "none";
        subtodo2.style.display = "none";
        subcatat1.style.display = "none";
        subcatat2.style.display = "none";
        subjadwal1.style.display = "none";
        subjadwal2.style.display = "none";
        console.log(subtodo1.style.display);
    }
    else if (isJadwal == 0)
    {
        todo.style.display = "block";
        catat.style.display = "block";
        document.getElementById("scpart1").scrollIntoView(false);
        subtodo1.style.display = "";
        subtodo2.style.display = "";
        subcatat1.style.display = "";
        subcatat2.style.display = "";
        subjadwal1.style.display = "";
        subjadwal2.style.display = "";
        console.log(subtodo1.style.display);
    }
}
function setright()
{
    btnbuatcatat.style.right = "0";
}
function todo_open()
{
    if (isTodo == 0)
    {
        todo.style.width = "80%";
        catat.style.width = "0";
        jadwal.style.width = "0";
        isTodo = 1;
        isCatat = 0;
        isJadwal = 0;
    }
    else if (isTodo == 1)
    {
        todo.style.width = "220px";
        catat.style.width = "220px";
        jadwal.style.width = "220px";
        isTodo = 0;
        isCatat = 0;
        isJadwal = 0;
    }
}
function catat_open()
{
    if (isCatat == 0)
    {
        todo.style.width = "0";
        catat.style.width = "80%";
        jadwal.style.width = "0";
        isTodo = 0;
        isCatat = 1;
        isJadwal = 0;
    }
    else if (isCatat == 1)
    {
        todo.style.width = "220px";
        catat.style.width = "220px";
        jadwal.style.width = "220px";
        isTodo = 0;
        isCatat = 0;
        isJadwal = 0;
    }
}
function jadwal_open()
{
    if (isJadwal == 0)
    {
        todo.style.width = "0";
        catat.style.width = "0";
        jadwal.style.width = "80%";
        isTodo = 0;
        isCatat = 0;
        isJadwal = 1;
    }
    else if (isJadwal == 1)
    {
        todo.style.width = "220px";
        catat.style.width = "220px";
        jadwal.style.width = "220px";
        isTodo = 0;
        isCatat = 0;
        isJadwal = 0;
    }
}           

// akhir dasbor

// index
document.getElementById('regiscontainer').style.display = "none";
document.getElementById("regisbtn").disabled = true;
document.getElementById("regisbtn").style.backgroundColor = "grey";
var moveduser = sessionStorage.getItem("fixuser");
if (moveduser != "")
{
    document.getElementById('username').value = moveduser;
}
function regisopen()
{
    document.getElementById('regiscontainer').style.display = 'flex';
}
function regisclose()
{
    document.getElementById('regiscontainer').style.display = 'none';
}
function validate()
{
    var input1 = document.getElementById("regispass1");
    var input2 = document.getElementById("regispass2");
    var pass = input2.value;
    if (input1.value == input2.value && pass.length >= 8)
    {
        document.getElementById("regisbtn").disabled = false;
        document.getElementById("regisbtn").style.backgroundColor = "rgb(78, 134, 255)";
        document.getElementById("regisbtn").style.cursor = "pointer";
    }
    else
    {
        document.getElementById("regisbtn").disabled = true;
        document.getElementById("regisbtn").style.backgroundColor = "grey";
        document.getElementById("regisbtn").style.cursor = "default";
    }
}
function moveuser()
{
    sessionStorage.setItem("fixuser", document.getElementById("regisusername").value)
}
// akhir index