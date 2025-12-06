// src/components/TestimonialsSection.jsx
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      role: "Retail Partner",
      comment:
        "MyPayLite transformed my business — instant payouts, easy onboarding, and excellent support!",
      avatar: "/images/avatar1.svg",
    },
    {
      name: "Priya Sharma",
      role: "Retail Partner",
      comment:
        "Seamless DMT and AEPS services. Truly a game-changer for my retail operations.",
      avatar: "/images/avatar2.svg",
    },
    {
      name: "Anil Verma",
      role: "Retail Partner",
      comment:
        "Bill payments & recharges made simple. Loved the intuitive dashboard!",
      avatar: "/images/avatar3.svg",
    },
  ];

  const clientLogos = [
    "/images/paytm-icon.svg",
    "/images/google.svg",
    "/images/phonepe-icon.svg",
    "/images/visa.svg",
    "/images/mastercard.svg",
  ];

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold text-slate-900 text-center">What Our Retailers Say</h3>
      <p className="text-slate-500 text-center mt-2 mb-12">
        Real feedback from partners using MyPayLite
      </p>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <p className="text-slate-600 leading-relaxed">"{item.comment}"</p>
            <div className="mt-4 flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold text-slate-900">{item.name}</div>
                <div className="text-sm text-slate-500">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Client logos */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
        {clientLogos.map((logo, index) => (
          <Image key={index} src={logo} alt="Client Logo" width={100} height={32} />
        ))}
      </div>
    </section>
  );
}
