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
