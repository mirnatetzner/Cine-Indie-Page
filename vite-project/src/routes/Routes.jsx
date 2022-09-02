import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import ComprarIngresso from '../pages/ComprarIngresso'
import Home from '../pages/Home'
import Parceiros from '../pages/Parceiros'
import SobreNos from '../pages/Sobre_nos'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/parceiros' element={<Parceiros />} />
        <Route path='/sobre_nos' element={<SobreNos />} /> 
        <Route path='/comprar_ingresso' element={<ComprarIngresso />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
