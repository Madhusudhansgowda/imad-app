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
    
    request.open('GET','http://madhusudhansgowda123.imad.hasura-app.io/counter',true);
    request.send(null);
};

var submit=document.getElementById("submit");
submit.onclick=function(){
    
     var request=new XMLHttpRequest();
    request.onreadystatuschange=function()
    {
        if(request.readyState==XMLHttpRequest.Done)
        {
            if(request.readyState==200)
            {
                 var names=request.responseText;
                 names=JSON.parse(names);
                var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
            }
        }
    };
    var inputvalue=document.getElementById("name");
var vlue=inputvalue.value;

request.open('GET','http://madhusudhansgowda123.imad.hasura-app.io/submit-name?name='+vlue,true);
    request.send(null);
};