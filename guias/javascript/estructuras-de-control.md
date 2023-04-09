---
layout: post
background: '/img/estructuras-de-control.png'
previous:
  url: 'comentarios-de-codigo'
  title: 'Comentarios de código'
next:
  url: 'bucles'
  title: 'Bucles e iteraciones'
---




### Condicionales

Al hacer un programa necesitaremos establecer **condiciones** o **decisiones**, donde buscamos que el navegador realice una **acción A** si  **se cumple** una condición o una **acción B** si **no se cumple**. Este es el primer tipo de estructuras de control que contraremos. Pero existen varias estructuras de control:


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="bg-warning">
    <th class="align-top">Estructura de control</th>
    <th class="align-top">Descripción</th>
  </thead>
  <tbody>
  	<tr>
  		<td><strong><code>if</code></strong></td>
  		<td><strong>Condición simple:</strong> si ocurre esto, haz lo siguiente...</td>
  	</tr>
  	<tr>
  		<td><strong><code>if/else</code></strong></td>
  		<td><strong>Condición con alternativa:</strong> Si ocurre esto, haz esto, sino, haz esto otro...</td>
  	</tr>
  	<tr>
  		<td><strong><code>?:</code></strong></td>
  		<td><strong>Operador ternario:</strong> Equivalente a <strong><code>if/else</code></strong>, método abreviado.</td>
  	</tr>
  	<tr>
  		<td><strong><code>switch</code></strong></td>
  		<td><strong>Estructura para casos específicos:</strong> Similar a varios <strong><code>if/else</code></strong> anidados.</td>
  	</tr>
  </tbody>
</table>


### Condicional If

Quizás, el más conocidos de estos mecanismos de estructuras de control es el **`if`** (*condicional*). Con él podemos indicar en el programa que se tome un camino sólo si se cumple la **condición** que establezcamos:  

```js
let nota = 7;
console.log("He realizado mi examen.");

// Condición (si nota es mayor o igual a 5)
if (nota >= 5) {
  console.log("¡Estoy aprobado!");
}
```

En este caso, como el valor de **nota** es superior a 5, nos aparecerá en la consola el mensaje &lt;&lt;¡Estoy aprobado!&gt;&gt;. Sin embargo, si modificamos en la primera línea el valor de **nota** a un valor inferior a 5, ya se podrán imaginar que no nos aparecerá ese mensaje.


### Condicional If/else

Pero se puede dar el caso que queramos establecer una alternativa a una condición. Para eso utilizaremos el `if` seguido de un `else`. Con esto podemos establecer una **acción A** si se cumple la condición y una **acción B** si no se cumple.

Para el ejemplo vamos a modificar el código anterior para mostrar también un mensaje cuando estamos suspendido, pero en estemos reprobado, pero en este caso, en lugar de mostrar el mensaje directamente con un `console.log()` vamos a guardar ese texto en una variable como **estado**:  


```js
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Condición
if (nota < 5) {
  // Acción A (nota es menor que 5)
  estado = "reprobado";
} else {
  // Acción B: Cualquier otro caso a A (nota es mayor o igual que 5)
  estado = "aprobado";
}

console.log("Estoy", estado);
```

Nuevamente, en este ejemplo comprobaremos que podemos conseguir que se muestra el mensaje **Estoy aprobado** o **Estoy reprobado** dependiendo del valor que tenga la variable **`nota`**. La diferencia con el ejemplo anterior es que creamos una nueva variable que contendrá un valor determinado dependiendo de la condición del **if**.

Por último, el **`console.log()`** del final, muestra el contenido de la variable **`estado`**, independientemente de que sea el primer caso o el segundo.


```js
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Condición
if (nota < 5) {
  // Acción A (nota es menor que 5)
  estado = "suspendido";
}
if (nota >= 5) {
  // Acción B (nota es mayor o igual que 5)
  estado = "aprobado";
}

console.log("Estoy", calificacion);
```

Este nuevo ejemplo, es equivalente al ejemplo anterior. Si nos fijamos bien, la única diferencia respecto al anterior es que estamos realizando dos **if** independientes: uno para comprobar si está suspendido y otro para comprobar si está aprobado.


Pero aunque son equivalente, no son exactamente iguales, ya que en el ejemplo que vimos anteriormente sólo existe un **if**, y por lo tanto, sólo se realiza una comprobación. En este ejemplo que vemos ahora, se realizan **dos if**, y por lo tanto, dos comprobaciones.

>En este caso se trata de algo insignificante, pero es importante darse cuenta de que el primer ejemplo estaría realizando menos tareas para conseguir un mismo resultado, por ende, el primer ejemplo sería más eficiente.


### Operador ternario

El **operador ternario** es una alternativa de condicional **if/else** de una forma mucho más corta y, en muchos, más legible. Vamos a reescribir el ejemplo anterior utilizando este operador:  


```js
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
let estado = nota < 5 ? "reprobado" : "aprobado";

console.log("Estoy", estado);
```

Este ejemplo hace exactamente lo mismo que el ejemplo anterior. La idea principal del operador ternario es que podemos condensar mucho código y tener un **if** en una sola línea. Obviamente, es una opción que sólo se recomienda cuando son **if** muy pequeños, ya que en vez de mejorar la legibilidad de un código la estaríamos difucultando.


### Condicional if múltiple


Es posible que necesitemos crear un condicional múltiple con más de 2 condiciones, por ejemplo, para establecer la calificación específica y tener así un estado que describa que tan bien lograda es la calificación. Para ello, podemos anidar varios **if/else** una dentro de otra, de la siguiente forma: 


```js
let nota = 7;
console.log("He realizado mi examen.");

// Condición
if (nota < 5) {
  estado = "Insuficiente";
} else if (nota < 6) {
  calificación = "Suficiente";
} else if (nota < 8) {
  estado = "Bien";
} else if (nota <= 9) {
  estado = "Notable";
} else {
  estado = "Sobresaliente";
}

console.log("He obtenido un", estado);
```

Sin embargo, anidar de esta forma varios **if** suele ser muy poco legible y produce un código algo feo. En **algunos casos** se podría utilizar otra estructura de control llamada **switch**, que puede ser útil en ciertos casos.


### Condicional Switch


La estructura de control **switch** permite definir casos específicos a realizar en el caso de que la variable expuesta como condición sea igual a los valores que se especifican a continuación mediante los **case**. No obstante hay varias puntualizaciones que aclarar sobre este ejemplo:


```js
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Nota: Este ejemplo NO es equivalente al ejemplo anterior (leer abajo)
switch (nota) {
  case 10:
    estado = "Sobresaliente";
    break;
  case 9:
  case 8:
    estado = "Notable";
    break;
  case 7:
  case 6:
    estado = "Bien";
    break;
  case 5:
    estado = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    estado = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    estado = "Nota errónea";
    break;
}

console.log("He obtenido un", estado);
```

En primer lugar, el ejemplo anterior **no es exactamente equivalente al anterior**. Este ejemplo funcionaría si sólo permitimos notas que sean **números enteros**, es decir, número del 0 al 10, sin decimales. En el caso de que la nota tuviera por ejemplo, el valor **6.4**, mostraría **Nota errónea**.


>El ejemplo de los **if múltiples** si controla casos de números decimales porque establecemos comparaciones de rangos con mayor o menor, cosa que con el **switch** no se puede hacer. El **switch** está indicado para utilizar sólo con **casos con valores concretos y específicos**.

En segundo lugar, observamos que al final de cada caso es necesario indicar un **break** para salir del **switch**. En el caso que no se indique, el programa saltará al siguiente caso, aunque no se cumpla la condición específica.


