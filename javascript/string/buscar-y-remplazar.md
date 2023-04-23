---
layout: post
---

Una operación muy frecuente y habitual en javascript, es la de **comprobar la existencia** de un texto, **buscar** o incluso **reemplazar** por otro texto. Dependiendo del caso, hará falta uno u otro, por lo que lo primero que debes tener claro es saber cuál necesitas. Piensa que, aunque la sintaxis o el uso de uno de ellos te resulte más sencillo que otro, hay tareas que pueden tener más relevancia o no realizar. Por ejemplo:  

- **Comprobación**: La más ligera. Sólo comprueba si existe un fragmento de texto.
- **Búsqueda**: Busca un fragmento de texto, devolviendo información del texto encontrado (*posición*, *texto...*).
- **Remplazo**: Realiza una búsqueda de un texto y ademásun reemplazo. (*Suele ser más costoso*).


### Comprobación en textos

Los siguientes métodos se utilizan para realizar algún tipo de **comprobación** y saber si un fragmento de texto **está incluído** en un <span class="badge badge-warning">string</span>:


<table class="table table-striped table-borderless shadow-sm border">
	<thead class="thead-js">
		<th>Método</th>
		<th>Descripción</th>
	</thead>
	<tbody>
		<tr>
			<th><span class="badge badge-danger">boolean</span><code>.startsWith(text, from)</code></th>
			<td>Comprueba si el texto comienza por <strong>text</strong>.</td>
		</tr>
		<tr>
			<th><span class="badge badge-danger">boolean</span><code>.endsWith(text, to)</code></th>
			<td>Comprueba si el texto termina por <strong>text</strong>.</td>
		</tr>
		<tr>
			<th><span class="badge badge-danger">boolean</span><code>.includes(text, from)</code></th>
			<td>Comprueba si el texto contiene el subtexto <strong>text</strong>.</td>
		</tr>
	</tbody>
</table>

>Observa que en cada método tienes un **segundo parámetro opcional**, donde se puede indicar desde donde quieres empezar a comprobar (en el caso de **from**), o hasta donde quieres comprobar (en el caso de **to**).

Veamos unos ejemplos:  

```js
const text = "Marco";

console.log(text.startsWith("M"));     // true  ('Marco' empieza por 'M')
console.log(text.startsWith("a", 1));  // true  ('arco' empieza por 'a')
console.log(text.endsWith("o"));       // true ('Marco' acaba en 'o')
console.log(text.endsWith("n", 3));    // false  ('Mar' no acaba en 'n')
console.log(text.includes("ar"));      // true  ('Marco' incluye 'ar')
console.log(text.includes("M", 1));    // false ('arco' no incluye 'M')
```

### Búsqueda de cadenas de textos

Si necesitamos realiza una **búsqueda de un texto** (*que muchas veces no tenemos claro como es*) y queremos obtener iformación como la posición o la búsquedas encontradas, y los métodos del tema anterior de <a href="posiciones-substrings">posiciones y substrings</a> no nos sirven (*o se queda corto*), podemos utilizar alguno de los siguientes:



<table class="table table-striped table-borderless shadow-sm border">
	<thead class="thead-js">
		<th>Método</th>
		<th>Descripción</th>
	</thead>
	<tbody>
		<tr>
			<th><span class="badge badge-info">number</span><code>.search(regexp)</code></th>
			<td>Busca un patrón que encaja con <strong>regexp</strong> y devuelve un <span class="badge badge-info">number</span> correspondiente a la posición encontrada</td>
		</tr>
		<tr>
			<th><span class="badge badge-success">array</span><code>.match(regexp)</code></th>
			<td>Indéntico al anterio, pero devuelve las coincidencias encontras en <strong>regexp</strong>.</td>
		</tr>
		<tr>
			<th><span class="badge badge-success">array</span><code>.matchAll(regexp)</code></th>
			<td>Idéntico al anterior, pero devuelve un iterador para (*valga la redundancia*) iterar por cada coincidencia.</td>
		</tr>
	</tbody>
</table>

Estas búsquedas toman por parámetro **expresiones regulares**, por lo que suelen ser más potente y flexibles que buscar sólo por texto. La diferencia fundamental entre ellas es la siguiente:  

- El método **`.search(regexp)`** devuelve la posición de la primera ocurrencia y **-1** si no se encuentra.
- El método **`.match()`** devuelve un <span class="badge badge-success">array</span> con las coincidencias encontradas y **null** si no se encuentran.
- El método **`.matchAll()`** devuelve un iterador para poder recorrer las coincidencias encontradas.


Veamos algunos ejemplos:  


```js
const text = "El gato, el perro y el pato.";
const regexp = /.a.o/g;

console.log(text.search(regexp));   
// 3, porque la primera coincidencia ocurre en la posición 3 (gato)
console.log(text.match(regexp));    
// ["gato", "pato"], las dos coincidencias encontradas
```

Por otro lado, el método **`.matchAll()`** es un poco más avanzado, y permite realizar la misma acción que **`.match()`** pero devolviendo un iterador, lo que nos permite recorrerlo en un bucle:


```js
const text = "El gato, el perro y el pato.";
const regexp = /.a.o/g;

const iterator = text.matchAll(regexp);
for (let ocurrence of iterator) {
  console.log(ocurrence);
}

// ['gato', index: 3, input: 'El gato, el perro y el pato.', groups: undefined]
// ['pato', index: 23, input: 'El gato, el perro y el pato.', groups: undefined]
```

También es posible utilizar **`.matchAll()`** **desestructurando el resultado**, lo que nos permitirá acceder a la información de una forma más directa: 


```js
const text = "El gato, el perro y el pato.";
const regexp = /.a.o/g;
const results = [...text.matchAll(regexp)];    // ["gato", "pato"]

console.log(results.length)     // 2
console.log(results[0].index)   // 3
console.log(results[1].index)   // 23
```

### Remplazar cadenas de texto

Si lo que necesitamos es remplazar un texto, tenemos a nuestra disposición
