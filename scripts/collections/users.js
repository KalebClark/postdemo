define([
	'backbone',
	'models/user'
],
function( Backbone, User ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Users collection");
		},

		model: User
		
	});
});
