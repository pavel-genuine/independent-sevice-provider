
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';

import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Header from './Components/Header/Header';
import Checkout from './Components/Checkout/Checkout';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/Not-Found/NotFound';

 
function App() {
  return (
    <div >
     <Header></Header>
    
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout'  element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
       }></Route>
        <Route path='/blogs'  element={<Blogs></Blogs>}></Route>
        <Route path='/about'  element={<About></About>}></Route>
        <Route path='/signin'  element={<SignIn></SignIn>}></Route>
        <Route path='/signup'  element={<SignUp></SignUp>}></Route>
        <Route path='/*'  element={<NotFound></NotFound>}></Route>
    
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
