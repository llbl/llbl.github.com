var slideMenu=function(){
	var slider,items,maxW,minW,normalW;
	return{
		build:function(sm,sw){
            slider = $('#slider');
            items = $('#slider li');
            maxW = sw-1;
            normalW = $('#slider').width()/items.length - 1;
			//normalW = 200;
            minW =  Math.floor(($('#slider').width() - maxW) /  (items.length-1));
            numPlanes = new Array();
            desPlanes = new Array();
            
            items.hover(function()
            {
                slideMenu.over($(this).index());					   
            }, function(){
            	slideMenu.out();						   
            })
            
            for(var i = 0; i < items.length; i++){
                items.eq(i).width(normalW);
                numPlanes[i] = items.eq(i).find('.over').css({opacity:0.5}); 
                //numPlanes[i].stop().animate({left:(normalW-48)/2}, 0);
                desPlanes[i] = items.eq(i).find('.txt1').css({left:-300}); 
            }
		},
        over:function(itemNum){
           for(var i=0; i<items.length; i++){
                if(i != itemNum){
                    items.eq(i).stop().animate({width:minW}, 500);
                    //numPlanes[i].stop().animate({left:(minW-48)/2}, 500);
					numPlanes[i].stop().animate({opacity:0.8}, 500);
                } else if(i == itemNum){
                    items.eq(i).stop().animate({width:maxW}, 500);
					numPlanes[i].stop().animate({opacity:0}, 500);
                    //numPlanes[i].stop().animate({left:'-60px'}, 500);
                    desPlanes[i].stop().animate({left:(maxW-280)/2}, 500);
                }
           }
        },
        out:function(){
           for(var i=0; i<items.length; i++){
                items.eq(i).stop().animate({width:normalW}, 500);
                ///numPlanes[i].stop().animate({left:(normalW-48)/2}, 500);
				numPlanes[i].stop().animate({opacity:0.5}, 500);
                desPlanes[i].stop().animate({left:-300}, 500);
           }
        }
	};
}();