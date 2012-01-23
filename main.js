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
			isStandalone:		'standalone' in navigator && navigator.standalone,
			isOnline:			'onLine' in navigator && navigator.onLine
		}
	};

	return {

		//set meta viewport
		setViewport: function (params) {
			var head = document.getElementsByTagName('head')[0], viewport, options, i = 0;
			options = {
				width: 'device-width',
				initScale: 1,
				minScale: 1,
				maxScale: 1,
				userScale: 'no'
			};
			// User defined options
			if (typeof params === 'object') {
				for (i in params) {
					if (params.hasOwnProperty(i)) {
						options[i] = params[i];
					}
				}
			}
			viewport = document.createElement('meta');
			viewport.setAttribute('name', 'viewport');
			viewport.setAttribute('content', 'width=' + options.width + ', initial-scale=' + options.initScale + ', minimum-scale=' + options.minScale + ', maximum-scale=' + options.maxScale + ', user-scalable=' + options.userScale);
			head.appendChild(viewport);
		},

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

		//add an item to storage
		addToStorage: function (key, value) {
			try {
				localStorage.setItem(key, value);
				return true;
			} catch (e) {
				if (e === QUOTA_EXCEEDED_ERR) {
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

		//encodes special characters
		encodeString: function (str) {
			return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;');
		},

		//decodes special characters
		decodeString: function (str) {
			return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, '\'').replace(/&#x2F;/g, '/');
		},

		//pass in a GET parameter name and return its value from url
		getParameterFromUrl: function (param) {
			var name = param.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]'),
				results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
			if (results === null) {
				return null;
			} else {
				return decodeURIComponent(results[1].replace(/\+/g, ' '));
			}
		},

		//enable active pseudo styles in mobile webkit. Only required if not already using touch events
		enableActivePseudoStyles: function () {
			document.addEventListener("touchstart", function () {}, false);
		},

		//shows an element
		show: function (el) {
			var element = typeof el === 'object' ? el : document.querySelector(el);
			element.setAttribute('aria-hidden', 'false');
			element.style.display = 'block';
		},

		//hides an element
		hide: function (el) {
			var element = typeof el === 'object' ? el : document.querySelector(el);
			element.setAttribute('aria-hidden', 'true');
			element.style.display = 'none';
		},

		//initialise app
		init: function () {
			myApp.setViewport();
			myApp.setStartupImage();
		}
	};
}());

window.addEventListener("DOMContentLoaded", myApp.init, true);