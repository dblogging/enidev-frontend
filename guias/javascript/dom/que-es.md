---
layout: post
---

Cuando comenzamos en el mundo de **desarrollo web**, normalmente comenzamos por aprender a escribir etiquetado o **marcado HTML** y además añadir **estilos CSS** para darle mejor aspecto y algo de interacción. Sin embargo, a medida que avanzamos, nos damos cuenta que en cierta forma podemos estar bastante limitados. 

Si únicamente utilizamos **HTML/CSS**, sólo podremos **crear páginas &lt;&lt;estáticas&gt;&gt;** (*sin demasiada personalización por parte del usuario*), pero si añadimos javascript, podremos crear **páginas &lt;&lt;dinámicas&gt;&gt;**. Cuando hablamos de páginas dinámicas, nos referimos a que podemos dotar de potencia y flexibilidad que nos da un lenguaje de programación para crear documentos y páginas mucho más ricas, que brinden una experiencia más completa y con el se pueden automatizar un gran abanico de tareas y acciones.


## ¿Qué es el DOM?

Las siglas de **DOM** significan **Document Object Model**, o lo que es lo mismo, la **estructura del documento HTMl**. Una página **HTML** como sabemos, está formada por múltiples etiquetas de **HTML**, anidadas una dentro de otra, formando un **árbol de etiquetas** relacionadas entre sí, que se denomina **árbol DOM** (*o simplemente DOM*).


En javascript, cuando nos referimos al **DOM** nos referimos a esa estructura, que podemos modificar de forma dinámica desde javascript, **añadiendo nuevas etiquetas**, **modificando o eliminando otras**, **cambiando sus atributos HTML**, **añadiendo clases**, **cambiando el contenido de texto**, etc.  

Al estar "amparado" por un **lenguaje de programación**, todas estas tareas se pueden automatizar, incluso indicando que se realicen cuando el usuario haga acciones determinadas, como por ejemplo: pulsar un botón, mover el *mouse*, hacer *clic* en una parte del documento, escribir un texto, etc...

### El objeto document

En javascript, la forma de acceder al **DOM** es a través de un objeto llamado **document**, que representa el árbol **DOM** de la página o pestaña del navegador donde nos encontramos. En su interior puede existir varios tipos de elemenentos pero principalmente serán **`element`** o **`node`**:  

- **`element`** no es más que la representación genérica de una etiqueta: **HTMLElement**.
- **`node`** es una unidad más básica, la cuál puede ser **`element`** o un **nodo de texto**.


Todos los **elementos HTML**, dependiendo del elemento que sean, tendrán un tipo de dato específico. Algunos ejemplo serían: 

<table class="table">
  <thead>
    <th>Tipo de dato</th>
    <th>Tipo específico</th>
    <th>Etiqueta</th>
    <th>Descripción</th>
  </thead>
  <tbody>
    <tr>
      <td><code>element</code><br><strong>HTMLElement</strong></td>
      <td class="align-bottom"><strong>HTMLDivElement</strong></td>
      <td class="align-bottom"><span class="tag">div</span></td>
      <td class="align-bottom">Capa divisoria invisible (en bloque).</td>
    </tr>
    <tr>
      <td><code>element</code><br><strong>HTMLElement</strong></td>
      <td class="align-bottom"><strong>HTMLSpanElement</strong></td>
      <td class="align-bottom"><span class="tag">span</span></td>
      <td class="align-bottom">Capa divisoria invisible (en línea).</td>
    </tr>
    <tr>
      <td><code>element</code><br><strong>HTMLElement</strong></td>
      <td class="align-bottom"><strong>HTMLImageElement</strong></td>
      <td class="align-bottom"><span class="tag">img</span></td>
      <td class="align-bottom">Imagen.</td>
    </tr>
    <tr>
      <td><code>element</code><br><strong>HTMLElement</strong></td>
      <td class="align-bottom"><strong>HTMLAudioElement</strong></td>
      <td class="align-bottom"><span class="tag">audio</span></td>
      <td class="align-bottom">Contenedor de audio.</td>
    </tr>
  </tbody>
</table>

Es evidente, que nos faltan porque existen muchos tipos de datos específicos, uno por cada etiqueta **HTML**.


### API nativa de javascript


En los siguientes capítulos veremos que **javascript** nos proporciona un conjunto de herramientas para trabajar de forma nativa con el **DOM** de la página, entre las que se encuentran:


<table class="table">
  <thead>
    <th>Objetivo en el DOM</th>
    <th>Descripción</th>
  </thead>
  <tbody>
    <tr>
      <td><span>🔎</span><br><strong>Buscar etiquetas</strong></td>
      <td class="align-bottom">Familia de métodos entre los que se encuentran como <code>.innerHTML</code> o métodos como <code>.appendChild()</code>, <code>.insertAdjacentHTML()</code>, entre otros.</td>
    </tr>
    <tr>
      <td><span>🚀</span><br><strong>Crear etiquetas</strong></td>
      <td class="align-bottom">Una serie de métodos y consejos para crear elementos en la página y trabajar con ellos de forma dinámica.</td>
    </tr>
    <tr>
      <td><span>👑</span><br><strong>Gestión de CSS</strong></td>
      <td class="align-bottom">Consejos para la utilización de la API <code>.classList</code> de javascript que nos permite manipular clases <strong>CSS</strong> desde <strong>JS</strong>, de modo que podamos añadir, modificar, eliminar clases de <strong>CSS</strong> de un elemento de una forma práctica y cómoda.</td>
    </tr> 
  </tbody>
</table>


<a 
  class="btn btn-primary float-right mt-5" 
  href="seleccionar-elementos-dom"
    data-toggle="tooltip" data-placement="top" 
    title="Seleccionar elementos del DOM">Siguiente<span
    class="d-none d-md-inline">
    Post</span> &rarr;
</a>
