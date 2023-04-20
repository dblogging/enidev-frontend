---
layout: post
title: 'Crear elementos del DOM'
next:
  url: 'insertar-elementos-dom'
  title: 'Insertar elementos en el DOM'
---


### Crear elementos HTML

Existen una serie de métodos para **crear de forma eficiente** diferentes elementos HTML o nodos, y que nos puden convertir en una tarea muy sencilla el crear estructuras dinámicas, mediante bucles o estructuras definidas:  


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-js">
    <th>Método</th>
    <th>Descripción</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="método"><span class="badge badge-primary">element</span><strong><code>.createElement(tag, options)</code></strong></td>
          <td data-label="descripción">Crea y devuelve un elemento <strong>HTML</strong> definido por el <span class="badge badge-warning">string</span> <strong>tag</strong>.</td>
    </tr>
    <tr>
      <td data-label="método"><span class="badge badge-secondary">node</span><strong><code>.createComment(text)</code></strong></td>
          <td data-label="descripción">Crea y devuelve un nodo de comentario <strong>HTML</strong> <span class="tag" style="color: #257740">!-- text --</span>.</td>
    </tr>
    <tr>
      <td data-label="método"><span class="badge badge-secondary">node</span><strong><code>.cloneNode(deep)</code></strong></td>
          <td data-label="descripción">Clona el nodo <strong>HTML</strong> y devuelve una copia, <strong>deep</strong> es <strong>false</strong> por defecto.</td>
    </tr>
     <tr>
      <td data-label="método"><span class="badge badge-danger">boolean</span><strong><code>.isConnected</code></strong></td>
          <td data-label="descripción">Indica si el nodo <strong>HTML</strong> está insertado en el documento <strong>HTML</strong>.</td>
    </tr>
  </tbody>
</table>


### El método createElement()

Mediante el método **`.createElement()`** podemos crear un <span class="badge badge-primary">element</span> **HTML en memoria** (*¡no estará insertado aún en nuestro documento* ***HTML*** *!*). Dicho elemento almacenado en una variable, podremos modificar sus características o contenido, para **posteriormente** insertarlo en una posición determinada del **DOM** o documento **HTML**.


Vamos a centrarnos en el proceso de **creación del elemento**. El funcionamiento de **`createElement()`** es muy sencillo: se trata de pasarle el nombre de la etiqueta (***tag***) a utilizar.

```js
const div = document.createElement("div");      
// Creamos un <div></div>
const span = document.createElement("span");    
// Creamos un <span></span>
const img = document.createElement("img");      
// Creamos un <img>
```


De la misma forma, podemos crear comentarios **HTML** con **`createComment()`** o nodos de texto sin etiqueta **HTML** con **`createTextNode()`**, pasándole a ambos un <span class="badge badge-warning">string</span> con el texto en cuestión. En ambos, se devuelve un <span class="badge badge-secondary">node</span> que podremos utilizar luego para insertar en el documento **HTML**:


```js
const comment = document.createComment("Comentario");
const text = document.createTextNode("Hola");
```

El método **`createElement()`** tiene un parámetro opcional denominado **options**. Si se indica, será un objeto con una propiedad **is** para definir un **elemento personalizado** en una modalidad menos utilizada.

> Ten presente que en los ejemplos que hemos visto estamos creando los elementos en una constante, pero de momento **no están añadiendose al documento HTML**, por lo que no aparecerían visualmente. En breve vamos a ver como añadirlos.


### El método cloneNode()

Hay que tener mucho cuidado al crear y **duplicar** elementos **HTML**. Un error muy común es asignar un elemento que tenemos en otra variable, pensando que estamos creando una copia (*cuando no es así*):

```js
const div = document.createElement("div");
div.textContent = "Elemento 1";

const div2 = div;   // NO se está haciendo una copia
div2.textContent = "Elemento 2";

div.textContent;  // 'Elemento 2'
```

