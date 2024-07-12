import Header from "./Header";
import Footer from "./Footer";
import React,{createContext,useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage';
import About from '../pages/About';
import Logement from'../pages/Logement';
import Error from "../pages/Error";

export const LogementContext = createContext();
function App(){
  const [logements, setLogements] =useState ([]);

  useEffect(()=>{
    fetch('/data/logements.json')
    .then(response => response.json())
    .then (data =>setLogements(data))
    .catch(error => console.error ('Erreur lors de la récupération des logements:',error));
},[]);

  return(
    <LogementContext.Provider value={logements}>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path ="/" element={<Home logements={logements}/>}/>
      <Route path ="/about" element={<About />}/>
      <Route path ="/logement/:id"  element={<Logement />} />
      <Route path="*" element ={<Error />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </LogementContext.Provider> 
   
  )
};

export default App;