var Carousel = function ( param ) {
'use strict';

var self = this;

var priv = {};

priv.param = param;

priv.carousel = document.getElementById( priv.param.carousel );

priv.comp = {
    wrap : priv.param.wrap,
    prev : priv.param.prev,
    next : priv.param.next
    }

priv.length = priv.carousel.getElementsByClassName( priv.comp.wrap )[0].children.length;

priv.autoPlay = priv.param.autoPlay;

priv.currentPosition = 0; 

priv.carousel.getElementsByClassName( priv.comp.wrap )[0].appendChild( priv.carousel.getElementsByClassName( priv.comp.wrap )[0].children[0].cloneNode( true ) );

self.next = function ( e ) {
  e.preventDefault(); 
    
  var wrap = priv.carousel.getElementsByClassName( priv.comp.wrap )[0];
  
  if ( priv.length > priv.currentPosition ) { 
  ++priv.currentPosition;
  wrap.classList.add( priv.comp.wrap + '_is_active' );
  wrap.style.transform = 'translateX(' + -priv.currentPosition + '00%)';
  } 
  else {
  wrap.classList.remove( priv.comp.wrap + '_is_active' );
  priv.currentPosition = 0;
  wrap.style.transform = 'translateX(' + -priv.currentPosition + '00%)'; 
  setTimeout( function () { 
    wrap.classList.add( priv.comp.wrap + '_is_active' );
    wrap.style.transform = 'translateX(' + -priv.currentPosition + '00%)'; 
   }, 20);
  }

}

self.prev = function ( e ) {
  e.preventDefault();  

  var wrap = priv.carousel.getElementsByClassName( priv.comp.wrap )[0];
  
  if ( priv.currentPosition !== 0 ) { 
  --priv.currentPosition;
  wrap.classList.add( priv.comp.wrap + '_is_active' );
  wrap.style.transform = 'translateX(' + -priv.currentPosition + '00%)';
  } 
  else { 
    wrap.classList.remove( priv.comp.wrap + '_is_active' );
    priv.currentPosition = priv.length;
    wrap.style.transform = 'translateX(' + -priv.currentPosition + '00%)'; 
    setTimeout( function () { self.prev(); }, 20);
  } 
}



priv.carousel.getElementsByClassName( priv.comp.prev )[0].addEventListener( 'click', self.prev );
priv.carousel.getElementsByClassName( priv.comp.next )[0].addEventListener( 'click', self.next );

}

var carousel = new Carousel(
    {
        carousel : 'js-carousel',
        wrap : 'js-carousel__wrap',
        prev : 'js-carousel__prev',
        next : 'js-carousel__next',
        autoPlay : true
    }
);