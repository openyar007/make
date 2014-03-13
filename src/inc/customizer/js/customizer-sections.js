/**
 * @package ttf-one
 */

( function( $ ) {
	var api = wp.customize;

	/**
	 * Visibility toggling for some controls
	 */
	$.each({
		'background_image': {
			controls: [ 'ttf-one_background_size' ],
			callback: function( to ) { return !! to; }
		}
	}, function( settingId, o ) {
		api( settingId, function( setting ) {
			$.each( o.controls, function( i, controlId ) {
				api.control( controlId, function( control ) {
					var visibility = function( to ) {
						control.container.toggle( o.callback( to ) );
					};

					visibility( setting.get() );
					setting.bind( visibility );
				});
			});

		});
	});
} )( jQuery );
