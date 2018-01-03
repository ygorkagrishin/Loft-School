var Acco = function ( param ) {

'use strict';

var self = this;

var priv = {};

priv.param = param;

priv.acco = document.getElementById( priv.param.acco );

priv.comp = {
    section : priv.param.section,
    trigger : priv.param.trigger,
    container : priv.param.container
}

priv.close = function ( array, cls ) {
    for ( var i = 0; i <= array.length - 1; i++ )
      if ( array[i].classList.contains( cls ) )
        array[i].classList.remove( cls );
}

priv.handler = function ( e ) {

  var target = e.target, currentSection;

  if ( target.tagName.toLowerCase() === 'a' ) e.preventDefault();

  if ( target.classList.contains( priv.comp.trigger ) ) {
  
  currentSection = target;

  while( !currentSection.classList.contains( priv.comp.section ) ) 
    currentSection = currentSection.parentNode;   
  
  if ( !currentSection.classList.contains( 'active') ) {
    priv.close( priv.acco.getElementsByClassName( priv.comp.section ), 'active' ); 
    currentSection.classList.add( 'active' ); }
  else { 
    priv.close( priv.acco.getElementsByClassName( priv.comp.section ), 'active' ); }
  }
}

priv.acco.addEventListener( 'click', priv.handler );

}

var accoHorizontal = new Acco({

    acco : 'acco-h',
    section : 'js-acco-h__section',
    trigger : 'js-acco-h__trigger',
    container : 'js-acco-h__container'

});

var acco = new Acco({

    acco : 'acco',
    section : 'js-acco__section',
    trigger : 'js-acco__trigger',
    container : 'js-acco__container'
    
});