---
layout: post
background: "/img/cards-animadas.png"
date: "16 de marzo del 2023"
---

## Card animadas

Las _card_ son uno de los componentes más utilizados en los sitios webs que usan _bootstrap_. Es por ello que veamos algunas ideas sobre efectos que podemos aplicar a estas _cards_ con algo de **CSS**.

## Efectos con hover

Los efectos con la pseudoclase `:hover`, se activan cuando nos posicionamos con el _mouse_ por encima de los elementos. Veamos algunos de los casos más comunes.

### Zoom In - Out

Este efecto es bastante sencillo, ya que se trata de cambiar el valor de una propiedad **CSS** al momento de activar el evento _hover_, el elemento debe tener una transición para la propiedad `transform` que dure los segundos que deseamos y finalmente la transición sea en `ease`.

**zoom sobre la card**

<style>

  .ej-1 .card {
    transition: transform .2s ease;
  }
  .ej-1 .card:hover {
    transform: scale(1.09);
  }
</style>

<div class="ej-1 container-fluid my-4 p-0">
<div class="row justify-content-between text-center">
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-secondary">
   		<img src="//robohash.org/1" class="card-img-top" alt="card de robot 1">
  		<div class="card-body">
    		<h6 class="card-title">Robo aleatorio</h6>
  		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-warning">
   		<img src="//robohash.org/2" class="card-img-top" alt="card de robot 2">
  		<div class="card-body">
    		<h6 class="card-title">Robo aleatorio</h6>
  		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-info">
   		<img src="//robohash.org/3" class="card-img-top" alt="card de robot 3">
  		<div class="card-body">
    		<h6 class="card-title">Robo aleatorio</h6>
  		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-success">
   		<img src="//robohash.org/4" class="card-img-top" alt="card de robot 4">
  		<div class="card-body">
    		<h6 class="card-title">Robo aleatorio</h6>
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
    transition: transform 0.2s ease;
  }
  .card:hover {
    transform: scale(1.15);
  }
</style>
<div class="card bg-secondary" style="width: 280px">
  <img 
    src="//robohash.org/1" 
    class="card-img-top" 
    alt="card de robot 1" />
  <div class="card-body">
    <h3 class="card-title">Robot aleatorio</h3>
  </div>
</div>
```

**zoom sobre la imagen de la card**

<style>
	.ej-2 .card-header {
		overflow: hidden;
		width: 100%;
	}
  .ej-2 .img {
    transition: transform .2s ease;
		width: 100%;
  }
  .ej-2 .img:hover {
    transform: scale(1.15);
  }
</style>

<div class="ej-2 container-fluid my-4 p-0">
	<div class="row justify-content-between text-center">
		<div class="col col-md-6 col-lg-3 mb-2">
			<div class="card bg-body">
 				<div class="card-header p-0">
   				<img src="//picsum.photos/320/320" class="img-fluid img" alt="imagen aleatoria">
  			</div>
  			<div class="card-body">
    			<h6 class="card-title">Aleatoria</h6>
  			</div>
  		</div>
  	</div>
		<div class="col col-md-6 col-lg-3 mb-2">
			<div class="card bg-body">
 				<div class="card-header p-0">
   				<img src="//picsum.photos/310/310" class="img-fluid img" alt="imagen aleatoria">
  			</div>
  			<div class="card-body">
    			<h6 class="card-title">Aleatoria</h6>
  			</div>
  		</div>
  	</div>
		<div class="col col-md-6 col-lg-3 mb-2">
			<div class="card bg-body">
 				<div class="card-header p-0">
   				<img src="//picsum.photos/300/300" class="img-fluid img" alt="imagen aleatoria">
  			</div>
  			<div class="card-body">
    			<h6 class="card-title">Aleatoria</h6>
  			</div>
  		</div>
  	</div>
		<div class="col col-md-6 col-lg-3 mb-2">
			<div class="card bg-body">
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
    transition: transform 0.2s ease;
  }
  .card-header {
    overflow: hidden;
  }
  .card-header img {
    transition: all 0.2s ease;
  }
  .card-header img:hover {
    transform: scale(1.15);
  }
</style>
<div class="card bg-body" style="width: 280px">
  <div class="card-header p-0">
    <img
      src="//picsum.photos/290/290"
      class="img-fluid"
      alt="imagen aleatoria"
    />
  </div>
  <div class="card-body">
    <h5 class="card-title">Aleatoria</h5>
  </div>
</div>
```

