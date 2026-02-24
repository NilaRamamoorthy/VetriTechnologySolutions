import Layout from "../layout/Layout";
import VTSEcosystem from "../components/VTSEcosystem";
import CareerStartBanner from "../components/CareerStartBanner";
import TrainingJourney from "../components/TrainingJourney";

// Option A (src/assets)
import aboutImg from "../assets/about-team.png";
import missionImg from "../assets/mission.png";
import whoCanJoin from "../assets/who-can-join.png";
import shapeYourSkills from "../assets/shape-your-skills.png";

// ⭐ Added: import backend hook
import { useHome } from "../hooks/useHome";

export default function About() {

  // ⭐ Added: fetch backend data
  const { data } = useHome();
  const stats = data?.stats || [];

  return (
    <Layout>
      <div className="bg-white">
        {/* TOP HEADER */}
        <section className="mx-auto max-w-5xl px-6 pt-2 pb-4 text-center">
          <h1 className="text-4xl font-bold text-black">About VTS</h1>
          <p className="mx-auto mt-3 max-w-3xl text-md text-black/70">
            Empowering the next generation of IT Professionals with foundational knowledge and
            industry - ready skills
          </p>
        </section>

        {/* OUR STORY (2-col) */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT TEXT */}
            <div className="lg:pr-10">
              <h2 className="text-3xl font-bold text-black">Our Story</h2>

              <p className="mt-8 text-md leading-relaxed text-black/75">
                VTS was founded with a simple observation — many learners struggle to enter the
                IT industry not due to lack of talent, but because they lack practical exposure,
                confidence, and guided direction.
              </p>

              <p className="mt-8 text-md leading-relaxed text-black/75">
                We built Vetri Technology Solutions to bridge this gap through structured training,
                real-time collaboration, and a strong learning ecosystem.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={aboutImg}
                alt="VTS Team"
                className="w-full max-w-[660px] object-contain"
              />
            </div>
          </div>
        </section>

        <div className="flex justify-center ">
          <img
            src={missionImg}
            alt="Mission"
            className="w-full max-w-[1000px] h-1300px object-contain"
          />
        </div>

        <VTSEcosystem />

        <section className="mx-auto max-w-7xl px-10 py-2 mb-4">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-center mb-12">
            Our Value-Driven Training Approach
          </h2>

          {/* Two Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT BOX */}
            <div className="bg-white p-8 rounded-2xl border-l-8 border-[#6621BA] shadow-[0_4px_20px_rgba(102,33,186,0.25)]">
              <p className="text-black/80 leading-relaxed text-sm">
                At VTS, we believe quality education should be accessible without compromise.
                Our programs are thoughtfully structured to support learners from diverse
                backgrounds, including those with career gaps. We focus on skills, growth,
                and readiness — not on past timelines.
              </p>
            </div>
            {/* RIGHT BOX */}
            <div className="bg-white p-8 rounded-2xl  border-l-8 border-[#6621BA] shadow-[0_4px_20px_rgba(102,33,186,0.25)]">
              <p className="text-black/80 leading-relaxed text-sm">
                Our training fees remain affordable because we operate as part of a strong
                ecosystem, not as a standalone institute. We never compromise on quality,
                mentorship, or learning outcomes.
              </p>
            </div>
          </div>
        </section>
        <div>
          <h2 className="text-2xl font-bold text-center my-12">
            How We Shape Your Skills
          </h2>
          <div className="flex justify-center ">
            <img
              src={shapeYourSkills}
              alt="Shape Your Skills"
              className="w-full max-w-[1200px] object-contain"
            />
          </div>
        </div>
        <TrainingJourney />
        <div>
          <h2 className="text-2xl font-bold text-center mt-6 my-3">
            Who Can Join
          </h2>
          <div className="flex justify-center ">
            <img
              src={whoCanJoin}
              alt="Who Can Join"
              className="w-full max-w-[1150px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* ⭐ NEW STATS SECTION (Connected to backend) */}
      <section className="w-full py-10 px-6 ">

        <div className="grid gap-6 rounded-2xl px-8 py-10 text-white sm:grid-cols-2 lg:grid-cols-4 
      bg-[#1877F2] shadow-[0_20px_40px_rgba(0,0,0,0.35)]">

          {stats.map((s) => (
            <div key={s.id} className="text-center">
              <div className="text-3xl font-bold tracking-wide">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-white/80 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}

        </div>

      </section>
      <CareerStartBanner />
    </Layout>
  );
}
