---
layout: post
title: 'Conceptos básicos'
previous:
  url: 'como-funciona-javascript'
  title: 'Como funciona javascript'
next:
  url: 'ecmascript'
  title: 'La especificación ECMAScript'
---

### Glosario general


- **Proramas**: En programación nos referimos a un &lt;&lt;programa&gt;&gt; a el conjunto total de código que desarrollas para satisfacer una demanda. En javascript, quizás el término más utilizado es **aplicación web** (*cuando es un desarrollo con mucha cantidad de javascript*). También se suele generalizar utilizando términos como &lt;&lt;script&gt;&gt;.

- **Algoritmo**: Un algoritmo es un conjunto de pasos conocidos, en un determinado orden, para conseguir realizar una tarea de forma satisfactoria y lograr un objetivo.

- **Variables**: Es el nombre genérico que se le da a pequeños espacios de memoria donde guardas una información determinada, de forma muy **similar a las incógnitas en matemáticas**. Un programa puede tener muchas variables, y cada una de ellas tendrá un **nombré**, un **valor** y un **tipo de dato**. El nombre se utiliza para diferenciarlas unas de otras y hacer referencia a ellas, el valor es la información que contienen y el tipo de dato es la natiraleza de ese valor. Se llaman variables porque podemos cambiarle su valor a lo largo del programa, según necesitemos.

**Ejemplo**: 

```js
x = 5; // nombre: x, valor: 5, tipo de dato: número
y = "Hola"; // nombre: y, valor: Hola, tipo de dato: texto
idioma = "español"; // nombre: idioma, valor: español, tipo de dato: texto
```

- **Constantes**:  Es el mismo concepto de una variable, sólo que en este caso, la información que contiene es siempre la misma (*no puede variar*).

- **Funciones**: Cuando comenzamos a programar y añadir funcionadades a nuestro desarrollo, neustro código se va haciendo cada vez más y más grande, por lo que hay que buscar formas de organizarlo y mantenerlo lo más simple posible. Las funciones son **agrupaciones** de código que, entre otras cosas, evitan que tengamos que escribir varias veces lo mismo en nuestro código. Una función contendrá una o más acciones a realizar y cada vez que ejecutemos una función, se realizarán todas ellas.

- **Parámetros**: Es el nombre que reciben las variables que se le pasan a las funciones. Muchas veces también se les denomina **argumentos** (*como suelo decir no es una denominación definitiva, ya que en este contexto puede variar bastante cuando hablamos de parámetros y argumentos*).

- **Bucles**: Cuando estamos en aguas un poco más profundas en programación, muchas veces nos encontraremos con escenarios donde nos pueda interesar que una tarea en concreto se pueda repetir una ***n*** cantidad de veces. Una de las ventajas de la programación es que permite automatizar acciones y no es necesario hacerlo varias veces. Los bucles permiten indicar el número de veces que se repetirá una acción. De esta forma, sólo nos basta con escribir una vez esa tarea (*en código*), y simplemente indicamos el número de veces que queremos que se repita.

- **Iteración**: Este término va muy relacionado con el anterior, y hace sentido cuando cuando un programa está en un bucle repitiendo varias veces la misma tarea, cada una de esas repeticiones se denominan **iteración**.

- **Librería**: Muchas veces, en los desarrollos se busca resolver ciertas tareas o problemas y el código desarrollado lo hacemos pensado en que nos permita reutilizarlo en un futuro desarrollo y como dice el dicho ***&lt;&lt;no estar re-inventando la rueda&gt;&gt;***. Cuando eso ocurre, en javascript se suele empaquetar el código en lo que se denominan ***librerías***, que no es más que código listo para que otros programadores puedan utilizarlo fácilmente en sus programas y beneficiarse de las tareas que resuelven de forma muy sencilla.

