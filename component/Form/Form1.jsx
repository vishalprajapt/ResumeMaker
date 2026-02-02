import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const PASSPORT_WIDTH = 413;
const PASSPORT_HEIGHT = 531;

function FormOne({ onComplete }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const watchImage = watch("profileImage");

  const [preview, setPreview] = useState(null);

  const [formValues, setFormValues] = useState({
    name: "",
    role: "",
    phone: "",
    email: "",
    address: "",
    about: "",
  });

  // 🔹 Load data from localStorage → state + RHF
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("resumeData"));

    if (savedData) {
      const values = {
        name: savedData.name || "",
        role: savedData.role || "",
        phone: savedData.contact?.phone || "",
        email: savedData.contact?.email || "",
        address: savedData.contact?.address || "",
        about: savedData.about || "",
      };

      setFormValues(values);

      Object.keys(values).forEach((key) => {
        setValue(key, values[key], { shouldValidate: false });
      });

      if (savedData.passportImage) {
        setPreview(savedData.passportImage);
        setValue("passportImage", savedData.passportImage);
      }
    }
  }, [setValue]);

  // 🔹 Controlled input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setValue(name, value, { shouldValidate: false });
  };

  // 🔹 Resize image to passport size
  const resizeToPassport = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = () => (img.src = reader.result);
      reader.readAsDataURL(file);

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = PASSPORT_WIDTH;
        canvas.height = PASSPORT_HEIGHT;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, PASSPORT_WIDTH, PASSPORT_HEIGHT);

        const base64 = canvas.toDataURL("image/jpeg", 0.95);
        resolve(base64);
      };
    });
  };

  // 🔹 Watch image & update preview + RHF
  useEffect(() => {
    if (watchImage && watchImage[0]) {
      resizeToPassport(watchImage[0]).then((base64Img) => {
        setPreview(base64Img);
        setValue("passportImage", base64Img);
      });
    }
  }, [watchImage, setValue]);

  // 🔹 Submit
const onSubmit = (data) => {
  const oldData = JSON.parse(localStorage.getItem("resumeData")) || {};

  const updatedData = {
    ...oldData, // ✅ keep Form2, Form3, Form4, Form5 data
    name: data.name,
    role: data.role,
    passportImage: data.passportImage,
    contact: {
      ...(oldData.contact || {}),
      phone: data.phone,
      email: data.email,
      address: data.address,
    },
    about: data.about,
  };

  localStorage.setItem("resumeData", JSON.stringify(updatedData));
  onComplete();
};


  return (
    <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
      <h2>User Information</h2>

      {/* Image */}
      <div className="form-group">
        <label>Passport Size Photo</label>
        <div className="image-upload">
          <label>
            {preview ? (
              <img src={preview} alt="Preview" className="image-preview" />
            ) : (
              <div className="image-placeholder">Upload Photo</div>
            )}
            <input
              type="file"
              accept="image/*"
              {...register("profileImage", {
                required: !preview && "Profile image is required",
              })}
            />
          </label>
        </div>

        <input type="hidden" {...register("passportImage")} />
        {errors.profileImage && (
          <p className="error">{errors.profileImage.message}</p>
        )}
      </div>

      {/* Name */}
      <div className="form-group">
        <label>Name</label>
        <input
          name="name"
          value={formValues.name}
          {...register("name", { required: "Name is required" })}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      {/* Role */}
      <div className="form-group">
        <label>Role</label>
        <input
          name="role"
          value={formValues.role}
          {...register("role", { required: "Role is required" })}
          onChange={handleChange}
        />
      </div>

      {/* Phone */}
      <div className="form-group">
        <label>Phone</label>
        <input
          name="phone"
          value={formValues.phone}
          {...register("phone", { required: "Phone is required" })}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      {/* Address */}
      <div className="form-group">
        <label>Address</label>
        <input
          name="address"
          value={formValues.address}
          {...register("address")}
          onChange={handleChange}
        />
      </div>

      {/* About */}
      <div className="form-group">
        <label>About</label>
        <textarea
          rows="4"
          name="about"
          value={formValues.about}
          {...register("about")}
          onChange={handleChange}
        />
      </div>

      <button className="primary-btn">Save & Continue</button>
    </form>
  );
}

export default FormOne;
