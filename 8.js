window.onscroll=function(){
	var kc = document.documentElement.scrollTop;
	var ktren = document.getElementById("kt");
	if(kc>50){
		ktren.style.padding ="20px 20px";
		logo.style.fontSize = "20px";
	}else{
		ktren.style.padding ="50px 20px";
	}
	console.log(kc);
};