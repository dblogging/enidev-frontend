---
layout: post
background: '/img/js-posiciones-substring.png'
title: 'Posiciones y substring'
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

