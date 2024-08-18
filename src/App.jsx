import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './templates/Home'
import Login from './components/Login'
import RegisterFields from './components/RegisterFields';
import RegisterValues from './components/RegisterValues';

function Teste1(){
  return <p>Teste1</p>
}

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const adminData = { username:'admin', password:'admin' };
  
  const handleLogin = (username, password)=>{
    if(username == adminData.username && password == adminData.password){
      setIsAuthenticated(true);
      return true;
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
          <Route path=""  element={<RegisterFields />} />
          <Route path="values"  element={<RegisterValues />} />
          <Route path="results"  element={<Teste1 />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App;
