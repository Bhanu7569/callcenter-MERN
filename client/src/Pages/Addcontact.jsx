import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Address, setAddress] = useState();
    const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const {data} = await axios.post('http://localhost:5000/contacthub/addaccount', {name, email, Phone, Address});
        if(data.error){
            toast.error(data.error)
        }else{
            toast.success("Contact Addeded")
            navigate('/account')
        }
        
    } catch (error) {
        console.log(error)
    }

  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              onChange={(e)=> setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              type="tel"
              onChange={(e)=> setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              required
              multiline
              onChange={(e)=> setAddress(e.target.value)}
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Contact
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
