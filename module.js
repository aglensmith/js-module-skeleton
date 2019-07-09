var someModule = (function(){

	var privateDoStuff = function() {
		// Do things
	};

	return {
		publicDoStuff: privateDoStuff
	}

})();
