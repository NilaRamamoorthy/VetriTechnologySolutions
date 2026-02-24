import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { fetchCourses } from "../api/courses";

export default function CoursesList() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category") || "all";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const category = useMemo(() => initialCategory, [initialCategory]);

  useEffect(() => {
    setLoading(true);
    setError("");

    fetchCourses(category)
      .then((res) => {
        setData(res);
        // settings comes from /api/home/ currently; for now keep header/footer minimal.
        // We'll reuse site_settings from Home later via a global store.
      })
      .catch((e) => setError(e?.message || "Error"))
      .finally(() => setLoading(false));
  }, [category]);

  const categories = data?.categories || [];
  const courses = data?.courses || [];

  const setCategory = (slug) => {
    if (!slug || slug === "all") {
      params.delete("category");
      setParams(params, { replace: true });
    } else {
      setParams({ category: slug }, { replace: true });
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold">Explore Courses by Career Path</h1>

          <a
            href="/contact"
            className="rounded-xl bg-[#FF9C00] px-5 py-2 font-semibold text-white"
          >
            Free Consultation
          </a>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => setCategory("all")}
            className={`rounded-full px-5 py-2 text-sm font-semibold border ${
              category === "all"
                ? "bg-[#6621BA] text-white border-[#6621BA]"
                : "bg-white text-[#6621BA] border-[#6621BA]/30"
            }`}
          >
            All
          </button>

          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.slug)}
              className={`rounded-full px-5 py-2 text-sm font-semibold border ${
                category === c.slug
                  ? "bg-[#6621BA] text-white border-[#6621BA]"
                  : "bg-white text-[#6621BA] border-[#6621BA]/30"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {loading ? <div className="mt-8">Loading...</div> : null}
        {error ? <div className="mt-8 text-red-600">{error}</div> : null}

        {/* Courses grid (basic for now) */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="overflow-hidden rounded-2xl border border-[#6621BA]/30 bg-white shadow-sm"
            >
              <div className="h-40 bg-black/5">
                {course.thumbnail_url ? (
                  <img
                    src={course.thumbnail_url}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>

              <div className="p-5">
                <div className="text-lg font-semibold text-[#6621BA]">
                  {course.title}
                </div>

                <div className="mt-3 space-y-2 text-sm text-black/70">
                  {course.duration_text ? (
                    <div className="flex items-center gap-2">
                      <i className="bi bi-calendar3" />
                      <span>{course.duration_text}</span>
                    </div>
                  ) : null}
                  {course.level_text ? (
                    <div className="flex items-center gap-2">
                      <i className="bi bi-person" />
                      <span>{course.level_text}</span>
                    </div>
                  ) : null}
                  {course.short_description ? (
                    <div className="text-black/60">{course.short_description}</div>
                  ) : null}
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
      </div>
    </Layout>
  );
}