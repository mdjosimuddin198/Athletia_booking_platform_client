import React from "react";
import { toast } from "react-toastify";

const blogs = [
  {
    id: 1,
    title: "How to Prepare for Your First Athletic Event",
    description:
      "Get tips and tricks to make your first competition a success.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    id: 2,
    title: "The Importance of Community in Sports",
    description:
      "Discover how sports communities can uplift and inspire athletes.",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
  },
  {
    id: 3,
    title: "Top 5 Benefits of Regular Sports Participation",
    description:
      "Learn why participating in sports is essential for your health and social life.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

const BlogSection = () => {
  const handleReadBlog = () => {
    toast.warn("Stay connected. Exciting blogs are on the way!");
  };
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#00343F] mb-12">
          Our Latest Blogs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-[#00343F]">
                  {blog.title}
                </h3>
                <p className="text-gray-700">{blog.description}</p>
                <button
                  onClick={handleReadBlog}
                  className="bg-[#177C82] btn text-white font-semibold px-6 py-3 cursor-pointer transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
