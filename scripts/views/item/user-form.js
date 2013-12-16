define([
	'backbone',
	'hbs!tmpl/item/user-form_tmpl'
],
function( Backbone, UserFormTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a UserForm ItemView");
		},
		
    	template: UserFormTmpl,
        

    	/* ui selector cache */
    	ui: {
        name: '#name',
        dob:  '#dob'   
      },

		/* Ui events hash */
		events: {
      'click button': 'addNewUser'   
    },
    addNewUser: function() {
      this.collection.add({
        name: this.ui.name.val(),
        dob:  this.ui.dob.val() 
      });
      this.ui.name.val('');
      this.ui.dob.val('');
    },

		/* on render callback */
		onRender: function() {}
	});

});
