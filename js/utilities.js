//add an item to storage
function addToStorage(key, value) {
	try {
		localStorage.setItem(key, value);
		return true;
	} catch (e) {
		if (e === QUOTA_EXCEEDED_ERR) {
			alert(config.MESSAGE.quotaExceeded);
		}
		return false;
	}
}

//get an item from storage
function getFromStorage(key) {
	return localStorage.getItem(key);
}

//remove an item from storage
function removeFromStorage(key) {
	localStorage.removeItem(key);
}

//clear storage
function clearStorage() {
	localStorage.clear();
}

//encodes special characters
function encodeString(str) {
	return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;');
}

//decodes special characters
function decodeString(str) {
	return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, '\'').replace(/&#x2F;/g, '/');
}

//pass in a GET parameter name and return its value from url
function getParameterFromUrl(param) {
	var name = param.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]'),
		results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results === null) {
		return null;
	} else {
		return decodeURIComponent(results[1].replace(/\+/g, ' '));
	}
}

//enable active pseudo styles in mobile webkit. Only required if not already using touch events
function enableActivePseudoStyles() {
	document.addEventListener("touchstart", function () {}, false);
}

//shows an element
function show(el) {
	var element = typeof el === 'object' ? el : document.querySelector(el);
	element.setAttribute('aria-hidden', 'false');
	element.style.display = 'block';
}

//hides an element
function hide(el) {
	var element = typeof el === 'object' ? el : document.querySelector(el);
	element.setAttribute('aria-hidden', 'true');
	element.style.display = 'none';
}