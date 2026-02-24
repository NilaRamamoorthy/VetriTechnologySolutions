import { Link } from "react-router-dom";
export default function CareerStartBanner() {
  return (
    <section className="relative w-full max-w-4xl mx-auto mt-10 px-6 py-3 mb-8 bg-[#6621BA] rounded-3xl overflow-hidden">

      {/* Decorative Circles */}
      <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-white/10 "></div>
      <div className="absolute right-20 top-5 h-14 w-14 rounded-full bg-white/10 "></div>
      <div className="absolute left-1/3 bottom-5 h-24 w-24 rounded-full bg-white/10 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">

        {/* Left — Circular Image */}
        <div className="flex-shrink-0">
          <img
            src="assets/profile.avif"   // place your image in public/assets/profile.png
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover  shadow-lg"
          />
        </div>

        {/* Right — Text + Button */}
        <div className="text-white md:flex-1">
          <h2 className="text-md md:text-xl font-bold leading-tight mb-2">
            Ready to Start Your Career
          </h2>

          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Direct placement support and interview opportunities at our integrated IT startup ecosystem. 
            Start your career with confidence!
          </p>

        
        </div>
  <Link
            to="/contact"
            className="inline-block bg-white text-[#6621BA] font-semibold px-6 py-3 rounded-xl border-2 border-[#FF9C00] hover:bg-[#FF9C00] hover:text-white transition"
          >
            Get Free Consultation Now
          </Link>
      </div>
    </section>
  );
}
