import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'



export const AddProduct = () => {
    const [category, setcategory] = useState([])
      const [subCategories, setsubCategories] = useState([])

      const getAllCategories = async() => {

        const res = await axios.get("/category/getAllCategories")
        console.log(res.data.data)
        setcategory(res.data.data)
    
      }
    
      const getsubcategory = async(category_id) => {

        const res = await axios.get(`/subCategory/${category_id}`)
        console.log(res.data.data)
        setsubCategories(res.data.data)
      }
    
      useEffect(()=>{
        getAllCategories()
      },[])
    const {register,handleSubmit} = useForm()
    const submitHandler = async(data) => {
        console.log(data)
        // console.log(data.image[0])

        const formData = new FormData()
        formData.append("name",data.name)
        formData.append("price",parseFloat(data.price))
        formData.append("categoryId",data.categoryId)
        formData.append("subCategoryId",data.subCategoryId)
        formData.append("image",data.image[0])
        formData.append("vendorId",localStorage.getItem("id"))

        const res = await axios.post("/product/addwithImage",formData)
        // ,{
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     },
        // })
        console.log(res);
        console.log(res.data);//axios variable....


    }
  return (
    <div style={{textAlign: 'center'}}>
        <h1>ADD PRODUCT</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="productName">name</label>
                <input type="text" {...register("name")} />
            </div>
            <div>
                <label htmlFor="price">price</label>
                <input type="text" {...register("price")} />
            </div>
            <div>
                <label>CATEOGRY</label>
                <select {...register("categoryId")} onChange={(event)=>{ getsubcategory(event.target.value)}}>
                    <option>SELECT CATEGORY</option>
                    
                    {
                        category?.map((category)=>{
                            return <option value={category._id}>{category.name}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>SUB CATEGORY</label>
                <select {...register("subCategoryId")}>
                    <option>SELECT SUB CATEGORY</option>
                    {
                        subCategories?.map((subCategory)=>{
                            return <option value={subCategory._id}>{subCategory.name}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>SELECT FILE</label>
                <input type="file" {...register("image")}/>
            </div>
            <div>
                <input type="submit" value="ADD PRODUCT"/>
            </div>
        </form>
    </div>
  )
}
