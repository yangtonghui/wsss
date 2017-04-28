/*
*公共的footer组件
*create by Chloe Young om 2017/4/27 
 */
(function(){
 	var footerHtml  = '<div class="w footer-heart">'+
			          '<p class="footer-about">'+
			          '<span id="footerAbout">关于我们</span>'+	
			          '<span id="footerLaw">法律声明</span>'+	
			          '<span id="footerService">服务条款</span>'+	
			          '<span id="footerContact">联系方式</span>'+	
			          '</p>'+
			          '<p class="footer-des">建议使用Internet Explorer 8.0以上版本，支持最低分辨率1024X768，请安装Adobe Reader10.0或以上版本软件</p>'+
			          '<p class="footer-des">中卫市市场管理局 宁ICP备13045770号</p>'+
		              '</div>';
	$("#Footer").append(footerHtml);	              
})();