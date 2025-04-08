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
    <div className="max-w-7xl mt-4 mx-auto p-6 flex flex-col  text-center text-gray-600">
      <div className="max-w-lg mx-auto w-full bg-[#fef880]  -mb-3 rounded-t-xl p-10 flex flex-col sm:flex-row text-left libre-text ">
        <h3 className="text-4xl font-bold sm:w-1/3 text-left">
          GET IN
          <br />
          TOUCH
        </h3>
        <div className="space-y-2 text-sm sm:w-2/3 ml-5 ">
          <p>
            <span className="font-semibold">Studio Enquiries: </span>
            <a href="mailto:enquiries@bsmnt.net">enquiries@bsmnt.net</a>
          </p>
          <p>
            <span className="font-semibold">General Enquiries: </span>
            <a href="mailto:info@bsmnt.net">info@bsmnt.net</a>
          </p>
          <p>
            <span className="font-semibold">Mobile S.: </span>
            <a href="tel:+447543421595">075 4342 1595</a>
          </p>
          <p>
            <span className="font-semibold">Mobile T.: </span>
            <a href="tel:+447930188967">079 3018 8967</a>
          </p>
        </div>
      </div>
      <div className="max-w-lg mx-auto rounded-2xl bg-white shadow-lg w-full text-center  ">
        <div className="p-6 space-y-4">
          {submitStatus && (
            <div
              className={`alert ${
                submitStatus.success ? "alert-success" : "alert-error"
              } mb-4`}
            >
              <span>{submitStatus.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3  ">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="form-control w-full">
                <label className="label text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="input input-bordered w-full text-sm bg-white border-black border-2"
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
                  className="input input-bordered w-full text-sm bg-white  border-black border-2"
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
                className="input input-bordered w-full text-sm bg-white  border-black border-2"
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
                className="input input-bordered w-full text-sm bg-white  border-black border-2"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-sm">Message</label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full text-sm bg-white  border-black border-2"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full text-sm hover:text-[#fef880] text-black hover:bg-gray-600 bg-[#fef880] border-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
