import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setShippingData } from '../../redux/OrderSlice';

;
export const ShippingStep = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setShippingData(data));
    navigate('/user/confirmationstep');
  }


  return (
    <div className="container mt-5">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2: Shipping Information</h2>

      <div className="mb-3">
        <label>Full Name</label>
        <input className="form-control" {...register('name', { required: true })} />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input className="form-control" type="email" {...register('email', { required: true })} />
      </div>

      <div className="mb-3">
        <label>Shipping Address</label>
        <textarea className="form-control" rows={3} {...register('address', { required: true })} />
      </div>

      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/user/cartview')}>
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Confirm & Proceed
        </button>
      </div>
    </form>
    </div>
  );
};
