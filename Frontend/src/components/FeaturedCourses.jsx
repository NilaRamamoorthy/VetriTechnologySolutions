// src/components/FeaturedCourses.jsx
import { Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";

// Usage:
// <FeaturedCourses courses={courses} loading={loadingCourses} />
export default function FeaturedCourses({ courses = [], loading = false }) {
  const featured = useMemo(() => {
    // If you have a boolean like `is_featured`, prefer it.
    const byFlag = courses.filter((c) => c.is_featured);
    const list = byFlag.length ? byFlag : courses;
    return list.slice(0, 3);
  }, [courses]);

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black">Featured Courses</h2>
          <p className="mt-2 text-base text-black/70">
            Choose from our most popular industry-aligned programs
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <CourseCardSkeleton key={i} />)
            : featured.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/courses"
            className="rounded-xl border-2 border-[#FF9C00] px-8 py-3 text-base font-semibold text-black hover:bg-[#FF9C00] hover:text-white transition"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  const navigate = useNavigate();

  const title = course.title || course.name || "Course";
  const duration = course.duration || course.duration_text || course.months ? `${course.months} Months` : "—";
  const level = course.level || course.level_text || "Beginner to Advanced";
  const tagline =
    course.short_description ||
    course.tagline ||
    course.one_liner ||
    "Build complete web applications";

  // image field variations you might have
  const img =
    course.cover_image ||
    course.thumbnail ||
    course.image ||
    course.banner ||
    "";

  // if your API returns full url, this will work.
  // if it returns relative path, and you use VITE_API_BASE_URL, uncomment below:
  // const base = import.meta.env.VITE_API_BASE_URL;
  // const imgUrl = img?.startsWith("http") ? img : `${base}${img}`;

  const imgUrl = img;

  const slug = course.slug || course.id;

  return (
    <div
      className="
        group rounded-3xl border-2 border-[#6621BA] bg-white
        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        transition-transform duration-300 ease-out
        hover:-translate-y-2 hover:scale-[1.03]
      "
    >
      {/* image */}
      <div className="overflow-hidden rounded-t-3xl">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={title}
            className="h-56 w-full object-cover"
            draggable={false}
          />
        ) : (
          <div className="h-56 w-full bg-black/5" />
        )}
      </div>

      {/* content */}
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-[#6621BA] leading-tight">
          {title}
        </h3>

        <div className="mt-4 space-y-2 text-black/80">
          <div className="flex items-center gap-3">
            <i className="bi bi-calendar3 text-[#6621BA]" />
            <span className="font-semibold">{duration}</span>
          </div>

          <div className="flex items-center gap-3">
            <i className="bi bi-mortarboard text-[#6621BA]" />
            <span className="font-semibold">{level}</span>
          </div>

          <div className="mt-2 text-black/80">{tagline}</div>
        </div>

        {/* buttons */}
        <div className="mt-6 grid grid-cols-2 gap-5">
          <Link
            to={`/courses/${slug}`}
            className="
              rounded-xl border-2 border-[#FF9C00] px-6 py-3 text-center
              font-semibold text-black transition
              hover:bg-[#FF9C00] hover:text-white
            "
          >
            View Details
          </Link>

          <button
            onClick={() => navigate(`/courses/${slug}`)}
            className="
              rounded-xl bg-[#FF9C00] px-6 py-3
              font-semibold text-white transition
              hover:brightness-95
            "
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

function CourseCardSkeleton() {
  return (
    <div className="rounded-3xl border-2 border-[#6621BA] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
      <div className="h-56 w-full rounded-t-3xl bg-black/10 animate-pulse" />
      <div className="p-6">
        <div className="h-6 w-2/3 bg-black/10 animate-pulse rounded" />
        <div className="mt-4 space-y-3">
          <div className="h-4 w-1/2 bg-black/10 animate-pulse rounded" />
          <div className="h-4 w-1/3 bg-black/10 animate-pulse rounded" />
          <div className="h-4 w-4/5 bg-black/10 animate-pulse rounded" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-5">
          <div className="h-11 rounded-xl bg-black/10 animate-pulse" />
          <div className="h-11 rounded-xl bg-black/10 animate-pulse" />
        </div>
      </div>
    </div>
  );
}