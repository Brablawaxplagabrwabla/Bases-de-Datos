(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
function registrarPaciente(){
	var Paciente = {
		name: document.getElementbyID(first_name),
		apellido: document.getElementByID(last_name),
		cedula: document.getElementbyID(cedula),
		correo: document.getElementbyID(email),
		bday: document.getElementbyID(bday),	
		nacionalidad: null, //ToDo
		nivelEducativo: null, //ToDo
		genero: null, //ToDo
		edoCivil: null, //ToDo
		estado: null, //ToDo
		municipio: null,
		direccion: document.getElementbyID(direccion),
	}

}