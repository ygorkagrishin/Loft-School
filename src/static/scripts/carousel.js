var Carousel = function ( param ) {
'use strict';

var self = this;

var priv = {};

priv.param = param;

// carousel
priv.carousel = document.querySelector( priv.param.carousel );

// class name
priv.cls = {
    wrap : priv.param.wrap,
    slide : priv.param.slide,
    prev : priv.param.prev,
    next : priv.param.next
}

// carousel components
priv.comp = {
    wrap : priv.carousel.getElementsByClassName( priv.cls.wrap ),
    slide : priv.carousel.getElementsByClassName( priv.cls.slide ),
    prev : priv.carousel.getElementsByClassName( priv.cls.prev ),
    next : priv.carousel.getElementsByClassName( priv.cls.next )
} 

// daefault
priv.default = {
    autoplay : priv.param.autoplay !== undefined ? priv.param.autoplay : false,
    duration : priv.param.duration !== undefined ? priv.param.duration : 700,
    rest : priv.param.rest !== undefined ? priv.param.rest : 20000
}

// direction
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

priv.comp.prev[0].addEventListener( 'click', function () {
  if ( priv.default.autoplay ) priv.default.autoplay = false;
  self.prev();
  self.restart();
});

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

priv.comp.next[0].addEventListener( 'click', function () {
  if ( priv.default.autoplay ) priv.default.autoplay = false;
  self.next();
  self.restart();
});

// add carousel event
priv.carousel.addEventListener( 'click', function ( e ) {
  if ( priv.default.autoplay ) priv.default.autoplay = false;
  self.restart();
});

// add touchstart event
// priv.carousel.addEventListener( 'touchstart', function ( e ) {
//   priv.direction.start = e.changedTouches[0].screenX;
// });
// add touchend event
// priv.carousel.addEventListener( 'touchend', function ( e ) {
//   if ( priv.default.autoplay ) priv.default.autoplay = false;
//   priv.direction.end = e.changedTouches[0].screenX;
//   priv.direction.start  + 30 > priv.direction.end ? self.next() : self.prev();
//   console.log( 'start : ' + priv.direction.start );
//   console.log( 'end : ' + priv.direction.end );
// });

// add timer event
self.timer = function () {
  setTimeout( function () {
    setInterval( function () {
      if ( priv.default.autoplay ) self.next();
    }, priv.default.duration);
  }, priv.default.duration);
}

// add restart
self.restart = function () {
  setTimeout( function () {
    priv.default.autoplay = true;
  }, priv.default.rest );
}

window.addEventListener( 'load', self.timer) ;

}

var carousel = new Carousel({
    carousel : '#js-carousel',
    wrap : 'js-carousel__wrap',
    slide : 'js-carousel__slide',
    prev : 'js-carousel__prev',
    next : 'js-carousel__next',
    autoplay : true,
    duration : 3500
});