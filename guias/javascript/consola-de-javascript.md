---
layout: post
---

## La consola de javascript

Para acceder a la consola de javascript desde el navegador, podemos pulsar: <br>
<strong><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>I</kbd></strong> sobre la pestaña de la página web actual, lo que nos llevará al **inspector de elementos** del navegador. Este inspector es un panel de control general donde podemos ver varios aspectos de la página en la que nos encontramos: su etiquetado **HTML**, sus estilos **CSS**, etc...

Concretamente, a nosotros nos interesa una sección particular del inspectorde elementos. Para ello, nos moveremos a la pestaña **Console** y ya nos encontramos en la **consola de javascript** de la página.


>También se puede utilizar directamente el atajo de teclado:
><strong><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>J</kbd></strong>

En esta consola, podemos escribir funciones o sentencias de javascript que estarán actuando en la página actual del navegador. De esta forma podemos observar los resultados que nos devuelve la consola al realizar diferentes acciones. Para ello, vamos a ver algunas bases:  

### La consola

El clásico primer ejemplo cuando se comienza a programar, es crear un programa que muestre por pantalla un texto, generalmente el texto &lt;&lt;**Hola Mundo**&gt;&gt;. También podemos realizar, por ejemplo **operaciones artiméticas** ingresando números y los operadores correspondientes. En la consola de javascript podemos hacer esto de forma muy sencilla:  

<a name="ejemplo-hola-mundo">

```js
console.log("Hola mundo"); // Hola Mundo
console.log(2 + 2); // 4
```


<table class="table">
  <thead>
    <th>Función</th>
    <th>Descripción</th>
  </thead>
  <tbody>
    <tr>
      <td><code>console.log()</code></td>
      <td>Muestra la información proporcionada en la consola javascript.</td>
    </tr>
    <tr>
      <td><code>console.info()</code></td>
      <td>Equivalente al anterior. Se utiliza para mensajes informativos.</td>
    </tr>
    <tr>
      <td><code>console.warn()</code></td>
      <td>Muestra información de advertencia. Aparece en amarillo</td>
    </tr>
    <tr>
      <td><code>console.error()</code></td>
      <td>Muestra información de error. Aparece en rojo</td>
    </tr>
    <tr>
      <td><code>console.clear()</code></td>
      <td>Limpia la consola. Equivalente a pulsar <strong><kbd>CTRL</kbd> + <kbd>L</kbd></strong></td>
    </tr>
  </tbody>

</table>

La idea es utilizar en nuestro código la función que más se adapte a nuestra situación en cada caso (*errores graves con `console.error()`, errores leves con `console.warn()`*, etc..).

### Aplicar varios datos  

En el [ejemplo anterior](#ejemplo-hola-mundo), solo hemos aportado un dato por cada línea (*un texto o una operación aritmética*), pero `console.log()` y sus funciones hermanas permiten añadir varios datos en una misma línea, separándolo por comás:  

```js
console.log("¡Hola a todos! Observen este número: ", 5 + 18);
```

### Aplicar estilos en la consola

Aunque no es muy práctico y sólo se trata de pura diversión, se pueden aplicar estilos **CSS** en la consola de javascript haciendo uso de **%C**, que se remplazará por los estilos indicados:  


```js
console.log("%cEniDev911!",
  "background:linear-gradient(#000, #555);"+
  "color:#fff; padding: 5px 10px;");
```

>Es importante recalcar que cuando escribimos directamente en la consola de javascript podemos obviar el `console.log()` y escribir directamente la información, pero si queremos mostrar algo en la consola desde nuestra página web o aplicación javascript, es absolutamente necesario escribir `console.log()` (o cualquiera de las funciones de su familia) en nuestro código.
