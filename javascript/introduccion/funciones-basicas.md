---
layout: post
lang: javascript
title: 'Funiones básicas'
---



Las **funciones** nos permiten agrupar líneas de código en tareas con un nombre, para que, posteiormente, podamos hacer referencia a ese nombre para realizar todo lo que se agrupe en dicha tarea. Para usar funciones hay que hacer dos cosas:  


- **Declarar la función**: Preparar la función, darle un nombre y decirle las tareas que realizará.
- **Ejecutar la función**: &lt;&lt;Llamar&gt;&gt; a la función para que realice las tareas de su contenido.


### Declaración

En el siguiente ejemplo veremos la **declaración de una función** llamada **`saludar`**:  

```js
// Declaración de la función "saludar"
function saludar() {
  // Contenido de la función
  console.log("Hola, soy una función");
}
```

El contenido de la función es una línea que mostrará por consola un saludo. Sin embargo, si escribimos estas 4 o 5 líneas de código en nuestro programa, no mostrará nada por pantalla. Esto ocurre así porque solo hemos declarado la función (*le hemos dicho que existe*), pero aún nos falta el segundo paso, **ejecutarla**, que es realmente cuando se realizan las tareas de su contenido.


### Ejecución


Veamos, ahora sí, el ejemplo completo con declaración y ejeución:  

```js
// Declaración de la función "saludar"
function saludar() {
  // Contenido de la función
  console.log("Hola, soy una función");
}

// Ejecución de la función
saludar();
```

En este ejemplo hemos **declarado la función** y además, hemos **ejecutado** la función llamándola por su nombre y seguida de ambos paréntesis, que nos indican que es una función. En este ejemplo, si se nos mostraría en la consola javascript el mensaje de saludo.


### Ejemplo


Veamos un primer ejemplo que muestre en la consola la **tabla de multiplicación del 1**:  


```js
// Tabla de multiplicar del 1
console.log("1 x 0 = ", 1 * 0);
console.log("1 x 1 = ", 1 * 1);
console.log("1 x 2 = ", 1 * 2);
console.log("1 x 3 = ", 1 * 3);
console.log("1 x 4 = ", 1 * 4);
console.log("1 x 5 = ", 1 * 5);
console.log("1 x 6 = ", 1 * 6);
console.log("1 x 7 = ", 1 * 7);
console.log("1 x 8 = ", 1 * 8);
console.log("1 x 9 = ", 1 * 9);
console.log("1 x 10 = ", 1 * 10);
```


Este primer ejemplo funciona perfectamente, sin embargo, no estamos aprovechando las ventajas de la programación, sino que hemos hecho todo el trabajo escribiendo **10 líneas de código**.


Vamos a utilizar un **bucle for** para ahorrarnos tantas líneas de código:  


```js
for (i = 0; i < 11; i++) {
  console.log("1 x", i, "=", 1 * i);
}
```

Esto está mucho mejor. Hemos resumido 11 líneas de código en prácticamente 2 líneas utilizando un **bucle for** que va de **0 a 10** incrementando de 1 en 1. Incluso, recuerda que cuando las llaves sólo contienen una línea, se pueden omitir.


>Otro detalle importante a mencionar es que, en muchos casos, a los programadores les resulta más intuitivo establecer la condición del bucle a **i <= 10** que establecerla a **i < 11**. Son exactamente equivalente, pero en el caso actual, la primera parece más &lt;&lt;lógica&gt;&gt;, ya que vemos visualmente el número de la última iteración.  


Pero aún no hemos utilizado funciones, así que vamos a modificar nuestro ejemplo para usar. Imaginemos que ahora nuestro objetivo es **mostrar la tabla de multiplicar del 1 varias veces** (*2 veces para ser exacto*).


La primera aproximación para hacer eso que se nos ocurriría sería hacer lo siguiente:  

```js
// Primera vez
for (i = 0; i <= 10; i++) console.log("1 x", i, "=", 1 * i);

// Segunda vez
for (i = 0; i <= 10; i++) console.log("1 x", i, "=", 1 * i);

// Tercera vez
for (i = 0; i <= 10; i++) console.log("1 x", i, "=", 1 * i);
```

Pero volvemos a tener el mismo problemas del primer ejemplo. Estamos repetiendo el mismo código varias veces, complicándolo y volviéndolo más &lt;&lt;feo&gt;&gt;. Además, si tuvieramos que hacer modificaciones en uno de los bucle habría también que repetir el trabajo 2 veces más, porcada uno de los otros bucles.

Veamos ahora como obtener el mismo resultado pero utilizando bucles y funciones, sin repetir varias veces de las mismas tareas:  


```js
// Declaración de la función tablaDelUno()
function tablaDelUno() {
  for (i = 0; i <= 10; i++) console.log("1 x", i, "=", 1 * i);
}

// Bucle que ejecuta 3 veces la función tablaDelUno()
for (intento = 0; intento < 3; intento++) tablaDelUno();
```

