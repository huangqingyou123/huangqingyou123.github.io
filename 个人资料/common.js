
$(document).ready(function(){ 
　　//分享
	if(typeof(title)=='undefined')
		title='';
	if(typeof(summary)=='undefined')
		summary='';
	if(typeof(pic)=='undefined')
		pic='';
	(function(title,summary,pic){
		share('.share',title,summary,pic,'');
//		var url=window.location.href.replace('#comment','');
//		var href = "http://www.jiathis.com/send/?uid=1408355569183255&url=" + url + "&title=" + title + "&summary=" + summary + "&pic=" + pic + "&webid=";
//		var share="<a class=\"tsina\" href=\""+href+"tsina\" target=\"_blank\"></a>";
//		share=share+"<a class=\"weixin\" href=\""+href+"weixin\" target=\"_blank\"></a>";
//		share=share+"<a class=\"qzone\" href=\""+href+"qzone\" target=\"_blank\"></a>";
//		share=share+"<a class=\"qq\" href=\""+href+"cqq\" target=\"_blank\"></a>";
//		share=share+"<a class=\"email\" href=\""+href+"email\" target=\"_blank\"></a>";
//		share=share+"<a href=\"http://www.jiathis.com/share/\" class=\"jiathis more\" target=\"_blank\"><img src=\"../images/share-more.png\" border=\"0\" /></a>";
//		$(".share").prepend(share);
	})(title,summary,pic);
	
	
	
}); 

function share(box,title,summary,pic,url){
	if(url=='')
		var url=window.location.href.replace('#comment','');
	var href = "http://www.jiathis.com/send/?uid=1408355569183255&url=" + url + "&title=" + title + "&summary=" + summary + "&pic=" + pic + "&webid=";
	var share="<a class=\"tsina\" href=\""+href+"tsina\" target=\"_blank\"></a>";
	share=share+"<a class=\"weixin\" href=\""+href+"weixin\" target=\"_blank\"></a>";
	share=share+"<a class=\"qzone\" href=\""+href+"qzone\" target=\"_blank\"></a>";
	share=share+"<a class=\"qq\" href=\""+href+"cqq\" target=\"_blank\"></a>";
	share=share+"<a class=\"email\" href=\""+href+"email\" target=\"_blank\"></a>";
	share=share+"<a href=\"http://www.jiathis.com/share/\" class=\"jiathis more\" target=\"_blank\"><img src=\"../images/share-more.png\" border=\"0\" /></a>";
	$(box).prepend(share);
}


