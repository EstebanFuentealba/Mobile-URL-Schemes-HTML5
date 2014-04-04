(function(){
	try {
		var IS_IPAD = navigator.userAgent.match(/iPad/i) != null,
		    IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)),
		    IS_IOS = IS_IPAD || IS_IPHONE,
		    IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null,
		    IS_MOBILE = IS_IOS || IS_ANDROID,
	    	elements = document.getElementsByClassName('shareintentlink');	
	    	
		for (var i = 0; i < elements.length; i++) {
		    elements[i].addEventListener('click', function(e) {
		    	var params = eval(this.getAttribute("data-params")),
		    		p = [];
		    	for(var param in params) {
			    	p.push(params[param].name+'='+params[param].text);
		    	};
		    	
		    	if(IS_IOS){
			    	this.href = this.getAttribute("data-schema")+'://'+this.getAttribute("data-method")+'?'+p.join("&");
		    	} else if(IS_ANDROID) {
		    		
			    	this.href = 'intent://'+this.getAttribute("data-method")+'?'+p.join("&")+'#Intent;package='+this.getAttribute("data-package")+';scheme='+this.getAttribute("data-schema")+';end;';
		    	} else {
			    	//this.href = this.href;
		    	}
		    }, false);
		}

	} catch(e){
		console.log("[ERROR] "+e.getMessage());
	}
}());
