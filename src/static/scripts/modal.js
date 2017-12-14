var PopUp = function ( param ) {

var self = this;

var privates = {};

privates.param = param;

privates.sel = {
  'btn': document.getElementsByClassName( privates.param.btn ),  
  'module': document.getElementsByClassName( privates.param.module ),
  'close' : document.getElementsByClassName( privates.param.close )
  }

privates.attr = privates.param.attr;

privates.open = function ( e ) {
  e.preventDefault();

  var attrValue = this.getAttribute( privates.attr );
  var module = document.querySelector( attrValue );
  if ( module.classList.contains( 'popup__visibility__false' ) ) {
    module.classList.remove( 'popup__visibility__false' );
    module.classList.add( 'popup__visibility__true' );
    }
  }

privates.close = function ( e ) {
  e.preventDefault(); 
 
  for ( var indx = 0; indx <= privates.sel.module.length - 1; indx++ ) {
    privates.sel.module[ indx ].classList.remove( 'popup__visibility__true' );
    privates.sel.module[ indx ].classList.add( 'popup__visibility__false' );
    }
  }

for ( var indx = 0; indx <= privates.sel.btn.length - 1; indx++ ) {
  privates.sel.btn[ indx ].addEventListener( 'click', privates.open );
  }

for ( var indx = 0; indx <= privates.sel.close.length - 1; indx++ ) {
  privates.sel.close[ indx ].addEventListener( 'click', privates.close );  
  }

}

var popUp = new PopUp(
    {
        'btn': 'js-popup__btn',
        'attr': 'data-popup',
        'module': 'popup',
        'close': 'js-popup__close'
    }
);