Con esto, quizás pueda parecer que estamos duplicando un elemento para crearlo a imagen y semejanza del original. Sin embargo, lo que hacemos es una **referencia** al elemento original, de modo que si modifica **div2**, también se modifica el elemento original. Para evitar esto, lo ideal es utilizar el método **`cloneNode()`**:  

```js
const div = document.createElement("div");
div.textContent = "Elemento 1";

const div2 = div.cloneNode();   // Ahora SÍ estamos clonando
div2.textContent = "Elemento 2";

div.textContent;  // 'Elemento 1'
```

El método **`cloneNode(deep)`** acepta un parámetro <span class="badge badge-danger">boolean</span> **deep** opcional, a **false** por defecto, para indicar el tipo de clonación que se realizará:  


- Si es **true**, clonará también sus hijos, conocido como una **donación profunda** (*Deep Clone*).
- Si es **false**, no clonará sus hijos, conocido como una **clonación superficial** (*Shallow Clone*).


### La propiedad isConnected


Por último, la propiedad **isConnected** nos india si el nodo en cuestión está conectado al **DOM**, es decir, si está insertado en el documento **HTML**:

- Si es **true**, significa que el elemento está conectado al DOM.
- Si es **false**, significa que el elemento no está conectado al DOM.

Hasta ahora, hemos visto como crear elementos **HTML** con javascript, pero no hemos visto como modificar los atributos **HTML** de dichas etiquetas creadas. En general, una vez tenemos un elemento sobre el que vamos a crear algunos atributos, lo más sencillo es **asignarle valores como propiedades** de objetos:  


```js
const div = document.createElement("div");

div.id = "page";
div.className = "data";
div.style = "color: red";
```

Sin embargo, en algunos casos esto se puede complicar (*como se ve en uno de los casos del ejemplo anterior*). Por ejemplo, la palabra **class** (*para crear clases*) o la palabra **for** (*para bucles*) son palabras reservadas de javascript y no se podrían utilizar para crear atributos. Por ejemplo, si queremos establecer una clase, se debe utilizar la propiedad **className**.

>Es posible asignar a la propiedad **className** varias clases a un <span class="badge badge-warning">string</span> separadas por espacio. De esta forma se asignarán múltiples clases. Aún así, recordemos utilizar la propiedad **classList** que estaré explicando en secciones posteriores.

Aunque la forma anterior es la más rápida, tenemos algunos métodos para utilizar en un elemento **HTML** y añadir, modificar o eliminar sus atributos:


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-js">
    <th>Método</th>
    <th>Descripción</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="método"><span class="badge badge-danger">boolean</span><strong><code>.hasAttributes()</code></strong></td>
          <td data-label="descripción">Indica si el elemento tiene atributos <strong>HTML</strong>.</td>
    </tr>
    <tr>
      <td data-label="método"><span class="badge badge-danger">boolean</span><strong><code>.hasAttribute(attr)</code></strong></td>
          <td data-label="descripción">Indica si el elemento tiene el atributo HTML <strong>attr</strong>.</td>
    </tr>
    <tr>
      <td data-label="método"><span class="badge badge-success">array</span><strong><code>.getAttributeNames()</code></strong></td>
          <td data-label="descripción">Devuelve un <span class="badge badge-success">array</span> con los atributos del elemento.</td>
    </tr>
     <tr>
      <td data-label="método"><span class="badge badge-warning">string</span><strong><code>.getAttribute(attr)</code></strong></td>
          <td data-label="descripción">Devuelve el valor del atributo <strong>attr</strong> del elemento o <span class="badge badge-secondary">null</span> si no existe.</td>
    </tr>
    <tr>
      <td><span class="badge" style="background: #ccc;">undefined</span><strong><code>.removeAttribute(attr)</code></strong></td>
      <td>Elimina el atributo <strong>attr</strong> del elemento.</td>
    </tr>
    <tr>
      <td><span class="badge" style="background: #ccc;">undefined</span><strong><code>.setAttribute(attr, value)</code></strong></td>
      <td>Añade o cambia el atributo <strong>attr</strong> al valor <strong>value</strong></td>
    </tr>
    <tr>
      <td><span class="badge badge-secondary">node</span><strong><code>.getAttributeNode(attr)</code></strong></td>
      <td>Identico a <code>.getAttribute()</code> pero devuelve el atributo como <strong>nodo</strong>.</td>
    </tr>
    <tr>
      <td><span class="badge badge-secondary">node</span><strong><code>.removeAttributeNode(attr)</code></strong></td>
      <td>Indentico a <code>.removeAttribute()</code> pero devuelve el atributo como <strong>nodo</strong> una vez removido.</td>
    </tr>
    <tr>
      <td><span class="badge badge-secondary">node</span><strong><code>.setAttributeNode(attr, value)</code></strong></td>
      <td>Identico a <code>.setAttribute()</code> pero devuelve el atributo como <strong>nodo</strong>.</td>
    </tr>
  </tbody>
