import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
        duration: 700, // Duración de la animación
        easing: 'ease-out-cubic', // Efecto de easing
        once: true // Las animaciones se ejecutan una sola vez
    });
}, []);
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path='/' element={<Inicio/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App