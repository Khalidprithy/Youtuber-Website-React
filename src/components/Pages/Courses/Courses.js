import React from 'react';
import useCourse from '../../../hooks/useCourse';
import ShowCourse from '../../Shared/ShowCourse/ShowCourse';

const Courses = () => {
    const [courses, setCourses] = useCourse()


    return (
        <div>
            <div className="row mx-auto mb-4">
                {
                    courses.map(course => <ShowCourse
                        key={course.id}
                        course={course}
                    ></ShowCourse>)
                }
            </div>
        </div>

    );
};

export default Courses;