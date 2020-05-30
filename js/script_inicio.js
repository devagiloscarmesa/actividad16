/**
 * Script que captura los eventos en el formulario del trabajador y posteriormetne el envio de los datos
 */
//Evento ready, se ejecuta cuando se carga toda la pagina (se levanta el DOM)
$(document).ready(() => {
	//Evento change, que se encarga de escuchar cuando hay cambios en la caja de texto de la fecha de nacimiento
    $("#fecha_nac").change( (e) => {
        /**
         * Definimos el procedimiento para que se debe ejecutar, cuando exista un cambio en la fecha de nacimiento.
         */

        let fecha_nacimiento = new Date($("#fecha_nac").val()); //Se captura la fecha de nacimiento y se crea un objeto de tipo Date
        if(fecha_nacimiento!=undefined && !isNaN(fecha_nacimiento.getTime())){ // Se valida que la fecha sea valida
            let edad = calcular_edad(fecha_nacimiento); //Obtenemos la edad, de una función que realiza el calculo de la edad
            if(edad >= 18){ //Validamos que sea mayor de edad, para proceder a activarle el boton de envío
                $('#enviar').attr('disabled', false); //Quitamos el desabilitado del botón. 
                $('#enviar').removeClass('disabled'); //Removemos una clase del botón 
            }else{
                $('#enviar').attr('disabled', true); //En caso de que no sea mayor de edad se desabilita el boton de envio
                $('#enviar').addClass('disabled'); //Adicionamos la clase para que el boton tome la apriencia de deshabilitado.
            }
        }else{
            $('#enviar').attr('disabled', true);//En caso que la fecha sea invalida
            $('#enviar').addClass('disabled');//Adicionamos la clase para que el boton tome la apriencia de deshabilitado.
        }
    });
    
    $('#enviar').click((e) => {
        console.log("prueba");
        if(document.getElementById("frm_trabajador").reportValidity()){
            window.location.assign(`registro.html?${$("#frm_trabajador").serialize()}`);
        }
    })
    
    /**
     * Esta funcón sirve para realizar el calculo de 
     * edad de una persona que ingresa su fecha de nacimiento
     * @param {Date} dob 
     */
    function calcular_edad(dob) { 
        if(dob.getFullYear() >= 1000){
            var hoy = new Date();
            var cumpleanos = dob;
            var edad = hoy.getFullYear() - cumpleanos.getFullYear();
            var m = hoy.getMonth() - cumpleanos.getMonth();

            if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                edad--;
            }
            return edad;   
        }else
            return 0;
    }
});
