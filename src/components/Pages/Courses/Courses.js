import React from 'react';
import useCourse from '../../../hooks/useCourse';
import ShowCourse from '../../Shared/ShowCourse/ShowCourse';

const Courses = () => {
    const [courses, setCourses] = useCourse()

    return (
        <div>
            {
                courses.map(course => <ShowCourse
                    key={course.id}
                    course={course}
                ></ShowCourse>)
            }
        </div>
    );
};

export default Courses;