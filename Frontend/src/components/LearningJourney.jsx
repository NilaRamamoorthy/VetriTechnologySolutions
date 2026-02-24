import { Link } from "react-router-dom";
export default function LearningJourney() {
  return (
    <section className="relative max-w-4xl mx-auto overflow-visible mb-10 px-6 mt-12 mb-24 bg-[#6621BA] rounded-3xl">

      {/* BIG WHITE CIRCLE BEHIND BOY */}
      <div className="absolute left-22 top-54 mt-48 w-72 h-72 bg-white rounded-full"></div>

      {/* Decorative Circles */}
      <div className="absolute left-20 top-10 h-20 w-20 rounded-full bg-white/20" />
      <div className="absolute left-60 top-32 h-12 w-12 rounded-full bg-white/20 " />
      <div className="absolute left-32 bottom-20 h-28 w-28 rounded-full bg-white/10 " />
      <div className="absolute right-32 top-16 h-24 w-24 rounded-full bg-white/10 " />
      <div className="absolute right-10 bottom-28 h-14 w-14 rounded-full bg-white/20 " />
      <div className="absolute left-1/2 top-1/3 h-10 w-10 rounded-full bg-white/20 " />
      <div className="absolute right-1/3 bottom-1/4 h-16 w-16 rounded-full bg-white/10 " />

      {/* Content Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 z-10">

        {/* LEFT — Boy Image */}
        <div className="relative flex justify-center md:justify-start">
        <img
  src="/home/boy.png"
  alt="Student"
  className="w-80 md:w-[420px] drop-shadow-2xl relative z-20 -mb-20 -mt-52 -ms-8 md:-mb-24 ml-10"
/>

        </div>

        {/* RIGHT — Text + Button */}
        <div className="text-white relative z-20 pr-4 py-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Start your Learning Journey today!
          </h2>

          <p className="text-white/80 text-md md:text-lg leading-relaxed mb-8">
            Get expert guidance, structured training, and real-world skills that prepare you for career success.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-[#6621BA] font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-transparent hover:text-white transition"
          >
            Get Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
