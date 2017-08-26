var button=document.getElementById("button");
var counter=0;
button.onclick=function()
{
    counter+=1;
    var span=document.getElementById("btn");
    span.innerHTML=counter.toString();
};
