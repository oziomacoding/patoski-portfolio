import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone_no: "",
    full_description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullname.trim()) {
      errors.fullname = "Fullname is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone_no.trim()) {
      errors.phone_no = "Phone number is required";
    } else if (!/^0\d{10}$/.test(formData.phone_no)) {
      errors.phone_no =
        "Invalid phone number format (must be 11 digits starting with 0)";
    }

    if (!formData.full_description.trim()) {
      errors.full_description = "Full description is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://patoski.riafly.com/api/contact/",
          formData
        );
        console.log("Form Submitted", response.data);
        alert("Message sent successfully");
        // page reload
        window.location.reload();
      } catch (error) {
        console.error("Error submitting form", error);
      }
    }
  };
  return (
    <>
      <div className="flex justify-center item-center pt-6 container mx-auto mb-8">
        <div className="w-[554px] text-[#48484A]">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

          <form action="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Full Name</label>
              <div className="mt-1 relative ">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center ">
                  <i className="fa-regular fa-user text-[#C6C6C7]"></i>
                </div>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  className={`form-control ${
                    errors.name && "is-invalid"
                  }block w-full h-16 pl-10 pr-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm`}
                  placeholder="Enter your full name"
                  onChange={handleChange}
                />
                <div>
                  {errors.fullname && (
                    <div className="invalid-feedback text-[red] ">
                      {errors.fullname}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Email Address</label>
              <div className="mt-1 relative ">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-regular fa-envelope text-[#C6C6C7]"></i>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  className={`form-control ${
                    errors.email && "is-invalid"
                  }block w-full h-16 pl-10 pr-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm`}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <div className="invalid-feedback text-[red]">
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Phone Number</label>
              <div className="mt-1 relative ">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-phone-volume text-[#C6C6C7]"></i>
                </div>
                <input
                  type="tel"
                  id="phone_no"
                  name="phone_no"
                  value={formData.phone_no}
                  className={`form-control ${
                    errors.phone_no && "is-invalid"
                  }block w-full h-16 pl-10 pr-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm`}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                {errors.phone_no && (
                  <div className="invalid-feedback text-[red]">
                    {errors.phone_no}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Full Description</label>
              <textarea
                id="full_description"
                name="full_description"
                rows="4"
                className={`form-control mt-3 ${
                  errors.full_description && "is-invalid"
                }block px-4 py-4 w-full h-[300px] mt-1 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm`}
                onChange={handleChange}
                value={formData.full_description}
                placeholder="Write Your Message"
              ></textarea>
            </div>
            {errors.full_description && (
              <div className="invalid-feedback text-[red]">
                {errors.full_description}
              </div>
            )}

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
