---
layout: post
---

<img
  src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
  height="50" />


<ul>
  <li><a href="#que-es-un-string">¿Qué es un String?</a></li>
  <li><a href="#propiedades">Propiedades</a></li>
  <li><a href="#metodos-de-posiciones">Métodos de posiciones</a></li>
  <li><a href="#metodos-para-busquedas">Métodos para búsquedas</a></li>
  <li><a href="#string-transform-methods">Métodos para transformar</a></li>
  <li><a href="#string-replace">Remplazar texto</a></li>
  <li><a href="#string-extract">Extraer subtextos</a></li>
  <li><a href="#string-split">Crear arrays a partir de textos</a></li>
  <li><a href="#fill-string">Rellenar string</a></li>
  <li><a href="#string-unicode">Métodos unicode</a></li>
  <li><a href="#string-backstips">Interpolación de variables</a></li>
</ul>
<hr>

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


No obstante, es preferible utilizar el operador **`[]`** para obtener el carácter que ocupa una posición, ya que es más corto y rápido de utilizar y mucho más claro. La diferencia respecto a **`.charAt()`** es que el operador `[]` devuelve un <a
        href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank"><strong>undefined</strong></a>
      si en esa posición no existe ningún carácter.  

El método `.concat(str1, str2...)` permite concatenar (*unir*) los textos pasados por parámetros al de la propia variable. AL igual que el método anterior es preferible utilizar el operador `+`, ya que es mucho más rápido y legible. Debemos tener mucho cuidado con utilizar el operador `+`, ya que depende de los tipos de datos con los que se usen puede producir un efecto diferentes. El operador <code class="path">+</code> usado con
      <strong>String</strong> realiza concatenaciones, mientras que usado con tipos <a
        href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank"><strong>Number</strong></a>
      realiza sumas.
    </p>
    <p>
    <div class="highlight">
      <pre><span class="s2">&quot;enidev&quot;</span>.<span class="nt">concat</span>(<span class="num">9</span>,<span class="num">1</span>,<span class="num">1</span>) <span class="c1">// enidev911</span>
<span class="s2">&quot;enidev&quot;</span><span class="nt">+</span><span class="num">9</span><span class="nt">+</span><span class="num">1</span><span class="nt">+</span><span class="num">1</span> <span class="c1">//enidev911</span>
<span class="num">9</span><span class="nt">+</span><span class="num">1</span><span class="nt">+</span><span class="num">1</span> <span class="c1">// 11</span> <i class="btn clone" onclick="{copy_clipboard(this.parentNode.textContent)}"></i>
</pre>
    </div>
    <details> 
      <summary>clic demo</summary>
      <p align="center">
        <img src="assets/concat.gif" />
      </p> <br />
    </details>
    </p>
    <p>Por último, nos queda el método <a href="https://262.ecma-international.org/5.1/#sec-15.5.4.7" target="_blank"><strong>indexOf(str, from)</strong></a>, que es la función opuesta a <strong>charAt()</strong>. La función <strong>indexOf(str)</strong> buscará el subtexto <strong>str</strong> en nuestra variable y nos devolverá un <strong>Number</strong> con la posición
      de la primera aparición de dicho subtexto. En caso de no encontrarlo, devolvera <strong>-1</strong>. El parámetro
      <strong>from</strong> es opcional, y es la posición en la que empezará a buscar, que por defecto (si no se
      suministra) es <strong>0</strong>.
    </p>
    <div class="highlight">
      <pre><span class="s2">&quot;Javascript, es muy amigable&quot;</span>.<span class="nt">indexOf</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">);</span> <span class="c1">// 1</span>
<span class="s2">&quot;Javascript, es muy amigable&quot;</span>.<span class="nt">indexOf</span>(<span class="s2">&quot;a&quot;</span>, <span class="num">2</span>); <span class="c1">// 3</span>
<span class="s2">&quot;Javascript, es muy amigable&quot;</span>.<span class="nt">indexOf</span>(<span class="s2">&quot;a&quot;</span>, <span class="num">4</span>); <span class="c1">// 19</span>
<span class="s2">&quot;Javascript, es muy amigable&quot;</span>.<span class="nt">indexOf</span>(<span class="s2">&quot;a&quot;</span>, <span class="num">24</span>); <span class="c1">// -1</span> <i class="btn jsbin" onclick="{window.open('https://jsbin.com/duqosud/edit?js,console', '_blank')}" title="Abrir en JsBin"></i><i class="btn clone" onclick="{copy_clipboard(this.parentNode.textContent)}" title="copiar"></i>
</pre>
    </div>
    <details>
      <summary>clic demo</summary>
      <p align="center">
        <img src="assets/indexOf.gif" />
      </p>
    </details>
    <p>El método <a href="https://262.ecma-international.org/5.1/#sec-15.5.4.8" target="_blank"><strong>lastIndexOf(str, from)</strong></a> funciona exactamente igual que el anterior, sólo
      que realiza la búsqueda de la <strong>última aparición</strong> en lugar de la primera aparición.</p>
    <div class="highlight">
      <pre><span class="s2">&quot;Javascript, es muy amigable&quot;</span>.<span class="nt">lastIndexOf</span>(<span class="s2">&quot;a&quot;</span>); <span class="c1">// 23</span>
