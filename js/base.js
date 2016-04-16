// JavaScript Document

$("#resume").click(function() {
	if ($("#resume").hasClass("hide-resume")) {
		$("#resume").addClass("show-resume").removeClass("hide-resume");
	} else { 
		$("#resume").removeClass("show-resume").addClass("hide-resume");
	};
});  

$("#rwd-link").click(function() {
	if ($("#rwd-content").hasClass("hide-content")) {
		$("#portfolio-content").addClass("portfolio-open");
		$("#ecommerce-link").removeClass("link-open");
		$("#print-link").removeClass("link-open");
		$("#ecommerce-content").removeClass("show-content").addClass("hide-content");
		$("#print-content").removeClass("show-content").addClass("hide-content");
		$("#rwd-content").addClass("show-content").removeClass("hide-content");
		$("#rwd-link").addClass("link-open");
	} else {
		$("#rwd-content").removeClass("show-content").addClass("hide-content");
		$("#rwd-link").removeClass("link-open");
		$("#portfolio-content").removeClass("portfolio-open");
	};
});

$("#ecommerce-link").click(function() {
	if ($("#ecommerce-content").hasClass("hide-content")) {
		$("#portfolio-content").addClass("portfolio-open");
		$("#rwd-link").removeClass("link-open");
		$("#print-link").removeClass("link-open");
		$("#rwd-content").removeClass("show-content").addClass("hide-content");
		$("#print-content").removeClass("show-content").addClass("hide-content");
		$("#ecommerce-content").addClass("show-content").removeClass("hide-content");
		$("#ecommerce-link").addClass("link-open");
	} else {
		$("#ecommerce-content").removeClass("show-content").addClass("hide-content");
		$("#ecommerce-link").removeClass("link-open");
		$("#portfolio-content").removeClass("portfolio-open");
	};
});

$("#print-link").click(function() {
	if ($("#print-content").hasClass("hide-content")) {
		$("#portfolio-content").addClass("portfolio-open");
		$("#rwd-link").removeClass("link-open");
		$("#ecommerce-link").removeClass("link-open");
		$("#rwd-content").removeClass("show-content").addClass("hide-content");
		$("#ecommerce-content").removeClass("show-content").addClass("hide-content");
		$("#print-content").addClass("show-content").removeClass("hide-content");
		$("#print-link").addClass("link-open");
	} else {
		$("#print-content").removeClass("show-content").addClass("hide-content");
		$("#print-link").removeClass("link-open");
		$("#portfolio-content").removeClass("portfolio-open");
	};
});