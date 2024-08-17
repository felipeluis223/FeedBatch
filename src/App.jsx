import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './templates/Home'
import Login from './components/Login'

function Teste(){
  return <p>Teste</p>
}

function Teste1(){
  return <p>Teste1</p>
}

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const adminData = { username:'admin', password:'admin' };

  const handleLogin = (username, password)=>{
    if(username == adminData.username && password == username.password){
      setIsAuthenticated(true);
    }else{
      window.alert("Credenciais inválidas");
    }
  }

  const handleLogout = ()=>{
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login onLogin={handleLogin} />} />        
        <Route path="template" element={
          isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/" />
        }>
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
