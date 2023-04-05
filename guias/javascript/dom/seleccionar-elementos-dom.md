---
layout: post
title: 'Seleccionar elementos del DOM'
---

Si nos encontramos en nuestro código javascript y queremos hacer modificaciones en un elemento de la página **HTML**, lo primero que debemos hacer es ir a buscar dichos elementos. Para ello, se suele intentar identificar el elemento a través de alguno de sus atributos más utilizados, generalmente un identificador (**`id`**) o la clase (**`class`**)


### Métodos tradicionales

Existen varios métodos, los más clásicos y tradicionales para realizar búsquedas de elementos en el documento. Observa que si lo que buscas es un elemento específico, lo mejor sería utilizar **`getElementById()`**, en caso contrario, si utilizamos uno de los 3 siguientes métodos, nos devolverá un **`array`** donde tendremos que elegir el elemento en cuestión posteriormente:  

