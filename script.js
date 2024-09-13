//button onclick change color javascript code

let parent=document.getElemetById("parent");
let btn=document.getElementById("btn");
let toggle=1
btn.addEventListener("click",function()
{
    if(toggle==1)
        {
    parent.getComputedStyle.backgroundcolor="rbg(52,52,52)"
    toggle=0
    }else{
        parent.getComputedStyle.backgroundcolor="beige"
        toggle=1
    }
})

//onclick on screen and change color javascript code
parent.addEventListener("click",function()
{
    if(toggle==1)
        {
    parent.getComputedStyle.backgroundcolor="rbg(52,52,52)"
    toggle=0
    }else{
        parent.getComputedStyle.backgroundcolor="beige"
        toggle=1
    }
})