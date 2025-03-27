import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const ResetPassword = () => {
const token = useParams().token
const {register, handleSubmit,} = useForm()
const submitHandler =async(data) => {
//reset password API
const obj = {
  token: token,
  password:data.password,
}  
const res = await axios.post("/user/resetpassword", obj)
console.log(res.data)



  console.log(data)
}
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
      <div>

        <label>NEW PASSWORD</label>
        <input type="text" {...register("password")} />
      </div>
      <div>

        <input type="submit" />
      </div>
      </form>
      

    </div>
  )
}
