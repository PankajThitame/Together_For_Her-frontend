import React from "react";

const About = () => {
  const teamMembers = [
    { name: "Omkar", role: "CEO", img: "pankaj.jpg" },
    { name: "Pankaj", role: "CTO", img: "pankaj.jpg" },
    { name: "Pankaj", role: "Marketing Head", img: "pankaj.jpg" },
  ];

  return (
    <div className="font-poppins text-[#0f3057] bg-[#e9f5f9] pt-2 text-center">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#6dd5ed] to-[#2193b0] text-white py-16 px-5 rounded-xl shadow-xl mb-10 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">About Us</h1>
          <p className="text-lg md:text-xl opacity-90">We are passionate about creating solutions that make a difference.</p>
        </section>

        {/* About Section */}
        <section className="flex flex-wrap justify-between gap-8 px-5 py-12 bg-white rounded-xl shadow-xl hover:-translate-y-1 transition-transform duration-300">
          <div className="flex-1 min-w-[280px] p-6 bg-gradient-to-br from-[#7f7fd5] to-[#86a8e7] text-white rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
            <p className="opacity-90 text-sm md:text-base">
              Founded in 2010, we have grown into a company that values innovation, quality, and trust. Our mission is to deliver top-notch services to clients worldwide.
            </p>
          </div>
          <div className="flex-1 min-w-[280px] p-6 bg-gradient-to-br from-[#7f7fd5] to-[#86a8e7] text-white rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="opacity-90 text-sm md:text-base">
              To become a global leader in our industry, shaping the future with our innovative and sustainable solutions.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 px-5 mt-10 bg-gradient-to-br from-[#91eae4] to-[#86a8e7] rounded-xl shadow-2xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-md">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white text-center p-5 w-60 rounded-xl shadow-xl border-2 border-[#6c63ff] transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-full border-4 border-[#6c63ff] mb-4"
                />
                <h3 className="text-xl font-semibold text-[#00b894]">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-white text-sm bg-[#2d3436] mt-10 py-4 px-5 border-t-4 border-[#00cec9] shadow-inner animate-fadeIn">
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
