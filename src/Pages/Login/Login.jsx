import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate} from "react-router-dom";
import googleLogo from "../../assets/images/logo/googleLogin.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Login = () => {
  const navigate=useNavigate()
  //error message state
  const [error, setError] = useState("");
  //auth context
  const { userSignIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((result) => {
        navigate('/')
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content w-1/2 flex-col lg:flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <h1 className="text-red-700 font-semibold text-2xl">
            {error.split(":")[1]}
          </h1>
        </div>
        <div className="card flex-shrink-0 min-w-full w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login" className="btn btn-danger" />
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="grid grid-cols-[1fr,6fr] cursor-pointer items-center  gap-4 border-[#ddd] border-2 px-3 py-2 rounded-full">
              <img className="w-[50px] h-[50px]" src={googleLogo} alt="" />
              <h1 className="text-center">Sign with google</h1>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <h1>Don't have an account?</h1>
              <Link to="/registration">
                <h1 className="text-[#559DFC] underline">Create an account</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
