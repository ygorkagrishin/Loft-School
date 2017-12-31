var View = function ( param ) {
'use strict';

var self = this;

var priv = {};

priv.param = param;

priv.target = document.querySelector( priv.param.target );

priv.data = priv.param.data !== undefined ? priv.param.close : 'data-view';

priv.close = priv.param.close !== undefined ? priv.param.close : 'js-close-view';

priv.handler = function ( e ) {

  var target = e.target, view, close

  if ( target.hasAttribute( priv.data ) ) { 
    
    if ( target.tagName.toLowerCase() === 'a' ) e.preventDefault()
    
    view = document.querySelector( target.getAttribute( priv.data ) );
    close = view.getElementsByClassName( priv.close );
      
    if ( !view.classList.contains( 'active' ) ) view.classList.add( 'active' );

    close[0].addEventListener( 'click', function () { 
      if ( view.classList.contains( 'active' ) ) view.classList.remove( 'active' ); 
    })

  }

}

document.body.addEventListener( 'click', priv.handler );

}

var menu = new View({
target : '#hamm'
});

var view = new View({
target : '.js-review__view'
});

/* Для тог, что бы закарыть меню нужно установить класс 'js-close-menu'. 
Либо иной другой класс добавив свойство 
close : className*/