import React from 'react';
import './MainPage.css';
import background from '../../../Utiles/images/background.png'
import useCourse from '../../../hooks/useCourse';
import ShowCourse from '../../Shared/ShowCourse/ShowCourse';

const MainPage = () => {

    const [courses, setCourses] = useCourse()


    return (
        <div>
            <div className='container text-center main-page'>
                <img className='w-100' src={background} alt="" />
            </div>
            <div>
                <h4 className='text-center'>Courses </h4>
                <div className="row row-cols-1 row-cols-md-4 g-4 mx-2">
                    {
                        courses.map(course => <ShowCourse
                            key={course.id}
                            course={course}
                        ></ShowCourse>)
                    }
                </div>

            </div>
        </div>

    );
};

export default MainPage;