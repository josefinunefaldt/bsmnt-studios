import createClient from "openapi-fetch";
import React, { useState } from "react";
import { paths } from "../lib/api/v1";

const client = createClient<paths>({ baseUrl: import.meta.env.VITE_BASE_URL });
export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const contactData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await client.POST("/api/Contact", {
        body: contactData,
      });

      if (response.error) {
        throw new Error(response);
      }

      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully!",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending contact form:", error);
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-6 text-center">
      <div className="max-w-lg p-4 bg-base-200 rounded-xl shadow-lg w-full lg:w-1/2 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>

        {submitStatus && (
          <div
            className={`alert ${
              submitStatus.success ? "alert-success" : "alert-error"
            } mb-4`}
          >
            <span>{submitStatus.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="form-control w-full">
              <label className="label text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                className="input input-bordered w-full text-sm"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="input input-bordered w-full text-sm"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full text-sm"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-sm">Subject</label>
            <input
              type="text"
              name="subject"
              className="input input-bordered w-full text-sm"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-sm">Message</label>
            <textarea
              name="message"
              className="textarea textarea-bordered w-full text-sm"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center text-center">
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
