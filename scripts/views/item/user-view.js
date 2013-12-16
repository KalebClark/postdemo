define([
	'backbone',
	'hbs!tmpl/item/user-view_tmpl'
],
function( Backbone, UserViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a UserView ItemView");
		},
		
    	template: UserViewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
