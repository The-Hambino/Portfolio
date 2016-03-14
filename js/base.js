// JavaScript Document

$("#resume").click(function() {
	if ($("#resume").hasClass("hide-resume")) {
		$("#resume").addClass("show-resume").removeClass("hide-resume");
	} else { 
		$("#resume").removeClass("show-resume").addClass("hide-resume");
	};
});  