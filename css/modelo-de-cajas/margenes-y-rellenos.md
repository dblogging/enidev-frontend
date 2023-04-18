---
layout: post
background: "/img/css-box-sizing-banner.png"
title: Márgenes y rellenos
---


### La propiedad margin (márgenes)

El tamaño de dichos márgenes se puede alterar en conjunto (*de forma general*) o de forma específica a cada una de las zonas del elemento (*izquierda*, *derecha*, *arriba* o *abajo*). Veamos primero las propiedades específicas para cada zona:  


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-css">
    <th>Propiedad</th>
    <th>Valor</th>
    <th>Significado</th>
  </thead>
  <tbody>
        <tr>
          <th>margin-top</th>
          <td><strong>auto</strong> | <span class="badge badge-info">size</span></td>
          <td>Establece un tamaño de margen superior.</td>
        </tr>
        <tr>
          <th>margin-left</th>
          <td><strong>auto</strong> | <span class="badge badge-info">size</span></td>
          <td>Establece un tamaño de margen a la izquierda.</td>
        </tr>
        <tr>
          <th>margin-right</th>
          <td><strong>auto</strong> | <span class="badge badge-info">size</span></td>
          <td>Establece un tamaño de margen a la derecha.</td>
        </tr>
        <tr>
          <th>margin-bottom</th>
          <td><strong>auto</strong> | <span class="badge badge-info">size</span></td>
          <td>Establece un tamaño de margen inferior.</td>
        </tr>
  </tbody>
</table>


Podemos aplicar diferentes márgenes a cada zona de un elemento cada una de estas propiedades, o dejando el navegador que lo haga de forma automática indicando el valor **auto**.

Existe un truco muy sencillo y práctico para **centrar horizontalmente un elemento en pantalla**. Basta con aplicar un ancho fijo al contenedor: **width: 300px** (*por ejemplo*) y luego aplicar **margin: auto**. De esta manera, el navegador, al conocer el tamaño del elemento (*y por omisión, el resto del tamaño de la ventana*) se encarga de repartirlo equitativamente entre el margen izquierdo y el margen derecho, quedando centrado el elemento. Para salir de dudas, prueba el siguiente código: 


```html
<style>
  .box {
    width: 300px;
    height: 300px;
    background: purple;
    margin: auto;
  }
</style>
<div class="box">
</div>
```