import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import Filmes from '../pages/Filmes/Filmes'
import Home from '../pages/Home'
import Parceiros from '../pages/Parceiros'
import SobreNos from '../pages/SobreNos'
import ComprarIngresso from '../pages/Ingressos/ComprarIngresso'
import { Admin } from '../pages/Admin/Admin'
import { ListaDeFilmes } from '../pages/ListaDeFilmes/ListaDeFilmes'
import { CreateFilme } from '../pages/NovoFilme/NovoFilme'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import EditarFilme from '../pages/EditarFilme/EditarFilme'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/parceiros' element={<Parceiros />} />
        <Route path='/sobre_nos' element={<SobreNos />} /> 
        <Route path='/filmes' element={<Filmes />} /> 
        <Route path='/comprar-ingresso' element={<ComprarIngresso />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/lista_de_filmes'element={<ListaDeFilmes />} />
        <Route path='/novo_filme'element={<CreateFilme />} />
        <Route path='/login'element={<SignIn />} />
        <Route path='/cadastro'element={<SignUp />} />
        <Route path='/editar_filme/:id' element={<EditarFilme />} />
        
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
