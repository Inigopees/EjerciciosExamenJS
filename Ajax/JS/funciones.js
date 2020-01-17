function validacion(boton){
				var botonpulsado=boton;
				var Numero = document.getElementById('numero').value;
				var Lista = document.getElementById('lista').value;
				var Datos = document.getElementById('datos').value;
				if(/[0-9]/.test(Numero) && (Numero%1) == 0 && Numero != null){
					if(Lista == 'people' || Lista == 'planets' || Lista == 'starships'){
						if(/[A-Za-z]/.test(Datos)){
							switch(botonpulsado){
								case 1:
									PrimerBoton(Numero,Lista,Datos);
								break;
								case 2:
									SegundoBoton(Numero,Lista,Datos);
								break;
								case 3:
							
								break;
								case 4:
								break;
							}
						}
						else{
							alert('Datos no validos, inserte texto en Datos');
						}
					}
					else{
						alert('No intentes cambiar los valores de la lista');
					}
				}
				else{
					alert('Inserte numeros enteros, no lo deje vacio');
				}
};

function PrimerBoton(numero,lista,datos){
	document.getElementById('Respuesta').innerHTML="";
	var DatosArray = [numero,lista,datos];
	var Link = 'https://swapi.co/api/'+DatosArray[1]+'/'+DatosArray[0];
	var request = new XMLHttpRequest();
	request.open('Get',Link,true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		if(request.status >= 200 && request.status < 400){
			if(typeof data === 'object' || Array.isArray(data)){
				for(let x in data){
					if(typeof data[x] === 'object' || Array.isArray(data[x])){
						for(let y in data[x]){
							console.log(data[x][y]);
							if(y == 0){
								document.getElementById('Respuesta').innerHTML+='<b>'+x+'</b> : <li>'+data[x][y]+'</li><br>';
							}
							else{
								document.getElementById('Respuesta').innerHTML+='<li>'+data[x][y]+'</li><br>';
							}
						}
					}else{
						console.log(data[x]);
						document.getElementById('Respuesta').innerHTML+='<b>'+x+'</b> : '+data[x]+'<br>';
					}
					document.getElementById('Respuesta').innerHTML+='<hr>';
				}	
			}
			else{
				console.log(data);
				document.getElementById('Respuesta').innerHTML+='<b>'+x+'</b> : '+data+'<br>';
			}
		}
		else{
			console.log('error');
		}
	}
	request.send();	
};
