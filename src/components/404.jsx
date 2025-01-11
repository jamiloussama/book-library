// src/404.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; //manage all of changes to the document head


const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
        <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
