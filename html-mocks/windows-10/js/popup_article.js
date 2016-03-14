// 0 means hidden; 1 means visible;
var articlePopupStatus = 0;

//shows popup
function loadArticlePopup(){
	// shows popup only if it is hidden
	if(articlePopupStatus==0){
		jQuery("#backgroundPopup").css({
			"opacity": "0.8"
		});
		jQuery("#backgroundPopup").fadeIn(300);
		jQuery("#article-popup").fadeIn(300);
		articlePopupStatus = 1;
	}
}

// hides popup
function disableArticlePopup(){
	// hides popup only if it is visible
	if(articlePopupStatus==1){
		jQuery("#backgroundPopup").fadeOut(300);
		jQuery("#article-popup").hide();
		articlePopupStatus = 0;
		jQuery(".article-popup-article").hide();
	}
}

// centering popup
function centerArticlePopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = document.documentElement.clientHeight - 100;
	var popupWidth = jQuery("#article-popup").width();
	//centering
	jQuery("#article-popup").css({
		"height": popupHeight,
		"position": "fixed",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2,
		"overflow-y": "scroll"
	});
}

// attaching CLICK & KEYBOARD event listeners
jQuery(document).ready(function(){
	// find triggers and attach event listeners
	jQuery(".article-popup-button").click(function(event){
		event.preventDefault();
		var articleID = jQuery(this).data( "articlePopupID" );
		jQuery("#" + articleID).show();
		centerArticlePopup();
		loadArticlePopup();
	});
	//CLOSING POPUP
	//Click the x event!
	jQuery(".article-popup-close").click(function(){
		disableArticlePopup();
	});
	//Click out event!
	jQuery("#backgroundPopup").click(function(){
		disableArticlePopup();
	});
	//Press Escape event!
	// conflicts with the full screen video escape, fyi
	jQuery(document).keyup(function(e){
		if(e.keyCode==27 && articlePopupStatus==1){
			disableArticlePopup();
		}
	});

});

