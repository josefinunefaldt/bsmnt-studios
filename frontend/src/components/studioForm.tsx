import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import React from "react";
import { submitData } from "../utils/advertFetch";
import { AdvertRequest } from "../types/AdvertRequest";

export default function StudioForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<AdvertRequest>({
    offering: true,
    description: "",
    user: {
      name: "",
      email: "",
      about: "",
    },
  });

  const [photos, setPhotos] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setPhotos((prevPhotos) => [...prevPhotos, ...filesArray]);
    }
  };
  const handleRemovePhoto = (index: number) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const submitFormData = new FormData();
      submitFormData.append("offering", formData.offering!.toString());
      submitFormData.append("description", formData.description || "");
      submitFormData.append("user.name", formData.user?.name || "");
      submitFormData.append("user.email", formData.user?.email || "");
      submitFormData.append("user.about", formData.user?.about || "");

      if (photos.length > 0) {
        photos.forEach((file) => {
          submitFormData.append("Photos", file);
        });
      }

      await submitData(submitFormData);

      alert("Advert created successfully!");
      router.invalidate();

      setFormData({
        offering: true,
        description: "",
        user: { name: "", email: "", about: "" },
      });
      setPhotos([]);
    } catch (err) {
      setError(
        `Failed to create advert: ${err instanceof Error ? err.message : String(err)}`
      );
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
              value={formData.user?.name || ""}
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
              value={formData.user?.email || ""}
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
            value={formData.user?.about || ""}
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
            value={formData.description || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Photos</span>
          </label>
          <input
            type="file"
            name="photo"
            className="file-input file-input-bordered w-full"
            accept="image/*"
            onChange={handleFileChange}
            multiple
          />
        </div>

        {photos.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-bold">Selected Photos:</h3>
            <ul className="space-y-2">
              {photos.map((photo, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{photo.name}</span>
                  <button
                    type="button"
                    className="btn btn-sm btn-error"
                    onClick={() => handleRemovePhoto(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

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
