//==========================================================================================
// 设置全局字体大小
//==========================================================================================
function setRootSize() {
	var docEl = document.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (clientWidth >= 2560) {
				docEl.style.fontSize = '100px';
			} else if (clientWidth <= 600) {
				docEl.style.fontSize = '32px';
			} else {
				docEl.style.fontSize = 52 * (clientWidth / 1920) + 30 + 'px';
			}
		};
	window.addEventListener(resizeEvt, recalc, false);
	document.addEventListener('DOMContentLoaded',recalc, false);
}

setRootSize();

// 友情链接
$(".footer-link").on('click',function () {
	if ($(".link-list").height() > 0) {
		$(".link-list").animate({height:0},200)
	} else {
		var mount = $(".link-list a").length;
		$(".link-list").animate({height:mount * 28 + 'px'},200)
	}
})

// 内页导航
$(".page-nav a").on('click',function () {
	$(this).addClass('active').siblings().removeClass('active');
})
