import React from 'react';
import uid from 'uid';

const CourseAddForm = (props) => {
	return (
				<form onSubmit={props.onAddCourse}>
					<input type="text" placeholder="Nombre del curso" name="name"  />
					<input type="text" placeholder="Profesor" name="teacher"  />
					<input type="hidden"name="id" value={uid(10)} />
					<input type="submit" value="Save" />
				</form>
		)
}

export default CourseAddForm;