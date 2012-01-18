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

var myApp = (function () {

	var config = {

		//app info
		APP: {
			name:				'My App',
			version:			'1.0',
			description:		'App description.',
			url:				'http://'
		},

		//developer info
		DEVELOPER: {
			name:				'Your name',
			url:				'http://',
			email:				'Email address'
		},

		//application messaging
		MESSAGE: {
			storageSupported:	'Your device does not support the type of storage required by this application',
			quotaExceeded:		'The application has reached the maximum storage limit'
		},

		//feature detection
		FEATURE: {
			hasTouch:			'ontouchstart' in window || 'createTouch' in document,
			hasOverflowScroll:	'webkitOverflowScrolling' in document.documentElement.style,
			hasLocalStorage:	'localStorage' in window && localStorage !== null,
			hasSessionStorage:	'sessionStorage' in window && sessionStorage !== null,
			hasOrientation:		'onorientationchange' in window,
			hasGeolocation:		!!navigator.geolocation,
			hasCanvas:			!!document.createElement('canvas').getContext,
			hasHistory:			!!(window.history && window.history.pushState),
			hasAppCache:		!!window.applicationCache,
			hasIndexedDB:		!!window.indexedDB,
			hasWebSockets:		!!window.WebSocket,
			hasWebWorkers:		!!window.Worker,
			hasEventSource:		typeof EventSource !== 'undefined',
			isStandalone:		'standalone' in navigator && navigator.standalone
		}
	};

	return {
        
		//initialise app
		init: function () {

		}
	};
}());

window.addEventListener("DOMContentLoaded", myApp.init, true);