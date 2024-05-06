import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Link } from '@mui/material'; // Import Link from MUI
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/contacthub/register', { name, email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        setName('');
        setEmail('');
        setPassword('');
        toast.success('Registered! Now login.');
        navigate('/login');
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
            Registration Form
          </Typography>
          <form onSubmit={handleRegister}>
            <TextField
              fullWidth
              margin="normal"
              id="name"
              label="Name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              id="email"
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              id="password"
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: '1rem' }}>
              Register
            </Button>
          </form>
          <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '1rem' }}>
            Already have an account?{' '}
            <Link href="/login" color="primary">
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
