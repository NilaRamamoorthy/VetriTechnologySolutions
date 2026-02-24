import Layout from "../layout/Layout";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">

        {/* HEADER */}
        <section className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-[#6621BA]">About VTS</h1>
          <p className="mt-4 text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of IT Professionals with foundational knowledge
            and industry-ready skills.
          </p>
        </section>

        {/* OUR STORY */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="bg-white rounded-2xl shadow-md p-8 border border-black/10">
            <h2 className="text-2xl font-semibold text-[#6621BA]">Our Story</h2>
            <p className="mt-3 text-black/70 leading-relaxed">
              Verti Technology Solutions (VTS) was founded with a mission to help individuals
              transition into the IT industry through structured training, collaboration, and
              continuous guidance. Our programs are designed to support learners at every stage
              of their journey.
            </p>
          </div>
        </section>

        {/* MISSION + VISION */}
        <section className="mx-auto max-w-7xl px-6 mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-[#F3E8FF] p-8 shadow-md border border-[#6621BA]/20">
            <h3 className="text-xl font-semibold text-[#6621BA]">Our Mission</h3>
            <p className="mt-3 text-black/70 leading-relaxed">
              To provide IT training that helps learners develop technical skills, confidence,
              and readiness for real-world career opportunities.
            </p>
          </div>

          <div className="rounded-2xl bg-[#FFF4E0] p-8 shadow-md border border-[#FF9C00]/20">
            <h3 className="text-xl font-semibold text-[#FF9C00]">Our Vision</h3>
            <p className="mt-3 text-black/70 leading-relaxed">
              To create a learning environment that supports students and beginners in building
              strong IT foundations and progressing toward successful professional careers.
            </p>
          </div>
        </section>

        {/* VTS ECOSYSTEM */}
        <section className="mx-auto max-w-7xl px-6 mt-20">
          <h3 className="text-2xl font-bold text-center text-[#6621BA]">
            The Complete VTS Ecosystem
          </h3>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <img
                src="/ecosystem.png"
                alt="VTS Ecosystem"
                className="w-80 h-auto object-contain"
              />
            </div>

            {/* RIGHT CIRCLE + LABELS */}
            <div className="relative flex items-center justify-center">

              {/* Circle */}
              <div className="h-64 w-64 rounded-full bg-white border-[12px] border-[#6621BA] shadow-xl flex items-center justify-center text-center text-xl font-semibold text-[#6621BA]">
                VTS Ecosystem
              </div>

              {/* Labels */}
              <div className="absolute -left-24 top-10 w-48">
                <h4 className="font-semibold text-[#6621BA]">Verti Technology Solution (VTS)</h4>
                <p className="text-sm text-black/60 mt-1">
                  IT training programs focused on practical skill development.
                </p>
              </div>

              <div className="absolute right-0 top-1/2 w-48">
                <h4 className="font-semibold text-[#FF9C00]">Verti IT System (VIS)</h4>
                <p className="text-sm text-black/60 mt-1">
                  Internship opportunities with real-time project exposure.
                </p>
              </div>

              <div className="absolute -left-10 bottom-10 w-48">
                <h4 className="font-semibold text-[#EF1400]">Verti Consultancy Services (VCS)</h4>
                <p className="text-sm text-black/60 mt-1">
                  Career guidance and job-related consultation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE-DRIVEN TRAINING APPROACH */}
        <section className="mx-auto max-w-7xl px-6 mt-20">
          <div className="bg-white rounded-2xl shadow-md p-10 border border-black/10">
            <h3 className="text-2xl font-bold text-[#6621BA]">Our Value-Driven Training Approach</h3>
            <p className="mt-4 text-black/70 leading-relaxed">
              We believe in accessible, affordable, and high-quality education. Our training
              approach focuses on skill-building, growth, and mentorship to help learners
              achieve their career goals.
            </p>
          </div>
        </section>

        {/* HOW WE SHAPE YOUR SKILLS */}
        <section className="mx-auto max-w-7xl px-6 mt-20">
          <h3 className="text-2xl font-bold text-center text-[#6621BA]">
            How We Shape Your Skills
          </h3>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-[#F3E8FF] p-8 shadow-md border border-[#6621BA]/20">
              <h4 className="font-semibold text-[#6621BA]">About the Training Platform</h4>
              <p className="text-sm text-black/60 mt-2">
                Student-focused IT training with structured learning modules.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF4E0] p-8 shadow-md border border-[#FF9C00]/20">
              <h4 className="font-semibold text-[#FF9C00]">Our Learning Approach</h4>
              <p className="text-sm text-black/60 mt-2">
                Step-by-step training with real-time projects.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFECEC] p-8 shadow-md border border-[#EF1400]/20">
              <h4 className="font-semibold text-[#EF1400]">Industry Connection</h4>
              <p className="text-sm text-black/60 mt-2">
                Linked with industry experts for career-oriented consultation.
              </p>
            </div>

          </div>
        </section>

        <div className="h-20" />
      </div>
    </Layout>
  );
}


    {why ? (
  <section className="mx-auto max-w-7xl px-6 py-16 relative">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-center mb-14 text-[#6621BA]">
      {why.heading}
    </h2>

    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1.4fr] items-center">

      {/* LEFT IMAGE WITH PURPLE SHAPE */}
      <div className="relative flex items-center justify-center">
        <div
          className="
            absolute left-0 top-4 bottom-4 w-[85%]
            bg-[#EDE1FF]
            rounded-tl-[140px]
            rounded-bl-[80px]
            rounded-tr-[40px]
            rounded-br-[120px]
            -z-10
          "
        />
        <div className="pl-6 pr-4 py-6">
          {why.left_image_url ? (
            <img
              src={why.left_image_url}
              alt="Why choose us"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="h-64 w-full" />
          )}
        </div>
      </div>

      {/* CENTER CIRCLE */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <div
            className="
              h-72 w-72 rounded-full border-[16px] border-[#6621BA]
              bg-white flex items-center justify-center
              text-2xl font-bold text-[#6621BA]
              shadow-[26px_0px_46px_rgba(102,33,186,0.5)]
            "
          >
            Why Choose Us
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — UPDATED CARDS */}
      <div className="relative space-y-8">

        {(why.items || []).map((item, index) => (
          <div key={item.id} className="relative">

            {/* Orange shadow block */}
            <div className="
              absolute inset-0 bg-[#FF9C00] rounded-full translate-y-2 -ms-8
            "></div>

            {/* White card */}
            <div
              className={`
                relative bg-white rounded-full border px-5 py-4 shadow-md
                flex gap-4 items-start w-[95%]
                transition-all duration-200 origin-left
                hover:-translate-x-4 hover:scale-[1.03]
                ${index === 0 ? "translate-y-[-16px] -ms-7" : ""}
                ${index === 1 ? "translate-y-[-8px] -ms-6" : ""}
                ${index === 2 ? "translate-y-[0px]" : ""}
                ${index === 3 ? "translate-y-[8px]" : ""}
                ${index === 4 ? "translate-y-[16px]" : ""}
                ${index === 5 ? "translate-y-[24px]" : ""}
              `}
            >
              {/* Icon bubble */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6621BA]/10">
                <i className={`bi ${item.icon_class} text-lg text-[#6621BA]`} />
              </div>

              {/* Text */}
              <div>
                <div className="font-semibold text-[#6621BA] text-sm">
                  {item.title}
                </div>

                <div className="text-xs text-black/60 leading-relaxed mt-1">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  </section>
) : null}