var Menu = function ( param ) {
'use strict';

var self = this;

var priv = {};

priv.param = param;

priv.menu = document.querySelector( priv.param.menu );

priv.close = priv.param.close !== undefined ? priv.param.close : 'js-close-menu';

priv.handler = function () {
    
  var menu = document.querySelector( this.getAttribute( 'data-menu' ) ),
      close = menu.getElementsByClassName( priv.close );
  
  if ( !menu.classList.contains( 'active' ) )  menu.classList.add( 'active' );
  
  for ( var indx = 0; indx <= close.length - 1; indx++ )
  close[indx].addEventListener( 'click', function () { 
    if ( menu.classList.contains( 'active' ) )  
      menu.classList.remove( 'active' ); 
  })

}

priv.menu.addEventListener( 'click', priv.handler );

}

var menu = new Menu({
menu : '#hamm'
});

/* Для тог, что бы закарыть меню нужно установить класс 'js-close-menu'. 
Либо иной другой класс добавив свойство 
close : className*/