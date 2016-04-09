var $=function(id){return document.getElementById(id)||null;};
String.isNullOrEmpty=function(v){
    return !(typeof(v)==="string"&&v.length!=0);
};

var neg_landing={
	prefix:"ngl_",
	list:[],
	status:{
		outStock:{type:"0",className:"",text:""},
		deactivated:{type:"-1",className:"soldout",text:"Sold Out"}
	},
	init:function(){
		neg_landing.list=ng_list;
	},
	isDownloadItem:function(itemNumber){
		if(String.isNullOrEmpty(itemNumber)&&itemNumber.length<2){
			return false;
		};
		var rightFlag=itemNumber.substring(itemNumber.length, itemNumber.length-2);
		return (rightFlag.toUpperCase()=="SF");
	},
	autoNotifyUrl:function(){
		var isCA=(location.href.indexOf(".ca") != -1);
		var isEspanish = (location.href.indexof("espanol.") != -1);
		
		if(isCA)
		{
			if(isEspanish)
			{
				return "https://secure.espanol.newegg.ca/NewMyAccount/AutoNotify.aspx";
			}
			return "https://secure.newegg.ca/NewMyAccount/AutoNotify.aspx";
		}
		else 
		{
			if (isEspanish)
			{
				return "https://secure.espanol.newegg.com/NewMyAccount/AutoNotify.aspx";
			}
			return "https://secure.newegg.com/NewMyAccount/AutoNotify.aspx";	
		};
	},
	adjustStock:function(){
		neg_landing.init();
		if(!neg_landing.list){return;};
		for(var i=0;i<neg_landing.list.length;i++){
			neg_landing._adjustStock(neg_landing.list[i]);
		};
	},
	_adjustStock:function(itemNumber){
		if(String.isNullOrEmpty(itemNumber)){
			return;
		};
		//deactivated item
		if(Product[itemNumber]==null){
			neg_landing.hidden(neg_landing.status.deactivated.type,itemNumber);
			return;
		};
		//out of stock
		if(Product[itemNumber].stock.displayRawValue() =="0" && Product[itemNumber].isPreOrder.displayRawValue() == false && !neg_landing.isDownloadItem(itemNumber)){
			neg_landing.hidden(neg_landing.status.outStock.type,itemNumber);
			return;
		};
	},
	hidden:function(status,itemNumber){
		var ho=$(neg_landing.prefix+itemNumber);
		if(!ho){return;};
		var builder=[];
		switch(status){
			case neg_landing.status.deactivated.type:
				builder.push('<span class="'+neg_landing.status.deactivated.className+'">');
				builder.push(this.status.deactivated.text);
				builder.push('</span>');
				ho.innerHTML=builder.join('');
				break;

			case neg_landing.status.outStock.type:
				//builder.push('<a href="'+neg_landing.autoNotifyUrl()+'?Submit=ADD&Item='+Product[itemNumber].neweggItemNumber+'" >');
				//builder.push('<img title="Auto Notify" alt="Auto Notify" src="http://c1.neweggimages.com/WebResource/Themes/2005/Nest/n1_Large_AutoNotify.gif"/>');
				//builder.push('</a>');
				builder.push('<dl><dt class="soldout">Sold Out</dt></dl>');
				ho.innerHTML=builder.join('');
				break;
			default:
				break;
		};
	}
};

if(typeof(window.addEventListener) != "undefined"){
	window.addEventListener("load", neg_landing.adjustStock, false );
}else{
	window.attachEvent("onload", neg_landing.adjustStock );
}