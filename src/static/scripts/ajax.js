var ajax = ( function () {

    var submitForm = function (e) {
        e.preventDefault();
        
        var form = $( "#form__field" ),
            url = form.attr( 'action' ),
            data = form.serialize();
        
        var request = $.ajax({
        
            type : 'POST',
            url : url,
            data : data,
            success: function(){
              form.trigger( "reset" );
              alert('Ваш заказ успешно оформлен и отправлен');
            }
        
        });
        
        }
        
        $( '#form__field' ).on( 'submit', submitForm );

})();