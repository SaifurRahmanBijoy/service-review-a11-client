import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { login, providerLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero w-full my-20 p-5">
      <div className="hero-content w-full lg:w-3/5">
        <div className="card flex-shrink-0 w-full  shadow-2xl mx-auto bg-slate-200 py-10">
          <h1 className="text-5xl font-bold text-center pt-5 text-slate-600">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="card-body my-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            <button
              className="py-4 bg-green-400 mb-2 w-full rounded text-blue-50 font-bold hover:bg-green-700"
              onClick={handleGoogleSignIn}
            >
              Login with Google
            </button>
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
