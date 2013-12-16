define([
	'backbone',
	'communicator',
  'collections/users',
  'views/collection/users-view',
  'views/item/user-form'
],

function( Backbone, Communicator, Users, UsersView, UserForm ) {
    'use strict';


	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
    userForm: '#user-form',
    userList: '#user-list'   
  });

	/* Add initializers here */
	App.addInitializer( function () {

    App.users = new Users();

    App.userForm.show( new UserForm({collection: App.users}));
    App.userList.show( new UsersView({collection: App.users}));
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
