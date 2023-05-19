import React, { useContext, useEffect, useState } from "react";
import googleLogo from "../../assets/images/logo/googleLogin.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Registration = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    document.title="Registration | Disney dolls"
},[])
    //error message state
    const [error,setError]=useState("")
    //auth context
    const {createUser,userUpdate}=useContext(AuthContext)
    //handle registration function
    const handleRegistration=(event)=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        const photo=form.photoUrl.value

        createUser(email,password)
        .then((result) => {
            result.user.displayName = name;
            result.user.photoURL = photo;
            userUpdate( name,photo)
            .then(result=>{
              navigate('/login')
            }).catch(error=>{
                setError(error.message)
            });
            form.reset();
        }).catch(error=>{
            setError(error.message)
        })

    }
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content w-1/2 flex-col lg:flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Registration</h1>
          <h1 className="text-red-700 font-semibold text-2xl">{error.split(":")[1]}</h1>
        </div>
        <div className="card flex-shrink-0 min-w-full w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegistration}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  name="photoUrl"
                />
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Registration" className="btn btn-danger" />
              </div>
            </form>
            <div className="flex gap-3 items-center justify-center">
              <Link to="/login">
                <h1 className="text-[#559DFC] underline">
                  Already have an account?
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
