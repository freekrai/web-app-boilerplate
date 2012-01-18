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
 
var fn = (function () {

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

		//shows an element
		show: function (el) {
			var element = document.querySelector(el);
			element.setAttribute('aria-hidden', 'false');
			element.style.display = 'block';
		},

		//hides an element
		hide: function (el) {
			var element = document.querySelector(el);
			element.setAttribute('aria-hidden', 'true');
			element.style.display = 'none';
		}
	};

}());