<span class="s2">&quot;Javascript, es muy amigable&quot;</span>.<span class="nt">lastIndexOf</span>(<span class="s2">&quot;a&quot;</span>, <span class="num">2</span>); <span class="c1">// 1</span>
<span class="s2">&quot;Javascript, es muy amigable&quot;</span>.<span class="nt">lastIndexOf</span>(<span class="s2">&quot;a&quot;</span>, <span class="num">4</span>); <span class="c1">// 3</span>
<span class="s2">&quot;Javascript, es muy amigable&quot;</span>.<span class="nt">lastIndexOf</span>(<span class="s2">&quot;a&quot;</span>, <span class="num">24</span>); <span class="c1">// 23</span> <i class="btn jsbin" onclick="{window.open('https://jsbin.com/rawelat/edit?js,console', '_blank')}" title="Abrir en JsBin"></i><i class="btn clone" onclick="{copy_clipboard(this.parentNode.textContent)}" title="copiar"></i>
</pre>
    </div>
    <p><a href="#top"><img alt=""
          src="https://img.shields.io/badge/regresar%20a%20contenido%20principal-%E2%86%A9-%232BAAEC?style=for-the-badge&amp;logo=readthedocs&amp;logoColor=%23FAC173" /></a>
    </p>
    <hr />
    <h3 id="metodos-para-busquedas"><a href="#metodos-para-busquedas">MÉTODOS PARA BÚSQUEDAS</a></h3>
    <p>Los siguientes métodos se utilizan para realizar búsquedas o comprobaciones de subtextos en el texto de un <strong>String</strong>.
    </p>
    <table class="table">
      <thead>
        <tr>
          <th>Método</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong><code>.startsWith(s,from)</code></strong></td>
          <td>Comprueba si el texto comienza por <strong>s</strong> desde la posición <strong>from</strong>.</td>
        </tr>
        <tr>
          <td><strong><code>.endsWith(s,to)</code></strong></td>
          <td>Comprueba si el texto hasta la posición <strong>to</strong>, termina pos <strong>s</strong>.</td>
        </tr>
        <tr>
          <td><strong><code>.includes(s,from)</code></strong></td>
          <td>Comprueba si el texto contiene el subtexto <strong>s</strong> desde la posición <strong>from</strong>.
          </td>
        </tr>
        <tr>
          <td><strong><code>.search(regex)</code></strong></td>
          <td>Busca si hay un patrón que encaje con <strong>regex</strong> (<em>expresión regular</em>) y devuelve la
            posición.</td>
        </tr>
        <tr>
          <td><strong><code>.match(regex)</code></strong></td>
          <td>Identico al anterior, pero devuelve las coincidencias encontradas.</td>
        </tr>
        <tr>
          <td><strong><code>.matchAll(regex)</code></strong></td>
          <td>Identico al anterior, pero devuelve un iterador para iterar por cada coincidencia.</td>
        </tr>
      </tbody>
    </table>
    <p>Por ejemplo, el método <strong>startsWith(str, from)</strong> devolverá <strong>true</strong> si la variable comienza por
      el texto proporcionado en <strong>str</strong>. Si además se indica el parámetro opcional <strong>from</strong>,
      empezará en la posición <strong>from</strong> del <strong>String</strong>. De la misma forma, el método
      <strong>endsWith()</strong> comprueba cuando un <strong>String</strong> acaba en
      <strong>str</strong>, y
      el método <strong>includes()</strong> comprueba si el subtexto dado está incluído en el
      <strong>String</strong>.
    </p>
    <p>Algunos ejemplos:</p>
    <div class="highlight">
      <pre><span class="s2">&quot;Javascript&quot;</span>.<span class="nt">startsWith</span>(<span class="s2">&quot;J&quot;</span>); <span class="c1">// true (&quot;Javascript&quot; comienza con &#39;J&#39;)</span>
