// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Globe, Smartphone, Code, Zap } from "lucide-react";

// ================= Hero Component =================
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen m-0 flex items-center justify-center bg-gradient-subtle w-full"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center  animate-fade-in">
          {/* Top Badge */}
          <div className="inline-flex items-center  bg-white/10 px-4 py-2 rounded-full b-8 animate-shimmer">
            <Code2 className="h-4 w-4 text-[#E5E7EB]" />
            <span className="text-sm font-medium text-[#E5E7EB]">
              Professional Web Development
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl py-3 font-bold mb-6 bg-gradient-to-r from-[#E5E7EB] via-[#C7D2FE] to-[#E5E7EB] bg-clip-text text-transparent animate-slide-up">
            Building Digital Excellence
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto animate-fade-in">
            Transform your ideas into stunning web experiences with 3-Tech
            Developer - Your trusted partner in web development
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in">
            <Link to="/contact">
              <button className="flex items-center justify-center text-lg bg-[#1E3A8A] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#1E40AF] hover:scale-105 transition-transform">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link to="/projects">
              <button className="text-lg border border-[#E5E7EB] text-[#E5E7EB] px-6 py-3 rounded-lg hover:bg-[#E5E7EB]/10 hover:border-[#E5E7EB] hover:shadow-lg transition-all">
                View Projects
              </button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="p-6 rounded-lg bg-white/5 border border-[#E5E7EB]/20 hover:border-[#E5E7EB] hover:shadow-xl transition-all animate-scale-in">
              <Globe className="h-12 w-12 text-[#E5E7EB] mb-4 mx-auto animate-float" />
              <h3 className="text-xl font-semibold mb-2 text-[#E5E7EB]">
                Web Development
              </h3>
              <p className="text-gray-300">
                Modern, responsive websites built with latest technologies
              </p>
            </div>

            <div
              className="p-6 rounded-lg bg-white/5 border border-[#E5E7EB]/20 hover:border-[#E5E7EB] hover:shadow-xl transition-all animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Smartphone
                className="h-12 w-12 text-[#E5E7EB] mb-4 mx-auto animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <h3 className="text-xl font-semibold mb-2 text-[#E5E7EB]">
                Mobile First
              </h3>
              <p className="text-gray-300">
                Optimized experiences for all devices and screen sizes
              </p>
            </div>

            <div
              className="p-6 rounded-lg bg-white/5 border border-[#E5E7EB]/20 hover:border-[#E5E7EB] hover:shadow-xl transition-all animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Code2
                className="h-12 w-12 text-[#E5E7EB] mb-4 mx-auto animate-float"
                style={{ animationDelay: "1s" }}
              />
              <h3 className="text-xl font-semibold mb-2 text-[#E5E7EB]">
                Clean Code
              </h3>
              <p className="text-gray-300">
                Maintainable, scalable solutions following best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= Home Component =================
const Home = () => {
  return (
    <section className="bg-[#180f1c] ">
    <div className="m-0 p-0 text-[#f5f5f7] ">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#f5f5f7] via-[#cfd6e3] to-[#f5f5f7] bg-clip-text text-transparent animate-fade-in">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: <Code className="w-12 h-12 text-[#cfd6e3]" />,
              title: "Modern Development",
              description:
                "Using cutting-edge technologies and best practices to build scalable applications.",
            },
            {
              icon: <Smartphone className="w-12 h-12 text-[#cfd6e3]" />,
              title: "Responsive Design",
              description:
                "Beautiful interfaces that work seamlessly across all devices and screen sizes.",
            },
            {
              icon: <Zap className="w-12 h-12 text-[#cfd6e3]" />,
              title: "Fast Performance",
              description:
                "Optimized code and architecture ensuring lightning-fast load times.",
            }].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/10 border border-[#cfd6e3]/30 hover:border-[#a8b1c0] hover:shadow-lg transition-all duration-500 animate-slide-up hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4 animate-float">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-[#f5f5f7]">
                  {feature.title}
                </h3>
                <p className="text-[#d1d5db]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1e293b] via-[#273449] to-[#1e293b] rounded-xl shadow-xl">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#f5f5f7] animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-[#cfd6e3]/90 max-w-2xl mx-auto">
            Let's bring your ideas to life with cutting-edge technology and
            exceptional design.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <button className="flex items-center justify-center bg-[#cfd6e3] text-[#1e293b] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#e0e5ed] hover:scale-105 transition-transform">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link to="/projects">
              <button className="border border-[#cfd6e3] text-[#cfd6e3] px-6 py-3 rounded-lg hover:bg-[#cfd6e3]/10 hover:border-[#cfd6e3] hover:shadow-lg transition-all">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-sm py-8 text-center text-[#cfd6e3] border-t border-[#a8b1c0]/30">
        <p>&copy; 2024 3-Tech Developer. All rights reserved.</p>
      </footer>
    </div>
    </section>
  );
};

export default Home;
