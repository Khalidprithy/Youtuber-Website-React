import React from 'react';
import './MainPage.css';
import Banner from '../Banner/Banner';
import { useNavigate } from 'react-router-dom';
import useCourse from '../../../hooks/useCourse';
import ShowCourse from '../../Shared/ShowCourse/ShowCourse';
import useProduct from '../../../hooks/useProduct';
import ShowProduct from '../../Shared/ShowProduct/ShowProduct';
import { AiOutlineArrowRight } from 'react-icons/ai';

const MainPage = () => {
    const [courses] = useCourse()
    const [products] = useProduct();
    const navigate = useNavigate();

    const handleBrowseAllCourses = () => {
        navigate('/courses')
    }
    const handleBrowseAllProduct = () => {
        navigate('/shop')
    }

    return (
        <div>
            <Banner></Banner>
            <div className='my-4'>
                <div className='d-flex align-items-center justify-content-between mx-5'>
                    <h4>Check My Courses </h4>
                    <button
                        onClick={handleBrowseAllCourses}
                        className='btn btn-primary'>See all courses <AiOutlineArrowRight></AiOutlineArrowRight> </button>
                </div>
                <div className="row mx-auto">
                    {
                        courses.slice(0, 3).map(course => <ShowCourse
                            key={course.id}
                            course={course}
                        ></ShowCourse>)
                    }
                </div>
            </div>
            <div className='my-5'>
                <div className='d-flex align-items-center justify-content-between mx-5'>
                    <h4>Check my Shop </h4>
                    <button
                        onClick={handleBrowseAllProduct}
                        className='btn btn-primary'>Browse all  <AiOutlineArrowRight></AiOutlineArrowRight></button>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                    {
                        products.slice(0, 5).map(product => <ShowProduct
                            key={product.id}
                            product={product}
                        ></ShowProduct>)
                    }
                </div>
            </div>
        </div>

    );
};

export default MainPage;