var x = document.getElementById("navrightc");
var y = 0;
var z = 0;

function navfunc()
{
    if(y == 0)
    {
        x.style.height = ("165px")
        y = 1;
    }
    else
    {
        x.style.height = ("0")    
        y = 0;
    }
}

function darkmode()
{
    if(z == 0)
    {
        document.body.style.backgroundColor = "black";
        document.getElementById("promotittle").style.color = "white";
        document.getElementById("decor1").style.color = "white";
        document.getElementById("subgal1").style.color = "white";
        document.getElementById("darksw").style.backgroundColor = "white";
        document.getElementById("darkswp").style.color = "black";    
        document.getElementById("darkswp").innerHTML = "Light";
        z = 1;
    }
    else
    {
        document.body.style.backgroundColor = "white";        
        document.getElementById("promotittle").style.color = "black";
        document.getElementById("decor1").style.color = "black";
        document.getElementById("subgal1").style.color = "black";
        document.getElementById("darksw").style.backgroundColor = "black";
        document.getElementById("darkswp").style.color = "white";
        document.getElementById("darkswp").innerHTML = "Dark";
        z = 0;
    }
}
