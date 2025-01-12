// src/404.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; //manage all of changes to the document head
import bkimage from '../assets/404.png'

const NotFoundPage = () => {
  return (
    <div className="font-primary pt-10 min-h-screen">
        <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <div className="container">
      <h1 className="text-9xl text-primary font-black py-4">404</h1>
      <p className="py-2 text-primary font-bold">The page you are looking for does not exist.</p>
      <Link to="/" className="text-primary hover:text-fadedbrown py-2">
      → Go back to the homepage
      </Link>
      </div>
      
      <img className="w-full" src={bkimage} alt="404" />
    </div>
  );
};

export default NotFoundPage;
