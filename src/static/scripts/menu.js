function Menu( param ) {

'use strict';

var self = this;

var privates = {};

privates.param = param;

privates.sel = {

  'menu': document.querySelector( privates.param.menu ),
  'link': document.querySelectorAll( privates.param.link ), 
  'open': document.querySelector( privates.param.open ),
  'close': document.querySelector( privates.param.close )

  }

privates.open = function ( e ) {
  // e.preventDefault();
  if ( !privates.sel.menu.classList.contains( 'js-nav__list_is_active' ) ) {
    privates.sel.menu.classList.add( 'js-nav__list_is_active' );
    privates.sel.close.classList.add( 'close_is_active' );
    }
  }

privates.close = function ( e ) {
  // e.preventDefault();
  if ( privates.sel.menu.classList.contains( 'js-nav__list_is_active' ) ) {
    privates.sel.menu.classList.remove( 'js-nav__list_is_active' );
    privates.sel.close.classList.remove( 'close_is_active' )
    }
  }

for ( var indx = 0; indx <= privates.sel.link.length - 1; indx++ ) {
    privates.sel.link[ indx ].addEventListener( 'click', privates.close );
  }

privates.sel.open.addEventListener( 'click', privates.open );
privates.sel.close.addEventListener( 'click', privates.close );

}

var menu = new Menu({
    'menu': '.nav__list',
    'link': '.nav__link',
    'open': '#menu',
    'close': '.close' 
});