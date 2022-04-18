import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header/Header';
import Login from './components/Header/Login/Login';
import SignUp from './components/Header/SignUp/SignUp';
import About from './components/Pages/About/About';
import Blog from './components/Pages/Blog/Blog';
import Checkout from './components/Pages/Checkout/Checkout';
import Courses from './components/Pages/Courses/Courses';
import MainPage from './components/Pages/MainPage/MainPage';
import NotFound from './components/Pages/NotFound/NotFound';
import Shop from './components/Pages/Shop/Shop';
import Footer from './components/Shared/Footer/Footer';

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
        <Route path='/checkout' element={<Checkout></Checkout>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