<span class="s2">&quot;Javascript&quot;</span>.<span class="nt">startsWith</span>(<span class="s2">&quot;v&quot;</span>, <span class="num">2</span>); <span class="c1">// true (&quot;vascript&quot;, comienza con &#39;v&#39;)</span>
<span class="s2">&quot;Javascript&quot;</span>.<span class="nt">endsWith</span>(<span class="s2">&quot;t&quot;</span>); <span class="c1">// true (&quot;Javascript&quot;, termina con &#39;t&#39;)</span>
<span class="s2">&quot;Javascript&quot;</span>.<span class="nt">endsWith</span>(<span class="s2">&quot;c&quot;</span>, <span class="num">6</span>); <span class="c1">// true (&quot;Javasc&quot;, termina con &#39;c&#39;)</span>
<span class="s2">&quot;Javascript&quot;</span>.<span class="nt">includes</span>(<span class="s2">&quot;script&quot;</span>); <span class="c1">// true (&quot;Javascript&quot;, incluye &#39;script&#39;)</span>
<span class="s2">&quot;Javascript&quot;</span>.<span class="nt">includes</span>(<span class="s2">&quot;Java&quot;</span>, <span class="num">4</span>); <span class="c1">// false (&quot;script&quot;, no incluye &#39;Java&#39;)</span> <i class="btn jsbin" onclick="{window.open('https://jsbin.com/gajukod/edit?js,console', '_blank')}" title="Abrir en JsBin"></i><i class="btn clone" title="Copiar" onclick="{copy_clipboard(this.parentNode.textContent)}"></i>
</pre>
    </div>
    <hr />
    <h4 id="busquedas-con-regexp"><a href="#busquedas-con-regexp">BÚSQUEDAS CON REGEXP</a></h4>
    <p>Por otro lado, los métodos <strong>search()</strong>, <strong>match()</strong> y
      <strong>matchAll()</strong> realizan búsquedas más potente y flexibles utilizando
      <strong>regexp</strong>. La diferencia de cada una es que, mientras el método <strong>search()</strong> devuelve la
      posición de la primera ocurrencia detectada (o <strong>-1</strong> si no se encuentra), <strong>match()</strong>
      devuelve un <strong>Array</strong> con las coincidencias detectadas:
    </p>
    <div class="highlight">
      <pre><span class="kr">const</span> <span class="nx">text</span> = <span class="s2">&quot;El bueno, el malo y el feo.&quot;</span>;
<span class="kr">const</span> <span class="nx">regexp</span> = <span class="na">/.a.o/g</span>;

<span class="nx">text</span>.<span class="nt">search</span>(<span class="nx">regexp</span>); <span class="c1">// 13, porque la primera coincidencia ocurre en la posición 13</span>
<span class="nx">text</span>.<span class="nt">match</span>(<span class="nx">regexp</span>); <span class="c1">// [&#39;malo&#39;], un array con la coincidencia encontrada</span>
</pre>
    </div>

    <p>Por otro lado, el método <strong><code>.mathAll()</code></strong> realiza la misma acción que
      <code>.match()</code> pero devolviendo iteradores y más información como las propiedades <strong>.index</strong>,
      <strong>.input</strong> o <strong>.groups</strong> en cada resultado de la iteración:
    </p>
    <div class="highlight">
      <pre><span class="kr">const</span> <span class="nx">resultado</span> <span class="o">=</span> <span class="p">[...</span><span class="nx">text</span><span class="p">.</span><span class="nx">matchAll</span><span class="p">(</span><span class="nx">regexp</span><span class="p">)];</span> <span class="c1">// [&#39;malo&#39;]</span>

