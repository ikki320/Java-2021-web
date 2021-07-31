var btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click',function(){
    event.preventDefault();
    var nombre = document.getElementById('txtNombre');
    var email = document.getElementById('txtEmail');
    alert(`Su solicitud ${nombre.value} sera procesada lo mas pronto al correo ${email.value}`);
});
