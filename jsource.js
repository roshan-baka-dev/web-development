var sc=document.getElementById("scroll");
sc.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (sc.scrollTop > 100) {
	document.getElementById("navbar").style.padding = "32px 10px";
	document.getElementById("navbar").style.background="url('213.jpg') no-repeat center/cover";
	}
	 else {
	document.getElementById("navbar").style.padding = "165px 10px 15px 10px";
	document.getElementById("navbar").style.background="url('123.jpg') no-repeat";
	document.getElementById("navbar").style.backgroundSize="cover";
	}
}
$(document).ready(function(){
		var action;
		var ban;
		$('.nav-item').on('click',"a",function(event){
		action=$(this).attr('href');
		$(action).css("padding-top","118px");
		ban=0;
	});
		$('#scroll').scroll(function(e){
	    if (e.originalEvent && ban){
	        $('#home').css("padding-top","0px");
	        $('#service').css("padding-top","0px");
	        $('#about').css("padding-top","0px");
	        $('#contact').css("padding-top","0px");
	    }
    	ban=1;
	});
})