<span class="nx">result</span><span class="p">.</span><span class="nx">length</span> <span class="c1">//1</span>
<span class="nx">result</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">index</span> <span class="c1">// 13</span>
</pre>
    </div>

    <blockquote>
      <p>Las <strong>expresiones regulares</strong> permiten realizar cosas mucho más avanzadas, lo abordares en un tema
        posterior.</p>
    </blockquote>
    <p><a href="#top"><img alt=""
          src="https://img.shields.io/badge/regresar%20a%20contenido%20principal-%E2%86%A9-%232BAAEC?style=for-the-badge&amp;logo=readthedocs&amp;logoColor=%23FAC173" /></a>
    </p>
    <hr />
    <h3 id="metodos-para-transformar"><a name="string-transform-methods"></a> MÉTODOS PARA TRANSFORMAR<a
        class="headerlink" href="#metodos-para-transformar" title="Permanent link">&#9875;</a></h3>
    <p>En javascript podemos utilizar algunos métodos para modificar un <code class="str">string</code> realizando
      alguna operación
      de transformación. En esta tabla tenemos dichos métodos: </p>
    <table>
      <thead>
        <tr>
          <th>Método</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.repeat(n)</code></td>
          <td>Devuelve el texto de la variable <strong>n</strong> veces.</td>
        </tr>
        <tr>
          <td><code>.toLowerCase()</code></td>
          <td>Devuelve el texto de la variable en minúsculas.</td>
        </tr>
        <tr>
          <td><code>.toUpperCase()</code></td>
          <td>Devuelve el texto de la variable en mayúscula.</td>
        </tr>
        <tr>
          <td><code>.trim()</code></td>
          <td>Devuelve el texto sin espacios a la izquierda y derecha.</td>
        </tr>
        <tr>
          <td><code>.trimStart()</code></td>
          <td>Devuelve el texto sin espacios a la izquierda.</td>
        </tr>
        <tr>
          <td><code>.trimEnd()</code></td>
          <td>Devuelve el texto sin espacios a la derecha.</td>
        </tr>
        <tr>
          <td><code>.replace(str|regex,newstr)</code></td>
          <td>Reemplaza la primera aparición del texto <strong>str</strong> por <strong>newstr</strong>.</td>
        </tr>
        <tr>
          <td><code>.replaceAll(str|regex,newstr)</code></td>
          <td>Remplaza todas las apariciones del texto <strong>str</strong> por <strong>newstr</strong>.</td>
        </tr>
        <tr>
          <td><code>.replace(str|regex,func)</code></td>
          <td>Identico a <code>.replace()</code>, pero reemplazando por la devolución de <strong>func</strong>.</td>
        </tr>
        <tr>
          <td><code>.substr(ini,len)</code></td>
          <td>Devuelve el subtexto desde la posición <strong>ini</strong> hasta
            <strong>ini</strong>+<strong>len</strong>.
          </td>
        </tr>
        <tr>
          <td><code>.substring(ini,end)</code></td>
          <td>Devuelve el subtexto desde la posición <strong>ini</strong> hasta <strong>end</strong>.</td>
        </tr>
        <tr>
          <td><code>.slice(ini,end)</code></td>
          <td>Identico a <code>.substr()</code> con leves diferencias.</td>
        </tr>
        <tr>
          <td><code>.split(sep|regex,limit)</code></td>
          <td>Separa el texto usando <strong>sep</strong> como separador, en <strong>limit</strong> fragmentos.</td>
        </tr>
        <tr>
          <td><code>.padStart(len,str)</code></td>
          <td>Rellena el principio de la cadena con <strong>str</strong> hasta llegar al tamaño <strong>len</strong>
          </td>
        </tr>
        <tr>
          <td><code>.padEnd(len,str)</code></td>
          <td>Rellena al final de la cadena <strong>str</strong> hasta llegar al tamaño <strong>len</strong>.</td>
        </tr>
      </tbody>
    </table>
    <p>El método <code>.repeat(n)</code> devuevlve como <code class="str">string</code> el texto repetido
      <strong>n</strong> veces.
      Por otro lado, los métodos <code>toLowerCase()</code> y <code>toUpperCase()</code> devuelven el texto convertido
      todo a minúsculas o todo a mayúsculas respectivamente.
    </p>
    <div class="highlight">
      <pre><span class="s2">&quot;Na&quot;</span><span class="p">.</span><span class="nx">repeat</span><span class="p">(</span><span class="mi">5</span><span class="p">);</span> <span class="c1">// &#39;NaNaNaNaNa&#39;</span>
<span class="s2">&quot;EniDev911&quot;</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span> <span class="c1">// enidev911</span>
<span class="s2">&quot;enidev911&quot;</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">();</span> <span class="c1">// ENIDEV911</span>
<span class="s2">&quot;        holaa        &quot;</span><span class="p">.</span><span class="nx">trim</span><span class="p">();</span> <span class="c1">// &#39;hola&#39;</span>
</pre>
    </div>

    <p>Por último el método <code>trim()</code>, informalmente traducido como &lt;<afeitart>&gt; se encarga de devolver
        el texto eliminando los espacios sobrantes que hay a la izquierda y a la derecha del texto (y sólo, esos
        espacios, nunca los que existen entre una plabra y otra). De la misma forma el método <code>trimStart()</code> y
        <code>trimEnd()</code> realizan la misma tarea sólo a la izquierda o sólo a la derecha respectivamente.</p>
    <p><a href="#top"><img alt=""
          src="https://img.shields.io/badge/regresar%20a%20contenido%20principal-%E2%86%A9-%232BAAEC?style=for-the-badge&amp;logo=readthedocs&amp;logoColor=%23FAC173" /></a>
    </p>
    <hr />
    <h3 id="remplazar-textos"><a name="string-replace"></a> REMPLAZAR TEXTOS<a class="headerlink"
        href="#remplazar-textos" title="Permanent link">&#9875;</a></h3>
    <p>Uno de los métodos más interesantes de transformación de <code class="str">string</code> es el
      <code>replace(str,newstr)</code>. Su funcionalidad más básica, como se ve en el primer ejemplo, se trata de
      devolver el texto en cuestión, remplazando el texto <strong>str</strong> por <strong>newstr</strong> (&lsquo;solo
      la primera aparición&rsquo;):
    </p>
    <div class="highlight">
      <pre><span class="s2">&quot;Amigo&quot;</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s2">&quot;A&quot;</span><span class="p">,</span> <span class="s2">&quot;Ene&quot;</span><span class="p">);</span> <span class="c1">// &#39;Enemigo&#39;</span>
