import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import About from './Pages/About';
import { Toaster } from 'react-hot-toast';
import Account from './Pages/Account';
import Addcontact from './Pages/Addcontact';

const App = () => {
  const isUserSignedIn = !!localStorage.getItem('token');

  return (
    <div>
      <BrowserRouter>
        <Toaster
          position='top-center'
          toastOptions={{
            duration: 5000,
            style: {
              minWidth: '300px',
              backgroundColor: '#333',
              color: '#fff',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              fontSize: '16px',
            },
            success: {
              backgroundColor: '#28a745',
            },
            error: {
              backgroundColor: '#dc3545',
            },
          }}
        />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {isUserSignedIn && (
            <>
              <Route path='/account' element={<Account />} />
              <Route path='/addcontact' element={<Addcontact />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
