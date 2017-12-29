var full = ( function () {

$( document ).ready( function() {
  $( '#fullpage' ).fullpage({
    anchors:['hero', 'we', 'team', 'menu', 'review', 'form', 'contact'],
    navigation: true
  });
});

})();