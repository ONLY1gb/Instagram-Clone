import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    // Add any login validation logic here
    navigate('/main'); // Redirect to MainPage
  };

  return (
    <div>
      <div className="modal-content rounded-4 shadow">
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 heading fs-2" style={{ textAlign: 'center', width: '100%' }}>Instagram</h1>
        </div>

        <div className="modal-body p-5 pt-0">
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Phone number, email, or username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              type="submit"
            >
              Log In
            </button>
            <small className="text-body-secondary">
              Forgot your login details? Get help logging in.
            </small>
            <hr className="my-4" />
            <h2
              style={{
                textAlign: 'center',
                margin: '20px 0',
                fontSize: '1.3rem',
              }}
            >
              OR
            </h2>
            <a
              href="#"
              style={{
                textAlign: 'center',
                width: '100%',
                margin: '120px',
                textDecoration: 'none',
                fontSize: '17px',
              }}
            >
              Log in with Facebook
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
