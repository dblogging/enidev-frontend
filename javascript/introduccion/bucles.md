---
layout: post
background: '/img/js-bucles.png'
previous:
  url: 'estructuras-de-control'
  title: 'Estructuras de control'
next:
  url: 'operadores-basicos'
  title: 'Operadores básicos'
---

Una de las principales ventajas de la programación es la posibilidad de crear **bucles y repiticiones** para tareas específicas, y que no tengamos que realizarlas varias veces de forma manual. Existen muchas formas de realizar bucles, vamos a ver los más básicos, similares en otros lenguajes de programación:  


<table class="table table-striped table-borderless shadow-sm border">
	<thead class="thead-js">
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

El bucle **while** es uno de los bucles más simples que podemos crear. Vamos a partir con un ejemplo básico, para luego ir repasando todo lo que ocurre en cada iteración del bucle:  

```js
i = 0; // Inicialización de la variable contador

// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
  console.log("Valor de i:", i);
  i = i + 1; // Incrementamos el valor de i
}
```

Lo que ocurre a la hora de hacer funcionar este código es lo siguiente:  

- Antes de entrar en el bucle **while**, se inicializa la variable **i** en **0**.
- Antes de realizar la primera **iteración** del bucle, comprobamos la **condición**.
- Si la condición es **verdadera**, hacemos lo que está dentro del bucle.
- Mostramos por pantalla el valor de **i** y luego incrementamos el valor actual de **i** en **1**.
- Volvemos al inicio del bucle para hacer una **nueva iteración**. Comprobamos de nuevo la **condición** del bucle.
- Cuando la condición sea **falsa**, salimos del bucle y continuamos el programa.



<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/db737be71798420289390651a8e999fa" title="bucles.pdf" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 314;" data-ratio="1.78343949044586"></iframe>

Un bucle **while** es muy simple, pero requiere que declaremos una variable previamente para evaluar y evitar que el programa se quede **colgado en un bucle infinito** por olvidarnos de este factor y además dentro debemos recordar incrementar el valor de la variable, por lo que el bucle **for** resulte más interesante, ya que para hacer un bucle de este tipo hay que escribir previamente siempre tres factores.

> La operación **i = i + 1** es lo que se suele llamar un incremento de una variable. Es muy común simplificarlo como **i++**, que hace exactamente lo mismo: aumenta su valor en 1.


### Bucle for

El bucle **for** es quizás uno de los más utilizado en el mundo de la programación. En javascript se utiliza exactamente igual que en otros lenguajes como **Java**, **C/C++**. Veamos replicar el mismo ejemplo anterior utilizando un bucle for:


```js
// for (inicialización; condición; incremento)
for (i = 0; i < 5; i++) {
  console.log("Valor de i:", i);
}
```

Como vemos, la sintaxis de un **bucle for** es mucho más compacta y rápida de escribir que la de un **bucle while**. La primera vez puede parecer algo confuso, pero es mucho más práctica porque te obliga a escribir la **inicialización**, la **condición** y el **incremento** antes del propio bucle, y eso hace que no te olvides de estos tres puntos fundamentales.

>En programación es muy habitual empezar a contar desde **cero**. Mientras que en la vida real se contaría **desde 1 hasta 10**, en programación se contaría **desde 0 hasta 9**.


### Incremento múltiple

Aunque no suele ser habitual, es posible añadir varias inicializaciones o incrementos en un bucle **for** separando por comas. En el siguiente ejemplo además de aumentar el valor de una variable **i**, incializamos una variable con el valor **5** y lo vamos decrementando:  


```js
for (i = 0, j = 5; i < 5; i++, j--) {
  console.log("Valor de i y j:", i, j);
}
```