import React from "react";
import { Link } from "react-router-dom";
import { Award, Users, Target, Heart } from "lucide-react";

// ===================== Button Component =====================
const Button = ({ children, size = "md", className = "", ...props }) => {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      className={`${sizes[size]} rounded-lg font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ===================== About Page =====================
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#180f1c]  text-[#f5f5f7]">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-[#f5f5f7] via-[#cfd6e3] to-[#f5f5f7] bg-clip-text text-transparent animate-fade-in">
            About 3-Tech Developer
          </h1>
          <p className="text-xl text-[#cfd6e3]/80 text-center mb-12 animate-slide-up">
            Crafting digital experiences with passion and precision
          </p>

          <div className="prose prose-lg max-w-none">
            {/* Our Story */}
            <div className="bg-white/10 rounded-2xl p-8 border border-[#cfd6e3]/30 shadow-lg mb-8 animate-scale-in">
              <h2 className="text-3xl font-bold mb-4 text-[#f5f5f7]">Our Story</h2>
              <p className="text-[#cfd6e3]/90 leading-relaxed">
                Founded with a vision to transform ideas into exceptional digital solutions, 3-Tech Developer 
                has been at the forefront of web development innovation. We combine technical expertise with 
                creative design to deliver products that not only meet but exceed expectations.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Award className="w-10 h-10 text-[#cfd6e3]" />,
                  title: "Excellence",
                  description: "Committed to delivering the highest quality in every project",
                },
                {
                  icon: <Users className="w-10 h-10 text-[#cfd6e3]" />,
                  title: "Collaboration",
                  description: "Working closely with clients to bring their vision to life",
                },
                {
                  icon: <Target className="w-10 h-10 text-[#cfd6e3]" />,
                  title: "Innovation",
                  description: "Staying ahead with cutting-edge technologies and approaches",
                },
                {
                  icon: <Heart className="w-10 h-10 text-[#cfd6e3]" />,
                  title: "Passion",
                  description: "Love what we do and it shows in our work",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-6 border border-[#cfd6e3]/30 hover:shadow-lg transition-all duration-500 animate-slide-up hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-3 animate-float">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#f5f5f7]">{value.title}</h3>
                  <p className="text-[#cfd6e3]/80">{value.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            {/* <div className="bg-gradient-to-r bg-[#180f1c] rounded-2xl p-12 text-center shadow-lg animate-fade-in"> */}
            <div className="bg-white/10 rounded-2xl p-8 border border-[#cfd6e3]/30 text-center shadow-lg mb-8 animate-scale-in">

              <h2 className="text-3xl font-bold mb-4 text-[#f5f5f7]">Let's Build Something Amazing</h2>
              <p className="text-[#cfd6e3]/90 mb-6 text-lg">
                Ready to start your next project? We'd love to hear from you.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#cfd6e3] text-[#1e293b] font-semibold shadow-lg hover:bg-[#e0e5ed] hover:scale-105 transition-transform"
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-sm py-8 text-center text-[#cfd6e3] border-t border-[#a8b1c0]/30">
        <p>&copy; 2024 3-Tech Developer. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default About;