;(function(){
	this.PrefixStyle = this.PrefixStyle || {};
	 
	var _elementStyle = document.createElement('div').style,
	_list = ['transform','transition'],
	_vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}
	
	for(var i = 0,len = _list.length;i<len;i++){
		this.PrefixStyle[_list[i]] = _prefixStyle(_list[i]);
	}	
})();