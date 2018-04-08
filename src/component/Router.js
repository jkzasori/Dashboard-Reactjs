import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom'

const StaticSite = () => (
	<Router>
		<div>
			<h1> Primeros pasos con React Router</h1>
			<nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/acerca">Acerca</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
			</nav>
			<hr/>
			<Route path="/" component={Home} />
      <Route path="/acerca" component={Acerca} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/contacto" component={Contacto} />
		</div>
	</Router>
	)

const Home = () => (
	<h1> Bienvenidor</h1>
	)

const Acerca = () => (
	<h1> Hola Soy José Támara</h1>
	)

const Servicios = () => (
	<ul>
		<li>Intrucción y capacitación web</li>
		<li>Diseño y Desarrollo web</li>
	</ul>
	)

const Contacto = (  ) => (
  <div>
    <h4>contacto</h4>
  </div>
)
export default StaticSite