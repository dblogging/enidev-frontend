---
layout: post
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
          <th>margin-bottom</th>
          <td><strong>auto</strong> | <span class="badge badge-info">size</span></td>
        </tr>
  </tbody>
</table>