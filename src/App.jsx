import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './templates/Home'
import Login from './components/Login'
import RegisterFields from './components/RegisterFields';
import RegisterValues from './components/RegisterValues';
import Result from './components/Results';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(localStorage.getItem("authenticated") || false);

  // Usuário e senha para o acesso do sistema:
  const adminData = { username:'admin', password:'admin' };


  // Login do sistema - Realizando a verificação dos dados e armazenando no localStorage:
  const handleLogin = (username, password)=>{
    if(username == adminData.username && password == adminData.password){
      setIsAuthenticated(true);
      localStorage.setItem('authenticated', true)
      return true;
    }else{
      alert("Credenciais inválidas");
    }
  }

  // Logout do sistema
  const handleLogout = ()=>{
    setIsAuthenticated(false)
    localStorage.removeItem('authenticated')
  }

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login onLogin={handleLogin} />} />        
        <Route path="home" element={
          isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/" />
        }>
          <Route path=""  element={<RegisterFields />} />
          <Route path="values"  element={<RegisterValues />} />
          <Route path="results"  element={<Result />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App;
