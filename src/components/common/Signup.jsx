import React from 'react'
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  //navigation...
  const navigate = useNavigate();

  const submitHandler = async(data) => {
    console.log(data);
    data.roleId = "67c5c1d42e9ad8fb75ce4fb3"
 
    const res = await axios.post("/user",data)
    //res.status
    if(res.status === 201){
      alert("User created successfully")
      navigate("/login")
    }
    else{
      alert("User not created")
    }

  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}>
      <div className="registration-form bg-white text-dark p-4 rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-3">
          <h2 className="fw-bold">Create Your Account</h2>
          <p className="text-muted">Sign up to get started!</p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-3">
            <label className="form-label">Firstname</label>
            <input type="text" {...register("firstName")} className="form-control" placeholder="Enter your Firstname" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Lastname</label>
            <input type="text" {...register("lastName")} className="form-control" placeholder="Enter your Lastname" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" {...register("email")} className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" {...register("password")} className="form-control" placeholder="Create a password" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="password" {...register("age")} className="form-control" placeholder="Enter your Age" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label" htmlFor="terms">I agree to the <a href="#" className="text-primary">terms and conditions</a></label>
          </div>
          <button type="submit" className="btn w-100 text-white" style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)", border: "none" }}>Register</button>
        </form>
        <div className="text-center text-muted mt-3">
          Already have an account? <a href="#" className="text-primary">Sign In</a>
        </div>
      </div>
    </div>
  );











  
  // return (
  //   <div style={{ textAlign: "center" }}>
  //     <form onSubmit={handleSubmit(submitHandler)}>
  //       <div>
  //         <label>First Name</label>
  //         <input type="text" {...register("firstName")} />
  //       </div>
  //       <div>
  //         <label>Last Name</label>
  //         <input type="text" {...register("lastName")} />
  //       </div>
  //       <div>
  //         <label>Email</label>
  //         <input type="text" {...register("email")} />
  //       </div>
  //       <div>
  //         <label>password</label>
  //         <input type="text" {...register("password")} />
  //       </div>
  //       <div>
  //         <label>AGE</label>
  //         <input type="text" {...register("age")} />
  //       </div>
  //       <div>
  //         <input type="submit"></input>
  //       </div>
  //     </form>
  //   </div>
  // );
};