var isie6 = window.XMLHttpRequest ? false : true;
function addfavorite() {
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch (e) {
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}

// 判断是否移动客户端
var browser = {
	versions : function() {
		var u = navigator.userAgent, app = navigator.appVersion, iswap = true;
		if (jQuery.cookie("iswap") == "1")
			iswap = false;
		else {
			var url = window.location.href;
			if (url.indexOf("?web") > -1) {
				jQuery.cookie("iswap", "1")
				iswap = false;
			}
		}
		return {
			mobile : !!u.match(/AppleWebKit.*Mobile.*/)	|| !!u.match(/AppleWebKit/), // 是否为移动终端
			android : u.indexOf('Android') > -1, // android终端或者uc浏览器
			iPhone : u.indexOf('iPhone') > -1, // 是否为iPhone
			iswap : iswap
		};
	}()
}
if ((browser.versions.android || browser.versions.iPhone)&& browser.versions.iswap) {
	var url = window.location.href;
	var array = url
			.match(/([^\/]+)\/([\d]{4})_([\d]{2})_([\d]{2})_(\d+)_(\w*).shtml$/);
	if (array != null && array.length >= 6)
		url = "http://m.guancha.cn/" + array[1] + "/" + array[2] + "_"+ array[3] + "_" + array[4] + "_" + array[5];
	else
		url = url.replace("www.guancha.cn", "m.guancha.cn").replace("/_\w\.shtml/g","").replace("index", "").replace("list_1", "").replace("_mc","");
	window.location.href = url;
}
function newtoponload() {
	var c = document.getElementById("full");
	function b() {
		var a = document.documentElement.scrollTop || window.pageYOffset	|| document.body.scrollTop;
		if (a > 0) {
			if (isie6) {
				c.style.display = "none";
				clearTimeout(window.show);
				window.show = setTimeout(function() {
					var d = document.documentElement.scrollTop	|| window.pageYOffset || document.body.scrollTop;
					if (d > 0) {
						c.style.display = "block";
						c.style.top = (400 + d) + "px";
					}
				}, 300)
			} else {
				c.style.display = "block";
			}
		} else {
			c.style.display = "none";
		}
	}
	if (isie6) {
		c.style.position = "absolute";
	}
	window.onscroll = b;
	;
	b();
}
function Statement() {
	$("#context_endf").html(
			"请支持独立网站，转发请注明本文链接：<a href='" + location.href + "'>"+ location.href + "</a>");
	document.body.oncopy = function() {
		setTimeout(
				function() {
					var text = getClipboard();
					if (text) {
						text = text + "\r\n请支持独立网站，转发请注明本文链接："+ document.location.href;
						copy2Clipboard(text);
					}
				}, 100);
	}
}
// 复制声明开始
copy2Clipboard = function(txt) {
	if (window.clipboardData) {
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", txt);
	} else if (navigator.userAgent.indexOf("Opera") != -1) {
		window.location = txt;
	} else if (window.netscape) {
		try {
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		} catch (e) {
			// alert("您的firefox安全限制限制您进行剪贴板操作，请打开’about:config’将signed.applets.codebase_principal_support’设置为true’之后重试，相对路径为firefox根目录/greprefs/all.js");
			return false;
		}
		var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if (!clip)
			return;
		var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if (!trans)
			return;
		trans.addDataFlavor('text/unicode');
		var str = new Object();
		var len = new Object();
		var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copytext = txt;
		str.data = copytext;
		trans.setTransferData("text/unicode", str, copytext.length * 2);
		var clipid = Components.interfaces.nsIClipboard;
		if (!clip)
			return false;
		clip.setData(trans, null, clipid.kGlobalClipboard);
	}
}
function getClipboard() {
	if (window.clipboardData) {
		return (window.clipboardData.getData('text'));
	} else {
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				var clip = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
				if (!clip) {
					return;
				}
				var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
				if (!trans) {
					return;
				}
				trans.addDataFlavor("text/unicode");
				clip.getData(trans, clip.kGlobalClipboard);
				var str = new Object();
				var len = new Object();
				trans.getTransferData("text/unicode", str, len);
			} catch (e) {
				alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
				return null;
			}
			if (str) {
				if (Components.interfaces.nsISupportsWString) {
					str = str.value.QueryInterface(Components.interfaces.nsISupportsWString);
				} else {
					if (Components.interfaces.nsISupportsString) {
						str = str.value.QueryInterface(Components.interfaces.nsISupportsString);
					} else {
						str = null;
					}
				}
			}
			if (str) {
				return (str.data.substring(0, len.value / 2));
			}
		}
	}
	return null;
}
// 复制声明结束

// 投票
var fnInitVote = function(oData, pid) {
	if (oData)
		$("#vote_area").show();
	var $_mood = $(".mood");
	var $_content = $_mood.find("#mood_content");
	var _totalcount = 0;
	$.each(oData, function(i, e) {
		_totalcount += parseInt(e.count);
	});
	$(".mood_num").text(_totalcount);
	$.each(oData,	function(i, e) {
						var _rate = 0;
						if (_totalcount != 0)
							_rate = (parseInt(e.count) / _totalcount) * 100;
						$_content.find("#tang" + e.id).css("height",_rate + "%");
						var _vid = e.id;
						$_content.find(".snum" + e.id).text(e.count).siblings("img.mood_img").click(function() {
											var _flag = $.cookie("vote_" + pid);
											if (_flag == "1") {
												alert("您已经投过票了!");
												return false;
											}
											$.ajax({
														type : "get",
														aysnc : false,
														url : _API_URL+ "/vote/set?pid="+ pid + "&vid="+ _vid,
														dataType : "jsonp",
														jsonp : "callback",
														success : function(e) {if (e.status) {
																$_content.find(".snum"+ _vid).text(parseInt($_content.find(".snum"+ _vid)	.text()) + 1);
																$.cookie("vote_"+ pid,"1");
															}
														}
													});
										});
					});
}
// 相关阅读
var GetKeywordNewsData = function(keyword) {
	if (keyword == null || keyword == "")
		return false;
	$.ajax({
		type : "get",
		aysnc : false,
		url : _API_URL + "/getReadings/get?keyword=" + keyword,
		dataType : "jsonp",
		jsonp : "callback",
		success : function(e) {
			if (e && e.content) {
				$("#div_keywordNews").html(e.content);
				$(".readers").show();
			}
		}
	});
}
$(function() {
	$("#full").click(function() {
		window.scrollTo(0, 0);
	});
	$(window).load(function() {
		newtoponload()
	});
	if ($.slide) {
		jQuery(".adboard").slide({
			mainCell : "ul",
			effect : "fade",
			autoPlay : true,
			interTime : "5000"
		});
	}
});