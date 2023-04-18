---
layout: post
background: '/img/js-posiciones-substring.png'
title: 'Posiciones y substring'
previous:
  url: '../tipos-de-datos/strings'
  title: '¿Qué es un String?'
---

<a href="{{ '/javascript' | relative_url }}">
<img
  src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
  height="50" />
</a>

<hr>


Hay dos conceptos muy importantes relacionados con los **strings**, y son los conceptos **substring** y **posición**. Aunque son bastante autoexplicativos, vamos a explicarlos.  

- Un **substring** es un fragmento más pequeño que forma parte de un <span class="badge badge-warning">string</span>.

- Una **posición** (*o índice*) es un <span class="badge badge-info">number</span> que representa el lugar donde está ubicado un **substring**, teniendo en cuenta que se empieza a contar desde **0**. Así, la primera letra del **string** tendría el índice **0**, la segunda **1**, la tercera **2**, etc...




<h3 id="obtener-posiciones"><a href="#obtener-posiciones">
Obtener posición o índice</a></h3>

En primer lugar existen varios métodos que permiten darnos información sobre la **posición** o **ubicación** que ocupa un determinado carácter o texto. Esta posición también suele denominarse **índice**. Veamos detalladamente dichos métodos:

<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-js">
    <th>Método</th>
    <th>Descripción</th>
    <th>Retorna</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="método"><strong><code>.charAt(pos)</code></strong></td>
          <td data-label="descripción">Devuelve el carácter en la posición <strong>pos</strong> de la variable.</td>
          <td data-label="retorna"><span class="badge badge-warning">string</span></td>
        </tr>
        <tr>
          <td data-label="método"><strong><code>.indexOf(str)</code></strong></td>
          <td data-label="descripción">Devuelve la primera posición del texto <strong>str</strong>.</td>
          <td><span class="badge badge-info">number</span></td>
        </tr>
        <tr>
          <td><strong><code>.indexOf(str, from)</code></strong></td>
          <td>Igual al anterior, partiendo desde la posición <strong>from</strong>.</td>
          <td><span class="badge badge-info">number</span></td>
        </tr>
        <tr>
          <td><strong><code>.lastIndexOf(str)</code></strong></td>
          <td>Devuelve la última posición del texto <strong>str</strong>.</td>
          <td><span class="badge badge-info">number</span></td>
        </tr>
        <tr>
          <td><strong><code>.lastIndexOf(str,from)</code></strong></td>
          <td>Identico al anterior, partiendo desde <strong>from</strong> hacia el inicio.</td>
          <td><span class="badge badge-info">number</span></td>
        </tr>
  </tbody>
</table>

---

### Carácter en cierta posición


El método **`.charAt(pos)`** nos permite comprobar que carácter se encuentra en la posición **pos** del texto. Este método devolverá un <span class="badge badge-warning">string</span> con dicho carácter. En caso de pasarle una posición que no existe, simplemente nos devolverá un <span class="badge badge-warning">string</span> vacio `""`. El valor por defecto de **pos** es 0.  


```js
console.log('mar'.charAt(1)) // devuelve "a" 
console.log('mar'.charAt(3)) // devuelve "" 
```

La otra forma (introducida en <a href="https://262.ecma-international.org/5.1/#sec-15.5.4.7" target="_blank">ECMAScript 5</a>) es tratar a la cadena como un objeto similar a un arreglo, donde los caracteres individuales corresponden a un índice numérico:  

```js
console.log('mar'[1]) // devuelve a "a"
console.log('mar'[3]) // devuelve undefined 
```


No obstante, es preferible utilizar el operador **`[]`** para obtener el carácter que ocupa una posición, ya que es más corto y rápido de utilizar y mucho más claro. La diferencia respecto a **`.charAt()`** es que el operador **`[]`** devuelve un <span class="badge badge-secondary">undefined</span> si en esa posición no existe ningún carácter.  


### Posición de cierto carácter

