' ' 
let tipoDeCambio = {'USD' :{'ARS' :180}, 'ARS' :{'USD' :0.08}}

$(document).ready(function(){
    $('#convertir').on('click', function(){
        let monto = $('#amountToConvert').val()
        let desde = $('#desde').find(':selected').val()
        let hacia = $('#hacia').find(':selected').val()
        let resultado = 0
        if (desde == hacia) {
            resultado = monto
        }
        else {
            resultado = monto*tipoDeCambio[desde][hacia]
        }
        $('#resultado').text(resultado)
    })
})






