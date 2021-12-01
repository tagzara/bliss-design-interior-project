import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as authService from './services/authentication.js';
import Header from './components/Header';
import Home from './components/Home.js';
import About from './components/About.js';
import Catalog from './components/Catalog.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Logout from './components/Logout.js';

function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, email: '' });

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    })

  }, []);

  const onLogin = (email) => {
    setUserInfo({
      isAuthenticated: true,
      user: email,
    })
  }

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: null,
    })
  };

  return (
    <div classNameName="App">
      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/logout" element={<Logout onLogout={onLogout} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
