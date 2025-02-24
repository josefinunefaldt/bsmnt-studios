import React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-base-200 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input input-bordered w-full"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            name="message"
            placeholder="Your message..."
            className="textarea textarea-bordered w-full"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}