<span class="s2">&quot;Dispara&quot;</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">,</span> <span class="s2">&quot;i&quot;</span><span class="p">);</span> <span class="c1">// &#39;Dispira&#39; (sólo remplaza la primera aparición)</span>
<span class="s2">&quot;Dispara&quot;</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/a/g</span><span class="p">,</span> <span class="s2">&quot;i&quot;</span><span class="p">);</span> <span class="c1">// &#39;Dispiri&#39; (remplaza todas las ocurrencias)</span>
</pre>
    </div>

    <p>Si lo que nos interesa es reemplazar todas las apariciones, tendremos que hacer uso de las <strong>expresiones
        regulares</strong>, que veremos en temas posteriores a este. A grandes rasgos, en el tercer ejemplo anterior, en
      lugar de indicar el <code class="str">string</code> <strong>&lsquo;a&rsquo;</strong> indicamos la expresión
      regular
      <strong>/a/g</strong> que buscará todas las apariciones de <strong>a</strong> de forma global (todas las
      ocurrencias).
    </p>
    <div class="highlight">
      <pre><span class="kr">const</span> <span class="nx">frase</span> <span class="o">=</span> <span class="s2">&quot;JavaScript es un gran lenguaje&quot;</span><span class="p">;</span>
<span class="nx">frase</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[aeiou]/g</span><span class="p">,</span> <span class="s2">&quot;i&quot;</span><span class="p">);</span> <span class="c1">// &#39;Jiviscript is in grin linguiiji&#39;</span>
</pre>
    </div>

    <blockquote>
      <p>Desde Ecmacript {.es2021} es posible utilizar el método <code>replaceAll()</code> para remplazar todas las
        <strong>ocurrencias</strong> de un texto o de una expresión regular. Funciona exactamente igual que
        <code>replace()</code>, sólo que remplaza todas las ocurrencias en vez de solamente la primera.
      </p>
    </blockquote>
    <p>Además, el método <code>replace()</code> nps permite indicar, como segundo parámetro una
      <strong><code>function</code></strong> en lugar de un <code class="str">string</code>, permitiendo utilizar dicha
      función para
      realizar un proceso más complejo al remplazar, en lugar de simplemente remplazar por un <code
        class="str">string</code>. Sin
      embargo, para aprender a utilizar esta funcionalidad, antes tendremos que aprender sobre los
      <strong>callbacks</strong>, que veremos en temas posteriores.
    </p>

    <p><a href="#top"><img alt=""
          src="https://img.shields.io/badge/regresar%20a%20contenido%20principal-%E2%86%A9-%232BAAEC?style=for-the-badge&amp;logo=readthedocs&amp;logoColor=%23FAC173" /></a>
    </p>
    <hr />
    <h3 id="extraer-subtextos"><a name="string-extract"></a> EXTRAER SUBTEXTOS<a class="headerlink"
        href="#extraer-subtextos" title="Permanent link">&#9875;</a></h3>
    <p>Otras de las operaciones fundamentales de los <code class="str">string</code>es la posibilidad de extraer
      pequeños
      fragmentosde texto de textos más grandes. Para ello tenemos dos aproximaciones para realizarlo: con el método
      <code>substr()</code> o con el método <code>substring()</code>.
    </p>
    <p>En el primer caso, el método <code>substr(ini,len)</code> nos solicita dos parámetros, <strong>ini</strong>, que
      es la posición inicial del subtexto, y <strong>len</strong>, que es el tamaño o longitud que tendrá el texto. De
      esta forma, <code>substr(2,4)</code> extrae el fragmento de texto desde la posición <strong>2</strong> y desde esa
      posición <strong>4</strong> posiciones más. En el caso de omitirse el parámetro <strong>len</strong>, se devuelve
      el subtexto hasta el final del texto original.</p>
    <div class="highlight">
      <pre><span class="s2">&quot;submarino&quot;</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span> <span class="c1">// &#39;marino&#39; (desde el 3 en adelante)</span>
