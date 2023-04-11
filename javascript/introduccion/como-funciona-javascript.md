---
layout: post
background: '/img/js.png'
title: 'Como funciona Javascript'
previous:
  url: 'consola-javascript'
  title: 'Consola de javascript'
next:
  url: 'conceptos-basicos'
  title: 'Conceptos básicos'
---


El **esquema general** de una página web es un **documento HTML** donde están todas las etiquetas **HTML** de la página. A lo largo de ese documento, pueden existir **referencias o relaciones** a otros documentos, como archivos **CSS** o archivos **javascript**.  

Por ejemplo, si dentro de un documento **HTML** se encuentra una referencia a un **archivo CSS**, el navegador lo descarga y lo aplica al **documento HTML**, cambiando su apariencia visual. De la misma forma, si encuentra una referencia a un **archivo javascript**, el navegador lo descarga y ejecuta las órdenes o acciones que allí se indican.  


### Ejemplo de script en línea

En este primer y sencillo ejemplo, sólo tenemos un documento: el **archivo HTML**. En él, existe una etiqueta <span class="tag">script</span> que contiene las órdenes o líneas de javascript que indican al navegador que tiene que hacer (*en este caso, mostrar un '¡Hoola!' en la consola*):  

```html
<html>
  <head>
    <title>Título de la página</title>
  </head>
  <body>
    <p>Ejemplo de texto.</p>
    <!-- SCRIPT -->
    <script>
      console.log("¡Hola!");
    </script>
  </body>
</html>
```

Este método de escribir scripts se denomina **javascript en línea** (*inline*), y significa que el javascript escrito está directamente en el código **HTML**. Nos puede servir como ejemplo inicial, pero **no es la forma recomendada** de escribir código javascript, ya que lo ideal es **separar el código HTML del código javascript** (*en archivos diferentes*) para organizar mejor un proyecto.


### Ejemplo de script externo

Esta otra forma de incluir javascript en una página tiene la ventaja de, en el caso de necesitar incluir el código javascript desde varios documentos **HTML**, no tendremos que volver a escribir dicho código, sino simplemente referenciar el nombre del mismo archivo de javascript a incluir en todas las páginas **HTML**.

Para relacionar un **documento javascript** desde una página web, igual que antes, utilizaremos la etiqueta <span class="tag">script</span>, sólo que en este caso, haremos referencia al archivo **javascript** con un atributo [**`src`**] (*source*), como se ve a continuación:  


```html
<html>
  <head>
    <title>Título de la página</title>
  </head>
  <body>
    <p>Ejemplo de texto.</p>
    <script src="js/index.js"></script>
  </body>
</html>
```

En este texto **js/index.js** no es más que una referencia a un archivo **index.js** que se encuentra dentro de una carpeta **js**, situada en la misma carpeta que el documento **HTML** del ejemplo. Si en este archivo javascript, incluímos el **`console.log()`** de mensaje de bienvenida, ese mensaje debería aparecer en la consola javascript al cargar esta página.


### Ubicación de la etiqueta script

Si vemos en los ejemplos anteriores, la etiqueta <span class="tag">script</span> está situada justo antes de la etiqueta de cierre del <span class="tag">body</span> de la página, es decir, en el cuerpo de la página. Esto significa que la página web descargará el archivo javascript despues de dibujar la página.

Es posible que te hayas encontrado con ejemplos o tutoriales de javascript donde dicha etiqueta <span class="tag">script</span> esté ubicada en otra parte del documento, por ejemplo dentro de la cabecera (<span class="tag">head</span>). Veamos las posibilidades es esto: 

<table class="table table-striped table-borderless shadow-sm border">
  <thead class="bg-warning">
    <th class="align-top">Ubicación</th>
    <th>¿Cómo se descarga el archivo?</th>
    <th class="align-top">Estado de la página</th>
  </thead>
  <tbody>
    <tr>
      <td><span class="tag">head</span></td>
      <td><strong>ANTES</strong> de empezar a dibujar la página.</td>
      <td>Página aún no dibujada.</td>
    </tr>
    <tr>
      <td><span class="tag">body</span></td>
      <td><strong>DURANTE</strong> el dibujado de la página.</td>
      <td>Dibujada hasta donde se encuentra con la etiqueta <span class="tag">script</span></td>
    </tr>
    <tr>
      <td><span class="tag">/body</span></td>
      <td><strong>DESPUÉS</strong> de dibujar la página.</td>
      <td>Dibujada al 100%</td>
    </tr>
  </tbody>
</table> 

>Tener en cuenta que el navegador puede descargar un documento javascript en cualquier momento de la carga de la página y necesitamos saber cuál es el más oportuno para nosotros.

