---
layout: post
color: "#3B63DB"
background: "/img/css-margin-padding.png"
title: Márgenes y rellenos
previous:
  url: 'propiedad-box-sizing'
  title: 'CSS Propiedad box sizing'
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

### La propiedad padding (rellenos)


Al igual que con los márgenes, los **padding** tienen varias propiedades para indicar el relleno de cada zona:  


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-css">
    <th>Propiedad</th>
    <th>Valor</th>
    <th>Significado</th>
  </thead>
  <tbody>
        <tr>
          <th>padding-top</th>
          <td><strong>0</strong> | <span class="badge badge-info">size</span></td>
          <td>Establece un tamaño de relleno superior.</td>
        </tr>
        <tr>
          <th>padding-left</th>
          <td><strong>0</strong> | <span class="badge badge-info">size</span></td>
          <td>Establece un tamaño de relleno a la izquierda.</td>
        </tr>
        <tr>
          <th>padding-right</th>
          <td><strong>0</strong> | <span class="badge badge-info">size</span></td>
          <td>Establece un tamaño de relleno a la derecha.</td>
        </tr>
        <tr>
          <th>padding-bottom</th>
          <td><strong>0</strong> | <span class="badge badge-info">size</span></td>
          <td>Establece un tamaño de relleno inferior.</td>
        </tr>
  </tbody>
</table>


Como se puede observar en la tabla, por defecto no hay relleno (el relleno está en cero), aunque puede modificarse tanto con las propiedades anteriores como la propiedad de atajo que veremos en breve.


### Atajo: Modelo de cajas


Al igual que en otras propiedades de **CSS**, también existe una propiedad de atajo denominada **margin** y **padding**. Con estas propiedades evitamos tener que escribir valores de cada parte (*izquierda*, *derecha*, *arriba*, *abajo...*), especialmente importante si es el mismo valor en las cuatro.

No obstante, tenemos 4 modalidades, que dependen del número de parámetros de la propiedad: 



<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-css">
    <th>Propiedad</th>
    <th>Valores</th>
    <th>Significado</th>
  </thead>
  <tbody>
        <tr>
          <td><strong>padding</strong> o <strong>margin</strong></td>
          <td><span class="badge badge-info">size</span></td>
          <td>1 parámetro. Establece el mismo margen a <strong>todos</strong> los lados.</td>
        </tr>
        <tr>
          <td></td>
          <td><span class="badge badge-info">size</span> <span class="badge badge-info">size</span></td>
          <td>2 parámetros. Establece el margen para <strong>top/bottom</strong> y <strong>left/right</strong>.</td>
        </tr>
        <tr>
          <td></td>
          <td><span class="badge badge-info">size</span> <span class="badge badge-info">size</span> <span class="badge badge-info">size</span></td>
          <td>3. parámetros. Establece el margen para <strong>top, left/right</strong> y <strong>bottom</strong></td>
        </tr>
        <tr>
          <td></td>
          <td><span class="badge badge-info">size</span> <span class="badge badge-info">size</span> <span class="badge badge-info">size</span> <span class="badge badge-info">size</span></td>
          <td>4 parámetros. Establece el margen <strong>top, right, bottom</strong> y <strong>left</strong>.</td>
        </tr>
  </tbody>
</table>

Cabe destacar que la propiedad **border-width** pasa por lo mismo que con **padding** y **margin**, actuando en este caso en relación al **grosor del borde** de un elemento. Veamos algunos ejemplos:  


```css
.examples {
  margin: 15px;
  /* Equivalente a margin: 15px 15px 15px 15px; */

  margin: 20px 10px;
  /* Equivalente a margin: 20px 10px 20px 10px; */

  margin: 20px 10px 5px;
  /* Equivalente a margin: 20px 10px 5px 10px; */
}
```

