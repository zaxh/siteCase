(function(){
	//游戏中心右侧
	var $a = $("#top .t_b_con_nav ul li:nth-child(3) .game .g_right .g_right_list a.g_r_item");
	var $divImg = $(".divimg");
	//投稿
	var $contribute = $("#top .t_blur .t_b_con .t_b_con_btn>ul>li.t_b_con_btn3");
	//菜单
	var $menu_li = $("#num .n_menu .n_m_left>li.n_m_l_item");
	var $menu_a = $("#num .n_menu .n_m_left>li.n_m_l_item>a");
	var $menu_ul = $("#num .n_menu .n_m_left>li.n_m_l_item>ul.i_num");
	var $menu_s1 = $("#num .n_menu .n_m_left>.s1");
	var $menu_s1con = $("#num .n_menu .n_m_left>.s1>.con");
	var $menu_s2 = $("#num .n_menu .n_m_left>.s2");
	var $menu_s2ul = $("#num .n_menu .n_m_left>.s2>.telecast");
	//内容顶部区轮播区
	var $bl = $(".container_top_wrapper .container_top>.b_l");
	var $more = $(".container_top_wrapper .container_top>.b_l>.more");
	var $topic_preview = $(".container_top_wrapper .container_top>.b_l>.topic_preview");
	var $li = $(".container_top_wrapper .container_top>.b_l>.topic_preview>li");
	var $tabLi = $(".container_top_wrapper .container_top>.b_l>.tab>li");
	var $titleLi = $(".container_top_wrapper .container_top>.b_l>.title>li");
	var $liW = $li.width();
	var timer = null;
	var n = 0;
	//内容顶部区右侧区
	var $r_con = $(".container_top_wrapper .container_top>.b_r>.con");
	var $r_con_title = $(".container_top_wrapper .container_top>.b_r>.con>.title");
	var $r_con_mark = $(".container_top_wrapper .container_top>.b_r>.con>.mark");
	var $r_con_info = $(".container_top_wrapper .container_top>.b_r>.con>.info");
	//推广
	var $bl_con_item = $(".promote_wrapper .b_l .bl_con>ul.bl_con_list .bl_con_item");
	var timer = null;
	

	/*********************** 功能区 ***********************************************************************/

	//游戏中心右侧
	$a.hover(function(){
		var url = $(this).attr("data-image");
		$divImg.attr("style","background:url("+url+") no-repeat; display:block;");
	},function(){
		$divImg.hide();
	});
	//投稿
	$contribute.hover(function(){
		$(this).css("background" , "url('img/header/top/login/post-hover.png')");
	},function(){
		$(this).css("background" , "url('img/header/top/login/post.png')");
	});
	//菜单
	$menu_li.hover(function(){
		var index = $(this).index()-1;
		if(index != -1){
			$menu_ul.eq(index).show();
		}
	},function(){
		$menu_ul.hide();
	});

	$menu_s1.hover(function(){
		$menu_s1con.show();
	},function(){
		$menu_s1con.hide();
	});
	$menu_s2.hover(function(){
		$menu_s2ul.show();
	},function(){
		$menu_s2ul.hide();
	});
	//内容顶部区轮播区
	$bl.hover(function(){
		$more.fadeIn();
	},function(){
		$more.fadeOut();
	});
	//自动轮播
	$tabLi.click(function(){
		n = $(this).index();
		$topic_preview.animate({"left":-n*$liW+"px"},600);
		$(this).addClass("on").siblings().removeClass("on");
		$titleLi.eq(n).addClass("show").siblings().removeClass("show");
	});
	function auto(){
		timer = setInterval(function(){
			n++;
			if(n>$li.length-1){
				n=0;
			}
			$topic_preview.animate({"left":-n*$liW+"px"},600);
			$tabLi.eq(n).addClass("on").siblings().removeClass("on");
			$titleLi.eq(n).addClass("show").siblings().removeClass("show");
		},3000);
	}
	auto();
	$bl.hover(function(){
		clearInterval( timer );
	},auto);
	//顶部区域右侧
	$r_con.hover(function(){
		var _index = $(this).index();
		$r_con_title.eq( _index ).hide();
		$r_con_mark.eq( _index ).show();
		$r_con_info.eq( _index ).show();
		$r_con_info.eq( _index ).children("p").fadeIn();
	},function(){
		var _index = $(this).index();
		$r_con_title.eq( _index ).show();
		$r_con_mark.eq( _index ).hide();
		$r_con_info.eq( _index ).hide();
		$r_con_info.eq( _index ).children("p").fadeOut();
	});
	//推广
	$bl_con_item.hover(function(){
		var _dataTitle = $(this).attr("data-title");
		var _dataAuthor = $(this).attr("data-author");
		var _dataDate = $(this).attr("data-date");
		var _dataDescript = $(this).attr("data-descript");
		var _dataPl = $(this).attr("data-pl");
		var _dataDm = $(this).attr("data-dm");
		var _dataSc = $(this).attr("data-sc");
		var _dataYb = $(this).attr("data-yb");

		var $bl_con_i_c_hidden = $("<div class='bl_con_i_c_hidden'></div>");
		var $h_title = $("<div class='h_title'>"+_dataTitle+"</div>");
		var $h_ftitle = $("<div class='h_ftitle'></div>");
		var $h_f_con = $("<span class='h_f_con'>"+_dataAuthor+"</span>");
		var $h_f_time = $("<span class='h_f_time'>"+_dataDate+"</span>");
		var $h_con = $("<div class='h_con'></div>");
		var $h_c_img = $("<div class='h_c_img'></div>");
		var $img = $("<img src='img/promote/"+($(this).index()+1)+".jpg_160x100.jpg' alt='' width='100%' height='100%' style='border:none;' />");
		var $h_c_container = $("<div class='h_c_container'>"+_dataDescript+"</div>");
		var $h_other = $("<div class='h_other'></div>");
		var $h_o_play = $("<span class='h_o_play'>"+_dataPl+"</span>");
		var $h_o_read = $("<span class='h_o_read'>"+_dataDm+"</span>");
		var $h_o_collection = $("<span class='h_o_collection'>"+_dataSc+"</span>");
		var $h_o_coin = $("<span class='h_o_coin'>"+_dataYb+"</span>");


		$(this).append($bl_con_i_c_hidden);
		$bl_con_i_c_hidden.append($h_title);
		$bl_con_i_c_hidden.append($h_ftitle);
		$bl_con_i_c_hidden.append($h_con);
		$bl_con_i_c_hidden.append($h_other);
		$h_ftitle.append($h_f_con);
		$h_ftitle.append($h_f_time);
		$h_con.append($h_c_img);
		$h_c_img.append($img);
		$h_con.append($h_c_container);
		$h_other.append($h_o_play);
		$h_other.append($h_o_read);
		$h_other.append($h_o_collection);
		$h_other.append($h_o_coin);
		
		$(this).find(".barrage_wrap").show();
		barrage( $(this) );
	},function(){
		if( $(this).children(".bl_con_i_c_hidden") ){
			$(this).children(".bl_con_i_c_hidden").remove();
		}
		clearInterval(timer);
		$(this).find(".barrage_wrap").hide();
		$(this).find(".barrage").stop().css("left","160px");
	});
	//弹幕移动
	function barrage( obj ){
		var $bar = obj.find(".barrage");
		var _index = -1;
		timer = setInterval(function(){
			var a = _index-1;
			_index++;
			
			if(a>-1){
				var pos = $bar.eq(a).position().left + $bar.eq(a).width();
				var pos2 = $bar.eq(_index-1).position().left + $bar.eq(_index-1).width();
				if( pos <170 ){
					$bar.eq(_index).css({ top : $bar.eq(a).position().top });
					fn();
				}else if( pos2<170 ){
					$bar.eq(_index).css({ top : $bar.eq(a).position().top });
					fn();
				}else{
					index--;
				}
			}else if(a==-2){
				$bar.eq(_index).css({top : "0px"});
				fn();
			}else if(a==-1){
				$bar.eq(_index).css({top : "15px"});
				fn();
			}

			if(_index >= $bar.length)clearInterval(timer);

			function fn(){
				var time = 10000;
				if( $bar.eq(_index).width() > 150 )time=7000;
				$bar.eq(_index).stop().animate({
					left : "-500px"
				},time);
			};
		},2000);
	}
})();