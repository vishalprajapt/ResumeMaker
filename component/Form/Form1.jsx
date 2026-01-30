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

  // 🔹 Convert image to passport size
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

        const imgRatio = img.width / img.height;
        const targetRatio = PASSPORT_WIDTH / PASSPORT_HEIGHT;

        let sx, sy, sw, sh;

        if (imgRatio > targetRatio) {
          sh = img.height;
          sw = sh * targetRatio;
          sx = (img.width - sw) / 2;
          sy = 0;
        } else {
          sw = img.width;
          sh = sw / targetRatio;
          sx = 0;
          sy = (img.height - sh) / 2;
        }

        ctx.drawImage(
          img,
          sx,
          sy,
          sw,
          sh,
          0,
          0,
          PASSPORT_WIDTH,
          PASSPORT_HEIGHT
        );

        canvas.toBlob((blob) => {
          const passportFile = new File([blob], file.name, {
            type: "image/jpeg",
            lastModified: Date.now(),
          });
          resolve(passportFile);
        }, "image/jpeg", 0.95);
      };
    });
  };

  // 🔹 Watch image & resize
  useEffect(() => {
    if (watchImage && watchImage[0]) {
      resizeToPassport(watchImage[0]).then((passportImg) => {
        const url = URL.createObjectURL(passportImg);
        setPreview(url);
        setValue("passportImage", passportImg);
      });
    }
  }, [watchImage, setValue]);

 const onSubmit = (data) => {
  const oldData =
    JSON.parse(localStorage.getItem("resumeData")) || {};

  const updatedData = {
    ...oldData,
    name: data.name,
    role: data.role,
    profileImage: data.profileImage,
    contact: {
      phone: data.phone,
      address: data.address,
      email: data.email,
    },
    about: data.about,
  };

  localStorage.setItem("resumeData", JSON.stringify(updatedData));
  onComplete(); // move to FormTwo
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
                required: "Profile image is required",
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
        <input {...register("name", { required: "Name is required" })} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      {/* Role */}
      <div className="form-group">
        <label>Role</label>
        <input {...register("role", { required: "Role is required" })} />
      </div>

      {/* Phone */}
      <div className="form-group">
        <label>Phone</label>
        <input {...register("phone", { required: "Phone is required" })} />
      </div>

      {/* Email */}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      {/* Address */}
      <div className="form-group">
        <label>Address</label>
        <input {...register("address")} />
      </div>

      {/* About */}
      <div className="form-group">
        <label>About</label>
        <textarea rows="4" {...register("about")} />
      </div>

      <button className="primary-btn">Save & Continue</button>
    </form>
  );
}

export default FormOne;
