import React from 'react';

 const Courses = (props) => {
	
		return(
			<li>{props.id} - {props.name} - {props.teacher}</li>

			)
	
}
export default Courses;