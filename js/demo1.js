var toggleOverlay;
(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };


	toggleOverlay = function (type) {
		var piercingCatalog = document.getElementById('piercing-catalog');
		var jewelsCatalog = document.getElementById('jewels-catalog');
		if( classie.has( overlay, 'open' ) ) {
			classie.remove(document.body, 'no-scroll');
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
				classie.remove(piercingCatalog, 'hidden');
				classie.remove(jewelsCatalog, 'hidden');
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add(document.body, 'no-scroll');
            if(type=='piercing'){
				classie.add(jewelsCatalog, 'hidden');
            } else{
				classie.add(piercingCatalog, 'hidden');
            }
			$('.overlay-scroller').scrollTop(0);
			classie.add( overlay, 'open' );
		}
	};

	//triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();