---
layout: post
title: 'Seleccionar elementos del DOM'
---

Si nos encontramos en nuestro código javascript y queremos hacer modificaciones en un elemento de la página **HTML**, lo primero que debemos hacer es ir a buscar dichos elementos. Para ello, se suele intentar identificar el elemento a través de alguno de sus atributos más utilizados, generalmente un identificador (**`id`**) o la clase (**`class`**)


### Métodos tradicionales

Existen varios métodos, los más clásicos y tradicionales para realizar búsquedas de elementos en el documento. Observa que si lo que buscas es un elemento específico, lo mejor sería utilizar **`getElementById()`**, en caso contrario, si utilizamos uno de los 3 siguientes métodos, nos devolverá un **`array`** donde tendremos que elegir el elemento en cuestión posteriormente:  


<table class="table">
	<thead>
		<th>Métodos de búsqueda</th>
		<th>Descripción</th>
	</thead>
	<tbody>
		<tr>
			<td><code class="bg-light rounded">element</code><br><code class="font-weight-bold">.getElementById()</code></td>
			<td class="align-bottom">Busca el elemento <strong>HTML</strong> con el <strong>id</strong>. Si no, devuelve <code class="bg-light">null</code></td>
		</tr>
		<tr>
			<td><code class="bg-light rounded">array</code><br><code class="font-weight-bold">.getElementsByClassName(class)</code></td>
			<td class="align-bottom">Busca elementos con la clase <strong>class</strong>. Si no, devuelve <code>[]</code>.</td>
		</tr>
		<tr>
			<td>
				<code class="bg-light rounded">array</code><br><code class="font-weight-bold">.getElementsByName(name)</code>
			</td>
			<td>Busca elementos con atributos <strong>name</strong>. Si no, devuelve <code>[]</code>.</td>
		</tr>
		<tr>
			<td>
				<code class="bg-light rounded">array</code><br><code class="font-weight-bold">.getElementsByTagName(tag)</code>
			</td>
			<td>
				Busca elementos <strong>tag</strong>. Si no encuentra ninguno, devuelve <code>[]</code>.
			</td>
		</tr>
	</tbody>
</table>

Estos son los <strong>4 métodos tradicionales</strong> de javascript para manipular el DOM. Se denominan tradicionales porque son los que existen en javascript desde versiones más antiguas. Dichos métodos te permiten buscar elementos en la página dependiendo de los atributos **id**, **class**, **name** o de la propia etiqueta, respectivamente.

### getElementById()


El primer método **`.getElementById(id)`** busca un elemento **HTML** con el **id** especificado por parámetro. En principio un documento **HTML** bien construído **no debería** tener más de un elemento con el mismo **id**, por lo tanto, este método devolverá siempre un elemento.  

```js
const page = document.getElementById("page"); 
// <div id="page"></div> 
```

>Recordar que en caso de no encontrar el elemento indicado, devolverá `NULL`.


<a 
  class="btn btn-primary float-right mt-5" 
  href="crear-elementos-dom"
    data-toggle="tooltip" data-placement="top" 
    title="Seleccionar elementos del DOM">Siguiente<span
    class="d-none d-md-inline">
    Post</span> &rarr;
</a>