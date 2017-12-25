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

priv.close = function () {

var section = priv.acco.getElementsByClassName( priv.comp.section ),
    container = priv.acco.getElementsByClassName( priv.comp.container );

    for ( var indx = 0; indx <= section.length - 1; indx++ ) {
        if ( section[indx].classList.contains( priv.comp.section + '_is_true' ) ) {
            section[indx].classList.remove( priv.comp.section + '_is_true' );
            section[indx].classList.add( priv.comp.section + '_is_false' );
            if ( container[indx].classList.contains( priv.comp.container + '_is_true') ) {
                container[indx].classList.remove( priv.comp.container + '_is_true');
                container[indx].classList.add( priv.comp.container + '_is_false');
            }
        }
    }

}

priv.handler = function ( e ) {
e.preventDefault()

var target = e.target,
    currentSection,
    currentContainer;

if ( target.classList.contains( priv.comp.trigger ) ) {
  currentSection = target;
  while( !currentSection.classList.contains( priv.comp.section ) ) {
    currentSection = currentSection.parentNode;
    }  
  
  currentContainer = currentSection.getElementsByClassName( priv.comp.container )[0];  
  
  if ( currentSection.classList.contains( priv.comp.section + '_is_false') ) {
    priv.close();
    currentSection.classList.remove( priv.comp.section + '_is_false' );
    currentSection.classList.add( priv.comp.section + '_is_true' );
    if ( currentContainer.classList.contains( priv.comp.container + '_is_false' ) ) {
      currentContainer.classList.remove( priv.param.container + '_is_false' );
      currentContainer.classList.add( priv.param.container + '_is_true' );
      } 
    } else { priv.close(); }
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