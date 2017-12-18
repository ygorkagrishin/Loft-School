var Acco = function ( param ) {

'use strict';

var privates = {};

privates.param = param;

privates.acco = document.getElementById( privates.param.acco );

privates.components = {
    section : privates.param.section,
    trigger : privates.param.trigger,
    container : privates.param.container,
    arrow : privates.param.arrow
    }

privates.class = {
    isVisibilityFalse : privates.param.isVisibilityFalse,
    isVisibilityTrue : privates.param.isVisibilityTrue,
    isActive : privates.param.isActive,
    isNotActive : privates.param.isNotActive
    }

privates.directionY = { 
    dYs : 0,
    dYf : 0
    }

privates.close = function () {
    var sections = privates.acco.getElementsByClassName( privates.components.section ),
        containers = privates.acco.getElementsByClassName( privates.components.container ),
        arrows = privates.acco.getElementsByClassName( privates.components.arrow );

    for ( var indx = 0; indx <= sections.length - 1; indx++ ) {
        if ( sections[ indx ].classList.contains( privates.components.section + '_is_active' ) ||
            containers[ indx ].classList.contains( privates.class.isVisibilityTrue ) ) {
            sections[ indx ].classList.remove( privates.components.section + '_is_active' );
            containers[ indx ].classList.remove( privates.class.isVisibilityTrue );
            arrows[ indx ].classList.remove( privates.class.isActive );
            containers[ indx ].classList.add( privates.class.isVisibilityFalse );
            arrows[ indx ].classList.add( privates.class.isNotActive );
        }
    }
}

privates.open = function ( e ) {
    var target = e.target;
   
    var currentElement = target,
        currentSection,
        currentContainer,
        currentArrow;

    while ( !currentElement.classList.contains( privates.components.section ) ) {
        currentElement = currentElement.parentNode;
        currentSection = currentElement;
        }
    
    if ( !currentSection.classList.contains( privates.components.section + '_is_active' ) ) {
            privates.close();
            currentContainer = currentSection.getElementsByClassName( privates.components.container )[ 0 ];
            currentArrow = currentSection.getElementsByClassName( privates.components.arrow )[ 0 ];
            if ( currentContainer.classList.contains( privates.class.isVisibilityFalse ) ) {
                currentSection.classList.add( privates.components.section + '_is_active' );
                currentContainer.classList.remove( privates.class.isVisibilityFalse );
                currentArrow.classList.add( privates.class.isNotActive );
                currentContainer.classList.add( privates.class.isVisibilityTrue );
                currentArrow.classList.add( privates.class.isActive );
            }
        }
        else { privates.close(); }    
    }

privates.acco.addEventListener( 'touchstart', function ( e ) {

    privates.directionY.dYs = e.changedTouches[0].screenY;

    });

privates.acco.addEventListener( 'touchend', function ( e ) {

    privates.directionY.dYf = e.changedTouches[0].screenY;

    if ( privates.directionY.dYs > privates.directionY.dYf ) { privates.close(); }

    });

privates.acco.addEventListener( 'click', privates.open);

}

var acco = new Acco({

    acco : 'acco',
    section : 'js-acco__section',
    trigger : 'js-acco__trigger',
    container : 'js-acco__container',
    arrow : 'js-acco__arrow',
    isVisibilityFalse : 'js-acco__container_visibility_false',
    isVisibilityTrue : 'js-acco__container_visibility_true',
    isActive : 'js-acco__arrow_is_active',
    isNotActive : 'js-acco__arrow_is_no-active'

}); 