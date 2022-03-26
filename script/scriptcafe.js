var x = document.getElementById("navrightc");
var y = 0;

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