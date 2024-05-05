import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Login() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Login</h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Login</button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <p>Não tem uma conta? <Link to="/register">Registre-se</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;