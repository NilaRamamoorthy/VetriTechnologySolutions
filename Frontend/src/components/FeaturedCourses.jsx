import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCourses } from "../api/courses";

export default function FeaturedCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses("all")
      .then((res) => {
        setCourses(res.courses.slice(0, 3)); // only first 3
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-6xl px-6 py-2">
      <div className="text-center pb-4">
      <h2 className="text-xl font-semibold mb-1">Featured Courses</h2>
    <p>Choose from our most popular industry-aligned programs</p>
    </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded-2xl border-2 border-[#6621BA] bg-white shadow-sm transform transition-all duration-300 hover:scale-[1.0] hover:-translate-x-4 hover:-translate-y-4"
          >
            <div className="h-40 bg-black/5">
              {course.thumbnail_url && (
                <img
                  src={course.thumbnail_url}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div className="p-5">
              <div className="text-lg font-semibold text-[#6621BA]">
                {course.title}
              </div>

              <div className="mt-3 space-y-2 text-sm text-black/70">
                {course.duration_text && (
                  <div className="flex items-center gap-2">
                    <i className="bi bi-calendar3" />
                    <span className="text-black">{course.duration_text}</span>
                  </div>
                )}

                {course.level_text && (
                  <div className="flex items-center gap-2">
  <i className="bi bi-person" />
  <span className="text-black truncate min-w-0 flex-1"> {course.level_text} </span>
</div>

                )}

                {course.short_description && (
                  <div className="text-black/60">{course.short_description}</div>
                )}
              </div>

              <div className="mt-5 flex gap-3">
                <Link
                  to={`/courses/${course.slug}`}
                  className="flex-1 rounded-xl border border-[#FF9C00] px-4 py-2 text-center text-sm font-semibold"
                >
                  View Details
                </Link>

                <a
                  href="/contact"
                  className="flex-1 rounded-xl bg-[#FF9C00] px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-10 text-center">
      <Link
  to="/courses"
  className="rounded-md border border-[#FF9C00] px-3 py-3 font-semibold text-black transition-all duration-200 hover:text-[#FF9C00]"
>
  View All Courses
</Link>

      </div>
    </div>
  );
}
