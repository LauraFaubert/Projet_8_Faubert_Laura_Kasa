import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage';
import About from '../pages/About';
import Error from "../pages/Error";

const App =() =>{
  return(
    <BrowserRouter>
    <Header />
    <Banner />
    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/about" element={<About />}/>
      <Route path="*" element ={<Error />}/>
    </Routes>
    <Footer />
    </BrowserRouter> 
   
  )
};

export default App;