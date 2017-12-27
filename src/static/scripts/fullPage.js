// var Full = function ( param ) {
// 'use strict';

// var self = this;

// var priv = {};

// priv.param = param;

// priv.container = document.querySelector( priv.param.container );

// priv.comp = {
// section : priv.param.section !== undefined ? priv.param.section : 'section',
// anchor : priv.param.anchor !== undefined ? priv.param.anchor : 'null'
// }

// priv.prop = {
//   currentValue : 0,
//   currentSection : 0,
//   duration : 700
// }

// priv.directionY = {
//     start : 0,
//     end : 0
// }

// priv.init = function () {
// var section = priv.container.getElementsByClassName( priv.comp.section );

// for ( var indx = 0; indx <= section.length - 1; indx++ ) 
// section[indx].setAttribute( 'data-anchor', priv.comp.anchor[indx] ); 
// }

// // to top
// priv.moveToTop = function () {
// ++priv.prop.currentSection;
// priv.prop.currentValue -= priv.container.getElementsByClassName( 'section' )[priv.prop.currentSection].offsetHeight;
// priv.container.style.transform = 'translateY(' + priv.prop.currentValue + 'px)';
// priv.container.style.transition = 'all 700ms';
// console.log('Top' + priv.prop.currentSection );
// }

// // to bottom
// priv.moveToBottom = function () {
// --priv.prop.currentSection;
// priv.prop.currentValue += priv.container.getElementsByClassName( 'section' )[priv.prop.currentSection].offsetHeight;
// priv.container.style.transform = 'translateY(' + priv.prop.currentValue + 'px)';
// priv.container.style.transition = 'all 700ms';
// console.log('Bottom' + priv.prop.currentSection );
// }

// // event touchstart
// priv.container.addEventListener( 'touchstart', function ( e ) {
// priv.directionY.start = e.changedTouches[0].screenY;
// });

// // event touchend
// priv.container.addEventListener( 'touchend', function ( e ) {
// priv.directionY.end = e.changedTouches[0].screenY;
// priv.directionY.start > priv.directionY.end ? priv.moveToTop() : priv.moveToBottom(); 
// });

// window.addEventListener( 'load', priv.init );

// }

// var full = new Full({

//     container : '#fullpage',
//     anchor : [ 'hero', 'we', 'team', 'menu', 'review', 'form' ],
//     navigation : false

// });

/* ************ */
// Установить переменная куда будут сохраняться значения перемещения и складываться
// или уменьшаться в зависимости от направления
/* ************ */

/* ************ */
// Создать функцию которая будет высячитывать изменения высоты вьюпорта и изменять значения текущие значение
/* ************ */

/* ************ */
// Создать функцию которая будет устанавдивать offsetTop при клике по ссылке
/* ************ */