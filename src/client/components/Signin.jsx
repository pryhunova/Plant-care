import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext.js';
import './Auth.scss'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      alert(e.message)
    }
  };

  return (
    <div>
    <div className='Auth-container'>
      <div>
        <h2>Sign in to your account</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type='email' />
        </div>
        <div >
          <label >Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type='password' />
        </div>
        <button>
          Sign In
        </button>
      </form>
      <p>
          Don't have an account yet?{' '}
          <Link to='/signup'>
            Sign up.
          </Link>
        </p>
      </div>
      </div>
  );
};

export default Signin;