<span class="s2">&quot;submarino&quot;</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span><span class="mi">1</span><span class="p">);</span> <span class="c1">// &#39;m&#39; (desde el 3, hasta el 3+1)</span>
<span class="s2">&quot;submarino&quot;</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span> <span class="c1">// &#39;marino&#39; (desde el 3 en adelante)</span>
<span class="s2">&quot;submarino&quot;</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span><span class="mi">6</span><span class="p">);</span> <span class="c1">// &#39;mar&#39; (desde el 3 hasta el 6)</span>
</pre>
    </div>
    <iframe frameborder="0" width="100%" height="400px" style="border-radius: 10px;"
      src="https://replit.com/@marcocontreraas/substrings?embed=true"></iframe>

    <p>Por otro lado el método <code>substring(ini,end)</code> extrae el fragmento de texto desde la posición
      <strong>ini</strong> hasta la posición <strong>end</strong>. De igual forma al anterior, si se omite el parámetro
      <strong>end</strong>, el subtexto abarcará hasta el final del texto original.
    </p>
    <p><a href="#top"><img alt=""
          src="https://img.shields.io/badge/regresar%20a%20contenido%20principal-%E2%86%A9-%232BAAEC?style=for-the-badge&amp;logo=readthedocs&amp;logoColor=%23FAC173" /></a>
    </p>
    <hr />
    <h3 id="crear-arrays-a-partir-de-textos"><a name="string-split"></a> CREAR ARRAYS A PARTIR DE TEXTOS<a
        class="headerlink" href="#crear-arrays-a-partir-de-textos" title="Permanent link">&#9875;</a></h3>
    <p>Otro método muy útil es <code>split(sep)</code>, un método que permite <strong>dividir</strong> un
      <code class="str">string</code> por el substring <strong>sep</strong> como separador, devolviendo un array con
      cada una de las
      partes divididas. Es muy útil para <strong>crear arrays</strong>, o dividir en diferentes secciones textos que
      tienen <strong>separadores</strong> repetidos como podrían ser comas, puntos o símbolos pipe ( <i>barra
        vertical</i> ) <code>|</code>.
    </p>
    <div class="highlight">
      <pre><span class="s2">&quot;1.2.3.4.5&quot;</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">);</span> <span class="c1">// [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;] (5 elementos)</span>
<span class="s2">&quot;Hola lenguaje javascript&quot;</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">);</span> <span class="c1">// [&#39;Hola&#39;, &#39;lenguaje&#39;, &#39;javascript&#39;] (3 elementos)</span>
<span class="s2">&quot;Código&quot;</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="c1">// [&#39;C&#39;, &#39;ó&#39;, &#39;d&#39;, &#39;i&#39;, &#39;g&#39;, &#39;o&#39;] (6 elementos)</span>
</pre>
    </div>
    <iframe frameborder="0" width="100%" height="400px" style="border-radius: 10px;"
      src="https://replit.com/@marcocontreraas/split-strings?embed=true"></iframe>
    <p>En el último ejemplo, el separador es una <strong>cadena vacía</strong>, es decir &lt;<ningún carácter>&gt;, lo
        que hace es hacer una división en su unidad mínima, carácter por carácter.</p>
    <blockquote>
      <p>En el tema de los arrays veremos un método llamado <strong><code>join()</code></strong> que es justo el opuesto
        de <strong><code>split()</code></strong>. Si <strong>split</strong> separa un string en varios y los coloca
        dentro de un array, <strong>join</strong> une varios elementos de un array añadiéndole un separador y lo
        convierte en un string.</p>
    </blockquote>
    <p><a href="#top"><img alt=""
          src="https://img.shields.io/badge/regresar%20a%20contenido%20principal-%E2%86%A9-%232BAAEC?style=for-the-badge&amp;logo=readthedocs&amp;logoColor=%23FAC173" /></a>
    </p>
    <hr />
    <h3 id="rellenar-cadenas"><a name="fill-string"></a> RELLENAR CADENAS<a class="headerlink" href="#rellenar-cadenas"
        title="Permanent link">&#9875;</a></h3>
    <p>Otra transformación interesante con los <code class="str">string</code> es la resultante de utilizar métodos como
      <strong><code>padStar(len,str)</code></strong> o <strong><code>padEnd(len,str)</code></strong>. Ambos métodos
      tomandos dos parámetros: <strong>len</strong> la longitud deseada del <code class="str">string</code> resultante y
      <strong>str</strong> el carácter a utilizar como relleno.
    </p>
    <p>El objetivo de ambas funciones es devolver un nuevo <code class="str">string</code> con la información original
      existente,
      pero ampliando su tamaño a <strong>len</strong> y rellenando el resto con <strong>str</strong>, al principio si se
      usa <code>padStart()</code> o al final si se usa <code>padEnd()</code>: </p>
    <div class="highlight">
      <pre><span class="s2">&quot;5&quot;</span><span class="p">.</span><span class="nx">padStart</span><span class="p">(</span><span class="mi">6</span><span class="p">.</span> <span class="s2">&quot;0&quot;</span><span class="p">);</span> <span class="c1">// &#39;000005&#39;</span>
