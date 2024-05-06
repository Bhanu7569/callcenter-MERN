import React from 'react';
import backgroundImage from '../images/call.jpg';

const Home = () => {
  return (
    <div className="container-fluid p-0" style={{ position: 'relative', zIndex: '', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="row justify-content-center align-items-center" style={{ position: 'relative', zIndex: '2', minHeight: '100vh' }}>
        <div className="col-md-8 text-center text-white">
          <h1>Welcome to CallHub Connect</h1>
          <p>CallHub Connect is your one-stop solution for managing all your call data efficiently. Whether you're handling customer support, sales calls, or any other type of communication, our platform streamlines the process, making it easier for you to stay connected with your customers.</p>
          <p>With CallHub Connect, you can track call metrics, manage contacts, and analyze call performance all in one place. Our intuitive interface and powerful features empower your team to deliver exceptional service and drive business growth.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
