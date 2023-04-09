---
layout: post
background: '/img/js.png'
title: 'Bucles e iteraciones'
previous:
  url: 'estructuras-de-control'
  title: 'Estructuras de control'
---

Una de las principales ventajas de la programación es la posibilidad de crear **bucles y repiticiones** para tareas específicas, y que no tengamos que realizarlas varias veces de forma manual. Existen muchas formas de realizar bucles, vamos a ver los más básicos, similares en otros lenguajes de programación:  


<table class="table table-striped table-borderless shadow border">
	<thead class="bg-warning">
		<th>Tipo de bucle</th>
		<th>Descripción</th>
	</thead>
	<tbody>
		<tr>
			<th><code>while</code></th>
			<td>Bucles simples.</td>
		</tr>
		<tr>
			<th><code>for</code></th>
			<td>Bucles clásicos por excelencia.</td>
		</tr>
		<tr>
			<th><code>do..while</code></th>
			<td>Bucles simples que se realizan siempre como mínimo una vez.</td>
		</tr>
		<tr>
			<th><code>for..in</code></th>
			<td>Bucles sobre posiciones de un array.</td>
		</tr>
		<tr>
			<th><code>for..of</code></th>
			<td>Bucles sobre elementos de un array.</td>
		</tr>
		<tr>
			<th><code class="text-primary">Arrays functions</code></th>
			<td>Bucles específicos sobre arrays.</td>
		</tr>
	</tbody>
</table>

Antes de comenzar a ver que tipos de bucles existen en javascript, es necesario conocer algunos conceptos básicos de los bucles:  

- **Condición**: Al igual que en los **if**, en los bucles se va a evaluar una condición para saber si se debe repetir el bucle o finalizarlo. Generalmente, si la condición es verdadera, se repite. Si es false, se finaliza.

- **Iteración**: Cada repitición de un bucle se denomina iteración. Por ejemplo si un bucle repite una acción 10 veces, se dice que tiene 10 iteraciones.

- **Contador**: Muchas veces, los bucles tienen una variable que se denomina contador, porque cuenta el número de repeticiones que ha hecho, para finalizar desde que llegue a un número concreto. Dicha variable hay que inicializarla (*crearla y darle un valor*) antes de comenzar el bucle.

- **Incremento**: Cada vez que terminemos un bucle se suele realizar el incremento (*o decremento*) de una variable, generalmente la denominada variable contador.


- **Bucle infinito**: Es lo que ocurre si un bucle se nos olvida incrementar la variable contador o escribimos una condición que nunca se pueda dar. El bucle se queda eternamente repitiéndose y el programa se queda **colgado**.


### Bucle while