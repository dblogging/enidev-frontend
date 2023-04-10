---
layout: post
---


Al trabajar con javascript (*o conb cualquier lenguaje de programación*), es muy habitual hacer uso de los llamados **operadores**. Se trata de unos símbolos que nos permitirán hacer una serie de operaciones con uno o más operadores (*generalmente, números*). Sin embargo, esto se entiende mejor con ejemplos, por lo que vamos a ir desglosando los **operadores básicos** en una serie de bloques y a explicarlos para que se entienda lo mejor posible:  


- **Aritméticos**: Operadores para realizar operaciones matemáticas.
- **Asignación**: Operadores para guardar información en variables.
- **Unarios**: Operadores que se utilizan con un sólo operando.
- **Comparación:** Operadores para realizar comprobaciones.
- **Binarios:** Operadores de bajo nivel (*nivel de bits*).

### Operadores aritméticos

En primer lugar, vamos a centrarnos en los **operadores aritméticos**, que son los operadores que utilizamos para realizar operaciones matemáticas básicas. Los más sencillos son los cuatro primeros, que forman parte de las operaciones matemáticas básicas habituales:  


<table class="table table-striped table-borderless shadow-sm border">
	<thead class="bg-warning">
		<th>Nombre</th>
		<th>Operaodr</th>
		<th>Descripción</th>
	</thead>
	<tbody>
		<tr>
			<td>Suma</td>
			<td><strong>a + b</strong></td>
			<td>Suma el valor de <strong>a</strong> al valor de <strong>b</strong>.</td>
		</tr>
		<tr>
			<td>Resta</td>
			<td><strong>a - b</strong></td>
			<td>resta el valor de <strong>b</strong> al valor de <strong>a</strong></td>
		</tr>
		<tr>
			<td>Multiplicación</td>
			<td><strong>a * b</strong></td>
			<td>Multiplica el valor de <strong>a</strong> por el valor de <strong>b</strong>.</td>
		</tr>
		<tr>
			<td>División</td>
			<td><strong>a / b</strong></td>
			<td>Divide el valor de <strong>a</strong> entre el valor de <strong>b</strong>.</td>
		</tr>
		<tr>
			<td>Módulo</td>
			<td><strong>a % b</strong></td>
			<td>Devuelve el resto de la división de <strong>a</strong> entre <strong>b</strong>.</td>
		</tr>
		<tr>
			<td>Exponenciación</td>
			<td><strong>a ** b</strong></td>
			<td>Eleva <strong>a</strong> a la potencia de <strong>b</strong>, es decir, <strong>a<sup>b</sup></strong>. Equivalente a <code>Math.pow(a,b)</code>.</td>
		</tr>
	</tbody>
</table>


Menos frecuentes suele ser el de la **exponenciación**, sin embargo, es muy útil en algunas situaciones.


### Operador módulo

Observa el siguiente ejemplo donde utilizamos la **operación módulo** para limitar el índice:  

```js
const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numbers.length; i++) {
  const mod = i % 2;
  console.log(numbers[i], numbers[mod]);
}
```

Observamos que en el `console.log()` estamos mostrando **`numbers[i]`** y luego **`numbers[mod]`**. Si ejecutas este código, comprobarás que en el primer caso, se van a mostrar los valores del array **numbers**, decir, **10, 20, 30...** y así sucesivamente hasta el **80**. Sin embargo, en el segundo caso del `console.log()`, donde utilizamos **mod** como índice, se repiten los dos primeros: **10, 20, 10, 20, 10, 20...**.


Esto ocurre porque en la línea **`const mod = i % 2`** hemos hecho el módulo sobre 2 y no estamos dejando que ese índice crezca más de **2**, los valores que va a tomar **mod** en el bucle serán  **0, 1, 0, 1, 0, 1...**, puedes comprobarlo cambiando el `console.log()` y mostrando los valores **i** y **mod**.


### Operador de exponenciación

En el caso de la exponenciación, simplemente podemos utilizar el operador `**`. Antiguamente, la exponenciación se hacía a través del método **Math.pow()**, sin embargo, ahora podemos hacerlo a través de este operador, con el mismo resultado:  

```js
const a = 2;
const b = 5;

console.log(Math.pow(a, b));    // 32
console.log(a ** b);            // 32
console.log(a * a * a * a * a); // 32
```
En este caso, estamos haciendo la operación <strong>2<sup>5</sup></strong>, es decir <strong>2 * 2 * 2 * 2 * 2</strong>


### Operadores de asignación


Al margen de los anteriores, también tenemos los **operadores de asignación**. Estos operadores nos permiten asignar la información a diferentes constantes o variables a través del símbolo **`=`**, lo cuál es bastante lógico así se hace en matemáticas.


No obstante, también existen ciertas **contracciones** relacionadas con la asignación que nos permiten realizar operaciones de una forma más compacta. Esos operadores son los siguientes:  

<table class="table table-striped table-borderless shadow-sm border">
	<thead class="bg-warning">
		<th>Nombre</th>
		<th>Operaodr</th>
		<th>Descripción</th>
	</thead>
	<tbody>
		<tr>
			<td>Asignación</td>
			<td><strong>c = a + b</strong></td>
			<td>Asigna el valor de la parte derecha (<i>en este ejemplo</i>) a <strong>c</strong>.</td>
		</tr>
	</tbody>
</table>