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
    
    
};
var inputvalue=document.getElementById("name");
var vlue=inputvalue.value;
var submit=document.getElementById("submit");
submit.onclick=function(){
    
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
};
request.open('GET','http://madhusudhansgowda123.imad.hasura-app.io/dubmit-name?name='+vlue,true);
    request.send(null);