El método **`.indexOf(str, from)`** realiza la función &lt;&lt;opueta&gt;&gt; a **`.chartAt()`**. El método **`.indexOf(str)`** buscará el subtexto **str** dentro del <span class="badge badge-warning">string</span> y nos devolverá un <span class="badge badge-primary">number</span> con la **posición** de la primera aparición de dicho **substring**. En caso de no encontrarlo, devolvera un **-1**. El parámetro **from** es opcional, y es la posiciíon en la que empezará a buscar, que si no se suministra, es **0**.

```js
const frase = "Lenguaje de programación Javascript";

console.log(frase.indexOf("n"));          // 2
console.log(frase.indexOf("n", 3));       // 23
console.log(frase.indexOf("n", 24));      // -1
```

---


<h3 id="posicion-desde-el-final"><a href="#posicion-desde-el-final">Posición desde el final</a></h3>

El método **`.lastIndexOf(str, from)`** funciona exactamente igual que el anterior, sólo que realiza la búsqueda partiendo desde el final de la cadena de texto hacia el principio, de modo que busca primero las **última apariciones**  , en lugar de las primeras:  


```js
const frase = "Lenguaje de programación Javascript";

console.log(frase.lastIndexOf("n"));          // 23
console.log(frase.lastIndexOf("n", 3));       // 2
console.log(frase.lastIndexOf("n", 1));      // -1
```

De la misma forma, se devuelve **-1** si no encuentra la ocurrencia, y el parámetro **from** es opcional, de indicarlo, se comenzará a buscar desde esa posición, hacia el principio del <span class="badge badge-warning">string</span>.

### Obtener fragmentos (substring)

javascript también posee una serie de **métodos** mediante los cuales podemos crear **substrings** formados por un fragmento del <span class="badge badge-warning">string</span> original. Veamos de que métodos se trata:


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-js">
    <th>Método</th>
    <th>Descripción</th>
    <th>Retorna</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="método"><span class="badge badge-warning">es2015</span> <strong><code>.repeat(num)</code></strong></td>
          <td data-label="descripción">Devuelve el <span class="badge badge-warning">string</span> repetido la cantidad especificado en <strong>num</strong>.</td>
          <td data-label="retorna"><span class="badge badge-warning">string</span></td>
        </tr>
        <tr>
          <td data-label="método"><strong><code>.substring(start, end)</code></strong></td>
          <td data-label="descripción">Devuelve el <strong>substring</strong> desde la posición <strong>start</strong> hasta <strong>end</strong>.</td>
          <td><span class="badge badge-warning">string</span></td>
        </tr>
        <tr>
          <td><strong><code>.substr(start, size)</code></strong></td>
          <td>Devuelve el <strong>substring</strong> desde la posición <strong>start</strong> hasta <strong>start+size</strong>.</td>
          <td><span class="badge badge-warning">string</span></td>
        </tr>
        <tr>
          <td><strong><code>.slice(start, end)</code></strong></td>
          <td>Identico a <code class="font-weight-bold">.substr()</code> con leves diferencias.</td>
          <td><span class="badge badge-warning">string</span></td>
        </tr>
  </tbody>
</table>

### Repetir cadena de texto

Mediante el método **`.repeat()`** puedes repetir el texto del <span class="badge badge-warning">string</span> exactamente el número de veces indicado por parámetro:  

```js
const text = "Mate";

console.log(text.repeat(4));     // "MateMateMateMate"
console.log(text.repeat(1));     // "Mate"
console.log(text.repeat(0));     // ""
console.log(text.repeat(-1));    // ERROR (Valor negativo)
```

### Fragmentos de texto substring

Otras de las operaciones fundamentales de los <span class="badge badge-warning">string</span> es la posibilidad de extraer fragmentos de texto de un <span class="badge badge-warning">string</span>. Para ello, tenemos dos aproximaciones: el método **`substring()`** o el método **`substr()`**.

