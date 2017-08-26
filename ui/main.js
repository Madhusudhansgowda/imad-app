console.log('Loaded!');
var counter=0;
var button=documnet.getelementbyid("button");
button.onclick=function()
{
    counter+=1;
    var span=document.getelementbyid("btn");
    span.innerhtml=counter.tostring();
};
