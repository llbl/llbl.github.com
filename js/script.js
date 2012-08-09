
function showSplash(){
	setTimeout(function () {
		$('.lines').stop().animate({opacity:0},800,'easeOutExpo');
		$('.splash').css({display:'block'}).stop().animate({opacity:1},800,'easeOutExpo');
		$('.logo .txt2').css({display:'block'}).stop().animate({opacity:1},800,'easeOutExpo');


	}, 500);
	
};
function hideSplash(){ 
	
	$('.splash').stop().animate({opacity:0},800,'easeOutExpo', function(){ $(this).css({display:'none'}); });
	$('.logo .txt2').stop().animate({opacity:0},800,'easeOutExpo', function(){ $(this).css({display:'none'}); });
	$('.lines').stop().animate({opacity:1},800,'easeOutExpo');
   
};
function hideSplashQ(){	
	
	$('.lines').css({opacity:1});
	$('.splash').css({display:'none', opacity:0});
	$('.logo .txt2').css({display:'none', opacity:0});

	
};

///////////////////

$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});
	
	/////// icons
	$(".icons li").find("a").css({opacity:0.5});
	$(".icons li a").hover(function() {
		$(this).stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).stop().animate({opacity:0.5 }, 400, 'easeOutExpo' );		   
	});
	
	

	
	
	
	
	
	
	
	// for lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
	
	
		
 });  ////////




$(window).load(function() {
	
	slideMenu.build('#slider',300);
	//slider = $('#slider');
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 16,
		verticalDragMinHeight: 100,
		verticalDragMaxHeight: 100
	});	
	
	$('#bgStretch').bgStretch({
			align:'leftTop',
			navigs:$('#pagination').navigs()
	});

	
	//content switch	
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',top:-430});
		   $('.lines').css({opacity:0});
        },
        actFu:function(_){
			if(_.curr){
				_.curr.css({display:'block', top:-430}).stop().animate({top:0},800, 'easeInOutExpo');	                
			}   
			if(_.prev){
				_.prev.stop().animate({top:430},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
			}
            		
			//console.log(_.pren, _.n);			
            if ( (_.n == 0) && (_.pren != -1) ){
                showSplash();
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();  
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
            }
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_PORTFOLIO',
        hoverIn:function(li){ 

        },
        hoverOut:function(li){	

        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});
	}, 100);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});