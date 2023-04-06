---
layout: post
---


### Crear elementos HTML

Existen una serie de métodos para **crear de forma eficiente** diferentes elementos HTML o nodos, y que nos puden convertir en una tarea muy sencilla el crear estructuras dinámicas, mediante bucles o estructuras definidas:  

### El método createElement()

Vamos a centrarnos en el proceso de **creación del elemento**. El funcionamiento de **`createElement()`** es muy sencillo: se trata de pasarle el nombre de la etiqueta (***tag***) a utilizar.

```js
const div = document.createElement("div");      
// Creamos un <div></div>
const span = document.createElement("span");    
// Creamos un <span></span>
const img = document.createElement("img");      
// Creamos un <img>
```