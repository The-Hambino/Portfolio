// JavaScript Document

// Height Variables for Revealed Preview
var rowHeight = $(".size_medium").outerHeight(true);
var rowHeightX2 = Math.max($(".size_medium").outerHeight(true)) * 2;
var rowHeightX25 = Math.max($(".size_medium").outerHeight(true)) * 2.5;
var rowHeightX3 = Math.max($(".size_medium").outerHeight(true)) * 3;
var rowHeightXProduct = Math.max($(".size_medium").outerHeight(true)) * 3.5;
var fullHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 30;









// Row #2 Preview Links 

// Reveal Preview #5
var preview_link_05 = function() {
	$(".preview_link_05").click(function() {
		$("#content_05").removeClass("content_hide");
		$("#content_06").animate({opacity: ["0", "linear"]}, 200);
		$("#content_06").addClass("content_hide");
		$(".revealed_content_row_02").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_05").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};


// Reveal Preview #13
var preview_link_13 = function() {
	$(".preview_link_13").click(function() {
		$("#content_13").removeClass("content_hide");
		$("#content_14, #content_15, #content_16, #content_17, #content_18").animate({opacity: ["0", "linear"]}, 200);
		$("#content_14, #content_15, #content_16, #content_17, #content_18").addClass("content_hide");
		$(".revealed_content_row_04").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_13").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #21
var preview_link_21 = function() {
	$(".preview_link_21").click(function() {
		$("#content_21").removeClass("content_hide");
		$("#content_19, #content_20").animate({opacity: ["0", "linear"]}, 200);
		$("#content_19, #content_20").addClass("content_hide");
		$(".revealed_content_row_05").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_21").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};






// ROW #5 PREVIEW LINKS

// Reveal Preview #20
var preview_link_20 = function() {
	$(".preview_link_20").click(function() {
		$("#content_20").removeClass("content_hide");
		$("#content_03, #content_05_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_03, #content_05_03").addClass("content_hide");
		$(".revealed_content_row_05").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_20").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #03
var preview_link_03 = function() {
	$(".preview_link_03").click(function() {
		$("#content_03").removeClass("content_hide");
		$("#content_20, #content_05_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_20, #content_05_03").addClass("content_hide");
		$(".revealed_content_row_05").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_03").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #05_03
var preview_link_05_03 = function() {
	$(".preview_link_05_03").click(function() {
		$("#content_05_03").removeClass("content_hide");
		$("#content_20, #content_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_20, #content_03").addClass("content_hide");
		$(".revealed_content_row_05").animate({
			width: ["100%", "linear"],
			height: [rowHeightX25, "linear"]
		}, 500);
		$("#content_05_03").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};


// *****************************
// ROW #1 PREVIEW LINKS

// Reveal Preview #1
var preview_link_01 = function() {
	$(".preview_link_01").click(function() {
		$("#content_01").removeClass("content_hide");
		$("#content_02, #content_01_03, #content_22").animate({opacity: ["0", "linear"]}, 200);
		$("#content_02, #content_01_03, #content_22").addClass("content_hide");
		$(".revealed_content_row_01").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_01").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #2
var preview_link_02 = function() {
	$(".preview_link_02").click(function() {
		$("#content_02").removeClass("content_hide");
		$("#content_01, #content_01_03, #content_22").animate({opacity: ["0", "linear"]}, 200);
		$("#content_01, #content_01_03, #content_22").addClass("content_hide");
		$(".revealed_content_row_01").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_02").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #01-03
var preview_link_01_03 = function() {
	$(".preview_link_01_03").click(function() {
		$("#content_01_03").removeClass("content_hide");
		$("#content_01, #content_02, #content_22").animate({opacity: ["0", "linear"]}, 200);
		$("#content_01, #content_02, #content_22").addClass("content_hide");
		$(".revealed_content_row_01").animate({
			width: ["100%", "linear"],
			height: [rowHeightX25, "linear"]
		}, 500);
		$("#content_01_03").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #22
var preview_link_22 = function() {
	$(".preview_link_22").click(function() {
		$("#content_22").removeClass("content_hide");
		$("#content_01, #content_02, #content_01_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_01, #content_02, #content_01_03").addClass("content_hide");
		$(".revealed_content_row_01").animate({
			width: ["100%", "linear"],
			height: [rowHeightX25, "linear"]
		}, 500);
		$("#content_22").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};


// *****************************
// ROW #3 PREVIEW LINKS

// Reveal Preview #12
var preview_link_12 = function() {
	$(".preview_link_12").click(function() {
		$("#content_12").removeClass("content_hide");
		$("#content_03_02").animate({opacity: ["0", "linear"]}, 200);
		$("#content_03_02").addClass("content_hide");
		$(".revealed_content_row_03").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_12").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #03_02
var preview_link_03_02 = function() {
	$(".preview_link_03_02").click(function() {
		$("#content_03_02").removeClass("content_hide");
		$("#content_12").animate({opacity: ["0", "linear"]}, 200);
		$("#content_12").addClass("content_hide");
		$(".revealed_content_row_03").animate({
			width: ["100%", "linear"],
			height: [rowHeightX25, "linear"]
		}, 500);
		$("#content_03_02").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};


// *****************************
// ROW #6 PREVIEW LINKS

// Reveal Preview #06_01
var preview_link_06_01 = function() {
	$(".preview_link_06_01").click(function() {
		$("#content_06_01").removeClass("content_hide");
		$("#content_06_02, #content_06_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_06_02, #content_06_03").addClass("content_hide");
		$(".revealed_content_row_06").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_06_01").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #06_02
var preview_link_06_02 = function() {
	$(".preview_link_06_02").click(function() {
		$("#content_06_02").removeClass("content_hide");
		$("#content_06_01, #content_06_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_06_01, #content_06_03").addClass("content_hide");
		$(".revealed_content_row_06").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_06_02").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #06_03
var preview_link_06_03 = function() {
	$(".preview_link_06_03").click(function() {
		$("#content_06_03").removeClass("content_hide");
		$("#content_06_02, #content_06_01").animate({opacity: ["0", "linear"]}, 200);
		$("#content_06_02, #content_06_01").addClass("content_hide");
		$(".revealed_content_row_06").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_06_03").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};


// *****************************
// ROW #7 PREVIEW LINKS

// Reveal Preview #4
var preview_link_04 = function() {
	$(".preview_link_04").click(function() {
		$("#content_04").removeClass("content_hide");
		$("#content_19, #content_07_03, #content_07_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_19, #content_07_03, #content_07_04").addClass("content_hide");
		$(".revealed_content_row_07").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_04").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #19
var preview_link_19 = function() {
	$(".preview_link_19").click(function() {
		$("#content_19").removeClass("content_hide");
		$("#content_04, #content_07_03, #content_07_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_04, #content_07_03, #content_07_04").addClass("content_hide");
		$(".revealed_content_row_07").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_19").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #07_03
var preview_link_07_03 = function() {
	$(".preview_link_07_03").click(function() {
		$("#content_07_03").removeClass("content_hide");
		$("#content_04, #content_19, #content_07_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_04, #content_19, #content_07_04").addClass("content_hide");
		$(".revealed_content_row_07").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_07_03").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #07_04
var preview_link_07_04 = function() {
	$(".preview_link_07_04").click(function() {
		$("#content_07_04").removeClass("content_hide");
		$("#content_04, #content_19, #content_07_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_04, #content_19, #content_07_03").addClass("content_hide");
		$(".revealed_content_row_07").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_07_04").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};


// *****************************
// ROW #2 PREVIEW LINKS

// Reveal Preview #6
var preview_link_06 = function() {
	$(".preview_link_06").click(function() {
		$("#content_06").removeClass("content_hide");
		$("#content_02_02, #content_02_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_02_02, #content_02_03").addClass("content_hide");
		$(".revealed_content_row_02").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_06").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #02_02
var preview_link_02_02 = function() {
	$(".preview_link_02_02").click(function() {
		$("#content_02_02").removeClass("content_hide");
		$("#content_06, #content_02_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_06, #content_02_03").addClass("content_hide");
		$(".revealed_content_row_02").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_02_02").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #02_03
var preview_link_02_03 = function() {
	$(".preview_link_02_03").click(function() {
		$("#content_02_03").removeClass("content_hide");
		$("#content_06, #content_02_02").animate({opacity: ["0", "linear"]}, 200);
		$("#content_06, #content_02_02").addClass("content_hide");
		$(".revealed_content_row_02").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_02_03").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};



// *****************************
// Row #4 Preview Links

// Reveal Preview #14
var preview_link_14 = function() {
	$(".preview_link_14").click(function() {
		$("#content_14").removeClass("content_hide");
		$("#content_15, #content_16, #content_17, #content_18, #content_04_03, #content_04_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_15, #content_16, #content_17, #content_18, #content_04_03, #content_04_04").addClass("content_hide");
		$(".revealed_content_row_04").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_14").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #15
var preview_link_15 = function() {
	$(".preview_link_15").click(function() {
		$("#content_15").removeClass("content_hide");
		$("#content_14, #content_16, #content_17, #content_18, #content_04_03, #content_04_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_14, #content_16, #content_17, #content_18, #content_04_03, #content_04_04").addClass("content_hide");
		$(".revealed_content_row_04").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_15").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #16
var preview_link_16 = function() {
	$(".preview_link_16").click(function() {
		$("#content_16").removeClass("content_hide");
		$("#content_14, #content_15, #content_17, #content_18, #content_04_03, #content_04_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_14, #content_15, #content_17, #content_18, #content_04_03, #content_04_04").addClass("content_hide");
		$(".revealed_content_row_04").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_16").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #17
var preview_link_17 = function() {
	$(".preview_link_17").click(function() {
		$("#content_17").removeClass("content_hide");
		$("#content_14, #content_15, #content_16, #content_18, #content_04_03, #content_04_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_14, #content_15, #content_16, #content_18, #content_04_03, #content_04_04").addClass("content_hide");
		$(".revealed_content_row_04").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_17").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #18
var preview_link_18 = function() {
	$(".preview_link_18").click(function() {
		$("#content_18").removeClass("content_hide");
		$("#content_14, #content_15, #content_16, #content_17, #content_04_03, #content_04_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_14, #content_15, #content_16, #content_17, #content_04_03, #content_04_04").addClass("content_hide");
		$(".revealed_content_row_04").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_18").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #04_03
var preview_link_04_03 = function() {
	$(".preview_link_04_03").click(function() {
		$("#content_04_03").removeClass("content_hide");
		$("#content_14, #content_15, #content_16, #content_17, #content_18, #content_04_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_14, #content_15, #content_16, #content_17, #content_18, #content_04_04").addClass("content_hide");
		$(".revealed_content_row_04").animate({
			width: ["100%", "linear"],
			height: [rowHeightX25, "linear"]
		}, 500);
		$("#content_04_03").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};

// Reveal Preview #04_04
var preview_link_04_04 = function() {
	$(".preview_link_04_04").click(function() {
		$("#content_04_04").removeClass("content_hide");
		$("#content_14, #content_15, #content_16, #content_17, #content_04_03, #content_18").animate({opacity: ["0", "linear"]}, 200);
		$("#content_14, #content_15, #content_16, #content_17, #content_04_03, #content_18").addClass("content_hide");
		$(".revealed_content_row_04").animate({
			width: ["100%", "linear"],
			height: [rowHeightX2, "linear"]
		}, 500);
		$("#content_04_04").animate({
			opacity: ["1.0", "linear"]
		}, 500);
	});
};


// *****************************
// Close link
var close_link = function() {
	$(".close_preview").click(function() {
		$("#content_01, #content_02, #content_01_03, #content_22").animate({opacity: ["0", "linear"]}, 200);
		$("#content_01, #content_02, #content_01_03, #content_22").addClass("content_hide");
		$(".revealed_content_row_01").animate({
			height: [0, "linear"]
		}, 200);
	});
};

// Close link row #2
var close_link_02 = function() {
	$(".close_preview_02").click(function() {
		$("#content_06, #content_02_02, #content_02_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_06, #content_02_02, #content_02_03").addClass("content_hide");
		$(".revealed_content_row_02").animate({
			height: [0, "linear"]
		}, 200);
	});
};

// Close link row #3
var close_link_03 = function() {
	$(".close_preview_03").click(function() {
		$("#content_12, #content_03_02").animate({opacity: ["0", "linear"]}, 200);
		$("#content_12, #content_03_02").addClass("content_hide");
		$(".revealed_content_row_03").animate({
			height: [0, "linear"]
		}, 200);
	});
};

// Close link row #4
var close_link_04 = function() {
	$(".close_preview_04").click(function() {
		$("#content_14, #content_15, #content_16, #content_17, #content_18, #content_04_03, #content_04_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_14, #content_15, #content_16, #content_17, #content_18, #content_04_03, #content_04_04").addClass("content_hide");
		$(".revealed_content_row_04").animate({
			height: [0, "linear"]
		}, 200);
	});
};

// Close link row #5
var close_link_05 = function() {
	$(".close_preview_05").click(function() {
		$("#content_20, #content_03, #content_05_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_20, #content_03, #content_05_03").addClass("content_hide");
		$(".revealed_content_row_05").animate({
			height: [0, "linear"]
		}, 200);
	});
};

// Close link row #6
var close_link_06 = function() {
	$(".close_preview_06").click(function() {
		$("#content_06_01, #content_06_02, #content_06_03").animate({opacity: ["0", "linear"]}, 200);
		$("#content_06_01, #content_06_02, #content_06_03").addClass("content_hide");
		$(".revealed_content_row_06").animate({
			height: [0, "linear"]
		}, 200);
	});
};

// Close link row #7
var close_link_07 = function() {
	$(".close_preview_07").click(function() {
		$("#content_04, #content_19, #content_07_03, #content_07_04").animate({opacity: ["0", "linear"]}, 200);
		$("#content_04, #content_19, #content_07_03, #content_07_04").addClass("content_hide");
		$(".revealed_content_row_07").animate({
			height: [0, "linear"]
		}, 200);
	});
};



// Run Preview Links 
$(document).ready(preview_link_01);
$(document).ready(preview_link_02);
$(document).ready(preview_link_03);
$(document).ready(preview_link_04);
$(document).ready(preview_link_05);
$(document).ready(preview_link_06);
$(document).ready(preview_link_12);
$(document).ready(preview_link_13);
$(document).ready(preview_link_14);
$(document).ready(preview_link_15);
$(document).ready(preview_link_16);
$(document).ready(preview_link_17);
$(document).ready(preview_link_18);
$(document).ready(preview_link_19);
$(document).ready(preview_link_20);
$(document).ready(preview_link_21);
$(document).ready(preview_link_22);
$(document).ready(preview_link_05_03);
$(document).ready(preview_link_01_03);
$(document).ready(preview_link_03_02);
$(document).ready(preview_link_06_01);
$(document).ready(preview_link_06_02);
$(document).ready(preview_link_06_03);
$(document).ready(preview_link_07_03);
$(document).ready(preview_link_07_04);
$(document).ready(preview_link_02_02);
$(document).ready(preview_link_02_03);
$(document).ready(preview_link_04_03);
$(document).ready(preview_link_04_04);

$(document).ready(close_link);
$(document).ready(close_link_02);
$(document).ready(close_link_03);
$(document).ready(close_link_04);
$(document).ready(close_link_05);
$(document).ready(close_link_06);
$(document).ready(close_link_07);




