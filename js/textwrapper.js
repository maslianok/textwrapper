jQuery.fn.textwrapper = function(options){
  var options = $.extend({
    fontSizeMax: 26,
    fontSizeMin: 12,
    width: '50%',
    height: '200px',
    innerClass: 'tw_inner'
  }, options);


  //Расчет размера шрифта и размера блока(для обработки события `resize`)
  function calculateFontAndSize(outer, max) {
  	var max = parseInt(max) || options.fontSizeMax
  	  , inner = outer.find('.'+options.innerClass).css({'font-size':max})
  	  , o = outer.height();

  	while (inner.height()>=o && (max--)>options.fontSizeMin) {
  	  inner.css({'font-size':max});
  	}

  	inner.next('.'+options.innerClass+'_ellipsis').css({'display':inner.height()-options.fontSizeMin>=o?'block':'none'});

  	return {'width':outer.width(),'height':o}
  }

  return this.each(function() {
  	//Базовые стили и обертка
  	$(this).css({'width':options.width,'height':options.height,'overflow':'hidden','position':'relative'})
  	  .wrapInner($('<div/>').addClass(options.innerClass).css({'text-align':'justify'}))
  	  .append($('<div/>').addClass(options.innerClass+'_ellipsis').css({'position':'absolute','right':'10px','bottom':'2px','font-size':options.fontSizeMin+2, 'display':'none', 'background-color':'#FFF', 'white-space':'pre'}).text(' ...'));
  	var that = this
  	  , inner = $(that).find('.'+options.innerClass);
  	

  	//Стартовый расчет размера 
  	var currSize = calculateFontAndSize($(this));

  	//Обработчик на изменение размера окна
  	$(window).resize(function(){
  	  if (inner.height()>$(that).height()) {
  	    //Если текст начал выступать за пределы внешнего блока, то его нужно уменьшить
        currSize = calculateFontAndSize($(that), inner.css('font-size'));
  	  } else if (currSize.width!=$(that).width() || currSize.height!=$(that).height()) {
  	    //Иначе, если размеры блока вообще менялись, то пробуем увеличить
  	    console.log('1')
  	    currSize = calculateFontAndSize($(that));
  	  }
  	});
    
  	


  });


};
