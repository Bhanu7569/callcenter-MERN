import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';

const Account = () => {
  const [getAccount, setGetAccount] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/contacthub/getaccount')
      .then((res) => {
        setGetAccount(res.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/contacthub/deleteaccount/${userId}`);
      // Filter out the deleted user from the state
      setGetAccount(getAccount.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        This is Account Page
      </Typography>
      <Link to='/addcontact' style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Add Contact
        </Button>
      </Link>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Users:
          </Typography>
        </Grid>
        {getAccount.map((user) => (
          <Grid item xs={12} key={user._id}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  <table>
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>{user.name}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <td>Phone:</td>
                        <td>{user.Phone}</td>
                      </tr>
                      <tr>
                        <td>Address:</td>
                        <td>{user.Address}</td>
                        <td>
                          <Button variant="outlined" color="error" onClick={() => handleDelete(user._id)}>Delete</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Account;
