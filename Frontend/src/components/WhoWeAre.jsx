export default function WhoWeAre() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-1">

      {/* 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14  relative">

        {/* LEFT — Image + Bottom Info */}
        <div className="relative">

          {/* Main Image */}
          <img
            src="/home/who-we-are.jpg"
            alt="Team working"
            className="w-full rounded-2xl shadow-lg object-cover"
          />

          {/* Bottom Info Box (absolute) */}
          <div className="absolute left-56 top-19 bottom-1 bg-white p-3 px-5 rounded-xl shadow-lg border-l-8 border-[#6621BA] max-w-xs">
            <p className="text-[#6621BA] font-semibold text-base">
              Established in 2021
            </p>
            <p className="text-black/70 text-md mt-1 leading-relaxed">
              Specializing in IT training, placement, and custom software development in Surandai.
            </p>
          </div>
        </div>

        {/* RIGHT — Text Content */}
        <div>
          <h2 className="text-4xl font-bold  mb-4">
            Who We Are?
          </h2>

          <p className="text-black/70 leading-relaxed text-base mb-6">
            We are a training centre that helps students learn IT skills.
            We also have our own IT startup where real software work is done.
            Along with training, we provide consultation services to guide
            students in career and job-related matters.
          </p>

          {/* Learn More Button → /about */}
         <a
  href="/about"
  className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold border-2 border-[#FF9C00]/50 shadow-md hover:text-[#FF9C00] transition"
>
  Learn More
</a>

        </div>
      </div>
    </section>
  );
}
