var animate = ( function() {

	function init () {
		console.log( 'in animate.init()' );
	};

	function move ( gameObj ) {
		console.log( 'moving:' + gameObj.name );

	};
	function checkForCollision ( gameObj1, gameObj2 ) {
		console.log( 'checking for collision:' + gameObj1.name + ' with' + gameObj2.name );
		return false;

	};

	function bounce ( gameObj ) {
		console.log( 'bouncing:' + gameObj.name );
	};

	function destroy ( gameObj1 ) {
		console.log( 'destroying with:' + gameObj1.name + ' with' + gameObj2.name );
	};

	return {
		init:init,
		move: move,
		checkForCollision: checkForCollision,
		bounce:bounce,
		destroy:destroy,
	};
	
} ) ();