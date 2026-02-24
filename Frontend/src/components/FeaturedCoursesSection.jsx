import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function FeaturedCoursesSection({
  courses = [],
  title = "Featured Courses",
  subtitle = "Choose from our most popular industry-aligned programs",
  limit = 3,
}) {
  const featured = useMemo(() => {
    // If you later add `is_featured` from backend, it will auto-pick those.
    const flagged = courses.filter((c) => c.is_featured);
    const list = flagged.length ? flagged : courses;
    return list.slice(0, limit);
  }, [courses, limit]);

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black">{title}</h2>
          <p className="mt-2 text-base text-black/70">{subtitle}</p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {featured.map((course) => (
            <FeaturedCourseCard key={course.id} course={course} />
          ))}

          {/* If courses empty */}
          {!featured.length ? (
            <div className="lg:col-span-3 text-center text-black/60 mt-6">
              No featured courses yet.
            </div>
          ) : null}
        </div>

        {/* Bottom button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/courses"
            className="rounded-xl border-2 border-[#FF9C00] px-10 py-3 text-base font-semibold text-black transition hover:bg-[#FF9C00] hover:text-white"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedCourseCard({ course }) {
  // If your thumbnail_url is relative, uncomment this:
  // const base = import.meta.env.VITE_API_BASE_URL;
  // const imgUrl = course.thumbnail_url?.startsWith("http")
  //   ? course.thumbnail_url
  //   : `${base}${course.thumbnail_url}`;

  const imgUrl = course.thumbnail_url;

  return (
    <div
      className="
        group overflow-hidden rounded-3xl border-[3px] border-[#6621BA]
        bg-white shadow-[0_12px_40px_rgba(0,0,0,0.10)]
        transition-transform duration-300 ease-out
        hover:-translate-y-2 hover:scale-[1.03]
      "
    >
      {/* Image */}
      <div className="h-56 w-full bg-black/5 overflow-hidden">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={course.title}
            className="h-full w-full object-cover"
            draggable={false}
          />
        ) : null}
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-[#6621BA] leading-snug">
          {course.title}
        </h3>

        <div className="mt-4 space-y-2 text-[15px] text-black/85">
          {course.duration_text ? (
            <div className="flex items-center gap-3">
              <i className="bi bi-calendar3 text-[#6621BA]" />
              <span className="font-semibold">{course.duration_text}</span>
            </div>
          ) : null}

          {course.level_text ? (
            <div className="flex items-center gap-3">
              <i className="bi bi-mortarboard text-[#6621BA]" />
              <span className="font-semibold">{course.level_text}</span>
            </div>
          ) : null}

          {course.short_description ? (
            <p className="pt-1 text-black/70">{course.short_description}</p>
          ) : null}
        </div>

        {/* Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          <Link
            to={`/courses/${course.slug}`}
            className="
              rounded-xl border-2 border-[#FF9C00]
              px-6 py-3 text-center text-base font-semibold text-black
              transition hover:bg-[#FF9C00] hover:text-white
            "
          >
            View Details
          </Link>

          {/* You said enroll opens modal on course detail; for now link to detail */}
          <Link
            to={`/courses/${course.slug}`}
            className="
              rounded-xl bg-[#FF9C00]
              px-6 py-3 text-center text-base font-semibold text-white
              transition hover:brightness-95
            "
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}