import React  from 'react';

import Courses from './Courses';

const CoursesList = (props) => {
	
		return (
				<div>
					<ul>
						{
							props.courses.map(course => (
								<Courses
								key={course.id} 
									id={course.id}
									name={course.name}
									teacher={course.teacher}
								/>
								)
								
							)
						}

						
					</ul>
				</div>
			)
	
}

export default CoursesList;