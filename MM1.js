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
	brisi();}


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

	var minuti=0;
	var sekunde=3;
var y=setInterval(function(){
ispitaj();
},1000);
function ispitaj()
{
	if(sekunde==0)
	{
		minuti--;
		sekunde=60;
		if(minuti<10)
			minuti="0"+minuti;
	}
	sekunde--;
	if(sekunde<10)
		sekunde="0"+sekunde;
	document.getElementById("vreme").innerHTML=minuti+"m:"+sekunde+"s";
	if(minuti <= 0 && sekunde <= 0)
	{
		clearInterval(y);
		document.getElementById("vreme").innerHTML="VREME JE ISTEKLO!";
		document.getElementById("neko").remove();
	}
}
