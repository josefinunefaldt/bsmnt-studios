import { useState } from "react";
import { createAdvert } from "../utils/advertFetch";
import { components } from "../lib/api/v1";
import { useRouter } from "@tanstack/react-router";
import React from "react";

export default function StudioForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<
    components["schemas"]["AdvertRequest"]
  >({
    offering: true,
    description: "",
    imgUrls: [],
    user: {
      name: "",
      email: "",
      about: "",
    },
  });

  const [photo, setPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (["name", "email", "about"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const advertData: components["schemas"]["AdvertRequest"] = {
        ...formData,
        imgUrls: photo ? [URL.createObjectURL(photo)] : [],
      };

      await createAdvert(advertData);
      alert("Advert created successfully!");
      router.invalidate();
      alert(advertData);

      setFormData({
        offering: true,
        description: "",
        imgUrls: [],
        user: { name: "", email: "", about: "" },
      });
      setPhoto(null);
    } catch (err) {
      setError("Failed to create advert. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-base-200 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Studio Inquiry Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">What are you looking for?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="offering"
                className="radio radio-primary"
                checked={formData.offering === true}
                onChange={() => setFormData({ ...formData, offering: true })}
              />
              Offering Time in the Studio
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="offering"
                className="radio radio-primary"
                checked={formData.offering === false}
                onChange={() => setFormData({ ...formData, offering: false })}
              />
              Looking for a Studio
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              value={formData.user!.name!}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              value={formData.user!.email!}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">About Me</span>
          </label>
          <textarea
            name="about"
            placeholder="Tell us about yourself..."
            className="textarea textarea-bordered w-full"
            value={formData.user!.about!}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Describe what you're looking for/offering..."
            className="textarea textarea-bordered w-full"
            value={formData.description!}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload a Photo</span>
          </label>
          <input
            type="file"
            name="photo"
            className="file-input file-input-bordered w-full"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
