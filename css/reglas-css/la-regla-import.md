---
layout: post
background: "/img/css-regla-import-banner.png"
---


La regla **`@import`** es una **regla CSS** que permite cargar un archivo **.css** externo, leer sus líneas de código e incorporarlo al archivo actual. Estas **reglas CSS** se suelen indicar en las primeras líneas del archivo.

La forma de usar la regla **`@import`** es la siguiente:  


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-css">
    <th>Tipo de importación</th>
    <th>Descripción</th>
  </thead>
  <tbody>
        <tr>
          <th><code>@import</code> <span class="badge badge-secondary">url</span></th>
          <td>importamos una hoja de estilos CSS externa</td>
        </tr>
        <tr>
          <th><code>@import</code> <span class="badge badge-secondary">url</span> <em>media-query</em></th>
          <td>Importamos una hoja de estilos CSS sólo si coincide con el media query indicado</td>
        </tr>
        <tr>
          <th><code>@import</code> <span class="badge badge-secondary">url</span> <code>supports(</code><em>condición</em><code>)</code></th>
          <td>Importamos una hoja de estilos CSS sólo si el navegador soporta la condición.</td>
        </tr>
        <tr>
          <th><code>@import</code> <span class="badge badge-secondary">url</span> <code>layer(</code><em>nombre</em><code>)</code></th>
          <td>Importamos una hoja de estilos CSS y la colocamos en la capa <em>nombre</em>.</td>
        </tr>
         <tr>
          <th><code>@import</code> <span class="badge badge-secondary">url</span> <code>layer()</code></th>
          <td>Importamos una hoja de estilos CSS y la colocamos en la capa anónima.</td>
        </tr>
  </tbody>
</table>

Un detalle **importante** es que hay que tener en cuenta que la regla **`@import`** se evalua en el navegador a la hora de cargar la página, por lo que cada regla **`@import`** equivalente a una petición al servidor de un archivo **.css**.

>Esto, tradicionalmente, se suponía un problema, ya que en efectos de rendimiento podría ser mucho mejor incluir todo el código CSS en un solo archivo para reducir el número de peticiones. Sin embargo, actualmente, en páginas que funcionen bajo el protocolo **HTTP/2** o superior, podría no ser tan relevante. Preprocesadores como **Sass** (*o similares*) tienen mecanismos para realizar **imports** anticipados y generar un sólo archivo con todo el código **CSS** para que el navegador realice menos peticiones.

### Formato de @import

En principio, existen dos formas de cargar archivos externos mediante la regla **`@import`**, utilizando la función **url()** o indicando simplemente un <span class="badge badge-warning">string</span> con el archivo o dirección URL.  

Como se puede ver a continuación, se puede utilizar tantos los nombres de los **archivos**, como **rutas relativas** o **absolutas**:  


```css
@import url("menu.css");                 /* Archivo en la misma ruta */
@import url("menu/sidebar.css");         /* Ruta relativa, dentro de menu/ */
@import "https://sitioweb/index.css";    /* Ruta absoluta, URL completa */
```

### Import con media queries

Observemos en el siguiente caso que podemos indicar una **media query**, para que ese archivo **.css** se importe sólo en el caso que se cumpla:






