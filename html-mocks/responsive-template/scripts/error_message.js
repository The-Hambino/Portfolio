//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup
function loadPopup(){
	//loads popup only if it is disabled
	if(popupStatus==0){
		jQuery("#backgroundPopup").css({
			"opacity": "0.8"
		});
		jQuery("#backgroundPopup").fadeIn("slow");
		jQuery("#popupMessage").fadeIn("slow");
		popupStatus = 1;
	}
}

//disabling popup
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus==1){
		jQuery("#backgroundPopup").fadeOut("slow");
		jQuery("#popupMessage").fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = jQuery("#popupMessage").height();
	var popupWidth = jQuery("#popupMessage").width();
	//centering
	jQuery("#popupMessage").css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2 - 50,
		"left": windowWidth/2-popupWidth/2 - 50
	});
	//only need force for IE6
	jQuery("#backgroundPopup").css({
		"height": windowHeight
	});
}

//CONTROLLING EVENTS IN jQuery
jQuery(document).ready(function(){
	//LOADING POPUP
	//Click the button event!
	jQuery("#button").click(function(){
		//centering with css
		centerPopup();
		//load popup
		loadPopup();
	});
});

//CONTROLLING EVENTS IN jQuery
jQuery(document).ready(function(){
				
	//CLOSING POPUP
	//Click the x event!
	jQuery("#popupMessageClose").click(function(){
		disablePopup();
	});
	//Click out event!
	jQuery("#backgroundPopup").click(function(){
		disablePopup();
	});
	//Press Escape event!
	jQuery(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});

});