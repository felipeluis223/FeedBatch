import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './templates/Home'
import Login from './components/Login'
import RegisterFields from './components/RegisterFields';
import RegisterValues from './components/RegisterValues';
import Result from './components/Results';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(localStorage.getItem("authenticated") || false);
  const adminData = { username:'admin', password:'admin' };

  const handleLogin = (username, password)=>{
  
    if(username == adminData.username && password == adminData.password){
      setIsAuthenticated(true);
      localStorage.setItem('authenticated', true)
      return true;
    }else{
      window.alert("Credenciais inválidas");
    }
  }

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
