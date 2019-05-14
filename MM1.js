	var br=0,br1=0,a,b;
	create();
	document.getElementById("pb").innerHTML=a;
	document.getElementById("db").innerHTML=b;
  document.getElementById("number").addEventListener("keyup",function(event)
	{
		if(event.keyCode == 13)
		{
			event.preventDefault();
			document.getElementById("neko").click();
		}
	})
function pitaj(){
var input=document.getElementById("number").value;
if(input == a*b)
{
	br++;
	document.getElementById("tacno").innerHTML=br;
	brisi();
}
else{
	br1++;
	document.getElementById("jok").innerHTML=br1;
	brisi();
}
}
function brisi()
{
	create();
	document.getElementById("pb").innerHTML=a;
	document.getElementById("db").innerHTML=b;
	document.getElementById("number").value=null;
}
function create()
{
	a=Math.floor(Math.random()*(10-3))+3;
	b=Math.floor(Math.random()*(10-3))+3;
}
var y=setInterval(function(){
var tm=10000;
var minuti=Math.floor((tm%(1000*60*60))/(1000*60));
var sekundi=Math.floor((tm%(1000*60))/1000);
document.getElementById("Vreme").innerHTML=minuti+"m:"+sekundi+"s";
if(tm<0)
{
 clearInterval(y);
 document.getElementById("Vreme").innerHTML = "GOTOVO VREME!";
}
},1000);