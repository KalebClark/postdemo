define([
	'backbone',
	'views/item/user-view'
],
function( Backbone, UserView  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a UsersView CollectionView");
		},
		
    	itemView: UserView,
    	

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
