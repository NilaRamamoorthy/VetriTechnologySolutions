import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { fetchCourseDetail } from "../api/courses";
import EnrollModal from "../components/EnrollModal";
import { fetchCourses } from "../api/courses";

export default function CourseDetail() {
    const { slug } = useParams();

    const [course, setCourse] = useState(null);
    const [settings, setSettings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [openEnroll, setOpenEnroll] = useState(false);
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetchCourses("all").then((d) => setAllCourses(d.courses || []));
    }, []);
    useEffect(() => {
        setLoading(true);
        setError("");

        fetchCourseDetail(slug)
            .then(setCourse)
            .catch((e) => setError(e?.message || "Error"))
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) return <Layout settings={settings}><div className="p-6">Loading...</div></Layout>;
    if (error) return <Layout settings={settings}><div className="p-6 text-red-600">{error}</div></Layout>;
    if (!course) return <Layout settings={settings}><div className="p-6">No course found</div></Layout>;

    return (
        <Layout >
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Left: Title + summary */}
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl font-semibold text-[#6621BA]">{course.title}</h1>
                        {course.short_description ? (
                            <p className="mt-3 text-black/70">{course.short_description}</p>
                        ) : null}

                        {/* Meta chips */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            {course.course_fee != null ? (
                                <div className="rounded-xl bg-[#6621BA]/10 px-4 py-2 text-sm">
                                    <b>Course Fee:</b> ₹ {course.course_fee}
                                </div>
                            ) : null}
                            {course.duration_text ? (
                                <div className="rounded-xl bg-[#6621BA]/10 px-4 py-2 text-sm">
                                    <b>Duration:</b> {course.duration_text}
                                </div>
                            ) : null}
                            <div className="rounded-xl bg-[#6621BA]/10 px-4 py-2 text-sm">
                                <b>Certification:</b> {course.certification ? "Yes" : "No"}
                            </div>
                            {course.mode_text ? (
                                <div className="rounded-xl bg-[#6621BA]/10 px-4 py-2 text-sm">
                                    <b>Mode:</b> {course.mode_text}
                                </div>
                            ) : null}
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-wrap gap-4">
                            <button
                                onClick={() => setOpenEnroll(true)}
                                className="rounded-xl bg-[#FF9C00] px-6 py-3 font-semibold text-white"
                            >
                                Enroll Now
                            </button>
                            {course.brochure_url ? (
                                <a
                                    href={course.brochure_url}
                                    download
                                    className="rounded-xl border border-[#FF9C00] px-6 py-3 font-semibold"
                                >
                                    Download Brochure
                                </a>
                            ) : null}
                        </div>
                    </div>

                    {/* Right: Thumbnail / promo */}
                    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                        {/* {course.thumbnail_url ? (
                            <img
                                src={course.thumbnail_url}
                                alt={course.title}
                                className="w-full rounded-xl object-cover"
                            />
                        ) : null} */}

                        {course.promo_video_url ? (
                            <div className="mt-4">
                                <video className="w-full rounded-xl" controls src={course.promo_video_url} />
                            </div>
                        ) : null}
                    </div>
                </div>

                {/* Overview */}
                {course.overview ? (
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold">Course Overview</h2>
                        <p className="mt-3 text-black/70 whitespace-pre-line">{course.overview}</p>
                    </div>
                ) : null}

                {/* Tools */}
                {course.tools?.length ? (
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold">Tools &amp; Technologies Covered</h2>
                        <div className="mt-4 flex flex-wrap gap-4">
                            {course.tools
                                .slice()
                                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                                .map((t) => (
                                    <div
                                        key={t.id}
                                        className="flex w-28 flex-col items-center justify-center rounded-2xl bg-[#FF9C00]/20 p-4"
                                    >
                                        {t.icon_url ? (
                                            <img src={t.icon_url} alt={t.name} className="h-10 w-10 object-contain" />
                                        ) : null}
                                        <div className="mt-2 text-sm font-semibold">{t.name}</div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ) : null}

                {/* Learning points */}
                {course.learning_points?.length ? (
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold">What you will Learn</h2>
                        <ul className="mt-4 space-y-2 text-black/75">
                            {course.learning_points
                                .slice()
                                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                                .map((p) => (
                                    <li key={p.id} className="flex gap-2">
                                        <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-green-600" />
                                        <span>{p.text}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ) : null}
            </div>
            <EnrollModal
  open={openEnroll}
  onClose={() => setOpenEnroll(false)}
  course={course}
  coursesList={allCourses}
/>
        </Layout>
        
    );
}