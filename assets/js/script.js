var tar=0;
var tabInd=0;
var page_opened=0;
$( document ).ready(function() {
	$('#dummyDiv').focus().first();
	$("#btn0").css('background-color', '#fff');
	$("#btn0").css('color', '#000');
	
	//$("#btn0").attr('data','checked');
	$(".btnClass").off('click').on('click keyup', clickedFn);

 	$('.pageClass').hide();
	$("#page_0").show().fadeIn(500);

	
	/*Tab index set*/
	for(var k=0; k<5; k++){
		$('#btn'+k).attr('tabindex', tabInd);
			//tabInd++;
		$('#page_'+k).children().each(function(){
			$(this).attr('tabindex', tabInd);
			//tabInd++;
		});
	}
	$("#dummyDivReverse1").attr('tabindex', 0);
	document.addEventListener('keyup', function (e) {
		    var code = e.keyCode ? e.keyCode : e.which;
		    var el = document.activeElement;

		    if (code == 9) {
		    	$("#mainContainer").attr("aria-hidden","false");
				
				
				
		    }
	}, true);
	
	
	$("#dummyDivReverse").on('focus', function(e){
		$('#btn0').focus().first();
	})
	
	
	$("#dummyDivReverse1").on('focus', function(e){
		$('#btn0').focus().first();
	})
	
	// extra code added
	
	$(".imageId").mouseenter(function(){
		for(i=0;i<slider.length;i++){
  			$('#img'+(i)).attr('title',slider[i].img_alt_text);
		}
	});
	
	$(".imageId").mouseleave(function() {
  		$( ".imageId" ).removeAttr('title');
	});
	
	$(".imageId").hover(function(event) {
		var ariaTitle = $(this).attr("aria-label");
		$(this).attr("title",ariaTitle);
		$(this).focus(function(){	
		$(".imageId").removeAttr("title");
	});
	},function (event) {
		$(".imageId").removeAttr("title");
	});
	
	
	
	
});

var clickedFn = function(ev){
		tar = (event.target.id).split("btn")[1];
		
		var keycode = ev.keyCode ? ev.keyCode : ev.which;
		if (ev.type == "keyup" && keycode != 13 && keycode != 32) {

			return false;


			
		}else{
			if(!$("#btn"+tar).hasClass('active'))
			{
				$(".btnClass").removeClass('active')
				$("#btn"+tar).addClass('active');
				for(i=0; i<5; i++){
					$("#btn"+i).removeAttr('data');	
					$("#btn"+i).css('background-color', '#007098');
					$("#btn"+i).css('color', '#fff');	
					//$("#btn"+i).css('pointer-events', 'auto');
				}
				
				
				$('.pageClass').hide();
				
				$("#page_"+tar).fadeIn(500);
				
				$(".summaryClass").fadeIn(500);
				//$("#btn"+tar).css('pointer-events', 'none');
				$("#btn"+tar).attr('data','checked');
				$("#btn"+tar).css('background-color', '#fff');
				$("#btn"+tar).css('color', '#000');	
				$("#btn_"+tar).css('pointer-events', 'none');
				page_opened++;
			}	
		}
}

document.addEventListener('keydown', function(e) {
	console.log(e.keyCode)
	if (e.keyCode === 9) {
  		$('body').addClass('show-focus-outlines');
   		
	}
});
document.addEventListener('click', function(e) {
	$('body').removeClass('show-focus-outlines');
});


