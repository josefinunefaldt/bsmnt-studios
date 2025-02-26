import React, { useState } from "react";

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
    <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-6 m-auto text-center">
      <div className="max-w-lg mx-auto p-4 bg-base-200 rounded-xl shadow-lg w-full lg:w-1/2 m-auto text-center">
        <h2 className="text-2xl font-bold text-center mb-4">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="form-control w-full">
              <label className="label text-sm">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered w-full text-sm"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label text-sm">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered w-full text-sm"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label text-sm">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full text-sm"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-sm">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered w-full text-sm"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-sm">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="message"
              placeholder="Your message..."
              className="textarea textarea-bordered w-full text-sm"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full text-sm">
            Send Message
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 m-auto text-center">
        <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-semibold">Studio Enquiries: </span>
            <a href="mailto:enquiries@bsmnt.net" className="text-blue-500">
              enquiries@bsmnt.net
            </a>
          </p>
          <p className="text-sm">
            <span className="font-semibold">General Enquiries: </span>
            <a href="mailto:info@bsmnt.net" className="text-blue-500">
              info@bsmnt.net
            </a>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Mobile S.: </span>
            <a href="tel:+447543421595" className="text-blue-500">
              075 4342 1595
            </a>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Mobile T.: </span>
            <a href="tel:+447930188967" className="text-blue-500">
              079 3018 8967
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
