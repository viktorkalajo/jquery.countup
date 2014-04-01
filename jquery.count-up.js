 (function($){

 	$.fn.countUp = function ( options ) {

 		var settings = $.extend({}, $.fn.countUp.defaults, options)

 		return this.each( function() {
 			var target 				= settings.target || this.innerHTML;
 			var start 				= settings.start;
 			var counterEl 		= this;
 			var numberOfSteps = settings.duration / settings.interval;
 			var stepLength 		= (target - start) / numberOfSteps;
 			var current 			= start;

 			counterEl.innerHTML = start;
 			
 			var updateCounter = setInterval( function() {

 				if(current > target - stepLength) {
 					counterEl.innerHTML = target;
 					clearInterval(updateCounter)
 					settings.onCounterDone();

 				} else {
 					current = current + stepLength;
 					counterEl.innerHTML = Math.ceil(current);
 				}

 			}, settings.interval);

 		});
 	}

 	$.fn.countUp.defaults =  {
		start					: 0, 		// where to start counter
		target				: null, // what number to count to (if null, it takes the content of the element)
	 	duration			: 1000, // how many ms the count should take
	 	interval			: 30, 	// how frequent the counter should update, in ms
		onCounterDone	: function() {},
 	};

 })(jQuery);
