/**
 * jQuery.rand v1.0
 * 
 * Randomly filters any number of elements from a jQuery set.
 * 
 * MIT License: @link http://www.afekenholm.se/license.txt
 * 
 * @author: Alexander Wallin (http://www.afekenholm.se)
 * @version: 1.0
 * @url: http://www.afekenholm.se/jquery-rand
 */
(function($){
	$.fn.rand = function(k){
		var b = this,
			n = b.size(),
			k = k ? parseInt(k) : 1;
			
		// Special cases
		if (k > n) return b.pushStack(b);
		else if (k == 1) return b.filter(":eq(" + Math.floor(Math.random()*n) + ")");
		
		// Create a randomized copy of the set of elements,
		// using Fisher-Yates sorting
		r = b.get();
		for (var i = 0; i < n - 1; i++) {
			var swap = Math.floor(Math.random() * (n - i)) + i;
			r[swap] = r.splice(i, 1, r[swap])[0];
		}
		r = r.slice(0, k);
		
		// Finally, filter jQuery stack
		return b.filter(function(i){
			return $.inArray(b.get(i), r) > -1;
		});
	};
})(jQuery);