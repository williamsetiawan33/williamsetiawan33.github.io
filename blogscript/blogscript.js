var menus = 0;
function openmenu()
{
    var x = document.getElementById("lefside");
    var y = document.getElementById("btn1");
    if(menus == 0)  
    {
        x.style.transform = "TranslateX(0)";
        menus = 1;
        y.style.transform = "TranslateX(240px)";
        console.log("state 1")
    }
    else
    {
        x.style.transform = "TranslateX(-300px)";
        y.style.transform = "TranslateX(0)";
        menus = 0;
        console.log("state 0")
    }
}