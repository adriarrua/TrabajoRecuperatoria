// tener una funcion anonima autoejecutable
(function(){
	$(function(){
		/*console.log('document ready');
		var h1 = $ ('h1'); // se usa variable h1 para guardar un objeto
		//agarra el h1 y cambia por otro contenido
		debugger
		h1.html('Hola a todos');

		//para crear un nuevo elemento p y se añade un valor, Se le añade al body

		debugger 
		var p = $ ('<p>');
		p.html('Esto es un parrafo nuevo');
		$('.container').append(p);

		p.addClass('text-danger');

		//delegacion de eventos
		$('button').click(function(e){
			//console.log('Me gusta', e);
			//alert('Click Me gusta'); // le permite saber al usuario un mensaje el alert, esto es  muy invasivo para el usuario
			//para cambiar el color
			//this : para hacer referencia a un contexto es es de java
			$(this).toggleClass('btn-primary'); // se convierte a objeto j query entre parentesis y delante el $
			//$('button').toggleClass('btn-primary');
			//$('button').removeClass('btn-default');
			
		});*/
		//map, filter, reduce
		var id = 0;
		$('form').submit(function(e){
			//console.log('Procesando Formulario');
			e.preventDefault();
			
			var moneda = $(this).serializeArray();
			id++;

			console.log(moneda[0].value);
			console.log(moneda[1].value);
			console.log(moneda[2].value);
			//guardar valores en variables
			var compra;
			var venta;
			var money = moneda[0].value;
			if (/^[a-zA-Z]+$/.test(money) == false) {
			alert('El campo de denominacion de monedas solo admite letras')
			$('#denominacion').val('').focus();
			return false;
			}

			//funcion que limpia campos
			function limpiarCampos(){
			$('#compra').val('').focus();
			$('#venta').val('');
			}

			//comprobar que el valor introducido sea mayor a 0
			if(Number(moneda[1].value)>0 && Number(moneda[2].value) > 0){
			compra = parseFloat(moneda[1].value);
			venta = parseFloat(moneda[2].value);
			}else{
			alert("Los numeros deben ser positivos")
			limpiarCampos();
			return false; // evita que se ingrese el dato al formulario
			}
			
			//comprobar que compra sea mayor a venta
			if (compra>=venta){
			alert("Error al ingresar los valores, el valor compra debe ser inferior al valor de venta");
			limpiarCampos();
			return false; //evita ingresar al formulario
		   }else{
			var row = '<tr>';
			row += '<td>' +id;
			row += '<td>' +moneda[0].value;
			row += '<td>' +moneda[1].value;
			row += '<td>' +moneda[2].value;
			$('table tbody').append(row);
			$('form').trigger("reset");

		}
			
			
		});

	});


})();