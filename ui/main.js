console.log("loaded");
var button=document.getElementById("button");
var counter=0;
button.onclick=function()
{
    
    var request=XMLHttpRequest();
    request.onreadystatuschange=function()
    {
        if(request.readyState==XMLHttpRequest.Done)
        {
            if(request.readyState==200)
            {
                var counter=request.responseText;
                var span=document.getElementById("btn");
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://madhusudhansgowda123.imad.hasura-app.io');
    request.send(null);
    
};
var input=document.getElementById("input");
var vlue=input.text;
var submit=document.getElementById("submit");
submit.onclick=function(){
    
    var names=["name","name","name"];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list='<li>'+names[i]+'</li>'
    }
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
};
