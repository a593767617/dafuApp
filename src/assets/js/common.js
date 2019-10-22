var win = document.getElementsByTagName('html')[0];
	window.onload=(function(){
		var html = document.documentElement;
		var htmlWidth = html.getBoundingClientRect().width;
		html.style.fontSize = htmlWidth/18+"px";
	})()
	window.onresize = function() {
		var html = document.documentElement;
		var htmlWidth = html.getBoundingClientRect().width;
		html.style.fontSize = htmlWidth/18+"px";
	}