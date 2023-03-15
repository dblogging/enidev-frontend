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
    <div class="col-12 border border-dark" style="height: 60px">
    	Banner de 12 columnas
    </div>
    <div class="col-6 border border-dark">
    	Panel Izquierdo de 6 columnas
    </div>
    <div class="col-6 border border-dark">
    	Panel Derecho de 6 columnas
    </div>
    <div class="col-3 border border-dark">
    	Panel 1 de 4 columnas
    </div>
    <div class="col-3 border border-dark">
    	Panel 2 de 4 columnas
    </div>
    <div class="col-3 border border-dark">
    	Panel 3 de 4 columnas
    </div>
    <div class="col-3 border border-dark">
    	Panel 4 de 4 columnas
    </div>
    <div class="col-12 border border-dark" style="height: 60px">
    	Footer de 12 columnas
    </div>
  </div>
</div>

### Contendores, Filas y Columnas

Se debe especificar un contenedor usando una clase *"container"* para colocar elementos dentro de él. Ahí se especificará una fila y las columnas que se tendrán dentro de ella. Para declarar una fila se utiliza la clase *"row"*.

Para declarar una columna, se utilizan distintos Puntos de Ruptura


Para comenzar podemos trabajar con la estructura primero se creará un contenedor con la clase “container":

```html
<section class="container"></section>
```



```html
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
```