</table>

Estos métodos como podemos ver son bastante autoexplicativos y fáciles de entender, aún así, vamos a ver algunos ejemplos de uso donde podemos ver como funcionan:  

```html
<div id="page" class="info data dark" data-number="5"></div>
<script>
// Obtenemos el elemento
const div = document.querySelector("#page");

div.hasAttribute("data-number");  // true (data-number existe)
div.hasAttributes();              // true (tiene 3 atributos)

div.getAttributeNames();          // ["id", "data-number", "class"]
div.getAttribute("id");           // "page"

div.removeAttribute("id");        // class="info data dark" y data-number="5"
div.setAttribute("id", "page");   // Vuelve a añadir id="page"
</script>
```

Los tres últimos métodos mencionados: `getAttributeNode()`, `removeAttributeNode()` y `setAttributeNode()` son versiones idénticas a las que comparten parte del nombre, sólo que devuelven el <span class="badge badge-secondary">node</span> afectado, útil si queremos guardarlo en una variable y seguir trabajando con él.


### Usando fragmentos

En algunas ocasiones, nos puede resultar muy interesante utilizar **fragmentos**. Los fragmentos son una especie de documento paralelo, aislado de la página con la que estamos trabajando, que tiene varias características:

- No tiene elemento padre. Está aislado de la página o documento.
- Es mucho más simple y ligero (*mejor rendimiento*).
- Si necesitamos hacer cambios consecutivos, no afecta al **reflow** (*repintado de un documento*).

De esta forma, es una estrategia muy útil para usarlo de *documento temporal* y no realizar cambios consecutivos, con su impacto de rendimiento. Para crearlos, necesitaremos utilizar la siguiente función:  


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="thead-js">
    <th>Método</th>
    <th>Descripción</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="método"><span class="badge badge-primary">object</span><strong><code>document.createDocumentFragment()</code></strong></td>
          <td data-label="descripción">Crea un fragmento aislado (<em>sin padre</em>).</td>
    </tr>
  </tbody>
</table>

Así como vemos, el <span class="badge badge-primary">object</span> que devuelve el método **`document.createDocumentFragment()`** es un fragmento que podemos utilizar para almacenar en su interior un pequeño **DOM** temporal, que luego añadiremos en nuestro **DOM** principal.


```js
const fragment = document.createDocumentFragment();

for (let i = 0; i < 5000; i++) {
  const div = document.createElement("div");
  div.textContent = `Item número ${i}`;
  fragment.appendChild(div);
}

document.body.appendChild(fragment);
```

Como podemos ver, utilizando el fragmento **fragment** generado como ubicación temporal donde hacer todos los cambios del DOM que necesitemos, sin que afecten al **reflow** del documento de forma independiente. Una vez terminemos nuestra lógica y tengamos el DOM definitivo, lo insertamos como hacemos siempre, por ejemplo, con un **`appendChild`** (*veremos en la siguiente sección*).

Es entonces cuando se traslada todo el **DOM** del fragmento al lugar donde hemos indicado en el **`appendChild`** (*en nuestro ejemplo, a la etiqueta* <span class="tag">body</span>), dejando nuevamente el fragmento vacío.