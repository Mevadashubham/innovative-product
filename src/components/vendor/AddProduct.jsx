import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import "../../assets/css/AddProduct.css";
import { Link } from "react-router-dom";

export const AddProduct = () => {
  const [category, setcategory] = useState([]);
  const [subCategories, setsubCategories] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [compressedImages, setCompressedImages] = useState([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImagePreview = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) {
      setPreviewImages([]);
      setCompressedImages([]);
      return;
    }

    // Validate file sizes (max 5MB per file)
    const maxSize = 5 * 1024 * 1024; // 5MB
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

  const getAllCategories = async () => {
    const res = await axios.get("/category/getAllCategories");
    setcategory(res.data.data);
  };

  const getsubcategory = async (category_id) => {
    const res = await axios.get(`/subCategory/${category_id}`);
    setsubCategories(res.data.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const submitHandler = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", parseFloat(data.price));
      if (data.offerPrice && !isNaN(parseFloat(data.offerPrice))) {
        formData.append("offerPrice", parseFloat(data.offerPrice));
      }
      formData.append("categoryId", data.categoryId);
      formData.append("subCategoryId", data.subCategoryId);
      formData.append("vendorId", localStorage.getItem("id"));
      formData.append("productDetails", data.productDetails);

      // Handle multiple images - use compressed versions if available
      const imagesToUpload =
        compressedImages.length > 0
          ? compressedImages
          : data.image && data.image.length > 0
            ? Array.from(data.image)
            : [];
      if (imagesToUpload.length > 0) {
        for (let i = 0; i < imagesToUpload.length; i++) {
          formData.append("images", imagesToUpload[i]);
        }
      }

      const res = await axios.post("/product/addwithImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      toast.success("Product added successfully!");
      reset();
      setPreviewImages([]);
      setCompressedImages([]);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product. Please try again.");
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
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-3">
          <h2 className="fw-bold">ADD PRODUCT</h2>
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
                validate: (value) =>
                  value !== "SELECT CATEGORY" || "Please select a category",
              })}
              onChange={(event) => {
                register("categoryId").onChange(event);
                if (event.target.value && event.target.value !== "SELECT CATEGORY") {
                  getsubcategory(event.target.value);
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
                validate: (value) =>
                  value !== "SELECT SUB CATEGORY" ||
                  "Please select a sub category",
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

          {/* File Upload */}
          <div className="mb-3">
            <label className="form-label">
              SELECT FILE (Max 5) <span className="text-danger">*</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "At least one image is required",
              })}
              className={`form-control ${errors.image ? "is-invalid" : ""}`}
              multiple={true}
              accept="image/*"
              onChange={(e) => {
                register("image").onChange(e);
                handleImagePreview(e);
              }}
            />
            {errors.image && (
              <div className="invalid-feedback">{errors.image.message}</div>
            )}
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

          {/* Image Previews */}
          <div className="mb-3 text-center">
            {previewImages && previewImages.length > 0 && (
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {previewImages.map((img, index) => (
                  <div key={index} className="position-relative">
                    <img
                      src={img}
                      alt={`Preview ${index}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        border: "1px solid #ddd",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
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
                  Adding Product...
                </>
              ) : (
                "ADD PRODUCT"
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
