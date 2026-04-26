( function( api ) {

	// Extends our custom "online-education-lms" section.
	api.sectionConstructor['online-education-lms'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );