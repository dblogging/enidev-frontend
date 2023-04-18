---
layout: post
---


### Crear elementos HTML

Existen una serie de métodos para **crear de forma eficiente** diferentes elementos HTML o nodos, y que nos puden convertir en una tarea muy sencilla el crear estructuras dinámicas, mediante bucles o estructuras definidas:  


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-js">
    <th>Método</th>
    <th>Descripción</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="método"><span class="badge badge-primary">element</span><strong><code>.createElement(tag, options)</code></strong></td>
          <td data-label="descripción">Crea y devuelve un elemento <strong>HTML</strong> definido por el <span class="badge badge-warning">string</span> <strong>tag</strong>.</td>
    </tr>
    <tr>
      <td data-label="método"><span class="badge badge-secondary">node</span><strong><code>.createComment(text)</code></strong></td>
          <td data-label="descripción">Crea y devuelve un nodo de comentario <strong>HTML</strong> <span class="tag" style="color: #257740">!-- text --</span>.</td>
    </tr>
    <tr>
      <td data-label="método"><span class="badge badge-secondary">node</span><strong><code>.cloneNode(deep)</code></strong></td>
          <td data-label="descripción">Clona el nodo <strong>HTML</strong> y devuelve una copia, <strong>deep</strong> es <strong>false</strong> por defecto.</td>
    </tr>
     <tr>
      <td data-label="método"><span class="badge badge-danger">boolean</span><strong><code>.isConnected</code></strong></td>
          <td data-label="descripción">Indica si el nodo <strong>HTML</strong> está insertado en el documento <strong>HTML</strong>.</td>
    </tr>
  </tbody>
</table>


### El método createElement()

Mediante el método **`.createElement()`** podemos crear un <span class="badge badge-primary">element</span> **HTML en memoria** (*¡no estará insertado aún en nuestro documento* ***HTML*** *!*). Dicho elemento almacenado en una variable, podremos modificar sus características o contenido, para **posteriormente** insertarlo en una posición determinada del **DOM** o documento **HTML**.


Vamos a centrarnos en el proceso de **creación del elemento**. El funcionamiento de **`createElement()`** es muy sencillo: se trata de pasarle el nombre de la etiqueta (***tag***) a utilizar.

```js
const div = document.createElement("div");      
// Creamos un <div></div>
const span = document.createElement("span");    
// Creamos un <span></span>
const img = document.createElement("img");      
// Creamos un <img>
```