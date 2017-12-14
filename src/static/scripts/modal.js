var PopUp = function ( param ) {

'use strict';

var privates = {}

privates.param = param;

privates.container = document.querySelector( privates.param.container );

privates.sel = {
  isVisibilityFalse : privates.param.isVisibilityFalse,
  isVisibilityTrue  : privates.param.isVisibilityTrue
  }

privates.comp = {
  btn : privates.param.btn,
  close : privates.param.close
  }

privates.attr = privates.param.attr;

privates.currentElement;

privates.close = function () {
  privates.currentElement.classList.remove( privates.sel.isVisibilityTrue );
  privates.currentElement.classList.add( privates.sel.isVisibilityFalse );
}

privates.handler = function ( e ) {
  e.preventDefault();

  if ( e.target.classList.contains( privates.comp.btn ) ) {
    var getValue = e.target.getAttribute( privates.attr );
    privates.currentElement = document.querySelector( getValue );
    if ( privates.currentElement.classList.contains( privates.sel.isVisibilityFalse ) ) {
      privates.currentElement.classList.remove( privates.sel.isVisibilityFalse );
      privates.currentElement.classList.add( privates.sel.isVisibilityTrue );  } 
  }
  else if ( e.target.classList.contains( privates.comp.close ) ) {
    if ( privates.currentElement.classList.contains( privates.sel.isVisibilityTrue ) ) {
      privates.close(); } 
    }  
  }

privates.container.addEventListener( 'click', privates.handler ); 

}

var popUp = new PopUp(
  {
    container: '.js-review',
    btn: 'js-popup__btn',
    close: 'js-review__popup-close',
    attr: 'data-popup',
    isVisibilityFalse: 'review__popup_visibility_false',
    isVisibilityTrue: 'review__popup_visibility_true'
  }
);