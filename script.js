//sistema de formulario 
let enviar = document.getElementById("enviar");
enviar.addEventListener ("click",guardarCotizacion);

function guardarCotizacion (){
    const form =document.getElementById("formcotizacion")
    const datosCotizacion = {
        nombre: form.nombre.value,
        telefono: form.telefono.value,
        preferencia: form.preferencia.value,
        modelo: form.modelo.value,
        motor: form.motor.value,
        kms: form.kms.value,
        operacion: form.operacion.value,
        detalle:  form.detalle.value,
    }
    const datosJson = JSON.stringify(datosCotizacion)
    localStorage.setItem("pagano",datosJson)


}
