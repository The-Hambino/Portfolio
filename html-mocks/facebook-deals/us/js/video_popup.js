//0 means hidden; 1 means visible;
var videoPopupStatus = 0;

//shows popup
function loadVideoPopup(){
	// shows popup only if it is hidden
	if(videoPopupStatus==0){
		jQuery("#backgroundPopup").css({
			"opacity": "0.8"
		});
		jQuery("#backgroundPopup").fadeIn("slow");
		jQuery("#video-popup").fadeIn("slow");
		videoPopupStatus = 1;
	}
}

// hides popup
function disableVideoPopup(){
	// hides popup only if it is visible
	if(videoPopupStatus==1){
		jQuery("#backgroundPopup").fadeOut("slow");
		jQuery("#video-popup").hide();
		videoPopupStatus = 0;
		jQuery(".video-popup-video").hide();
	}
}

// centering popup
function centerVideoPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = jQuery("#video-popup").height();
	var popupWidth = jQuery("#video-popup").width();
	//centering
	jQuery("#video-popup").css({
		"position": "fixed",
		"top": windowHeight/2-popupHeight/2 - 50,
		"left": windowWidth/2-popupWidth/2 - 50
	});
}

// attaching CLICK & KEYBOARD event listeners
jQuery(document).ready(function(){
	// find triggers and attach event listeners
	jQuery(".video-popup-button").click(function(event){
		event.preventDefault();
		var videoID = jQuery(this).data( "videoPopupID" );
		jQuery("#" + videoID).show();
		centerVideoPopup();
		loadVideoPopup();
	});
	//CLOSING POPUP
	//Click the x event!
	jQuery(".video-popup-close").click(function(){
		disableVideoPopup();
	});
	//Click out event!
	jQuery("#backgroundPopup").click(function(){
		disableVideoPopup();
	});
	//Press Escape event!
	// conflicts with the full screen video escape, fyi
	jQuery(document).keyup(function(e){
		if(e.keyCode==27 && videoPopupStatus==1){
			disableVideoPopup();
		}
	});

});