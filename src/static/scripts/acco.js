var Acco = function ( param ) {
'use strict';

var self = this;

var priv = {};

priv.param = param;

priv.acco = document.getElementById( priv.param.acco );

priv.cls = {
  section : priv.param.section !== undefined ? priv.param.section : 'js-acco__section',
  trigger : priv.param.trigger !== undefined ? priv.param.trigger : 'js-acco__trigger'
}

priv.comp = {
  section : document.getElementsByClassName( priv.cls.section ),
  trigger : document.getElementsByClassName( priv.cls.trigger )
}

priv.close = function ( array, cls ) {
  for ( var i = 0; i <= array.length - 1; i++ )
  if ( array[i].classList.contains( cls ) )
  array[i].classList.remove( cls );
}

priv.handler = function ( e ) {
  var target = e.target, currentSection;

  if ( target.tagName.toLowerCase() === 'a' ) e.preventDefault();
  
  if ( target.classList.contains( priv.cls.trigger ) ) {
  currentSection = target;
  
  while( !currentSection.classList.contains( priv.cls.section ) ) 
    currentSection = currentSection.parentNode;   
  
  if ( !currentSection.classList.contains( 'active') ) {
    priv.close( priv.comp.section, 'active' ); 
    currentSection.classList.add( 'active' ); }
  else { 
    priv.close( priv.comp.section, 'active' ); }
  }
}

priv.acco.addEventListener( 'click', priv.handler );

}

var accoHorizontal = new Acco({
  acco : 'acco-horizontal'
});

var acco = new Acco({
  acco : 'acco'    
});