import { useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
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
  const [infoOpen, setInfoOpen] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (["name", "email", "about"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        user: { ...prev.user, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedImageTypes.includes(file.type)) {
        setError("Please upload a valid image file (JPEG, PNG, JPG).");
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

  const handleRemovePhoto = () => setPhoto(null);

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
      if (photo) submitFormData.append("Photo", photo);

      await submitData(submitFormData);
      router.invalidate();

      setFormData({
        offering: true,
        description: "",
        location: "",
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
    <div
      className="min-h-screen w-screen bg-cover bg-center pt-16"
      style={{ backgroundImage: "url('/music.jpg')" }}
    >
      <div className="mb-20 max-w-3xl mx-auto px-4">
        <h1 className="text-center title_share text-[#fef880] mt-5">
          STUDIO SHARE IN LONDON: <br /> CONNECT WITH PROFESSIONALS
        </h1>

        <div className="max-w-lg mx-auto w-full mt-10 relative">
          <form onSubmit={handleSubmit} className="space-y-0">
            <div className="bg-[#fef880] -mb-3 rounded-t-xl p-10 flex flex-col sm:flex-row text-left libre-text relative">
              <h3 className="text-4xl font-bold sm:w-1/3 text-left mr-5">
                STUDIO
                <br />
                SHARE
              </h3>
              <div className="space-y-4 text-sm sm:w-2/3 ml-5">
                <p className="font-semibold">What are you looking for?</p>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="offering"
                      className="radio"
                      checked={formData.offering === true}
                      onChange={() =>
                        setFormData({ ...formData, offering: true })
                      }
                    />
                    Offering Time in the Studio
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="offering"
                      className="radio"
                      checked={formData.offering === false}
                      onChange={() =>
                        setFormData({ ...formData, offering: false })
                      }
                    />
                    Looking for a Studio
                  </label>
                </div>
              </div>

              <button
                type="button"
                className="absolute right-4 top-4 text-2xl text-black z-20"
                onClick={() => setInfoOpen(!infoOpen)}
              >
                ❯
              </button>
            </div>

            <div className="bg-white rounded-b-xl rounded-t-xl shadow-lg p-6 mt-0">
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
                    className="input border-2 border-black w-full bg-white"
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
                    className="input border-2 border-black w-full bg-white"
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
                  className="textarea border-2 border-black w-full bg-white"
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
                  className="textarea border-2 border-black w-full bg-white"
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
                  className="file-input border-2 border-black w-full mb-6 [&::file-selector-button]:bg-[rgb(67,67,67)] bg-white"
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
                className="btn w-full hover:text-[#fef880] text-[rgb(67,67,67)] hover:bg-[rgb(67,67,67)] bg-[#fef880] border-0"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          <div
            className={`absolute top-0 left-full ml-2 w-80 bg-[#fef880] bg-[rgb(67,67,67)]  p-6 text-white rounded-xl shadow-lg transition-transform duration-300 ${
              infoOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <p className="text-sm mt-10 text-center text-white mb-10">
              Our Studio Share platform connects London's creative community.
              Whether you have downtime in your private studio or you're looking
              for affordable access to a professional space, this is the place
              to connect. It’s the perfect way to make a private studio more
              affordable and become part of a network of talented pros. If you
              need your own private space check our long-term
            </p>
            <Link to="/studios">
              <div className="font-libre text-[#fef880] mt-auto">
                music studios in London
              </div>
              <div className="mt-5">
                <img
                  className="w-32 text-[#fef880] "
                  src="/Pil.png"
                  alt="Arrow"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
