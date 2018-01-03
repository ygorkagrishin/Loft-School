var Carousel = function ( param ) {
'use strict';

var self = this;

var priv = {};

priv.param = param;

priv.carousel = document.querySelector( priv.param.carousel );

priv.cls = {
    wrap : priv.param.wrap,
    slide : priv.param.slide,
    prev : priv.param.prev,
    next : priv.param.next
}

priv.comp = {
    wrap : priv.carousel.getElementsByClassName( priv.cls.wrap ),
    slide : priv.carousel.getElementsByClassName( priv.cls.slide ),
    prev : priv.carousel.getElementsByClassName( priv.cls.prev ),
    next : priv.carousel.getElementsByClassName( priv.cls.next )
} 

priv.default = {
    autoPlay : priv.param.autoPlay !== undefined ? priv.param.autoPlay : false,
    duration : priv.param.duration !== undefined ? priv.param.duration : 700
}

priv.direction = {
  start : 0,
  end : 0
}

priv.currentSection = 0;

// clone node
priv.comp.wrap[0].appendChild( priv.comp.slide[0].cloneNode( true ) );

// add event prev
self.prev = function ( e ) {
  if ( priv.currentSection !== 0 )
  setTimeout( function () {
    --priv.currentSection;
    priv.comp.wrap[0].classList.add( 'active' );
    priv.comp.wrap[0].style.transform = 'translateX(-'+ priv.currentSection +'00%)'; 
  }, 20);
  else
  setTimeout( function () {
    priv.comp.wrap[0].classList.remove( 'active' );
    priv.currentSection = priv.comp.slide.length - 1;  
    priv.comp.wrap[0].style.transform = 'translateX(-'+ priv.currentSection +'00%)';
    self.prev(); 
  }, 20);
}

// add event next
self.next = function ( e ) {
  if ( priv.comp.slide.length - 1 > priv.currentSection )
  setTimeout( function () {
    ++priv.currentSection;
    priv.comp.wrap[0].classList.add( 'active' );
    priv.comp.wrap[0].style.transform = 'translateX(-'+ priv.currentSection +'00%)';
  } ,20);
  else
  setTimeout( function () {
    priv.currentSection = 0;   
    priv.comp.wrap[0].classList.remove( 'active' ); 
    priv.comp.wrap[0].style.transform = 'translateX(-'+ priv.currentSection +'00%)';
    self.next(); 
  }, 20);
}

// add touchstart event
priv.carousel.addEventListener( 'touchstart', function ( e ) {
  priv.direction.start = e.changedTouches[0].screenX;
});
// add touchend event
priv.carousel.addEventListener( 'touchend', function ( e ) {
  priv.direction.end = e.changedTouches[0].screenX;
  priv.direction.start > priv.direction.end ? self.next() : self.prev();
});

// add timer
// if ( priv.default.autoPlay !== false )
// priv.timer = function () { 
//   setTimeout( function () {
//     setInterval( function () {
//       self.next();
//     }, priv.default.duration);
//   }, priv.default.duration);
// }

priv.comp.prev[0].addEventListener( 'click', self.prev );
priv.comp.next[0].addEventListener( 'click', self.next );

window.addEventListener( 'load', priv.timer );

}

var carousel = new Carousel({
    carousel : '#js-carousel',
    wrap : 'js-carousel__wrap',
    slide : 'js-carousel__slide',
    prev : 'js-carousel__prev',
    next : 'js-carousel__next',
    autoPlay : true,
    duration : 1500
});