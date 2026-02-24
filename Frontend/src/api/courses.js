const base = () => import.meta.env.VITE_API_BASE_URL;

export async function fetchCourses(categorySlug = "all") {
  const url =
    categorySlug && categorySlug !== "all"
      ? `${base()}/api/courses/?category=${encodeURIComponent(categorySlug)}`
      : `${base()}/api/courses/`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to load courses");
  return res.json();
}

export async function fetchCourseDetail(slug) {
  const res = await fetch(`${base()}/api/courses/${slug}/`);
  if (!res.ok) throw new Error("Failed to load course detail");
  return res.json();
}