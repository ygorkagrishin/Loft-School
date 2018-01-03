var View = function ( param ) {
'use strict';

var self = this;

var priv = {};

priv.param = param;

priv.data = priv.param !== undefined ? priv.param.data : 'data-view';

priv.close = priv.param !== undefined ? priv.param.close : 'js-close-view';

priv.handler = function ( e ) {

  var target = e.target, view, close

  if ( target.hasAttribute( priv.data ) ) { 
    
    if ( target.tagName.toLowerCase() === 'a' ) e.preventDefault()
    
    view = document.querySelector( target.getAttribute( priv.data ) );
    close = view.getElementsByClassName( priv.close );
      
    if ( !view.classList.contains( 'active' ) ) view.classList.add( 'active' );

    for ( var i = 0; i <= close.length - 1; i++ )
    close[i].addEventListener( 'click', function () { 
      if ( view.classList.contains( 'active' ) ) view.classList.remove( 'active' ); 
    })

  }

}

document.body.addEventListener( 'click', priv.handler );

}

var view = new View();

/* Для тог, что бы закарыть меню нужно установить класс 'js-close-menu'. 
Либо иной другой класс добавив свойство 
close : className*/