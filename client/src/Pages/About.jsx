import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#f8f9fa', py: 5 }}>
      <Typography variant="h1" gutterBottom>About CallHub Connect</Typography>
      <Typography variant="body1" paragraph>
        CallHub Connect is a comprehensive communication platform designed to streamline your call management processes. 
        Whether you're a small business owner, a sales professional, or a customer support representative, CallHub Connect 
        offers the tools and features you need to efficiently handle all your call-related tasks.
      </Typography>
      <Typography variant="body1" paragraph>
        Our platform allows you to manage contacts, track call metrics, and analyze call performance, all from one centralized 
        location. With CallHub Connect, you can stay connected with your customers, optimize your sales efforts, and provide 
        exceptional service.
      </Typography>
      <Typography variant="body1" paragraph>
        At CallHub Connect, we're committed to providing you with a seamless communication experience. Our intuitive interface, 
        advanced features, and dedicated support team ensure that you have everything you need to succeed.
      </Typography>
    </Container>
  );
}

export default About;
