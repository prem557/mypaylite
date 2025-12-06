// src/components/Footer.jsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white py-16 overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-600 rounded-full opacity-20 animate-floaty-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 rounded-full opacity-20 animate-floaty-slower"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About / Company */}
        <div>
          <h4 className="text-xl font-bold mb-4">MyPayLite</h4>
          <p className="text-slate-300 leading-relaxed">
            Premium fintech solutions for retailers — AEPS, DMT, recharges, and bill payments. Trusted by leading brands across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social + CTA */}
        <div>
          <h4 className="text-xl font-bold mb-4">Connect with Us</h4>
          <div className="flex items-center gap-4 mb-4">
            <a href="#" className="hover:scale-110 transition">
              <Image src="/images/twitter.svg" alt="Twitter" width={32} height={32} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Image src="/images/linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Image src="/images/instagram.svg" alt="Instagram" width={32} height={32} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Image src="/images/youtube.svg" alt="YouTube" width={32} height={32} />
            </a>
          </div>

          <a
            href="#"
            className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-16 border-t border-slate-700 pt-6 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} MyPayLite. All rights reserved.
      </div>
    </footer>
  );
}
