---
layout: post
color: "#3B63DB"
background: "/img/css-box-sizing-banner.png"
title: Propiedad box-sizing
previous:
  url: 'modelo-de-cajas'
  title: 'Modelo de cajas'
next:
  url: 'margenes-y-rellenos'
  title: 'Margenes y rellenos'
---


### El tamaño de las cajas

Por defecto, el **modelo de cajas** de CSS siguen un esquema donde al dar un tamaño a un elemento, concretamente se le da tamaño a su contenido, de modo que si además le añadimos un borde (*border*) y/o un relleno (*padding*), se sumará al tamaño indicado previamente.

Esto puede resultar algo poco intuitivo, ya que un elemento de tamaño **width: 200px**, con un **border: 15px** y un **padding: 20px**, tendría en realidad un tamaño total de **270px** (*15px + 15px de border izquierdo y derecho, 20px + 20px de relleno izquierdo y derecho y los 200px del contenido*). Tener que realizar estos cálculos, puede resultar complejo y poco predecible, especialmente en situaciones donde estamos muy justos de espacio.

### La propiedad box-sizing

En **CSS**, existe una propiedad denominada **box-sizing** que permite alterar esta versión del **modelo de cajas**. Lo explicado en el apartado anterior es el funcionamiento por defecto del modelo de cajas de **CSS**, y el valor es **content-box** de dicha propiedad.

<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-css">
    <th>Método</th>
    <th>Descripción</th>
  </thead>
  <tbody>
        <tr>
          <th>content-box</th>
          <td>Las propiedades <strong>width</strong> y <strong>height NO</strong> incluyen borde, relleno y/o margen. (<em>Predeterminado</em>)</td>
        </tr>
        <tr>
          <th>border-box</th>
          <td>Las propiedades <strong>width</strong> y <strong>height</strong> incluyen borde y relleno.</td>
        </tr>
  </tbody>
</table>

Sin embargo, como vemos tenemos disponible el otro valor denominado **border-box** donde se puede cambiar el comportamiento de este modelo de cajas por uno simplificado donde el tamaño del **border** y del **padding** están incluídos en el tamaño del contenido dados por propiedades como **width** o **height**.

Veamos un ejemplo donde utilizaremos las siguientes medidas:

- Tamaño **width** y **height** de **200px** (*un cuadrado*)
- Borde de **10px** por cada lado.
- Relleno de **20px** por cada lado.


<p align="center">
  <img src="{{"/img/css-border-box-sizing.png" | prepend: site.baseurl }}" alt="modelo de cajas" class="size">
</p>

Observa que en el caso de la izquierda, donde usamos **box-sizing: content-box** (*valor por defecto*), los tamaños de borde y de relleno se suman al dado por ancho y altos, por lo que al tamaño total del elemento es el resultado de ese agregado **260px**.

Sin embargo, en el caso de la derecha, **box-sizing: border-box**, los tamaños de borde y de relleno se restan al tamaño dado por anchos y altos, por lo que el tamaño total del elemento será de **200px**, pero sin embargo, el tamaño disponible para el contenido se redujo a **140px**.


### Reseteos de CSS

Aunque cada vez es menos frecuente, simplificar los cálculos del desarrollador con **box-sizing** o la necesidad de eliminar el **margin** en el **body** o en elementos de encabezados como <span class="tag">h1</span>, <span class="tag">h2</span>, etc. Esto ha hecho que muchos programadores decidan utilizar **reseteos** que eliminen estas particularidades de todos los navegadores y hagan que sea más fácil de escribir **CSS**.

Tradicionalmente, han habido muchos sistemas de reset en **CSS**, pero sólo algunos han quedado hasta estos días. Mencionaremos en la siguiente tabla algunos de los más populares:


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-css">
    <th>Sistema de reseteo</th>
    <th>Descripción</th>
  </thead>
  <tbody>
        <tr>
          <th><a href="https://meyerweb.com/eric/tools/css/reset/" target="_blank">Reset CSS</a></th>
          <td>El reset de  <strong>Eric Meyer</strong> es quizás el primero.</td>
        </tr>
        <tr>
          <th><a href="https://necolas.github.io/normalize.css/" target="_blank">Normalize.css</a></th>
          <td>Uno de los reset más tradicionales y populares.</td>
        </tr>
        <tr>
          <th><a href="https://andy-bell.co.uk/a-modern-css-reset/" target="_blank">A Modern CSS Reset</a></th>
          <td>El reset CSS de Andy Bell.</td>
        </tr>
  </tbody>
</table>


### El margin Collapse

Otro detalle que merece la pena destacar, y que sorprende mucho en el aprendizaje del **modelo de cajas** de **CSS**, es llamado el &lt;&lt;margin collapse&gt;&gt; o **colapso de márgenes**.

Como veremos en breve, **CSS** tiene varios mecanismo de maquetación. Los más básicos son **inline** y **block**, y en ellos, ocurre la siguiente situación. Imaginemos que tenemos dos elementos adyacentes, y cada uno de ellos, tiene un margen de **20px** definido.

Quizás, lo más intuitivo es pensar que el elemento de la izquierda tiene **20px** de margen derecho, mientras que el elemento de la derecha tiene **20px** de margen izquierdo, que sumarse, predicimos que resultará un tamaño de **40px**. Sin embargo, la realidad es distinta:  

<p align="center">
  <img src="{{"/img/css-margin-collapse.png" | prepend: site.baseurl }}" alt="modelo de cajas" class="size">
</p>

El **margin collapse** se refiere a que en estos modelos de maquetación básica, los márgenes de dos elementos se colapsan, ocupando el tamaño una sola vez. En el ejemplo anterior, ocupa sólo esos **20px**, en lugar de **40px**.


>En modelos de maquetación avanzados como **flex** o **grid** no se aplica el **&lt;&lt;margin collapse&gt;&gt;**, ya que es algo que sólo afecta a los modelos básicos como **inline** o **block**.
