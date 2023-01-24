// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarHeader from './Components/Navbar/NavBarHeader';
// import ImageC from './Components/ImageCarousel/ImageC';
import { About } from './Components/AboutUs/About';
import { OurServices } from './Components/Services/OurServices';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Home from './Components/Home/Home';
import { FooterFixed } from './Components/Footer/FooterFixed';
import { ContactUs } from './Components/ContactUs/ContactUs';
import { Gallery } from './Components/Gallery/Gallery';
import { Reviews } from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
       <Router>
     <NavBarHeader/>
     {/* <ImageC/> */}
     <Routes>
       <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/services' element={<OurServices/>} ></Route>
      <Route path='/contact' element={<ContactUs/>} ></Route>
      <Route path='/gallery' element={<Gallery/>} ></Route>
      <Route path='/reviews' element={<Reviews/>} ></Route>
     </Routes>
     {/* <br/>
     <br/>
     <br/>
     <br/> */}
     
     <FooterFixed/>
     
     </Router>
    </div>
  );
}

export default App;