En este ejemplo se declara la función, que mostrará la tabla de multiplicar del uno. Posteriormente, realizamos un bucle con la javascript **intento** de **0 a 2** (*3 repiticiones*) para llamar la función 3 veces, y mostrar así la tabla de multiplicar cada vez.  


Pero... ¿No sería más interesante mostrar las 3 primeras tablas de multiplicar (*Tabla del uno, del dos, del tres*)?  


### ¿Qué son los parámetros?


Las funciones no sirven sólo para esto. Tienen mucha más flexibilidad de la que hemos visto hasta ahora. A las funciones se les pueden pasar **parámetros**, que no son más que variables que existirán sólo dentro de dicha función, con el valor pasado desde la ejecución,  


```js
// Declaración
function tablaDelUno(hasta) {
  for (i = 0; i <= hasta; i++) console.log("1 x", i, "=", 1 * i);
}

// Ejecución
tablaDelUno(10);
tablaDelUno(5);
```

Como podemos ver, en el interior de los paréntesis de la función se ha indicado una variable llamada **hasta**. Esa variable contiene el valor que se le da a la hora de ejecutar la función, que en este ejemplo, si nos fijamos bien, se ejecuta dos veces: una con valor **10** y otra con valor **5**.


Si analizamos el código de la declaración de la función, vamos que utilizamos la variable **hasta** en la condición del bucle, para que el bucle llegue hasta ese número (*de ahí su nombre*). Por lo tanto, en la primera ejecución se nos mostrará la tabla de multiplicar del 1 hasta llegar al **1x10** y en la segunda ejecución se nos mostrará la tabla de multiplicar del 1 hasta llegar al **1x5**.


>La idea de las funciones es enforcarnos en el código de la declaración, y una vez lo tengamos funcionando, nos podemos olvidar de él porque está **encapsulado** dentro de la función. Simplemente tendremos que recordar el nombre de la función y los parámetros que hay que pasarle. Esto se hace que sea mucho más fácil trabajar con el código.


### Parámetros múltíples

Hasta ahora sólo hemos creado una función con **1 parámetro**, pero una función de javascript puede tener muchos más parámetros. Vamos a crear otro ejemplo, mucho más útil donde convertimos nuestra función en algo más práctico y útil:  

```js
/// Declaración
function tablaMultiplicar(tabla, hasta) {
  for (i = 0; i <= hasta; i++) console.log(tabla, "x", i, "=", tabla * i);
}

// Ejecución
tablaMultiplicar(1, 10); // Tabla del 1
tablaMultiplicar(5, 10); // Tabla del 5
```

En este ejemplo, hemos modificado nuestra función **`tablaDelUno()`** por esta nueva versión que hemos cambiado de nombre a **`tablaMultiplicar()`**. En esta función necesita que le pasemos dos parámetros: **tabla** (*la tabla de multiplicar en cuestión*) y **hasta** (*el número hasta donde llegará la tabla de multiplicar*).  

>Podemos añadir **más parámetros** a la función según nuestras necesidades. Es importante recordar que el orden de los parámetros es importante y que los nombres de cada parámetro no se pueden repetir en una misma función.  


### Parámetros por defecto

Es posible que en algunos casos queramos que ciertos parámetros tengan un valor sin necesidad de escribirlos en la ejecución. Es lo que se llama **un valor por defecto**.


En versiones anteriores de ECMASCript se podía realizar de formas similares a la siguiente:  

```js
function tablaMultiplicar(tabla, hasta) {
  if (hasta == undefined) hasta = 10;

  for (i = 0; i <= hasta; i++) console.log(tabla, "x", i, "=", tabla * i);
}
```

En caso de que el parámetro **hasta** no tenga valor (*es `undefined`*), le asignamos el valor por defecto. En caso contrario (*ya tiene valor*) continuamos normalmente.


### Devolución de valores

Hasta ahora hemos utilizado funciones simples que realizan acciones o tareas (*en nuestro caso, mostrar por consola*), pero habitualmente, lo que buscamos es que esa función realice una tarea y nos devuelva la información al exterior de la función, para así utilizarla o guardarla en una variable, que utilizaremos posteriormente para nuestros objetivos.  

Para ello, se utiliza la palabra clave **return**, que suele colocarse al final de la función, ya que con dicha devolución terminamos la ejecución de la función (*si existe código después, nunca será ejecutado*).

Veamos un ejemplo con una operación muy sencilla, para velo claramente:  


```js
// Declaración
function sumar(a, b) {
  return a + b; // Devolvemos la suma de a y b al exterior de la función
  console.log("Ya he realizado la suma."); // Este código nunca se ejecutará
}

// Ejecución
var resultado = sumar(5, 5); // Se guarda 10 en la variable resultado
```

Como podemos ver, esto nos permite crear funciones más modulares y reutilizables que podemos utilizar en multitud de casos, ya que la información se puede enviar al exterior de la función y utilizarla junto a otras funciones o para otros objetivos.






