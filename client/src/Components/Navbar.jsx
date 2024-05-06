import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isUserSignedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleSignOut = () =>{
    localStorage.removeItem('token');
    navigate('/');
  };
 
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>CallHub Connect</Link>
        </Typography>
        <div>
          <Button component={Link} to={'/'} color="inherit" style={{ textDecoration: 'none' }}>Home</Button>
          <Button component={Link} to={'/about'} color="inherit" style={{ textDecoration: 'none' }}>About</Button>

          { isUserSignedIn ? (
            <>
              <Button component={Link} to={'/account'} color="inherit" style={{ textDecoration: 'none' }}>MY-Account</Button>
              <Button onClick={handleSignOut} color="inherit" style={{ textDecoration: 'none' }}>Sign-Out</Button>
            </>
          ) : (
            <>
              <Button component={Link} to={'/register'} color="inherit" style={{ textDecoration: 'none' }}>Register</Button>
              <Button component={Link} to={'/login'} color="inherit" style={{ textDecoration: 'none' }}>Login</Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
