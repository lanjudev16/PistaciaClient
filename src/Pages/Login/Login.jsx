import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/images/logo/googleLogin.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Header from "../Share/Header/Header";
import Footer from "../Share/Footer/Footer";
const Login = () => {
  useEffect(()=>{
    document.title="Login | Disney dolls"
},[])
  const navigate = useNavigate();
  //error message state
  const [error, setError] = useState("");
  //auth context
  const { userSignIn, googleLogin, user } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(location);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((result) => {
        if (result) {
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //handle google sign in
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    if (user?.uid) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, user]);
  return (
    <div>
      <Header></Header>
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
            <div
              onClick={handleGoogleSignIn}
              className="grid grid-cols-[1fr,6fr] cursor-pointer items-center  gap-4 border-[#ddd] border-2 px-3 py-2 rounded-full"
            >
              <img className="w-[40px] h-[40px]" src={googleLogo} alt="" />
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
    <Footer></Footer>
    </div>
  );
};

export default Login;
