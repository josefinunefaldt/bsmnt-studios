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
    location: "",
    user: {
      name: "",
      email: "",
      about: "",
    },
  });

  const [photo, setPhoto] = useState<File | null>(null);
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
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

      if (!allowedImageTypes.includes(file.type)) {
        setError("Please upload a valid image file (JPEG, PNG,JPG.");
        setPhoto(null);
        return;
      }

      const MAX_FILE_SIZE = 5 * 1024 * 1024;
      if (file.size > MAX_FILE_SIZE) {
        setError("File size exceeds the 5 MB limit!");
        setPhoto(null);
        return;
      }
      setPhoto(file);
      setError(null);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
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
      submitFormData.append("location", formData.location || "");

      if (photo) {
        submitFormData.append("Photo", photo);
      }

      await submitData(submitFormData);
      router.invalidate();

      setFormData({
        offering: true,
        description: "",
        user: { name: "", email: "", about: "" },
      });
      setPhoto(null);
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
    <div className="max-w-lg mx-auto mt-5 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Studio share</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">What are you looking for?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="offering"
                className="radio radio-primary "
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
              className="input w-full border-2 border-black bg-white"
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
              className="input border-2 border-black w-full  bg-white"
              value={formData.user?.email || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              className="input border-2 border-black w-full  bg-white"
              value={formData.location || ""}
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
            className="textarea border-2 border-black w-full  bg-white"
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
            className="textarea border-2 border-black w-full  bg-white"
            value={formData.description || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input
            type="file"
            name="photo"
            className="file-input border-2 border-black w-full mb-6 [&::file-selector-button]:bg-[rgb(67,67,67)]  bg-white"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {photo && (
          <div className="mt-4">
            <h3 className="text-xl font-bold">Selected Photo:</h3>
            <div className="flex items-center justify-between">
              <span>{photo.name}</span>
              <button
                type="button"
                className="btn btn-sm btn-error"
                onClick={handleRemovePhoto}
              >
                Remove
              </button>
            </div>
          </div>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          type="submit"
          className="btn  w-full hover:text-[#fef880] text-[rgb(67,67,67)] hover:bg-[rgb(67,67,67)] bg-[#fef880] border-0"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
