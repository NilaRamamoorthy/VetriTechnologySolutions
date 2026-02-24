import { useHome } from "../hooks/useHome";
import VideoTestimonials from "../components/VideoTestimonials";
import HowVTSWorks from "../components/HowVTSWorks";
import Layout from "../layout/Layout";
import WhoWeAre from "../components/WhoWeAre";
import LearningJourney from "../components/LearningJourney";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import StudentShowcase from "../components/StudentShowcase";
import FeaturedCoursesSection from "../components/FeaturedCoursesSection";
import { fetchCourses } from "../api/courses";
import { Link } from "react-router-dom";
export default function Home() {
  const { data, loading, error } = useHome();

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!data) return <div className="p-6">No data</div>;

  const hero = data.hero;
  const stats = data.stats || [];
  const why = data.why_choose_us;
  const videoTestimonials = data.video_testimonials || [];
  const steps = data.steps || [];
    // const [coursesData, setCoursesData] = useState(null);
    // const [coursesLoading, setCoursesLoading] = useState(true);
    // const [coursesError, setCoursesError] = useState("");
  
    // useEffect(() => {
    //   setCoursesLoading(true);
    //   setCoursesError("");
  
    //   fetchCourses("all")
    //     .then((res) => setCoursesData(res))
    //     .catch((e) => setCoursesError(e?.message || "Failed to load courses"))
    //     .finally(() => setCoursesLoading(false));
    // }, []);
  
    // const coursesList = coursesData?.courses || coursesData?.results || [];
  
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* HERO SECTION */}
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pb-28 min-h-[200px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            {hero?.background_image_url ? (
              <img
                src={hero.background_image_url}
                alt="Hero"
                className="h-full w-full object-cover brightness-140 contrast-110 scale-x-[-1] object-[center_30%]"

              />
            ) : (
              <div className="h-full w-full bg-black" />
            )}

            {/* Lighter Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-white/20" />
          </div>

          {/* Content */}
          <div className="relative mx-auto max-w-8xl px-6 pt-20 mt-10">
            {/* Smaller Glass Card */}
            <div className="max-w-2xl rounded-2xl bg-black/65 backdrop-transparent p-6 border border-white/10 shadow-xl">
              <h1 className="text-lg font-bold leading-snug md:text-2xl text-white">
                {hero?.title}
              </h1>

              <p className="mt-3 text-base text-white/85 leading-relaxed">
                {hero?.subtitle}
              </p>
            </div>

            {/* Buttons OUTSIDE the glass card */}
            <div className="mt-6 ms-9 flex flex-wrap gap-4">
              <Link to={hero?.primary_cta_url || "#"}
                className="rounded bg-[#FF9C00] px-8 py-3 text-base font-semibold text-black shadow-md hover:bg-[#ffb23a] transition-all"
              >
                {hero?.primary_cta_text || "View Training Program"}
              </Link>

              <a to={"/contact"}
                className="rounded border border-white/40 bg-white/10 px-8 py-3 text-base font-semibold text-white hover:bg-white/20 transition-all"
              >
                {hero?.secondary_cta_text || "Free Consultation"}
              </a>
            </div>
          </div>
        </section>

        {/* STATS SECTION — BELOW HERO BUT OVERLAPPING */}
        <section className="relative z-20 mx-auto max-w-4xl px-6 -mt-14 pb-10">
          <div className="grid gap-6 rounded-2xl bg-[#1877F2] px-8 py-5 text-white sm:grid-cols-2 lg:grid-cols-4 shadow-3xl">
            {stats.map((s) => (
              <div key={s.id} className="text-center">
                <div className="text-2xl font-bold tracking-wide">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/80 tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <WhoWeAre />
        {/* Why coose us */}
  

      <WhyChooseUs />

        <HowVTSWorks steps={steps} />
 {/* {coursesError ? (
        <div className="mx-auto max-w-6xl px-6 mt-8 text-red-600">
          {coursesError}
        </div>
      ) : null}

      <FeaturedCoursesSection
        courses={coursesList}
        limit={3}
      /> */}

         <StudentShowcase />

        {videoTestimonials.length > 0 ? (
          <VideoTestimonials items={videoTestimonials} />
        ) : null}

      </div>
      <LearningJourney />
    </Layout>
  );
}
