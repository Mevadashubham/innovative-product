import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import '../../assets/css/AddProduct.css'
import { Link } from 'react-router-dom';


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
        console.log("description value:", data.productDetails);
        formData.append("name",data.name)
        formData.append("price",parseFloat(data.price))
        formData.append("offerPrice",parseFloat(data.offerPrice))
        formData.append("categoryId",data.categoryId)
        formData.append("subCategoryId",data.subCategoryId)
        formData.append("image",data.image[0])
        formData.append("vendorId",localStorage.getItem("id"))

        if (data.productDetails) { // Check if description is not empty
          formData.append("productDetails", data.productDetails);
      } else {
          console.error("Description is empty. Product not added.");
          return; // Stop the submission
      }
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
        <div className="d-flex justify-content-center align-items-center vh-100" 
        //   style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
        >
          <div className="add-product-form bg-white text-dark p-4 rounded shadow" 
            style={{ maxWidth: "400px", width: "100%" }}>
            <div className="text-center mb-3">
              <h2 className="fw-bold">ADD PRODUCT</h2>
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="mb-3">
                <label className="form-label">Name <span className="text-danger">*</span></label>
                <input type="text" {...register("name")} className="form-control" placeholder="Enter product name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Price <span className="text-danger">*</span></label>
                <input type="text" {...register("price")} className="form-control" placeholder="Enter price" />
              </div>
              <div className="mb-3">
                <label className="form-label">Offer Price</label>
                <input type="text" {...register("offerPrice")} className="form-control" placeholder="Enter price" />
              </div>
              <div className="mb-3">
                <label className="form-label">CATEGORY <span className="text-danger">*</span></label>
                <select {...register("categoryId")} onChange={(event) => getsubcategory(event.target.value)} className="form-control">
                  <option>SELECT CATEGORY</option>
                  {category?.map((category) => (
                    <option key={category._id} value={category._id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">SUB CATEGORY <span className="text-danger">*</span></label>
                <select {...register("subCategoryId")} className="form-control">
                  <option>SELECT SUB CATEGORY</option>
                  {subCategories?.map((subCategory) => (
                    <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Product Description <span className="text-danger">*</span></label>
                <textarea {...register("productDetails",{required:true})} className="form-control" placeholder="Enter product description" rows="4" />
              </div>
              <div className="mb-3">
                <label className="form-label">SELECT FILE <span className="text-danger">*</span></label>
                <input type="file" {...register("image")} className="form-control" />
              </div>
              <div>
                <input type="submit" value="ADD PRODUCT" 
                  className="btn w-100 text-white" 
                  style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)", border: "none" }} />
              </div>
              <div className="text-center text-muted mt-3">
                <Link to="/vendor/viewproduct" className="text-primary">View Products</Link>
              </div>
            </form>
          </div>
        </div>
      );
    }



//   return (
//     <div className='add-product-container' style={{textAlign: 'center'}}>
//         <div className="add-product-form bg-white text-dark p-4 rounded shadow" 
//       style={{ maxWidth: "400px", width: "100%" }}>
//         <div className="text-center mb-3">
//         <h2 className="fw-bold">ADD PRODUCT</h2>
//         <form onSubmit={handleSubmit(submitHandler)}>

//             <div className="mb-3" style={{textAlign: 'left'}}>
//                 <label className="form-label">name</label>
//                 <input type="text" {...register("name")} className="form-control" />
//             </div>

//             <div className="mb-3" style={{textAlign: 'left'}}>
//                 <label htmlFor="price">price</label>
//                 <input type="text" {...register("price")} className="form-control" />
//             </div>

//             <div className="form-group">

//                 <label>CATEOGRY</label>
//                 <select {...register("categoryId")} onChange={(event)=>{ getsubcategory(event.target.value)}} className="form-control">
//                     <option>SELECT CATEGORY</option>
                    
//                     {
//                         category?.map((category)=>{
//                             return <option value={category._id}>{category.name}</option>
//                         })
//                     }
//                 </select>
//             </div>
//             <div className="form-group">
//                 <label className="form-group">SUB CATEGORY</label>
//                 <select {...register("subCategoryId")} className="form-control">
//                     <option>SELECT SUB CATEGORY</option>
//                     {
//                         subCategories?.map((subCategory)=>{
//                             return <option value={subCategory._id}>{subCategory.name}</option>
//                         })
//                     }
//                 </select>
//             </div>
//             <div className="form-group">
//                 <label>SELECT FILE</label>
//                 <input type="file" {...register("image")} className="form-control"/>
//             </div>
//             <div>
//                 <input type="submit" value="ADD PRODUCT" className="btn btn-primary w-100"/>
//             </div>
//         </form>
//     </div>
//     </div></div>
//   )
// }
