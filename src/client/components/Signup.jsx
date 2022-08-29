import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext.js';
import './Auth.scss'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };

  return (
    <div>
      <div className='Auth-container'>
       <div>
          <h2>Sign up for a "Plant Care" account</h2>
       </div>
      <form onSubmit={handleSubmit}>
        <div >
          <label >Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
          />
        </div>
        <div >
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
        </div>
        <button >
          Sign Up
        </button>
      </form>
       <p>
          Already have an account yet?{' '}
          <Link to='/'>
            Sign in.
          </Link>
        </p>
         </div>
    </div>
  );
};

export default Signup;