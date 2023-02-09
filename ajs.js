function s(e){return document.querySelector(e);}
function aj(d){let x=new XMLHttpRequest();x.onreadystatechange=function(){
if(x.readyState==4&&x.status==200){d[2](x.response);}};x.open('POST',d[0],true);
x.setRequestHeader('Content-type','application/x-www-form-urlencoded');
x.send(Object.keys(d[1]).map(function(key){
return encodeURIComponent(key)+"="+encodeURIComponent(d[1][key]);}).join("&"));}
