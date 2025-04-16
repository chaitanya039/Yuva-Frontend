import React, { useEffect } from "react";
import contact from "../assets/contact.png";

const Contact = () => {
  useEffect(() => {
    const contactCard = document.querySelector(".contact-card");
    const infoCards = document.querySelectorAll(".contact-info-card");

    if (contactCard) {
      contactCard.addEventListener("mousemove", (e) => {
        const rect = contactCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        const rotateX = deltaY * -3;
        const rotateY = deltaX * 3;
        contactCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      contactCard.addEventListener("mouseleave", () => {
        contactCard.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0)";
      });
    }

    infoCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    infoCards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section id="contact" className="bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Get In <span className="text-[#F7B614]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#F7B614] mx-auto mb-4" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, quotes, or custom
            solutions
          </p>
        </div>

        <div className="grid p-4 mb-16 grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-neutral-50 rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl contact-card">
            <h3 className="text-2xl font-bold mb-6 text-neutral-800">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md"
              />
              <select className="w-full p-3 border rounded-md" required>
                <option value="">Select Subject</option>
                <option value="product">Product Inquiry</option>
                <option value="custom">Custom Order</option>
              </select>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 border rounded-md resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-neutral-900 font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
          <div className="">
              <img
                src={contact}
                alt="Office"
                className="w-[90%] h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            
              <div className="bg-neutral-50 rounded-xl p-6 shadow-md contact-info-card">
                <h4 className="text-lg font-bold mb-2 text-neutral-800">
                  Address
                </h4>
                <p className="text-neutral-600">
                  123 Industrial Area, Mumbai, India
                </p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6 shadow-md contact-info-card">
                <h4 className="text-lg font-bold mb-2 text-neutral-800">
                  Phone
                </h4>
                <p className="text-neutral-600">+91 98765 43210</p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6 shadow-md contact-info-card">
                <h4 className="text-lg font-bold mb-2 text-neutral-800">
                  Email
                </h4>
                <p className="text-neutral-600">contact@yuvaplastics.com</p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6 shadow-md contact-info-card">
                <h4 className="text-lg font-bold mb-2 text-neutral-800">
                  Working Hours
                </h4>
                <p className="text-neutral-600">Mon - Fri: 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
