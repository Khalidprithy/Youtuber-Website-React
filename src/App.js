import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header/Header';
import Login from './components/Header/Login/Login';
import SignUp from './components/Header/SignUp/SignUp';
import About from './components/Pages/About/About';
import Blog from './components/Pages/Blog/Blog';
import Courses from './components/Pages/Courses/Courses';
import MainPage from './components/Pages/MainPage/MainPage';
import Shop from './components/Pages/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>} />
        <Route path='/home' element={<MainPage></MainPage>} />
        <Route path='/shop' element={<Shop></Shop>} />
        <Route path='/blog' element={<Blog></Blog>} />
        <Route path='/courses' element={<Courses></Courses>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
