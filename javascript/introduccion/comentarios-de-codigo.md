---
layout: post
background: '/img/js-comentarios.png'
previous:
  url: 'ecmascript'
  title: 'Especificación EcmaScript'
next:
  url: 'estructuras-de-control'
  title: 'Estructuras de control'
---


A medida que conseguimos destreza programando, notaremos que los comentarios son cada vez más prescindibles, sin embargo, conviene no dejar de comentar, sino en su lugar, **aprender a comentar mejor**.


- No comentes detalles **redundantes**. No escribas lo que haces, escribe **por qué** lo haces.
- Mejor nombres de **variables/funciones/clases** descriptivas que comentarios descriptivos.
- Sé **conciso y concreto**. Resume. No escribas párrafos si no es absolutamente necesario.
- Intenta usar siempre el mismp **idioma** y **estilo** de comentarios.
- Con el tiempo, los comentarios no se suelen mantener (*modificar*), el código sí.


### Tipos de comentarios

En javascript tenemos dos tipos de comentarios: **comentarios de una sóla línea** y los **comentarios de múltiples líneas**.

- El primero de ellos se caracteriza porque comienza con **`//`** y sólo comenta la **linea actual** desde donde se escribe.
- El segundo tipo se utiliza para hacer comentarios extensos que ocuparán **varias líneas**. Comienza por **`/*`** y comentará todo el texto que escribamos hasta que cerremos con un **`*/`**.

**Veamos un ejemplo aplicado**:


```js
// Comentarios cortos de una sola línea. Suelen explicar la línea siguiente.
let aux = 0;

let initial = 1; // También se utilizan al final de una línea.

/* Por otro lado, existen los comentarios múltiples de varias líneas consecutivas.
   Suelen utilizarse para explicaciones largas que requieren bastante
   espacio porque se mencionan gran cantidad de cosas */
```


### Ejemplos

Comentar código también es un arte que debe ser aprendido, ya que al principio es muy fácil **cometer errores** y comentar en exceso o no ser concreto al comentar. No suele ser grave porque los comentarios no afectan al funcionamiento del programa, pero en equipos de trabajo donde hay varios programadores suele ser molesto para los programadores con más experiencia.


Un ejemplo de comentario que suele ser contraproducente es aquel que se limita a decir lo que hacemos en la línea siguiente:


```js
// Declaramos una variable llamada x
var x = 50;

// La mostramos por consola
console.log(x);

// Cambiamos su valor multiplicando por 0,5
x = x * 0.5;
```

Estos comentarios pueden ser útiles para el **programador novato** que se está iniciando en la programación y necesita recordar lo que hace porque aún no conoce bien la sintaxis del lenguaje de programación, de hecho muchos de los comentarios en temas de introducción son así (*para ayudar al programador que recién empieza a programar*), pero el objetivo real de un comentario **no debe ser recordar que hace una línea de código**, sino más bien conocer porque estamos realizando o que representa lo que estamos haciendo:


```js
let x = 100; // Establecemos el precio del producto

console.log(x);

x = x * 0.5; // Lo rebajamos al 50%
```

Sin embargo, hay una opción todavía mejor que conecta mejor con las buenas practicas y tiene que ver con poner **nombres descriptivos** a las variables (*debería ser algo obligatorio*), puesto que puede ahorrarnos muchos comentarios y tiempo, simplificar el código considerablemente y hacerlo mucho más legible y con menos ambigüedades:

```js
let precio = 50;

console.log(precio);

let oferta = precio * 0.5;
```

En este fragmento de código, no utilizamos comentarios porque el nombre de las variables ya ayuda a entender el código y lo hace **autoexplicativo**. De esta forma, generamos menos código (*e incluso comentarios*) y se entiende igualmente.

