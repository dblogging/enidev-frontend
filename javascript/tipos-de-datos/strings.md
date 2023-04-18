---
layout: post
---

<img
  src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
  height="50" />



<h3 id="que-es-un-string"><a href="#que-es-un-string">¿Qué es un String?</a></h3>


En javascript y en cualquier otro lenguaje de programación, una de las tareas que más se suelen hacer es manejar cadenas de textos y realizar tareas con ellas. Por lo tanto, es importante ver en profundidad sus características así como sus atributos y funciones de este tipo de dato.  

Un <strong><a href="https://en.wikipedia.org/wiki/String_(computer_science)" target="_blank">String</a></strong> en javascript se utiliza para representar un conjunto de caracteres usado para representar el texto. En programación, cuando hablamos de una variable que posee información de texto, decimos que su tipo de dato es un **String**. En Javascript, es muy sencillo crear una variable con un valor de texto, hay dos formas:


<table class="table table-striped table-borderless shadow-sm border">
      <thead class="bg-warning">
        <tr>
          <th>Constructor</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="constructor"><strong><code>new String(s)</code></strong></td>
          <td data-label="descripción"><span>Crea un objeto de texto a partir del texto <strong>s</strong>.</span></td>
        </tr>
        <tr>
          <td><strong><code>'s'</code></strong></td>
          <td>Solo colocando el texto entre comillas dobles o simples (forma más común).</td>
        </tr>
      </tbody>
</table>



Los **String** son tipos de datos primitivos, y como tal, es más sencillo utilizar los literales que la notación con el operador **new**. Para englobar los textos, se pueden utilizar **comillas simples**, **comillas dobles** o **backstiks** (estos últimos tienen un uso más extendido que veremos más adelante).


>Aunque es posible utilizar comillas simples o comillas dobles en los string, es recomendable decantarse por uno de los dos estilos y no mezclarlos.


A continuación, un ejemplo de declaración de variables de texto en JavaScript:  


```js
// Literales
const textoPrincipal = "¡Hola Javascript!";
const textoSecundario = "Otro mensaje de texto";

// Objeto
const textoPrincipal = new String("¡Hola Javascript!");
const textoSecundario = new String("Otro mensaje de texto"); 
```

A diferencia de otros lenguajes de programación, que separan el tipo de dato **string** del tipo de dato **char** (*un solo carácter*
), javascript los mantiene a ambos dentro del tipo de dato **String**, aunque una variable sólo contenga un carácter, sigue siendo un **String**.  

<hr />

<h3 id="propiedades"><a href="#propiedades">PROPIEDADES</a></h3>


Al crear una variable con contenido de texto, o sea un **String**, automáticamente, esa variable pasa a tener a su disposición todas las propiedades y métodos disponibles para este tipo de dato, por lo que podemos utilizarlo en nuestro código como sea necesario e iremos viendo en los ejemplos de las diferentes secciones.  


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="bg-warning">
          <th>Propiedad</th>
          <th>Descripción</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="propiedad"><code>.length</code></td>
      <td data-label="descripción"><span>Devuelve un (<strong>number</strong>) que es el número de carácteres de la variable de tipo string.</span></td>
    </tr>
  </tbody>
</table>


En el caso de los **String**, solo tenemos una propiedad, **`.length`**, que devuelve el tamaño de la variable de texto. A continuación podemos observar que se han utilizado **string** directamente, sin necesidad de guardarlos en una variable antes:


```js
"ript".length; // 10
"Mi nombre es marco".length; // 18 (los espacios en blanco cuentan)
"".length; // 0 
```

Veamos una pequeña prueba contando longitudes de palabras aleatorias.


<iframe frameborder="0" width="100%" height="400px"
  src="https://replit.com/@marcocontreraas/length?embed=true"></iframe>

>Pero las características más interesantes de los string se encuentran en los métodos de dicho tipo. Se debe tener en cuenta que, en las variables de texto, los métodos se ejecutan sobre el propio texto del **String**, devolviendo información modificada a partir de este.


<hr />
    
<h3 id="metodos-de-posiciones"><a href="#metodos-de-posiciones">MÉTODOS DE POSICIONES</a></h3>

En primer lugar existen varios métodos que permiten darnos información sobre la **posición** o **ubicación** que ocupa un determinado carácter o texto. Esta posición también suele denominarse **índice**. Veamos detalladamente dichos métodos:


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="bg-warning">
    <th>Método</th>
    <th>Descripción</th>
    <th>Op.</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="método"><strong><code>.charAt(pos)</code></strong></td>
          <td data-label="descripción">Devuelve el carácter en la posición <strong>pos</strong> de la variable.</td>
          <td><code>[]</code></td>
        </tr>
        <tr>
          <td data-label="método"><strong><code>.concat(str1, str2...)</code></strong></td>
          <td data-label="descripción"><span>Devuelve el texto de la variable unido a <strong>str1</strong>, a <strong>str2</strong>&hellip;</span></td>
          <td><code>+</code></td>
        </tr>
        <tr>
          <td data-label="método"><strong><code>.indexOf(str)</code></strong></td>
          <td data-label="descripción">Devuelve la primera posición del texto <strong>str</strong>.</td>
          <td></td>
        </tr>
        <tr>
          <td><strong><code>.indexOf(str, from)</code></strong></td>
          <td>Igual al anterior, partiendo desde la posición <strong>from</strong>.</td>
          <td></td>
        </tr>
        <tr>
          <td><strong><code>.lastIndexOf(str,from)</code></strong></td>
          <td>identico al anterior, pero devuelve la última posición.</td>
          <td></td>
        </tr>
</tbody>
</table>


El método **`.charAt(pos)`** nos permite comprobar que carácter se encuentra en la posición **pos** del texto. Este método devolverá un **String** con dicho carácter. En caso de pasarle una posición que no existe, simplemente nos devolverá un **String** vacio (`""`). El valor por defecto de **pos** es 0.  


```js
console.log('mar'.charAt(1)) // devuelve "a" 
console.log('mar'.charAt(3)) // devuelve "" 
```

La otra forma (introducida en <a href="https://262.ecma-international.org/5.1/#sec-15.5.4.7" target="_blank">ECMAScript 5</a>) es tratar a la cadena como un objeto similar a un arreglo, donde los caracteres individuales corresponden a un índice numérico:  

```js
console.log('mar'[1]) // devuelve a "a"
console.log('mar'[3]) // devuelve undefined 
```
