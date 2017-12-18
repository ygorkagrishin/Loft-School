var Hor = function ( param ) {

'use strict';

var privates = {};

privates.param = param;

privates.acco = document.getElementById( privates.param.acco );

privates.comp = {
    section : privates.param.section,
    trigger : privates.param.trigger,
    container : privates.param.container
    }

privates.class = {
    isVisibilityFalse : privates.param.isVisibilityFalse,
    isVisibilityTrue : privates.param.isVisibilityTrue
    }

privates.directionY = {
    dYs : 0,
    dYf : 0
    }

privates.directionX = {
    dXs : 0,
    dXf : 0
    }    

privates.close = function () {
    var sections = privates.acco.getElementsByClassName( privates.comp.section ),
        containers = privates.acco.getElementsByClassName( privates.comp.container );
    
    for ( var indx = 0; indx <= sections.length - 1; indx++ ) {
        if ( !sections[indx].classList.contains( privates.class.isVisibilityTrue ) ) {
            sections[indx].classList.remove( privates.param.section + '_is_active' );
            if ( containers[indx].classList.contains( privates.class.isVisibilityTrue ) ) {
                containers[indx].classList.remove( privates.class.isVisibilityTrue );
                containers[indx].classList.add( privates.class.isVisibilityFalse );    
            }
        }
    }
}

privates.open = function ( e ) {
    
    var target = e.target;

    if ( target.classList.contains( privates.comp.trigger ) ) {
        
        var currentElement = target,
            currentSection,
            currentContainer;

        while ( !currentElement.classList.contains( privates.comp.section ) ) {
            currentElement = currentElement.parentNode;
            currentSection = currentElement;
        }

        if ( !currentSection.classList.contains( privates.comp.section + '_is_active' ) ) {
            privates.close();
            currentContainer = currentSection.getElementsByClassName( privates.comp.container )[0];
            if ( currentContainer.classList.contains( privates.class.isVisibilityFalse ) ) {
                currentContainer.classList.remove( privates.class.isVisibilityFalse );
                currentContainer.classList.add( privates.class.isVisibilityTrue );
                currentSection.classList.add( privates.comp.section + '_is_active' );
            }  
        } else { privates.close(); }
    } else { privates.close(); }
}

privates.acco.addEventListener( 'touchstart', function ( e ) {
    privates.directionY.dYs = e.changedTouches[0].screenY;
    privates.directionX.dXs = e.changedTouches[0].screenX;
    });

privates.acco.addEventListener( 'touchend', function ( e ) {
    privates.directionY.dYf = e.changedTouches[0].screenY;
    privates.directionX.dXf = e.changedTouches[0].screenX;

    if ( privates.directionY.dYf > privates.directionY.dYs ||
        privates.directionX.dXs < privates.directionX.dXf ) {
        privates.close();  }
    });    

privates.acco.addEventListener( 'click', privates.open );

}

var hor = new Hor({
    acco : 'acco-h',
    section : 'js-acco-h__section',
    trigger : 'js-acco-h__trigger',
    container : 'js-acco-h__container',
    isVisibilityFalse : 'js-acco-h__container_visibility_false',
    isVisibilityTrue : 'js-acco-h__container_visibility_true'
});