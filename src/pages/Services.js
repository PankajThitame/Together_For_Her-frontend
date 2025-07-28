import React from "react";

const servicesData = [
  {
    title: "Awareness Campaigns",
    description:
      "Workshops and events to educate women on menstrual hygiene and safety during periods.",
    icon: "📢",
  },
  {
    title: "Safety Support",
    description:
      "Helpline and resources to ensure women's safety during emergencies.",
    icon: "🛡️",
  },
  {
    title: "Health Resources",
    description:
      "Providing access to affordable sanitary products and healthcare information.",
    icon: "💊",
  },
  {
    title: "Community Support",
    description:
      "Building a supportive community to break the stigma around menstruation.",
    icon: "🤝",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-center py-6 px-4">
        <h1 className="text-4xl font-bold mb-2">Together_for_Her</h1>
        <p className="text-lg">
          Empowering Women Through Awareness and Support
        </p>
      </header>

      {/* Intro Section */}
      <section className="text-center py-8 px-4">
        <h2 className="text-3xl text-pink-500 font-semibold mb-2">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We are dedicated to ensuring safety and awareness for women during
          their periods. Explore how we support women and build a better future
          together.
        </p>
      </section>

      {/* Services List */}
      <section className="flex flex-wrap justify-center gap-6 px-4 pb-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 w-[250px] text-center hover:shadow-lg hover:-translate-y-1 transition-transform"
          >
            <div className="text-4xl mb-4 text-pink-500">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-pink-500 text-white text-sm">
        <p>&copy; 2024 Together_for_Her. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
