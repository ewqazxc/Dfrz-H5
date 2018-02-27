var _html = document.getElementsByTagName('html')[0];
var ch = document.documentElement.clientWidth;
//var hFont = ch / (7.5) + 'px';
console.log(ch);
//console.log(document.documentElement.clientWidth);
if(ch > 750) {
	_html.style.fontSize = '100px';
	//    $('html').css("font-size","100px");
} else {
	_html.style.fontSize = ch / (7.5) + 'px';
	//    $('html').css("font-size",hFont);
}