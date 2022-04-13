var menus = 0;
function openmenu()
{
    var x = document.getElementById("lefside");
    var y = document.getElementById("btn1");
    var z = document.getElementById("blackdum");
    if(menus == 0)  
    {
        x.style.transform = "TranslateX(0)";
        y.style.transform = "TranslateX(240px)";
        z.style.display = "flex";
        menus = 1;
        console.log("state 1")
    }
    else
    {
        x.style.transform = "TranslateX(-300px)";
        y.style.transform = "TranslateX(0)";
        z.style.display = "none";
        menus = 0;
        console.log("state 0")
    }
}