<span class="s2">&quot;A&quot;</span><span class="p">.</span><span class="nx">padEnd</span><span class="p">(</span><span class="mi">5</span><span class="p">,</span> <span class="s2">&quot;.&quot;</span><span class="p">);</span> <span class="c1">// &#39;A....&#39;</span>
</pre>
    </div>

    <blockquote>
      <p>Estos métodos resultan especialmente interesantes para formatear horas, como por ejemplo en el caso que
        queramos que las cifras menores a 10 aparezcanen formato <strong>00</strong> en lugar de <strong>0</strong>.</p>
    </blockquote>
    <p><a href="#top"><img alt=""
          src="https://img.shields.io/badge/regresar%20a%20contenido%20principal-%E2%86%A9-%232BAAEC?style=for-the-badge&amp;logo=readthedocs&amp;logoColor=%23FAC173" /></a>
    </p>
    <hr />
    <h3 id="metodos-unicode"><a name="string-unicode"></a> MÉTODOS UNICODE<a class="headerlink" href="#metodos-unicode"
        title="Permanent link">&#9875;</a></h3>
    <p><strong>unicode</strong> es el nombre por el que se conoce al sistema moderno de codificación de carácteres que
      se usa en informática. A grandes rasgos, cada carácter como podría ser la <strong>A</strong>, la
      <strong>B</strong> o cualquier otro, tiene su representación <strong>Unicode</strong>, que se basa en un código o
      <strong>code point</strong>.
    </p>
    <p>Por ejemplo, el carácter <strong>A</strong> corresponde al código Unicode <strong>U+0041</strong>. Este
      <strong>0041</strong> realmente está en hexadecimal, por lo que <strong>0x0041</strong> en decimal sería igual a
      <strong>65</strong>. Existen muchísimos códigos, ya que cualquier carácter existente, tiene su propio código
      Unicode. En Javascript, tenemos dos métodos interesantes relacionados con este tema:
    </p>
    <table>
      <thead>
        <tr>
          <th>Método</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>String.fromCharCode(num)</code></td>
          <td>Devuelve el carácter del valor <strong>unicode</strong> indicado en <strong>num</strong>.</td>
        </tr>
        <tr>
          <td><code>.charCodeAt(pos)</code></td>
          <td>Devuelve el valor <strong>unicode</strong> del carácter de la posición <strong>pos</strong> del texto.
          </td>
        </tr>
      </tbody>
    </table>
    <p>El primero de ellos es un método estático, por lo que hay que escribir directamente
      <strong>String.fromCharCode()</strong> y no utilizarlo desde una variable. Para usar este método, le pasamos un
      <strong>num</strong> por parámetro, que indicará el número o código Unicode al que queremos hacer referencia, y el
      método nos devolverá un <code class="str">string</code> con el carácter Unicode en cuestión:
    </p>
    <div class="highlight">
      <pre><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">65</span><span class="p">);</span> <span class="c1">// &#39;A&#39; (65 es el código U+0041 en decimal)</span>
<span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mh">0x0041</span><span class="p">);</span> <span class="c1">// &#39;A&#39; (0x0041) es el código U+0041 en hexadecimal)</span>
<span class="s2">&quot;A&quot;</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span> <span class="c1">// 65</span>
<span class="s2">&quot;A&quot;</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">);</span> <span class="c1">// 41</span>
</pre>
    </div>

    <p>Por otro lado, el método <strong>charCodeAt()</strong> es la operación inversa a
      <strong>String.fromCharCode()</strong> con algún extra. A <strong>charCodeAt(pos)</strong> le pasamos una posición
      <strong>pos</strong> por parámetro. Esto buscará el carácter de la posición <strong>pos</strong> del
      <code class="str">string</code> y nos devolverá su código Unicode (por defecto, un decimal). Si queremos pasarlo a
      otra base
      numérica, podemos hacer uso del método <code>toString(base)</code> indicando <strong>16</strong> como
      <strong>base</strong>.
    </p>
    <p>Observa a continuación que, lo tan famosos <strong>emojis</strong> por ejemplo, son realmente una combinación de
      2 códigos Unicode.</p>
    <div class="highlight">
      <pre><span class="c1">// El valor unicode del emoji 🐦 es (55357, 56358)</span>
<span class="nx">emoji</span> <span class="o">=</span> <span class="s2">&quot;🐦&quot;</span><span class="p">;</span>
<span class="nx">codigos</span> <span class="o">=</span> <span class="p">[];</span>

