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

	//private

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
			isStandalone:		'standalone' in navigator && navigator.standalone,
			isOnline:			'onLine' in navigator && navigator.onLine
		}
	};

	return {

		//public
		
		//set apple startup image
		setStartupImage: function () {
			var head = document.getElementsByTagName('head')[0], filename, link;
			if (navigator.platform === 'iPad') {
				filename = window.orientation !== 90 || window.orientation === -90 ? 'splash-1024x748.png' : 'splash-768x1004.png';
			} else {
				filename = window.devicePixelRatio === 2 ? 'splash-640x920.png' : 'splash-320x460.png';
			}
			link = document.createElement('link');
			link.setAttribute('rel', 'apple-touch-startup-image');
			link.setAttribute('href', filename);
			head.appendChild(link);
		},

		//init app
		init: function () {
			myApp.setStartupImage();
		}
	};
}());

window.addEventListener("DOMContentLoaded", myApp.init, true);