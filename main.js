/*
 * 
 * Find more about this boilerplate by visiting
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

		//error & confirmation messages
		MESSAGE: {
			storageInvalid:		'Your device does not support localStorage, sorry',
			quotaInvalid:		'You have reached the maximum storage limit for this app'
		},

		//feature detection
		TEST: {
			hasTouch:			'ontouchstart' in window || 'createTouch' in document,
			hasOverflowScroll:	'webkitOverflowScrolling' in document.documentElement.style,
			hasLocalStorage:	'localStorage' in window && localStorage !== null,
			isStandalone:		'standalone' in navigator && navigator.standalone
		},
	};

	return {

		loaded: function () {

			//code here

		}
	};
}());

window.addEventListener("DOMContentLoaded", myApp.loaded, true);