---
layout: post
date: "16 de marzo del 2023"
---

EL método central de JQuery es **`$.ajax()`** es una forma sencilla de crear solicitudes Ajax. Toma un objeto de configuración que contiene todas las instrucciones que JQuery require para completar la solicitud. El método **`$.ajax()`** es particularmente valioso porque ofrece la capacidad de especificar devoluciones de llamada tanto exitosas como fallidas. Además, podemos tomar un objeto de configuración por separado para facilitar la escritura de código reutilizable. 

**Ejemplo**


```js
$.ajax({
	// La URL para la solicitud
	url: "https://rickandmortyapi.com/api/character",
	// La data que se envía (debe ser convertido a string)
	data: {
		id: 123
	},
	// El tipo de solicitud puede ser GET o POST
	type: "GET",
	// Especificamos el tipo de datos que esperamos
	dataType: "json",
}).done(function(json){
	// Código que se ejecutará si la solicitud es exitosa
  	// La respuesta is pasada en la función
	$("<h1>").text(json.title).appendTo( "body" );
    $("<div class=\"content\">").html(json.html).appendTo( "body" );
})
```

### Ventajas y desventajas

**Sus ventajas son:**

- Mejora la experiencia de usuario
- Puede ser utilizado en cualquier plataforma y navegador
- Menor transferencia de datos en **cliente/servidor**
- Optimización de recursos (tiempo de operaciones)
- Portabilidad y usabilidad (permite realizar una petición de datos al servidor y recibirla sin necesidad de cargar la página entera)