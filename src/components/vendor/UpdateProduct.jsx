// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useParams } from 'react-router-dom';

// // import '../../assets/css/AddProduct.css';

// export const UpdateProduct = () => {
//   const id = useParams().id;

//       const [category, setcategory] = useState([])
//       const [subCategories, setsubCategories] = useState([])

//       const getAllCategories = async() => {

//         const res = await axios.get("/category/getAllCategories")
//         console.log(res.data.data)
//         setcategory(res.data.data)
    
//       }
    
//       const getsubcategory = async(category_id) => {

//         const res = await axios.get(`/subCategory/${category_id}`)
//         console.log(res.data.data)
//         setsubCategories(res.data.data)
//       }
    
//       useEffect(()=>{
//         getAllCategories()
//       },[])
//     const {register,handleSubmit} = useForm({
//       defaultValues: async()=>{
//         const res = await axios.get(`/product/getProductById/${id}`);
//       }
//     })
//     const submitHandler = async(data) => {
//         console.log(data)
//         // console.log(data.image[0])

//     }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

export const UpdateProduct = () => {
    const { id } = useParams();
    const [category, setcategory] = useState([]);
    const [subCategories, setsubCategories] = useState([]);
    const { register, handleSubmit, setValue, reset, watch } = useForm();
    const [product, setProduct] = useState(null);
    const [previewImage, setPreviewImage] = useState(""); // Preview new image before upload

// Watch selected category to fetch subcategories
const selectedCategoryId = watch("categoryId");
const selectedSubCategoryId = watch("subCategoryId");


    const getAllCategories = async () => {
        const res = await axios.get('/category/getAllCategories');
        setcategory(res.data.data);
    };

    const getsubcategory = async (category_id) => {
      console.log('Fetching subcategories for category ID:', category_id); // Add this line
        const res = await axios.get(`/subCategory/${category_id}`);
        setsubCategories(res.data.data);
    };

    useEffect(() => {
      console.log("Fetching product with ID:", id);
        
        const fetchProduct = async () => {
          if(!id) return;
            try {
                // Corrected URL here:
                const res = await axios.get(`/product/getProductById/${id}`);
                // console.log("API Response:", res.data);
                if (res.data && res.data.data) {
                  const product = res.data.data;
                  setProduct(product); // ✅ Set product state
                  reset({
                    name: product.name || '',
                    price: product.price || '',
                    offerPrice: product.offerPrice || '',
                    categoryId: product.categoryId?._id || '',
                    subCategoryId: product.subCategoryId?._id || '',
                    productDetails: product.productDetails || '',
                  });
                        // Store the existing image URL
                        setPreviewImage(product.productImageURL || "");

                  if (product.categoryId?._id) {
                    await getsubcategory(product.categoryId._id);
                }
            }} catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        getAllCategories();
        fetchProduct();
    }, [id, setValue]);


// Ensure correct subcategory is selected after subcategories are loaded
useEffect(() => {
  if (subCategories.length > 0 && selectedSubCategoryId) {
      setValue("subCategoryId", selectedSubCategoryId);
  }
}, [subCategories, selectedSubCategoryId, setValue]);

// Fetch subcategories when category changes
useEffect(() => {
  if (selectedCategoryId && selectedCategoryId !== '') {
      getsubcategory(selectedCategoryId);
  } else {
      setsubCategories([]);
  }
}, [selectedCategoryId]);

        const handleImagePreview = (event) => {
          const file = event.target.files[0];
          if (file) {
            setPreviewImage(URL.createObjectURL(file)); // Preview selected image
          }
        };

    const submitHandler = async (data) => {
      if (!id) {
        console.error("Error: Product ID is missing.");
        return;
    }
    if (!product) {
        console.warn("Product data is not yet loaded. Retrying fetch...");
        // await fetchProduct();  // Try refetching product data
        return;
    }

    const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("offerPrice", data.offerPrice);
      formData.append("categoryId", data.categoryId);
      formData.append("subCategoryId", data.subCategoryId);
      formData.append("productDetails", data.productDetails);
      formData.append("userId", localStorage.getItem("id"));
      delete data._id; //put _id -->

      
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      } else {
        formData.append("existingImage", product?.productImageURL || ""); // Keep existing image
      }
  
      try {
        const res = await axios.put(`/product/updateProduct/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Product updated successfully:", res.data);
      } catch (error) {
        console.error("Error updating product:", error);
      }
    };

    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100"

               //   style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
               >
                 <div className="add-product-form bg-white text-dark p-4 rounded shadow" 
                   style={{ maxWidth: "90%", minWidth: "400px", width: "30%" }}>
                   <div className="text-center mb-3">
                     <h2 className="fw-bold">UPDATE PRODUCT</h2>
                   </div>
                   <form onSubmit={handleSubmit(submitHandler)}>
                     <div className="mb-3">
                       <label className="form-label">Name</label>
                       <input type="text" {...register("name")} className="form-control" placeholder="Enter product name" />
                     </div>
                     <div className="mb-3">
                       <label className="form-label">Price</label>
                       <input type="Number" {...register("price")} className="form-control" placeholder="Enter price" />
                     </div>
                     <div className="mb-3">
                        <label>OfferPrice</label>
                        <input type='Number' {...register("offerPrice")} placeholder='Enter Product Price' className="form-control" />
                    </div>
                     <div className="mb-3">
                       <label className="form-label">CATEGORY</label>
                       <select
                            {...register('categoryId')}
                            onChange={(event) => {
                              const selectedValue = event.target.value;
                              if (selectedValue && selectedValue !== '') {
                                  getsubcategory(selectedValue);
                              } else {
                                  setsubCategories([]);
                              }
                            }}
                            className="form-control"
                        >

                         <option value="">SELECT CATEGORY</option>

                         {category?.map((category) => (
                           <option key={category._id} value={category._id}>{category.name}</option>
                         ))}

                       </select>
                     </div>

                     <div className="mb-3">
                       <label className="form-label">SUB CATEGORY</label>
                       <select {...register("subCategoryId")} className="form-control">
                         <option>SELECT SUB CATEGORY</option>
                         {subCategories?.map((subCategory) => (
                           <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
                         ))}
                       </select>
                     </div>
                     <div className="form-group">
                        <label className="form-label">Product Description</label>
                        <textarea {...register("productDetails", )} className="form-control" placeholder="Enter product description" rows="4" />
                    </div>
                     {/* Image Upload */}
                     <div className="mb-3">
                       <label className="form-label">SELECT FILE</label>
                       <input type="file" {...register("image")} className="form-control" />
                     </div>
                     
                     {/* Display Existing or New Image */}
                     <div className="mb-3 text-center">
                          {previewImage ? (
                            <>
                              <p>Current Image:</p>
                              <img
                                src={previewImage}
                                alt="Product"
                                style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px" }}
                              />
                            </>
                          ) : (
                            <p>No Image Available</p>
                          )}
                        </div>

                     <div>
                       <input type="submit" value="Update Product" 
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
};


export default UpdateProduct;