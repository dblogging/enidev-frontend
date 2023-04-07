---
layout: post
date: "16 de marzo del 2023"
---


## La sintaxis de JQuery

La sintaxis de **JQuery** esta hecha a medida para **seleccionar elementos HTML** y realizar alguna acción en los elementos.  

La sintaxis básica es: `$(selector).accion()`  

- Un signo **`$`** para definir/acceder a JQuery
- Un selector para "consultar o buscar" elementos **HTML**
- Una acción JQuery que realizará sobre los elementos


#### Ejemplos

- **`$(this).hide()`** - ocultará el elemento actual
- **`$("p").hide()`** - ocultará todos los elementos <span class="tag">p</span>
- **`$(".test").hide()`** - ocultará todos los **elementos con la clase `.test`**
- **`$("#test").hide()`** - ocultará todos los **elementos con un id `test`**

### El evento DocumentReady

Todos los métodos JQuery están dentro de un evento de preparación de documentos:  

```js
$(document).ready(function(){
  // aquí van los métodos de JQuery
})
```

Esto es para evitar que se ejecute cualquier código de JQuery antes de lo que el documento termine de cargarse. Es una buena practica esperar a que el documento esté completamente cargado y listo antes de trabajar con él. Esto también nos permite tener el código de javascript antes del cuerpo de el documento, en la sección de cabeceras <span class="tag">head</span>.  

>**Sugerencias**: El equip de JQuery también ha creado un método aún más corto para el evento de preparación del documento: `$(function(){ /*...*/ });`


