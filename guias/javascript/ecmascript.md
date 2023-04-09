---
layout: post
background: '/img/ecmascript.png'
previous:
  url: 'conceptos-basicos'
  title: 'Conceptos básicos'
next:
  url: 'comentarios-de-codigo'
  title: 'Comentarios de código'
---


**ECMASCRIPT** es la especificación donde se mencionan todos los detalles relacionados **cómo debe funcionar y comportarse javascript** en un navegador. De esta forma, los diferentes navegadores (*Chrome*, *Firefox*, *Opera*, *Edge*, *Safari*, *etc...*) saben como deben desarrollar los motores de javascript para que cualquier código o programa funcione exactamente igual, independientemente del navegador que se utilice.

Teniendo esto en cuenta, debemos saber que los navegadores web intentan cumplir la especificación **ECMAScript** al máximo nivel, pero no todos ellos lo consiguen. Por lo tanto, pueden existir ciertas discrepancias. Por ejemplo, pueden existir navegadores que cumplan la especificación por ejemplo **ECMAScript 6** al 70% y otros que sólo cumplan al 50%. Esto significa que pueden haber características que no funcionen en un navegador específico y en otros sí.

Por ende es importante considerar mantener los navegadores actualizados, todo va cambiando y los navegadores se ven obligados a lanzar nuevas versiones para brindar mayor compatibilidad con **ECMAScript*** más moderno.

### Versiones de ECMAScript


A lo largo de los años, javascript ha ido sufriendo modificaciones que los navegadores han ido implementando para acomodarse a la última versión de **ECMASCript** cuanto antes. La lista de versiones de **ECMASCript** aparecidas hasta el momento son las siguientes, donde encontraremos las versiones enmarcadas en lo que podemos considerar **el pasado de javascript**:  


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="bg-warning">
    <th class="align-top">Edición</th>
    <th class="align-top">Fecha</th>
    <th>Nombre formal>informal</th>
    <th class="align-top">Cambios significativos</th>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>JUN/1997 (ES1)</td>
      <td>ECMAScript 1997 (ES1)</td>
      <td>Primera edición</td>
    </tr>
    <tr>
      <th>2</th>
      <td>JUN/1998</td>
      <td>ECMAScript 1998 (ES2)</td>
      <td>Cambios leves</td>
    </tr>
    <tr>
      <th>3</th>
      <td>DIC/1999</td>
      <td>ECMAScript 1999 (ES3)</td>
      <td>RegExp, try/catch, etc...</td>
    </tr>
    <tr>
    	<th>4</th>
    	<td>AGO/2008</td>
    	<td>ECMAScript 2008 (ES4)</td>
    	<td>Versión abandonada</td>
    </tr>
    <tr>
    	<th>5</th>
    	<td>DIC/2009</td>
    	<td>ECMAScript 2009 (ES5)</td>
    	<td>Strict mode, JSON, etc...</td>
    </tr>
    <tr>
    	<th>5.1</th>
    	<td>DIC/2011</td>
    	<td>ECMAScript 2011 (ES5.1)</td>
    	<td>Cambios leves</td>
    </tr>
  </tbody>
</table>

A partir del año 2015, se marcó un antes y un después en el mundo de javascript, estableciendo una serie de cambios que lo tranformarían en un lenguaje moderno, partiendo desde la especificación de dicho año, hasta la actualidad:  


<table class="table table-striped table-borderless shadow-sm border">
  <thead class="bg-warning">
    <th class="align-top">Edición</th>
    <th class="align-top">Fecha</th>
    <th>Nombre formal>informal</th>
    <th class="align-top">Cambios significativos</th>
  </thead>
  <tbody>
  	<tr>
      <th>6</th>
      <td>JUN/2015</td>
      <td><span class="badge badge-warning">ES2015</span></td>
      <td>Clases, módulos, hashmaps, sets, for of, proxies...</td>
    </tr>
  	<tr>
      <th>7</th>
      <td>JUN/2016</td>
      <td><span class="badge badge-warning">ES2016</span></td>
      <td>Clases, módulos, hashmaps, sets, for of, proxies...</td>
    </tr>
    <tr>
    	<th>8</th>
    	<td>JUN/2017</td>
    	<td><span class="badge badge-warning">ES2017</span></td>
    	<td>Async/Await</td>
    </tr>
    <tr>
    	<th>9</th>
    	<td>JUN/2018</td>
    	<td><span class="badge badge-warning">ES2018</span></td>
    	<td>Rest/Spread operator, Promise.finally()...</td>
    </tr>
    <tr>
    	<th>10</th>
    	<td>JUN/2019</td>
    	<td><span class="badge badge-warning">ES2019</span></td>
    	<td>flat, flatMap, trimStart(), optional error catch...</td>
    </tr>
    <tr>
    	<th>11</th>
    	<td>JUN/2020</td>
    	<td><span class="badge badge-warning">ES2020</span></td>
    	<td>Dynamicc imports, BigInt, Promise.allSettled</td>
    </tr>
  </tbody>
</table>

En ocasiones, algunos navegadores deciden adelantarse en implementar pequeñas funcionalidades de versiones posteriores de ECMAScript antes que otras, para ir testeando y probando características, por lo que no es raro que algunas características de futuras especificaciones puedan estar implementadas en algunos navegadores.

Una buena forma de conocer en que estado se encuentra un navegador concreto en su especificación de **ECMAScript** es consultando la <a href="https://kangax.github.io/compat-table/es6/" target="_blank">tabla de compatibilidad Kangax</a>.


### Estrategia &lt;&lt;crossbrowser&gt;&gt;

Dicho esto, teniendo en cuenta todos estos detalles, es muy habitual que el programador estpe confuso en como empezar a programar y que versión **ECMASCript** adoptar como preferencia.


Generalmente, el programador suele tomar una de las siguientes estrategias &lt;&lt;crossbrowser&gt;&gt; para asegurarse que el código funcionará en todos los navegadores:  

<table class="table table-striped table-borderless shadow-sm border">
	<thead class="bg-warning">
		<th>Enfoque</th>
		<th>Código escrito</th>
		<th>Descripción</th>
	</thead>
	<tbody>
		<tr>
			<th>Conservador</th>
			<td>ECMAScript 5</td>
			<td>Incómodo de escribir. Anticuado. Compatible con navegadores nativamente.</td>
		</tr>
		<tr>
			<th>Delegador</th>
			<td>Depende</td>
			<td>Cómodo. Rápido. Genera dependencia al framework/librería.</td>
		</tr>
		<tr>
			<th>Evergreen</th>
			<td>Ecmascript 6+</td>
			<td>Cómodo. Moderno. No garantiza la compatibilidad en navegadores antiguos.</td>
		</tr>
		<tr>
			<th>Transpilador</th>
			<td>ECMAScript 6+</td>
			<td>Cómodo. Moderno. Preparado para el futuro. Requiere preprocesado.</td>
		</tr>
	</tbody>
</table>


