import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext.js';
import { ImageLoader } from '../components/ImageUpload';
import './Auth.scss'

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <section className="App-main">
      <div className="App-container">
        <div className='Login-container'>
          <div className=''>
            <h1>Welcome to "Plant Care" account</h1>
            <p>User Email: {user && user.email}</p>
          </div>
          <div><button className='btn' onClick={handleLogout}>Logout</button></div>
      </div>
          <div className="plant-container">
            <ImageLoader />
          </div>
        </div>
      </section>
    );
};

export default Account;