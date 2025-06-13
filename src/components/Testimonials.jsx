import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ariyan Rusov",
    role: "Jump",
    image: "https://i.pravatar.cc/100?img=1",
    title: "Personalized Attention",
    description:
      "Athletia’s platform helped me easily discover and book local Elevation Jump  events. The personalized support and smooth booking process truly elevated my overall experience.",
    rating: 5,
  },
  {
    name: "Darren Valdez",
    role: "FastTrack",
    image: "https://i.pravatar.cc/100?img=2",
    title: "Quality Matters !",
    description:
      "Thanks to Athletia, I found top-tier FastTrack  events and got access to quality facilities. Competing in well-organized tournaments truly sharpened my performance on the court",
    rating: 5,
  },
  {
    name: "Elinor Dunn",
    role: "Speedsters",
    image: "https://i.pravatar.cc/100?img=3",
    title: "Excellent Professionalism !",
    description:
      "Athletia’s seamless booking system and professional event management made everything stress-free. I highly recommend it for anyone looking to join quality sports events hassle-free.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-base-100 py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Our <span className="text-[#aaf40c]">Testimonials</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Real feedback from athletes and sports lovers who’ve used Athletia to
          book and manage athletic events. Discover how Athletia is helping
          build stronger sports communities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="card bg-base-200 shadow-md p-6">
            <div className="flex items-center mb-3">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">
                {t.rating.toFixed(1)}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{t.title}</h3>
            <p className="text-gray-600">{t.description}</p>
            <div className="flex items-center gap-4 mt-6">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={t.image} alt={t.name} />
                </div>
              </div>
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <div className="badge badge-success bg-[#177C82] text-white">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
