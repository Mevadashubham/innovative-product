import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const UserProfile = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  
  useEffect(() => {
    if (!userId) return;
    axios.get(`/getuser/${userId}`)
      .then(res => {
        setUserData(res.data.data);     // ✅ use this for image
        reset(res.data.data);           // ✅ use this for form fields
      })
      .catch(err => console.error("Error fetching user:", err));
  }, [userId, reset]);
  
  // ✅ Load user ID from localStorage on first render
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setUserId(id);
    } else {
      console.warn("No user ID in localStorage");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const res = await axios.get(`/getuser/${userId}`);
        reset(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId, reset]);

  const onSubmit = async (data) => {
    try {
      const res = await axios.put(`/update/${userId}`, data);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Failed to update profile:", err);
      alert("Profile update failed");
    }
  };

  if (loading) return <p className="text-center mt-5">Loading profile...</p>;


  return (

    <div className="container mt-5">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="row g-3">

      <div className="mb-3 text-center">
  <img
    src={
      userData?.profileImageURL
        ? userData.profileImageURL
        : "https://via.placeholder.com/100?text=Avatar"
    }
    alt="Profile"
    style={{
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "50%",
      border: "2px solid #ddd"
    }}
  />
</div>
        <div className="col-md-6">
          <label className="form-label">FisrtName</label>
          <input
            type="text"
            className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
            {...register('firstName', { required: 'Name is required' })}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">LastName</label>
          <input
            type="text"
            className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
            {...register('lastName', { required: 'Name is required' })}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Age</label>
          <input
            type="text"
            className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
            {...register('age', { required: 'Name is required' })}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email', { required: 'Email is required' })}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            {...register('phone', { required: 'Phone is required' })}
          />
        </div>

        <div className="col-md-12">
          <label className="form-label">Address</label>
          <textarea
            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
            rows="3"
            {...register('address')}
          />
        </div>

        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </div>
      </form>
    </div>
    
  );
};

export default UserProfile;