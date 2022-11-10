import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero w-full my-20 p-5">
      <div className="hero-content w-full lg:w-3/5">
        <div className="card flex-shrink-0 w-full  shadow-2xl mx-auto bg-slate-200 py-10">
          <h1 className="text-5xl font-bold text-center pt-5 text-slate-600">
            Login
          </h1>
          <form className="card-body my-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="/login" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary rounded-sm"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center">
            New to this website?{" "}
            <Link className="text-orange-600 font-bold" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
