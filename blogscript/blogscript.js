var menus = 0;
var comstate = 0;
function openmenu()
{
    var x = document.getElementById("lefside");
    var y = document.getElementById("btn1");
    var z = document.getElementById("blackdum");
    var p = document.getElementById("btn1teks");
    if(menus == 0)  
    {
        x.style.transform = "TranslateX(0)";
        y.style.transform = "TranslateX(240px)";
        p.innerHTML = "X";
        p.style.color = "white";
        p.style.margin = "0";
        p.style.fontSize = "20px";
        z.style.display = "flex";        
        menus = 1;
        console.log("state 1")
    }
    else
    {
        x.style.transform = "TranslateX(-300px)";
        y.style.transform = "TranslateX(0)";
        p.innerHTML = "-";
        p.style.color = "white";
        p.style.margin = "0";
        p.style.fontSize = "50px";
        z.style.display = "none";
        menus = 0;
        console.log("state 0")
    }
}

function opencomment()
{
    var a = document.getElementById("responc");
    if(comstate == 0)
    {
        a.style.height = "260px";
        comstate = 1;
    }
    else
    {
        a.style.height = "50px";
        comstate = 0;
    }
}

function sendcomment()
{
    var a = document.getElementById("responc");
    if(confirm("Cek kembali komentar anda.\nPatuhilah pedoman berkomentar di blog ini.\nTekan OK untuk melanjutkan atau Cancel untuk batal") == true)
    {
        a.style.height = "50px";
        comstate = 0;
    }
    else
    {
        a.style.height = "260px";
        comstate = 1;
    }
}