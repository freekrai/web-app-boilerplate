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

//return text content from html
stripHTML: function (html) {
	var tmp = document.createElement('div');
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText;
}