- El método **`substring(start, end)`** devuelve un <span class="badge badge-warning">string</span> con el **fragmento de texto** desde la posición **start** hasta la posición **end**. Si se omite el parámetro **end**, el subtexto abarcará desde **start** hasta el final.  

Veamos un ejemplo:  

```js
const text = "Submarino";

console.log(text.substring(3));    // 'marino' (desde el 3 en adelante)
console.log(text.substring(3, 5)); // 'ma'     (desde el 3, hasta el 5)
console.log(text.substr(3));       // 'marino' (desde el 3 en adelante)
console.log(text.substr(3, 5));    // 'marin'  (desde el 3, hasta el 3+5)
console.log(text.substr(-3));      // 'ino'    (desde la posición 3 desde el final, en adelante)
console.log(text.substr(-3, 2));   // 'in'     (desde la posición 3 desde el final, hasta 2 posiciones más)
```

Observa que el método **.substr()** con un valor negativo en su primer parámetro **start**, empieza a contar desde el final. Esto es algo que no ocurre con el método **.substring()**.

### Dividir un texto en partes (array)


Un método muy útil y versatíl es **`.split(text)`**. Permite **dividir** un <span class="badge badge-warning">string</span> por el substring **text** utilizándolo como separador las veces que haga falta. Como resultado, devolverá un <span class="badge badge-success">array</span> con cada una de las partes divididas. Es muy útil para **crear arrays**, o dividir textos que tienen **separadores** repetidos (*comas*, *puntos*, *etc...*) en varias partes:  


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-js">
    <th>Método</th>
    <th>Descripción</th>
    <th>Retorna</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="método"><strong><code>.split(str)</code></strong></td>
          <td data-label="descripción">Separa la cadena de texto en varias partes, usando el <span class="badge badge-warning">string</span> <strong>str</strong> como separador.</td>
          <td data-label="retorna"><span class="badge badge-success">array</span></td>
        </tr>
        <tr>
          <td data-label="método"><strong><code>.split(str, limit)</code></strong></td>
          <td data-label="descripción">Identico al anterior, pero crea como máximo de <strong>limit</strong> fragmentos.</td>
          <td><span class="badge badge-success">array</span></td>
        </tr>
        <tr>
          <td><strong><code>.split(regexp)</code></strong></td>
          <td>Separa el texto usando la <span class="badge badge-danger">regexp</span> como separador.</td>
          <td><span class="badge badge-success">array</span></td>
        </tr>
        <tr>
          <td><strong><code>.split(regexp, limit)</code></strong></td>
          <td>Identico al anterior pero crea como máximo de <strong>limit</strong> fragmentos.</td>
          <td><span class="badge badge-success">array</span></td>
        </tr>
  </tbody>
</table>

Veamos unos ejemplos indicando un <span class="badge badge-warning">string</span> como separador:  


```js
console.log("88.12.44.123".split(".")); // ["88", "12", "44", "123"] (4 elementos)
console.log("1.2.3.4.5".split(".")); // ["1", "2", "3", "4", "5"] (5 elementos)
console.log("Hola a todos".split(" ")); // ["Hola", "a", "todos"] (3 elementos)
console.log("A,B,C,D,E".split(",", 3));    // ["A", "B", "C"] (limitado a los 3 primeros elementos)
console.log("Código".split(""));           // ["C", "ó", "d", "i", "g", "o"] (6 elementos)
```

Observa que en el último ejemplo, el separador es una **cadena vacía**, es decir, &lt;&lt;separar por la unidad más pequeña posible&gt;&gt;. Al indicar esto, **`split()`** realiza una división carácter por carácter.

Por otro lado, ten en cuenta que también es posible indicar una <span class="badge badge-danger">regexp</span> como primer parámetro y no sólo un <span class="badge badge-warning">string</span>, lo que permite realizar separaciones más versátiles y flexibles. Por lo demás, es exactamente igual a los ejemplos anteriores:  


```js
// Separa tanto por punto como por coma
console.log("88.12,44.123".split(/[.,]/));   // ["88", "12", "44", "123"] (4 elementos)
```

