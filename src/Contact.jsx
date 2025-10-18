import React, { useState, useRef } from "react";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

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

// ===================== Input Component =====================
const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};

// ===================== Textarea Component =====================
const Textarea = ({ className = "", ...props }) => {
  return (
    <textarea
      className={`w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};

// ===================== Card Component =====================
const Card = ({ children }) => {
  return (
    <div className="bg-gray-900/50 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => (
  <div className="px-6 pt-6">{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-xl font-bold text-white mb-1">{children}</h3>
);

const CardDescription = ({ children }) => (
  <p className="text-gray-400">{children}</p>
);

// ===================== Contact Component =====================
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_j0mefhm",       // Your Service ID
        "template_vp2dz0o",      // Your Template ID
        formRef.current,
        "LFNJZO6Eru7jAeIna"     // Your Public Key
      )
      .then(
        () => {
          alert("Message Sent! We'll get back to you as soon as possible.");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b bg-[#180f1c] text-[#cdd6f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#cdd6f9]">Get In Touch</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="text-center">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 py-4">
                  <Input name="name" placeholder="Your Name" required />
                  <Input type="email" name="email" placeholder="Your Email" required />
                  <Textarea name="message" placeholder="Your Message" rows={5} required />
                  <Button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-700 text-white"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Email Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p>3tech1723@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// ===================== Contact Page =====================
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#180f1c]">
      <Contact />
      <footer className="bg-gray-900/50 backdrop-blur-sm py-8 text-center text-gray-400 border-t border-gray-700">
        <p>&copy; 2024 3-Tech Developer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
