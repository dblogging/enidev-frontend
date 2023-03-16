---
layout: post
background: '/img/sistema-de-grilla.png'
---


## Card animadas

Las *card* son uno de los componentes más utilizados en los sitios webs que usan *bootstrap*. Es por ello que veamos algunas ideas sobre efectos que podemos aplicar a estas *cards* con algo de **CSS**.


## Efectos con hover

Los efectos con la pseudoclase `:hover`, se activan cuando nos posicionamos con el *mouse* por encima de los elementos. Veamos algunos de los casos más comunes.

### Zoom In - Out

Este efecto es bastante sencillo, ya que se trata de cambiar el valor de una propiedad **CSS** al momento de activar el evento *hover*, el elemento debe tener una transición para la propiedad `transform` que dure los segundos que deseamos y finalmente la transición sea en `ease`.

**zoom sobre la card** 

<style>

  .ej-1 .card {
    transition: transform .2s ease;
  }
  .ej-1 .card:hover {
    transform: scale(1.09);
  }
</style>

<div class="ej-1 container-fluid my-4">
<div class="row justify-content-between">
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-secondary">
 			<div class="card-header">
   			<img src="//robohash.org/1" class="img-fluid" alt="card de robot 1">
  		</div>
  		<div class="card-body">
    		<h6 class="card-title">Aleatoria</h6>
  		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-warning">
 			<div class="card-header">
   			<img src="//robohash.org/2" class="img-fluid" alt="card de robot 2">
  		</div>
  		<div class="card-body">
    		<h6 class="card-title">Aleatoria</h6>
  		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-info">
 			<div class="card-header">
   			<img src="//robohash.org/3" class="img-fluid" alt="card de robot 3">
  		</div>
  		<div class="card-body">
    		<h6 class="card-title">Aleatoria</h6>
  		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-success">
 			<div class="card-header">
   			<img src="//robohash.org/4" class="img-fluid" alt="card de robot 4">
  		</div>
  		<div class="card-body">
    		<h6 class="card-title">Aleatoria</h6>
  		</div>
  	</div>
  </div>
</div>
</div>

```html
<style>
  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    transition: transform .2s ease;
  }
  .card:hover {
    transform: scale(1.15);
  }
</style>
<div class="card bg-secondary" style="width: 280px">
  <div class="card-header">
    <img src="//robohash.org/1" class="img-fluid" alt="card de robot 1">
  </div>
  <div class="card-body">
    <h3 class="card-title">Robot aleatorio</h3>
  </div>
</div>
```


**zoom sobre la imagen de la card** 

<style>
	.ej-2 .card-header {
		overflow: hidden;
	}
  .ej-2 .img {
    transition: transform .2s ease;
  }
  .ej-2 .img:hover {
    transform: scale(1.15);
  }
</style>


<div class="ej-2 container-fluid my-4">
<div class="row justify-content-between">
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-secondary">
 			<div class="card-header p-0">
   			<img src="//picsum.photos/320/320" class="img-fluid img" alt="imagen aleatoria">
  		</div>
  		<div class="card-body">
    		<h6 class="card-title">Aleatoria</h6>
  		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-warning">
 			<div class="card-header p-0">
   			<img src="//picsum.photos/310/310" class="img-fluid img" alt="imagen aleatoria">
  		</div>
  		<div class="card-body">
    		<h6 class="card-title">Aleatoria</h6>
  		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-info">
 			<div class="card-header p-0">
   			<img src="//picsum.photos/300/300" class="img-fluid img" alt="imagen aleatoria">
  		</div>
  		<div class="card-body">
    		<h6 class="card-title">Aleatoria</h6>
  		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-success">
 			<div class="card-header p-0">
   			<img src="//picsum.photos/290/290" class="img-fluid img" alt="imagen aleatoria">
  		</div>
  		<div class="card-body">
    		<h6 class="card-title">Aleatoria</h6>
  		</div>
  	</div>
  </div>
</div>
</div>


```html
<style>
  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    transition: transform .2s ease;
  }
  .card-header {
    overflow: hidden;
  }
  .card-header img {
    transition: all .2s ease;
  }
  .card-header img:hover {
    transform: scale(1.15);
  }
</style>
<div class="card bg-secondary" style="width: 280px">
  <div class="card-header p-0">
    <img src="//picsum.photos/290/290" class="img-fluid" alt="imagen aleatoria">
  </div>
  <div class="card-body">
    <h5 class="card-title">Aleatoria</h5>
  </div>
</div>
```



