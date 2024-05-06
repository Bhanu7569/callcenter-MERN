import React, {  useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/contacthub/login/', { email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        const token = data.token; // Corrected line
        localStorage.setItem('token', token);
        toast.success('Login Success');
        navigate('/account');
      }
    } catch (error) {
      console.log(error);
    } 
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            margin="normal"
            id="email"
            label="Email"
            type="email"
            required
            onChange={(e)=> setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            id="password"
            label="Password"
            type="password"
            required
            onChange={(e)=> setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: '1rem' }}>
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
  )
}

export default Login
