import React, { Component } from 'react';
import uid from 'uid';
import {courses} from '../data/courses.json'
import PropTypes from 'prop-types';
import CoursesList from './CoursesList';
import CourseAddForm from './CourseAddForm';

class App extends Component {
	constructor(...props){
		super(...props)
		this.state = {
			courses: []
		}
	}

	handleOnAppCourse = (event) => {
			// alert('Evento en React');
			event.preventDefault()

			let form = event.target,
				course = {
				id: form.id.value,
				name: ( form.name.value ) ? form.name.value : App.defaultProps.name,
				teacher: ( form.teacher.value ) ? form.teacher.value : App.defaultProps.teacher
			}
			this.setState({
				courses: this.state.courses.concat([course])
			})
			form.reset()
	}

	fetchData = () => {
		setTimeout(()=>this.setState({courses: courses}), 2000)
	}

	resetData = () => {
		this.setState({
			courses: []
		})
	}

	render() {
		if (!this.state.courses.length) {
			return(
				<div>
					<p>No hay cursos :(</p>
					<button onClick={this.fetchData}>Cargar Cursos</button>
				</div>
				)
		}else {
			return(
			<div>
				<CourseAddForm 
					onAddCourse={this.handleOnAppCourse}
				/>
				<CoursesList 
					courses={this.state.courses}
					/>
				<button onClick={this.resetData}>Borrar cursos </button>
			</div>
			
			)
		}
		
	}
}

App.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
}

App.defaultProps = {
	id: uid(10),
	name: 'Curso Desconocido',
  teacher: 'Profesor No Asignado'
}

export default App;