---

### Fade in - out

Este efecto es otro que en lo personal me agrada bastante y muy fácil de hacer, ya que en este caso se trata de cambiar el valor de la propiedad **CSS** `opacity` al momento de activar el evento _hover_, el elemento como vimos anteriormente debe tener una transición sobre la propiedad que va a cambiar en este caso `opacity` que dure los segundos que deseamos y finalmente la transición sea en `ease`.

<style>

	.ej-3 .card {
    background: var(--i);
    background-size: cover;
  }
  .ej-3 .card-body {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .ej-3 .card-body:hover {
    opacity: 1;
  }
</style>

<div class="ej-3 container-fluid my-4 p-0">
<div class="row justify-content-between text-center">
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-body border-0" style="--i: url(//picsum.photos/290/290)">
		<div class="card-body text-center py-5">
			<h5 class="card-title">Lorem</h5>
			<p class="card-text small">
				Lorem ipsum dolor
			</p>
			<a class="text-light btn">Let's now</a>
		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
	<div class="card bg-body border-0" style="--i: url(//picsum.photos/240/240)">
		<div class="card-body text-center py-5">
			<h5 class="card-title">Lorem</h5>
			<p class="card-text small">
				Lorem ipsum dolor
			</p>
			<a class="text-light btn">Let's now</a>
		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-body border-0" style="--i: url(//picsum.photos/250/250)">
		<div class="card-body text-center py-5">
			<h5 class="card-title">Lorem</h5>
			<p class="card-text small">
				Lorem ipsum dolor
			</p>
			<a class="text-light btn">Let's now</a>
		</div>
  	</div>
  </div>
	<div class="col col-md-6 col-lg-3 mb-2">
		<div class="card bg-body border-0" style="--i: url(//picsum.photos/270/270)">
		<div class="card-body text-center py-5">
			<h5 class="card-title">Lorem</h5>
			<p class="card-text small">
				Lorem ipsum dolor
			</p>
			<a class="text-light btn">Let's now</a>
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
    width: 100%;
    max-width: 300px;
    background: var(--i);
    background-size: cover;
  }
  .card-body {
    padding: 5rem 2rem;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card-body:hover {
    opacity: 1;
  }
</style>

<div class="card" style="--i: url(//picsum.photos/290/290)">
  <div class="card-body text-center">
    <h4 class="card-title">Hola</h4>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut
      perspiciatis, vel impedit quis tempora alias eum.
    </p>
  </div>
</div>
```

---

### Pulse

Este es un efecto que consiste en escalar nuestras *cards*, pero para ello necesitaremos usar una animación que es bastante simple, para las animaciones en **CSS** necesitamos declarar una directiva `@keyframes` un **nombre** para la animación y los **selectores**.


<style>
	.ej-4 .card {
	}
	.ej-4 .card:hover {
		animation: pulse .6s infinite alternate;
	}

	@keyframes pulse {
		from {
			transform: scale(1);
			} 
		to {
			transform: scale(1.03);
			box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, .5);
		}
	}

</style>
<div class="ej-4 container-fluid my-4 p-0">
	<div class="row">
		<div class="col col-md-6 col-lg-3 mb-2">
			<div class="card bg-danger">
				<img src="//robohash.org/9" alt="robohash imagen">
				<div class="card-body">
					<h6 class="card-title">robohash.org</h6>
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
    width: 100%;
    max-width: 300px;
  }

  .card:hover {
    animation: pulse .8s infinite alternate;
  }
  
  @keyframes pulse {
    from {
      transform: scale(1);
    } 
     to
    {
      transform: scale(1.02);
    }
  }
</style>

<div class="card bg-danger">
  <div class="card-body text-center">
    <img src="//robohash.org/9" class="img-fluid">
    <div class="card-body">
     <h6 class="card-title">robohash.org</h6>
    <p class="card-text">
      Robot aleatorio
    </p>
    </div>
  </div>
</div>
```

