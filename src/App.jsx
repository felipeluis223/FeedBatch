import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './templates/Home'

function Login(){
  return <p>Login</p>
}

function Interface1(){
  return <p>Interface1</p>
}

function Teste(){
  return <p>Teste</p>
}

function Teste1(){
  return <p>Teste1</p>
}

function App() {

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="help" element={<Interface1 />} />
        
        <Route path="template" element={<Home />}>
          <Route path=""  element={<Teste />} />
          <Route path="1"  element={<Teste1 />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App




//import feedbatch from "./services/feedbatch"
 /* useEffect(()=>{
    feedbatch.get("/telas").then((res)=>{
      console.log('resposta: ', res)
    }).catch((err)=>{
      console.log('erro: ', err)
    })
  }) */
