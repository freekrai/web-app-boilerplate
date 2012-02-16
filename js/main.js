/*
 *
 * Find more about this template by visiting
 * http://miniapps.co.uk/
 *
 * Copyright (c) 2012 Alex Gibson, http://miniapps.co.uk/
 * Released under MIT license
 * http://miniapps.co.uk/license/
 *
 */

$(function() {

	var collection, appView, router, tap;

	//Models & Collections

	var Model = Backbone.Model.extend({

		defaults: function() {
      		return {

      		};
    	}
	});

	var Collection = Backbone.Collection.extend({

		model: Model,

		localStorage: new Store('my-app')

	});

	//Routing & View Manager

	var AppRouter = Backbone.Router.extend({

		routes: {
			'':				'defaultRoute'
		},

		initialize: function(options) {
			this.collection = options.collection;
      		this.appView = options.appView;
		},

		defaultRoute: function() {
			var defaultView = new DefaultView({collection: this.collection});
			this.appView.showView(defaultView);
			this.collection.fetch();
		}

	});

	var ViewManager = Backbone.View.extend({
		showView: function(view){
			if (this.currentView){ this.currentView.destroy(); }
			this.currentView = view;
			this.currentView.render();
			$('#app-view').html(this.currentView.el);
		}
	});

	//Backbone Views

	var DefaultView = Backbone.View.extend({

		tagName:  'section',

		template: _.template($('#default-template').html()),

		events: {

		},

		initialize: function(options) {
			this.collection = options.collection;
		},

		render: function() {
			$(this.el).html(this.template());
			return this;
    	},

		destroy: function(){
			this.unbind();
			this.remove();
		}

	});

	//Initialize app

	var setStartupImage = function () {
		var head = document.getElementsByTagName('head')[0], filename, link;
		if (navigator.platform === 'iPad') {
			filename = window.orientation !== 90 || window.orientation === -90 ? 'splash-1024x748.png' : 'splash-768x1004.png';
		} else {
			filename = window.devicePixelRatio === 2 ? 'splash-640x920.png' : 'splash-320x460.png';
		}
		link = document.createElement('link');
		link.setAttribute('rel', 'apple-touch-startup-image');
		link.setAttribute('href', 'images/' + filename);
		head.appendChild(link);
	};

	setStartupImage();
	collection = new Collection;
	appView = new ViewManager();
	router = new AppRouter({collection: collection, appView: appView});
	tap = new Tap(document.getElementById('app-view'));
	Backbone.history.start();

});