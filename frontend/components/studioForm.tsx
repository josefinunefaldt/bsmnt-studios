import { useState } from "react";

export default function StudioForm() {
  const [formData, setFormData] = useState<{
    type: "offering" | "looking";
    name: string;
    email: string;
    about: string;
    description: string;
    photo: File | null;
  }>({
    type: "offering",
    name: "",
    email: "",
    about: "",
    description: "",
    photo: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        photo: fileInput.files ? fileInput.files[0] : null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
                name="type"
                value="offering"
                className="radio radio-primary"
                checked={formData.type === "offering"}
                onChange={handleChange}
              />
              Offering Time in the Studio
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="looking"
                className="radio radio-primary"
                checked={formData.type === "looking"}
                onChange={handleChange}
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
              value={formData.name}
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
              value={formData.email}
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
            value={formData.about}
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
            value={formData.description}
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
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
