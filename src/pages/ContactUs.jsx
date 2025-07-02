import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // 👉 এখানে চাইলে API call করতে পারো

    // ফর্ম রিসেট করার জন্য
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    toast.success("Your message has been sent successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-[#00343F] mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600">
          Have questions or need help? Feel free to reach out to us!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00343F]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00343F]"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00343F]"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00343F]"
            required
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#177C82] text-white font-semibold px-6 py-3 btn transition"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="text-center text-gray-600 mt-6">
          Or contact us directly at: <br />
          <span className="font-semibold text-[#00343F]">
            support@athletia.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
