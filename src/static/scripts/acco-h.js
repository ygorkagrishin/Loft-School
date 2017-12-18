var Hor = function ( param ) {

var privates = {};

privates.param = param;

privates.acco = document.getElementById( privates.param.acco );

privates.components = {
    section: privates.param.section,
    trigger: privates.param.trigger,
    container: privates.param.container 
    }

privates.className = {  
    isVisibilityTrue : privates.param.isVisibilityTrue,
    isVisibilityFalse : privates.param.isVisibilityFalse
    }  

privates.directionX = {
    dXs : 0,
    dXf : 0
    }

privates.directionY = {
    dYs : 0,
    dYf : 0
    }

privates.close = function () {
    var sections = privates.acco.getElementsByClassName( privates.components.section ),
        containers = privates.acco.getElementsByClassName( privates.components.container );
    
    for ( var indx = 0; indx <= sections.length - 1; indx++ ) {
        if ( sections[ indx ].classList.contains( privates.components.section + '_is_active' ) || 
        containers[ indx ].classList.contains( privates.components.container ) ) {
        sections[ indx ].classList.remove( privates.components.section + '_is_active' );
        containers[ indx ].classList.remove( privates.className.isVisibilityTrue );
        containers[ indx ].classList.add( privates.className.isVisibilityFalse );
        } 
    }
}

privates.open = function ( e ) {
    var target = e.target;
    privates.close();

    if ( target.classList.contains( privates.components.trigger ) ) {

        var currentElement = target;

        while ( !currentElement.classList.contains( privates.components.section ) ) {
            currentElement = currentElement.parentNode; }
            
        container = currentElement.getElementsByClassName( privates.components.container )[0];    
        if ( container.classList.contains( privates.className.isVisibilityFalse ) ) {
            currentElement.classList.add( privates.components.section + '_is_active' );
            container.classList.remove( privates.className.isVisibilityFalse );
            container.classList.add( privates.className.isVisibilityTrue );
            }   
        }  
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

var hor = new Hor(
    {
        acco: 'acco-h',
        section: 'acco-h__section',
        trigger: 'acco-h__trigger',
        container: 'js-acco-h__container',
        isVisibilityTrue: 'js-acco-h__container_visibility_true',
        isVisibilityFalse: 'js-acco-h__container_visibility_false'
    }
);