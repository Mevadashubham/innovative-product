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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

export const UpdateProduct = () => {
  const { id } = useParams();
  const [category, setcategory] = useState([]);
  const [subCategories, setsubCategories] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [product, setProduct] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [compressedImages, setCompressedImages] = useState([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Watch selected category to fetch subcategories
  const selectedCategoryId = watch("categoryId");
  const selectedSubCategoryId = watch("subCategoryId");

  const getAllCategories = async () => {
    const res = await axios.get("/category/getAllCategories");
    setcategory(res.data.data);
  };

  const getsubcategory = async (category_id) => {
    console.log("Fetching subcategories for category ID:", category_id);
    const res = await axios.get(`/subCategory/${category_id}`);
    setsubCategories(res.data.data);
  };

  useEffect(() => {
    console.log("Fetching product with ID:", id);

    const fetchProduct = async () => {
      if (!id) return;
      try {
        const res = await axios.get(`/product/getProductById/${id}`);
        if (res.data && res.data.data) {
          const product = res.data.data;
          setProduct(product);
          reset({
            name: product.name || "",
            price: product.price || "",
            offerPrice: product.offerPrice || "",
            categoryId: product.categoryId?._id || "",
            subCategoryId: product.subCategoryId?._id || "",
            productDetails: product.productDetails || "",
          });
          // Store the existing image URL
          if (product.productImages && product.productImages.length > 0) {
            setPreviewImages(product.productImages);
          } else if (product.productImageURL) {
            setPreviewImages([product.productImageURL]);
          } else {
            setPreviewImages([]);
          }

          if (product.categoryId?._id) {
            await getsubcategory(product.categoryId._id);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to load product data.");
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
    if (selectedCategoryId && selectedCategoryId !== "") {
      getsubcategory(selectedCategoryId);
    } else {
      setsubCategories([]);
    }
  }, [selectedCategoryId]);

  const handleImagePreview = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) {
      setPreviewImages([]);
      setCompressedImages([]);
      return;
    }

    // Validate file sizes (max 5MB per file)
    const maxSize = 5 * 1024 * 1024;
    const oversizedFiles = files.filter((file) => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      toast.warning(
        `Some files exceed 5MB: ${oversizedFiles.map((f) => f.name).join(", ")}. Please choose smaller files.`
      );
      event.target.value = "";
      return;
    }

    setIsCompressing(true);
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      const compressed = [];
      const previews = [];

      for (const file of files) {
        try {
          const compressedFile = await imageCompression(file, options);
          compressed.push(compressedFile);
          previews.push(URL.createObjectURL(compressedFile));
        } catch (error) {
          console.error("Error compressing image:", error);
          compressed.push(file);
          previews.push(URL.createObjectURL(file));
        }
      }

      setCompressedImages(compressed);
      setPreviewImages(previews);
    } catch (error) {
      console.error("Error processing images:", error);
      toast.error("Error processing images. Please try again.");
    } finally {
      setIsCompressing(false);
    }
  };

  const submitHandler = async (data) => {
    if (!id) {
      toast.error("Product ID is missing.");
      return;
    }
    if (!product) {
      toast.warning("Product data is not yet loaded. Please wait...");
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("offerPrice", data.offerPrice);
      formData.append("categoryId", data.categoryId);
      formData.append("subCategoryId", data.subCategoryId);
      formData.append("productDetails", data.productDetails);
      formData.append("userId", localStorage.getItem("id"));

      if (compressedImages.length > 0) {
        for (let i = 0; i < compressedImages.length; i++) {
          formData.append("images", compressedImages[i]);
        }
      } else if (data.image && data.image.length > 0) {
        for (let i = 0; i < data.image.length; i++) {
          formData.append("images", data.image[i]);
        }
      }

      const res = await axios.put(`/product/updateProduct/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Product updated successfully:", res.data);
      toast.success("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
    >
      <div
        className="add-product-form card p-4 shadow"
        style={{ maxWidth: "90%", minWidth: "400px", width: "30%" }}
      >
        <div className="text-center mb-3">
          <h2 className="fw-bold">UPDATE PRODUCT</h2>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Product name is required" })}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter product name"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">
              Price <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 0.01, message: "Price must be greater than 0" },
              })}
              className={`form-control ${errors.price ? "is-invalid" : ""}`}
              placeholder="Enter price"
            />
            {errors.price && (
              <div className="invalid-feedback">{errors.price.message}</div>
            )}
          </div>

          {/* Offer Price */}
          <div className="mb-3">
            <label className="form-label">Offer Price</label>
            <input
              type="number"
              {...register("offerPrice", {
                min: { value: 0, message: "Offer price cannot be negative" },
              })}
              className={`form-control ${errors.offerPrice ? "is-invalid" : ""}`}
              placeholder="Enter offer price"
            />
            {errors.offerPrice && (
              <div className="invalid-feedback">
                {errors.offerPrice.message}
              </div>
            )}
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label">
              CATEGORY <span className="text-danger">*</span>
            </label>
            <select
              {...register("categoryId", {
                required: "Category is required",
              })}
              onChange={(event) => {
                register("categoryId").onChange(event);
                const selectedValue = event.target.value;
                if (selectedValue && selectedValue !== "") {
                  getsubcategory(selectedValue);
                } else {
                  setsubCategories([]);
                }
              }}
              className={`form-control ${errors.categoryId ? "is-invalid" : ""}`}
            >
              <option value="">SELECT CATEGORY</option>
              {category?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <div className="invalid-feedback">
                {errors.categoryId.message}
              </div>
            )}
          </div>

          {/* Sub Category */}
          <div className="mb-3">
            <label className="form-label">
              SUB CATEGORY <span className="text-danger">*</span>
            </label>
            <select
              {...register("subCategoryId", {
                required: "Sub category is required",
              })}
              className={`form-control ${errors.subCategoryId ? "is-invalid" : ""}`}
            >
              <option value="">SELECT SUB CATEGORY</option>
              {subCategories?.map((subCategory) => (
                <option key={subCategory._id} value={subCategory._id}>
                  {subCategory.name}
                </option>
              ))}
            </select>
            {errors.subCategoryId && (
              <div className="invalid-feedback">
                {errors.subCategoryId.message}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">
              Product Description <span className="text-danger">*</span>
            </label>
            <textarea
              {...register("productDetails", {
                required: "Product description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
              className={`form-control ${errors.productDetails ? "is-invalid" : ""}`}
              placeholder="Enter product description"
              rows="4"
            />
            {errors.productDetails && (
              <div className="invalid-feedback">
                {errors.productDetails.message}
              </div>
            )}
          </div>

          {/* Image Upload */}
          <div className="mb-3">
            <label className="form-label">SELECT FILE (Max 5)</label>
            <input
              type="file"
              {...register("image")}
              className="form-control"
              multiple
              accept="image/*"
              onChange={handleImagePreview}
            />
          </div>

          {/* Compression Status */}
          {isCompressing && (
            <div className="text-center mb-3">
              <small className="text-muted">
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Compressing images...
              </small>
            </div>
          )}

          {/* Display Existing or New Image */}
          <div className="mb-3 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {previewImages && previewImages.length > 0 ? (
                previewImages.map((img, index) => (
                  <div key={index} className="position-relative">
                    <img
                      src={img}
                      alt={`Product ${index}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        border: "1px solid #ddd",
                      }}
                    />
                  </div>
                ))
              ) : (
                <p>No Image Available</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn w-100 text-white"
              style={{
                background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                border: "none",
              }}
              disabled={isSubmitting || isCompressing}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Updating Product...
                </>
              ) : (
                "Update Product"
              )}
            </button>
          </div>

          <div className="text-center text-muted mt-3">
            <Link to="/vendor/viewproduct" className="text-primary">
              View Products
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
