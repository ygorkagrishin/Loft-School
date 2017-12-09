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
  e.preventDefault();
  if ( !privates.sel.menu.classList.contains( 'nav__list_visibil_true' ) ) {
    privates.sel.menu.classList.add( 'nav__list_visibil_true' );
    privates.sel.close.classList.add( 'i-close_visible_true' );
    }
  }

privates.close = function ( e ) {
  e.preventDefault();
  if ( privates.sel.menu.classList.contains( 'nav__list_visibil_true' ) ) {
    privates.sel.menu.classList.remove( 'nav__list_visibil_true' );
    privates.sel.close.classList.remove( 'i-close_visible_true' )
    if ( e.target.classList.contains( privates.sel.link ) ) {
        console.log( 'true' )
     }
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
    'open': '.i-menu',
    'close': '.i-close' 
});