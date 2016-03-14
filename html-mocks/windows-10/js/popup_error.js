// 0 means hidden; 1 means visible;
var popupStatus = 0;

// shows popup
function loadPopup(){
	// shows popup only if it is hidden
	if(popupStatus==0){
		jQuery("#backgroundPopup").css({
			"opacity": "0.8"
		});
		jQuery("#backgroundPopup").fadeIn(600);
		jQuery("#popupMessage").fadeIn(600);
		popupStatus = 1;
	}
}

//disabling popup
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus==1){
		jQuery("#backgroundPopup").fadeOut(600);
		jQuery("#popupMessage").fadeOut(600);
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
		"position": "fixed",
		"top": windowHeight/2-popupHeight/2 - 50,
		"left": windowWidth/2-popupWidth/2 - 50
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