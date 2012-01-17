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
			isStandalone:		'standalone' in navigator && navigator.standalone
		}
	};

	return {

		//add an item to storage
		addToStorage: function (key, value) {
			try {
				localStorage.setItem(key, value);
				return true;
			} catch (e) {
				if (e === 'QUOTA_EXCEEDED_ERR') {
					alert(config.MESSAGE.quotaExceeded);
				}
				return false;
			}
		},

		//get an item from storage
		getFromStorage: function (key) {
			return localStorage.getItem(key);
		},

		//remove an item from storage
		removeFromStorage: function (key) {
			localStorage.removeItem(key);
		},

		//clear storage
		clearStorage: function () {
			localStorage.clear();
		},

		init: function () {

			//code here

		}
	};
}());

window.addEventListener("DOMContentLoaded", myApp.init, true);