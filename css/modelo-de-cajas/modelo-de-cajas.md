---
layout: post
background: "/img/box-model.png"
---

## ¿Qué es el modelo de cajas?


La representación básica del **modelo cajas** se basa en varios conceptos importantes, como veremos a continuación:  

- El **borde** (*border*),  es el límite que separa el interior del exterior del elemento.
- El **margen** (*margin*), es la parte exterior del elemento, por fuera del borde.
- El **relleno** (*padding*), es la parte interior del elemento, entre el contenido y el borde.
- El **contenido** (*content*), es la parte interior del elemento, excluyendo el relleno.

<p align="center">
  <img src="{{"/img/css-modelo-de-cajas.png" | prepend: site.baseurl }}" alt="modelo de cajas" class="size">
</p>

Como veremos, cada una de estas partes del **modelo de cajas** de **CSS** se puede alterar, cambiando sus dimensiones, colores, etc. Así, cada elemento **HTML** tendrá su propio borde, margen, relleno y contenido.

### Dimensiones (ancho y alto)

Para dar tamaños específicos a los diferentes elementos de un documento **HTML**, necesitamos asignarle valores a la propiedad **`width`** (*ancho*) y **`height`** (*alto*): 

En caso de indicar el valor **auto** a dichas propiedades, el navegador se encargará de darle el tamaño apropiado, dependiendo de su contenido. Tengamos en cuenta que este valor es el que tiene **por defecto** estas propiedades. De no indicar un valor en concreto, **`width`**  y **`height`** tienen establecido el valor **auto**.


Hay que ser consciente de que, sin indicar valores de ancho y alto para una caja, el elemento generalmente toma el tamaño que abarca su contenido, mientras que si indicamos un ancho y alto en concretos, **estamos obligando mediante CSS a tener un aspecto en concreto** y podemos experimentar resultados inexperados, si nuestro contenido es más grande que el tamaño que hemos obligado a tener, podemos obtener resultados similares al siguiente: 


<style>
  .box {
    border: 3px solid black;
    width: 290px;
    height: 290px;
    user-select: none;
    margin-bottom: 30px;
  }
  .box-text {
    font-size:60px;
  }
</style>
<div class="box">
  <p class="box-text">😎 CSS ES EXTRAORDINARIO </p>
</div>

### Rangos de dimensiones


Otra forma de lidear con esto, es utilizar propiedades hermanas de **`width`**: por un lado, tenemos **`min-width`** y **`max-width`** y por otro, sus equivalentes de **`height`**: **`min-height`** y **`max-height`**.

Con estas propiedades, en lugar de establecer un **tamaño fijo**, establecemos unos **rangos máximos y mínimos**, donde el ancho o alto podría variar entre esos valores:  

```html
<style>
 div {
   width: 800px;
   height: 400px;
   background: red;
   max-width: 500px;
 }
</style>
<div>
</div>
```

En este caso, por ejemplo, a pesar de estar indicando un tamaño de **800px**, le aplicamos un **`max-width`** de **500px**, por lo que estamos limitando al elemento a un tamaño de **ancho máximo de 500px** y nunca superará ese tamaño.


>**Ojo**: Las propiedades de mínimo **`min-width`** y **`min-height`** por defecto tienen el valor **0**, mientras que las propiedades de máximos **`max-width`** y **`max-height`**, tienen por defecto el valor **none**. 


### Zona de un elemento

Es importante saber que en **CSS** existen ciertas palabras claves para hacer referencia a una zona u orientación concreta sobre un elemento. Son conceptos muy sencillos y prácticamente lógicos, por lo que no tendremos ningún problema al comprenderlos. Son los siguientes: 

<p align="center">
  <img src="{{"/img/css-zona-de-elementos.png" | prepend: site.baseurl }}" alt="zona de elementos" class="size">
</p>

Estas palabras claves las utilizaremos con frecuencia en diferentes **propiedades CSS** para hacer referencia a una zona particular del elemento.


### La propiedad overflow

**CSS3** añade las propiedades **`overflow-x`** y **`overflow-y`** para cada eje individual, que antiguamente era posible hacerlo con la propiedad **`overflow`** para ambos ejes. Estas propiedades son útiles cuando no queremos mostrar una barra de desplazamiento, habitualmente, la barra de desplazamiento horizontal.