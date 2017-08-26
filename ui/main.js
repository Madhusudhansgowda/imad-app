var button=documnet.getelementbyid("button");
var counter=0;
button.onclick=function()
{
    counter+=1;
    var span=document.getelementbyid("btn");
    span.innerhtml=counter.tostring();
};
