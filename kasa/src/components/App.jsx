import Banner from "./Banner";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage'
import About from '../pages/About'

const App =() =>{
  return(
    <BrowserRouter>
    <Banner />
    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/about" element={<About />}/>
    </Routes>
    <Footer />
    </BrowserRouter> 
   
  )
};

export default App;