<span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span> <span class="nx">emoji</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span>
    <span class="nx">codigos</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">emoji</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">));</span>
<span class="p">}</span>
<span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(...</span><span class="nx">codigos</span><span class="p">);</span> <span class="c1">// &#39;🐦&#39; (Usamos desestructuración, veremos en temas posteriores)</span>
</pre>
    </div>

    <p>Observa que modificando el último código Unicode, podemos obtener diferentes <strong>emojis</strong>:</p>
    <div class="highlight">
      <pre><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">55357</span><span class="p">,</span> <span class="mi">56358</span><span class="p">);</span> <span class="c1">// &#39;🐦&#39;</span>
<span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">55357</span><span class="p">,</span> <span class="mi">56359</span><span class="p">);</span> <span class="c1">// &#39;🐧&#39;</span>
<span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">55357</span><span class="p">,</span> <span class="mi">56360</span><span class="p">);</span> <span class="c1">// &#39;🐨&#39;)</span>
<span class="p">(</span><span class="s2">&quot;\u0041&quot;</span><span class="p">);</span> <span class="c1">// &#39;A&#39;</span>
<span class="p">(</span><span class="s2">&quot;\ud83d\udc28&quot;</span><span class="p">);</span> <span class="c1">// &#39;🐨&#39;</span>
</pre>
    </div>

    <p>Una forma rápida de escribir <strong>carácteres Unicode</strong> es utilizando la secuencia de escape
      <strong>\u</strong> seguida del código Unicode en hexadecimal del caracter en cuestión, como se ve en los últimos
      ejemplos anteriores.
    </p>
    <p><a href="#top"><img alt=""
          src="https://img.shields.io/badge/regresar%20a%20contenido%20principal-%E2%86%A9-%232BAAEC?style=for-the-badge&amp;logo=readthedocs&amp;logoColor=%23FAC173" /></a>
    </p>
    <hr />
    <h3 id="interpolacion-de-variables"><a name="string-backstips"></a> INTERPOLACIÓN DE VARIABLES<a class="headerlink"
        href="#interpolacion-de-variables" title="Permanent link">&#9875;</a></h3>
    <p>En <strong>ECMAScript ES2015</strong> se introducierón una interesante mejora en la manipulación general de
      <code class="str">string</code>, sobre todo respecto a la legibilidad de código.
    </p>
    <p>Hasta ahora, si queríamos concatenar el valor de algunas variables con textos predefinidos por nosotros, teníamos
      que hacer algo parecido a esto: </p>
    <p>
    <div class="highlight">
      <pre><span class="kr">const</span> <span class="nx">sujeto</span> <span class="o">=</span> <span class="s2">&quot;frase&quot;</span><span class="p">;</span>
<span class="kr">const</span> <span class="nx">adjetivo</span> <span class="o">=</span> <span class="s2">&quot;concatenada&quot;</span><span class="p">;</span>
<span class="s2">&quot;Una &quot;</span> <span class="o">+</span> <span class="nx">sujeto</span> <span class="o">+</span> <span class="s2">&quot; bien &quot;</span> <span class="o">+</span> <span class="nx">adjetivo</span><span class="p">;</span> <span class="c1">// &#39;Una frase bien concatenada&#39;</span>
</pre>
    </div>
    A medida que añadimos más variable, el código se hace bastante menos claro y más complejo de leer, especialmente
    si
    tenemos que añadir arrays, introducir comillas simples que habríamos que escapar con <strong>'</strong> o combinar
    comillas simples con dobles, etc&hellip;</p>
    <p>Para evitarlo, se introducen los <strong>backsticks</strong> (<em>comillas hacia atrás</em>), que nos permiten
      <strong>interpolar</strong> el valor de las variables sin tener que cerrar, concatenar y abrir la cadena de
      texto
      continuamente:<br />
    <div class="highlight">
      <pre><span class="kr">const</span> <span class="nx">sujeto</span> <span class="o">=</span> <span class="s2">&quot;frase&quot;</span><span class="p">;</span>
<span class="kr">const</span> <span class="nx">adjetivo</span> <span class="o">=</span> <span class="s2">&quot;concatenada&quot;</span><span class="p">;</span>
<span class="s2">`Una</span> <span class="go">$</span><span class="p">{</span><span class="nx">sujeto</span><span class="p">}</span> <span class="s2">mejor</span> <span class="go">$</span><span class="p">{</span><span class="nx">concatenada</span><span class="p">}</span><span class="s2">`</span>
</pre>
    </div>
    </p>
    <p>Esto es una funcionalidad muy simple, pero que mejora sustancialmente la calidad de código generado.</p>
  </article>
  <script src="../../../../public/js/functions.js" type="module"></script>
</body>

</html>