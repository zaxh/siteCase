//--living start--
(function(){
	var $l_listItem = $("#living .l_left  .l_l_bottom .l_l_b_list .l_l_b_list_item");
	var $a = $("#living .l_right .l_r_top>a");
	var $con = $("#living .l_right .l_r_bottom .b_con");

	$l_listItem.hover(function(){
		$(this).find(".list_item_mark").fadeIn();
	},function(){
		$(this).find(".list_item_mark").fadeOut();
	});
	$a.click(function(){
		$(this).css({color : "#00a1d6"}).siblings().css({color : "#000"});
		$(this).addClass("selected").siblings().removeClass("selected");
		$con.eq( $(this).index() ).show().siblings().hide();
	});
})();

//--newest start--
(function(){
	var $n_items = $("#newest .n_header .n_h_list .list_items");
	var $span = $("#newest .n_header .n_h_list .list_items>span");
	var $list = $("#newest .n_l .n_contaniner .n_c_list");
	var $rbList = $("#newest .n_r .n_r_banner>.b_list");
	var $rbListItems = $("#newest .n_r .n_r_banner>.b_list>.b_list_items");
	var $rbTab = $("#newest .n_r .n_r_banner>.b_tab>.b_tab_items");
	var $p = $("#newest .n_r .n_r_banner>p.b_title");
	var timer = null;
	var n = 0;
	$n_items.click(function(){
		var _i = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$span.each(function(){
			 $(this).html( $(this).html().replace("周",""));	
		});
		if(_i != 0){
			$span.eq(_i).html(  "周" + $span.eq(_i).html() );
		}
		$list.eq(_i).show().siblings().hide();
	});
	$rbTab.mouseenter(function(){
		clearInterval( timer );
		n = $(this).index();
		var _dataTitle = $rbListItems.eq(n).attr("data-title");
		$(this).addClass("on").siblings().removeClass("on");
		$rbList.stop().animate({"marginLeft" : -n*$rbListItems.width() },500);
		$p.html( _dataTitle );
	});
	$rbTab.mouseleave(function(){
		auto();
	});
	auto();
	function auto(){
		timer = setInterval(function(){
			n++;
			if( n>=$rbTab.length ){ n=0; }
			var _dataTitle = $rbListItems.eq(n).attr("data-title");
			$rbTab.eq(n).addClass("on").siblings().removeClass("on");
			$rbList.stop().animate({"marginLeft" : -n*$rbListItems.width() },500);
			$p.html( _dataTitle );
		},3000);
	}
})();