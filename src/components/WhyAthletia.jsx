import { CiCalendarDate } from "react-icons/ci";
import { FaPersonRunning } from "react-icons/fa6";
import { MdSpaceDashboard, MdVerified } from "react-icons/md";

export default function WhyAthletia() {
  const features = [
    {
      title: "Easy Event Discovery",
      description:
        "Find local athletic events based on your interests, location, and skill level with just a few clicks.",
      icon: (
        <>
          <CiCalendarDate />
        </>
      ),
    },
    {
      title: "Seamless Booking",
      description:
        "Book your spot in seconds with our intuitive and secure booking system.",
      icon: (
        <>
          <FaPersonRunning />
        </>
      ),
    },
    {
      title: "Verified Events",
      description:
        "Only participate in well-managed and verified events to ensure quality experiences.",
      icon: (
        <>
          <MdVerified />
        </>
      ),
    },
    {
      title: "Athlete Dashboard",
      description:
        "Track your bookings, history, and upcoming events all in one place.",
      icon: (
        <>
          <MdSpaceDashboard />
        </>
      ),
    },
  ];

  return (
    <section className="bg-base-100 py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Why Athletes <span className="text-[#aaf40c]">Love Athletia</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Explore the core reasons why thousands of athletes choose Athletia to
          discover, join, and manage their athletic journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="card bg-base-200 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out p-6 shadow-md text-center"
          >
            <div className="text-4xl mb-4 flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
