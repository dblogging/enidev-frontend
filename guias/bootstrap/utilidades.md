---
layout: post
---


## Botones de Bootstrap

Para crear un botón tenemos que utilizar la clase **`btn`**. Y luego la clase que representa el tipo de botón:


```html
<!-- Botón standart -->
<button type="button" class="btn btn-default">Default</button>

<!-- Botón primario -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Botón de éxito -->
<button type="button" class="btn btn-success">Success</button>

<!-- Botón de información  -->
<button type="button" class="btn btn-info">Info</button>

<!-- Botón de advertencia -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Botón de peligro  -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Botón con énfasis en un link  -->
<button type="button" class="btn btn-link">Link</button>
```


## Alertas

Las alertas nos sirven para mostrar un mensaje al usuario. Como pasa con los botones, las alertas tienen varios tipos:


```html
<!-- Alerta primaria -->
<div class="alert alert-primary" role="alert">
  Contenido de la alerta
</div>
<!-- Alerta secundaria -->
<div class="alert alert-secondary" role="alert">
  Contenido de la alerta
</div>
<!-- Alerta de éxito -->
<div class="alert alert-success" role="alert">
  Contenido de la alerta
</div>
<!-- Alerta de peligro -->
<div class="alert alert-danger" role="alert">
  Contenido de la alerta
</div>
<!-- Alerta de advertencia -->
<div class="alert alert-warning" role="alert">
  Contenido de la alerta
</div>
<!-- Alerta de información -->
<div class="alert alert-info" role="alert">
  Contenido de la alerta
</div>
<!-- Alerta de en claro -->
<div class="alert alert-light" role="alert">
  Contenido de la alerta
</div>
<!-- Alerta de en oscuro -->
<div class="alert alert-dark" role="alert">
  Contenido de la alerta
</div>
```

## Breadcrumbs

Los *breadcrybs* o migas de pan, sirven para mostrar la situación del usuario dentro de una página. Indica al usuario dónde está y de dónde vien:


```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#">Home</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Sección</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      Sección actual
    </li>
  </ol>
</nav>
```
