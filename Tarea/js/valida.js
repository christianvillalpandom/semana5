
document.formulario.addEventListener("submit", validarFormulario);

function validarFormulario (evObject) {
	
	evObject.preventDefault();
	var nombre =document.getElementById("nombre").value;
	var mail =document.getElementById("mail").value;
	var telefono =document.getElementById("telefono").value;
	var dia =document.getElementById("dia").value;
	var mes =document.getElementById("mes").value;
	var ano =document.getElementById("ano").value;
	var comentarios =document.getElementById("comentarios").value;
	
	validarNombre(nombre);
	validarMail(mail);
	validarTelefono(telefono);
	validarCumpleaños(dia, mes,ano);
	validarComentario(comentarios);
}

function validarNombre (n) {
	if(n==""){
		alert("Captura tu nombre");
	}
	else if(n.length <= 10) {
		alert("Captura un nombre correcto");
	}
	else if (n.length > 10) {
		alert("Tu nombre es:"+n);	
	}  
}
	
	
function validarMail (mail) {

	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    

    if ( !expr.test(mail) )
        alert("Error: La dirección de correo " + mail + " es incorrecta.");
	else if (true) {
		alert("Tu mail:"+mail);
	}
}
	
function validarTelefono (telefono) {
	if(telefono==""){
		alert("Captura tu telefono");
	}
	else if (isNaN(false)) {
		alert("Captura un telefono correcto");
	}
	else if(telefono.length < 8) {
		alert("Captura un telefono correcto");
	}
	else if(telefono.length >= 8) {
		alert("Tu telefono es:"+telefono);	
	}
}
	
function validarCumpleaños (d,m,a) {

	 var f=new Date();
	 var dia=f.getDate();
	 var mes=(f.getMonth()+1);
	 var ano=f.getFullYear();

	 if ( a >= (ano-18) ){
	 	if (m >= mes) {
		 	if (d >= dia) {
	 		}
	 	}
	alert("Eres menor de edad");
	 }
	 else{
	 	alert("Eres mayor");
	 }

}

function validarComentario (c) {
	 if(c==""){
		alert("Captura tu comentario");
	}
	else if(true) {
		alert("Tu comentario es:"+c);	
	}  
}


/*document.formulario.method="Post/Get";
document.formulario.action="form.php";
document.formulario.submit();*/
	
