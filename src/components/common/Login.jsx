import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import Typography from '@mui/joy/Typography';

export const Login = () => {

  const navigate = useNavigate();

  const {register, handleSubmit} = useForm();
  const submitHandler = async(data) => {
    //console.log(data);
    //login api... http://localhost:3000/user/login
    try{
      const res = await axios.post("/user/login", data)
      console.log(res.data)

      if(res.status === 200){
      alert("Login Success") //tost...
      localStorage.setItem("id",res.data.data._id)
      localStorage.setItem("role",res.data.data.roleId.name)

      if(res.data.data.roleId.name === "VENDOR"){
        navigate("/vendor") //check in app.js
      } else if (res.data.data.roleId.name === "USER"){
        navigate("/user")
      }
    }
  } catch(error){console.error("Login failed:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Login Failed"); // Show backend error message if available
    }  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{  background: "linear-gradient(135deg, #6a11cb, #2575fc)"  }}>
      <div className="registration-form bg-white text-dark p-4 rounded shadow" style={{ maxWidth: "400px", width: "100%"}}>
        <div className="text-center mb-3">
      <h2 className="fw-bold">LOGIN USER</h2>
       </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-3">
          <label className="form-label">EMAIL</label>
          <input type="text" {...register("email")} className="form-control" placeholder='enter email'/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="text" {...register("password")} className="form-control" placeholder='enter password'/>
        </div>
        <div>
          <input type="submit"></input>
        </div>
        <div className="text-center text-muted mt-3">
          Create an Account <a href="/signup" className="text-primary">Sign Up</a>
        </div>
      </form>
    </div>
    </div>
  )
}

