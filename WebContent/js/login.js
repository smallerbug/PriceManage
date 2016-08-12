/*******************************************************************************
 * *
 * 
 * @author weijf
 * @file_name login.js *
 * @version 1.0 *
 */

$(function() {
	init();

});

var backImgsList = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg" ];

/* 页面初始化 */
function init() {
	backChoose();
}

/* 随机选择背景图片 */
function backChoose() {
	var backImg = 0;
	backImg = Math.round(Math.random() * 5);
	// console.log(backImg);
	$("body").css(
			{
				"background" : "url('../imgs/background/"
						+ backImgsList[backImg] + "')",
				"background-repeat" : "no-repeat",
				"background-size" : "100% 100%",
				"background-attachment" : "fixed"
			});
}