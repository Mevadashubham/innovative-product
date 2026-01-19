import React from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //navigation...
  const navigate = useNavigate();
  const [role, setRole] = useState("user"); //default role

  const vendorRoleId = "696e264e6d4734f8142239f5"; // Vendor RoleId
  const userRoleId = "696e26906d4734f8142239f7"; //  user role ID

  const submitHandler = async (data) => {
    console.log(data);

    data.roleId = role === "vendor" ? vendorRoleId : userRoleId;

    const res = await axios.post("/user", data);
    res.status;
    if (res.status === 201) {
      alert("User created successfully");
      navigate("/login");
    } else {
      alert("User not created");
    }
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        minHeight: "100vh",
      }}
    >
      <div
        className="registration-form bg-white text-dark p-4 rounded shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-3">
          <h2 className="fw-bold">Create Your Account</h2>
          <p className="text-muted">Sign up to get started!</p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <div className="mb-3 flex items-center gap-x-4">
            <label
              className="flex items-center space-x-1"
              style={{ marginRight: "10" }}
            >
              <input
                type="radio"
                id="userRadio"
                value="user"
                checked={role === "user"}
                onChange={() => handleRoleChange("user")}
              />
              <label htmlFor="userRadio">User</label>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                id="vendorRadio"
                value="vendor"
                checked={role === "vendor"}
                onChange={() => handleRoleChange("vendor")}
              />
              <label htmlFor="vendorRadio">Vendor</label>
            </label>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="firstName">
              Firstname
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              placeholder="Enter your Firstname"
              className={`form-control ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Lastname</label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Enter your Lastname"
              className={`form-control ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter your email"
              className={`form-control ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: 6,
              })}
              placeholder="Create a password"
              className={`form-control ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              {...register("age", { required: "Age is required", min: 18 })}
              placeholder="Enter your Age"
              className={`form-control ${errors.age ? "border-red-500" : ""}`}
            />
            {errors.age && (
              <p className="text-red-500 text-sm">You must be 18 or older</p>
            )}
          </div>
          <div className="form-label">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", { required: true })}
              className={errors.terms ? "border-red-500" : ""}
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                terms and conditions
              </a>
            </label>
            {errors.terms && (
              <p className="text-red-500 text-sm">
                You must agree to the terms
              </p>
            )}
          </div>
          <button
            type="submit"
            className="btn w-100 text-white"
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              border: "none",
            }}
          >
            Register
          </button>
        </form>
        <div className="text-center text-gray-600 ">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-500 hover:underline hover:!text-blue-700"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}>
//       <div className="registration-form bg-white text-dark p-4 rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
//         <div className="text-center mb-3">
//           <h2 className="fw-bold">Create Your Account</h2>
//           <p className="text-muted">Sign up to get started!</p>
//         </div>
//         <form onSubmit={handleSubmit(submitHandler)}>
//         <div className="form-group">
//                         <input type="radio" value="user" {...register("role")} defaultChecked /> User
//                         <input type="radio" value="vendor" {...register("role")} /> Vendor
//                     </div>
//           <div className="mb-3">
//             <label className="form-label">Firstname</label>
//             <input type="text" {...register("firstName")} className="form-control" placeholder="Enter your Firstname" required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Lastname</label>
//             <input type="text" {...register("lastName")} className="form-control" placeholder="Enter your Lastname" required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Email Address</label>
//             <input type="email" {...register("email")} className="form-control" placeholder="Enter your email" required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input type="password" {...register("password")} className="form-control" placeholder="Create a password" required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Age</label>
//             <input type="Number" {...register("age")} className="form-control" placeholder="Enter your Age" required />
//           </div>
//           <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="terms" required />
//             <label className="form-check-label" htmlFor="terms">I agree to the <a href="#" className="text-primary">terms and conditions</a></label>
//           </div>
//           <button type="submit" className="btn w-100 text-white" style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)", border: "none" }}>Register</button>
//         </form>
//         <div className="text-center text-muted mt-3">
//           Already have an account? <a href="/login" className="text-primary">Sign In</a>
//         </div>
//       </div>
//     </div>
//   );
// };

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
// };
