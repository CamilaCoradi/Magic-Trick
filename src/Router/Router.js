import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PilhaScreen from '../screens/PilhaScreen/PilhaScreen';

const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/pilha" element={<PilhaScreen/>}/>

          <Route path="*" element={<h1>ERRO! Página não encontrada :(</h1>} />
        </Routes>
      </BrowserRouter>
    )
}
export default Router;