---
layout: post
background: '/img/sistema-de-grilla.png'
---
	
## ¿Que es el sistema de  cuadrícula Bootstrap?


Para la estructura  de los sitios web y su comportamiento reponsivo. *Bootstrap* utiliza un manejo de tablas basado en filas y columnas conocido como ***grid***.

### Estructura del Grid

*Bootstrap* ofrece un *grid* formado por filas compuestas por 12 columnas, en ella se puede especificar cuántas columnas ocupará un solo elemento. No importa cuántos elementos tenga una fila, al final deberán sumar doce columnas. Por ejemplo:


<div class="container mb-4">
  <div class="row border border-dark" style="background: #f9f9d7">
    <div class="col-12 border border-dark py-2">
    	Banner de 12 columnas
    </div>
    <div class="col-6 border border-dark py-2">
    	Panel Izquierdo de 6 columnas
    </div>
    <div class="col-6 border border-dark py-2">
    	Panel Derecho de 6 columnas
    </div>
    <div class="col-3 border border-dark py-2">
    	Panel 1 de 4 columnas
    </div>
    <div class="col-3 border border-dark py-2">
    	Panel 2 de 4 columnas
    </div>
    <div class="col-3 border border-dark py-2">
    	Panel 3 de 4 columnas
    </div>
    <div class="col-3 border border-dark py-2">
    	Panel 4 de 4 columnas
    </div>
    <div class="col-12 border border-dark py-2">
    	Footer de 12 columnas
    </div>
  </div>
</div>

### Contendores, Filas y Columnas

Se debe especificar un contenedor usando una clase *"container"* para colocar elementos dentro de él. Ahí se especificará una fila y las columnas que se tendrán dentro de ella. Para declarar una fila se utiliza la clase *"row"*.

Para declarar una columna, se utilizan distintos puntos de rupturas *"breakpoints"*, que son elementos que maneja bootstrap para el comportamiento *responsive* o adaptable. Los puntos de ruptura son:

- **`lg`** => (Large Screen)
- **`md`** => (Medium Screen)
- **`sm`** => (Small Screen)
- **`xs`** => (Extra Small Screen)

Para declarar una columna, se hace usando una clase de la siguiente manera: `col-XX-N` en donde:

- **`XX`** => representa el tipo de punto de ruptura.
- **`N`** => representa la cantidad de columnas que abarcará un elemento.

Para comenzar podemos trabajar con la estructura primero se creará un contenedor con la clase “container":

```html
<section class="container">
  <!-- ... -->
</section>
```

Ahora se especificará una con la clase *"row"*:

```html
<div class="container">
  <div class="row">
    <!-- ... -->
  </div>
</div>
```

Finalmente dentro de la fila podemos crear las columnas con las clase *"col"*, como sabemos son doce columnas:

```html
<style>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
</style>
<div class="container">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
</div>
```

> *Bootstrap* no permite el uso de más de 12 columnas, en caso de que se especifique de esa manera, la columna sobrante se colocará inmediatamente debajo del resto de las columnas.

### Establecer un ancho de columna

En bootstrap podemos tener para las columnas los **auto-layout** que es parte de flexbox, esto significa que puedes establecer


<a name="opciones-cuadricula">

### Opciones de cuadrícula

**Boostrap** utiliza medidas **`em`** o **`rem`** en la mayoría de los tamaños, cuando se trata de comportamiento responsivo los puntos de interrupción (*breakpoint*) son establecidos en **`px`** así como los anchos de los contenedores. Esto se debe a que el ancho de la ventana gráfica de los diferentes dispositivos se encuentran en **pixeles** y no cambia con el **tamaño de la fuente**.   

Veamos cómo funcionan los aspectos del sistema de cuadrícula **Bootstrap** en múltiples dispositivos basandonos en la siguiente tabla:  


<table class="table" border="1">
  <thead class="text-center">
    <th class="h1">📺</th>
    <th>Muy pequeño<br><span class="font-weight-normal">&lt;576 px</span></th>
    <th>Pequeño<br><span class="font-weight-normal">&ge;576 px</span></th>
    <th>Medio<br><span class="font-weight-normal">&ge;768 px</span></th>
    <th>Grande<br><span class="font-weight-normal">&ge;992 px</span></th>
    <th>Extra grande<br><span class="font-weight-normal">&ge;1200 px</span></th>
  </thead>
  <tbody>
    <tr>
      <th>Prefijo clase</th>
      <td><code>.col-</code></td>
      <td><code>.col-sm-</code></td>
      <td><code>.col-md-</code></td>
      <td><code>.col-lg-</code></td>
      <td><code>.col-xl-</code></td>
    </tr>
  </tbody>
</table>

### Columnas de fila

Tenemos desde la **versión 4 de bootstrap** la clase `.row-cols-*` para establecer rápidamente la cantidad de columnas que mejor representan el contenido y el diseño. Mientras que las clases normales `.col-*` se aplican a columnas individuales; Por ejemplo: `.col-md-4`, las clases de columnas de fila se establecen en un elemento padre con la clase `.row` directamente. Con la clase `.row-cols-auto` podemos dar el ancho natural a cada columna.



```html
<style>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
</style>
<div class="container text-center">
  <div class="row row-cols-2">
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
    <div class="col">Columna</div>
  </div>
</div>
```
<div class="text-center mt-2">
  <div class="row row-cols-2">
    <div class="col p-2 bg-warning border border-dark">Columna</div>
    <div class="col p-2 bg-light border border-dark">Columna</div>
    <div class="col p-2 bg-warning border border-dark">Columna</div>
    <div class="col p-2 bg-light border border-dark">Columna</div>
  </div>
</div>



