---
layout: 'post'
---

Sin duda, uno de los conceptos más interesantes de **WebComponents** (*y también de los más complejos*) es el **Shadow DOM** (*DOM de sombra*). Para comprenderlo bien, primero debemos tener claro que el **DOM** es la estructura de elementos que tiene una página en forma de árbol, donde se puede ver facilmente los descendientes (*hijos*) o contenedores (*padres*)de un elemento.


El navegador, al cargar una página, genera esta estructura de árbol, a la que generalmente llamamos **DOM**. Cada vez que ocurre un cambio en los elementos de una página, el navegador actualiza esta estructura para reflejarlos.


### ¿Qué es eso de SHADOW DOM? ![psyduck](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif)

El concepto de **Shadow DOM** nace de la necesidad de tener una forma de encapsular elementos y mantenerlos aislados del resto de la pagina, creando algo así como un **concepto local**, en contraposición al **concepto global** con el que se solía trabajar en los navegadores.  

Quizás, la forma más fácil de entender el concepto de **Shadow DOM**, es haciendo una analogía precisamente a lo que su propio nombre indica, **una sombre de un elemento**:

![shadow dom](https://lenguajejs.com/webcomponents/shadow-dom/que-es-shadow-dom/shadow-dom.png)

Imaginemos que tenemos un árbol **DOM** del documento de la página en la que nos encontramos. Uno de esos nodos del árbol puede tener un **Shadow DOM** (*una sombra*) en la cuál puede residir otro árbol **DOM**, que realmente no forma parte del **DOM** principal de la página.


Como veremos en breve, entre otras cosas, esta característica nos permitiría algo muy interesante con **CSS**, **aislar los estilos** de modo que no afecten a los elementos que están fuera del **Shadow DOM**, ni tampoco el **CSS** de fuera afecte a los elementos del **Shadow DOM**.


>**Nota**: Aunque se suele asociar a WebComponents, realmente el **Shadow DOM** es una característica independiente que se puede aplicar a un elemento HTML normal, sin necesidad de que sea un componente.

### ¿Qué es el Virtual DOM? ![psyduck](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif)

Aunque tiene cierta relación, el concepto de **Virtual DOM** (*o VDOM*) no es una alternativa directa de **Shadow DOM**, pero muchas veces se suelen asociar, ya que debido a sus nombres se suele intuir que son cosas similares o alternativas.

Durante la aparición de los diferentes **frameworks** del ecosistema javascript, estos idearon un concepto denominado **Virtual DOM**, una copia en memoria del **DOM** de la página, donde se gestionarían directamente los cambios del mismo, para traducirlos posteriormente al **DOM** real del documento, con el objetivo de acelerar y optimizar los cambios del **DOM** de la página.

Por ejemplo, la popular librería <a href="https://es.react.dev/" target="_blank">React</a> introducía el concepto de **Virtual DOM** para detectar los cambios (*diferencias entre árboles*), actualizar los nodos afectados (*cambios y descendientes a quienes pueden afectar*) y posteriormente, actualizar en el **DOM** real, consiguiendo dos cosas principales, **velocidad** y abstraer de estos cambios para hacerlos de forma automática y menos tediosa:

![virtual dom](https://lenguajejs.com/webcomponents/shadow-dom/que-es-shadow-dom/virtual-dom.png)


### ¿Cómo crear un Shadow DOM?

Por defecto, los elementos **HTML** no tienen **Shadow DOM**. Pero si queremos crear uno y adjuntarlo a un elemento **HTML**, no tenemos más que utilizar el método **`.attachShadow()`** sobre el elemento donde queremos crear el **Shadow DOM**.


<table class="table">
	<thead class="thead-js shadow">
		<th>Método</th>
		<th>Descripción</th>
	</thead>
	<tbody>
		<tr>
			<th><span class="badge text-light" style="background: #638">shadowroot</span><br><code>element.attachShadow(</code><span class="badge badge-primary">object</span> options<code>)</code></th>
			<td>Crea y adjunta un <strong>Shadow DOM</strong> en un elemento.</td>
		</tr>
	</tbody>
</table>

En lo que vemos ejemplos, explicaré el parámetro obligatorio **options** y algunas características más, sin embargo para empezar, con este método podríamos crear un **Shadow DOM** utilizando el siguiente fragmento de código:  


```js
const div = document.createElement("div");
const shadow = div.attachShadow({ mode: "open" });
```

En la primera línea creamos un elemento <span class="tag">div</span> desde javascript. También podríamos seleccionar un elemento existente mediante por ejemplo **`querySelector()`**. En este elemento es donde vamos a crear un **DOM** particularmente llamado **Shadow DOM**.