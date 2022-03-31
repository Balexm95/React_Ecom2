import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from'./pages/Home';
import Contact from'./pages/Contact';
import Products from './pages/Products';
// import Cart from './components/Cart';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    
     <Router>
      
     <Navbar/>
     <>
    
     {}
     <Routes>
     
       <Route exact path =  "/" element = {<Home />} ></Route>
       <Route exact path =  "/products" element = {<Products/>}></Route>
       <Route exact path =  "/contact" element = {<Contact/>}></Route>
       {/* <Route path = "/cart" element = {<Cart/>}></Route>  */}
    
     </Routes>
           
     </>
     <Footer/>
     
    </Router>
  );
}

export default App;
