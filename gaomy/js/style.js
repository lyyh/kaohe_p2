var caou = document.querySelector(".m-caou");
var caou3 = document.querySelector('.m-caou3');
var caouselbox = caou.getElementsByClassName("carousel1")[0];
// var banner1 = caou.querySelector('.banner');
// var banner3 = document.querySelector('.m-designer').querySelector('.banner');
 // var banner3 = caou3.querySelector(".banner");
var display = caou3.querySelector(".display");
 var  banner = document.querySelector(".banner");
 // var  list1 = banner1.querySelector(".lits");
 // var  list3 = banner3.getElementsByClassName("lits")[0];
 var  list = banner.querySelector(".lits");
var lis = list.querySelectorAll('li');
// var  lis1 = list1.querySelectorAll("li");
// var  lis3 = list3.querySelectorAll("li");
var imgWidth = caou.getElementsByClassName("pic")[0].getElementsByTagName("img")[0].offsetWidth;
var  lpic = 4;
var  index1 =0;
var  index2 = 0;

for(var i=0;i<lis.length;i++){
		lis[i].addEventListener('click',function(){
		// console.log(lis[i].getAttribute('index'));
		if(this.parentNode.parentNode.parentNode.id=='m-carousel1'){
			// if (caou.timer) 
			clearInterval(caou.timer);
		// addLiClass(this.getAttribute('index'));
		slide(caouselbox,this.getAttribute('index'),imgWidth);
		// addLiClass1(this.getAttribute('index'));
		index1=this.getAttribute('index');
		}else if(this.parentNode.parentNode.parentNode.id=="m-designer"){
			// if (caou3.timer) 
			 clearInterval(caou3.timer);
		// addLiClass(this.getAttribute('index'));
		slide(display,this.getAttribute('index'),caou3.offsetWidth);
		// addLiClass3(this.getAttribute('index'));
		index2=this.getAttribute('index');
		}
		// caou.setAttribute('index',this.getAttribute('index'));
	},false); 
}
// var removeAllLiClass1 = function(){
// 	for(var i=0;i<lis1.length;i++){
// 		if(lis1[i].className=="on"){
// 			lis1[i].className="";
// 		}
// 	}
// }


// var addLiClass3 = function(i){
// 	removeAllLiClass3();
// 	// console.log(lis[i].getAttribute("index"));
// 	lis3[i].className = "on";
// 	 //lis[i].setAttribute('class','on');
// }
var slide = function(box,i,width){
	box.style.left  = -i*width+'px';
	addLiClass(i);
}
var removeAllLiClass = function(){
	for(var i=0;i<lis.length;i++){
		if(lis[i].className=="on"){
			lis[i].className="";
		}
	}
}
var  addLiClass = function(i){
	removeAllLiClass();
	// lis[i].className="on";
	lis[i].setAttribute("class","on");
}

caou.timer = setInterval(function () {
	 if (index1 >= lpic-1) 
		// caou.setAttribute('index','0');
	 	index1=0;
	else{
		// caou.index ++;
		index1++;
	}
	slide(caouselbox,index1,imgWidth);		
},2666);
caou3.timer = setInterval(function () {
	 if (index2 >= lpic-1) 
		// caou.setAttribute('index','0');
	 index2=0;
	else{
		// caou.index ++;
		index2++;
	}	
	slide(display,index2,caou3.offsetWidth);	
},2666);
caou3.onmouseenter=function(){
	if(caou3.timer){
		clearInterval(caou3.timer);
	}
}
caou.onmouseenter = function () {
	if (caou.timer) 
		clearInterval(caou.timer);
}
caou3.onmouseleave = function () {
	caou3.timer = setInterval(function () {
	if (index2 >= lpic-1 ) 
		// caou.index = 0;
	    index2=0;
	else 
		// caou.index ++;
		index2++;
	slide(display,index2,caou3.offsetWidth);
},2666);
}
caou.onmouseleave = function () {
	caou.timer = setInterval(function () {
	if (index1 >= lpic-1 ) 
		// caou.index = 0;
	    index1=0;
	else 
		// caou.index ++;
		index1++;
	slide(caouselbox,index1,imgWidth);
},2666);
}
