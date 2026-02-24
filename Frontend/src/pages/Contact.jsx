import { useState } from "react";
import Layout from "../layout/Layout";
import ContactSupportSection from "../components/ContactSupportSection";
import LearningEnvironment from "../components/LearningEnvironment";
import FAQSection from "../components/FAQSection";
import mapImg from "../assets/contact-map.jpeg";

/* -----------------------------------------------------------
   MAIN CONTACT PAGE
------------------------------------------------------------ */
export default function Contact() {
  const base = import.meta.env.VITE_API_BASE_URL;

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    course_interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);
    try {
      const res = await fetch(`${base}/api/contact-enquiries/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setMsg("Thanks! We received your enquiry. We will call you soon.");
      setForm({ full_name: "", email: "", phone: "", course_interest: "", message: "" });
    } catch (err) {
      setMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="relative overflow-hidden rounded-3xl bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-0">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="text-4xl font-semibold text-black">Get in Touch with our Experts</h2>
              <p className="mt-4 max-w-md text-lg text-black/80">
                Have questions? We're here to help you start your learning journey
              </p>

              <button className="mt-10 rounded-xl bg-[#FF9C00] px-8 py-3 text-lg font-semibold text-white">
                Free Consultation
              </button>
            </div>

            {/* Right Form */}
            <div className="relative">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF9C00]" />

              <form
                onSubmit={submit}
                className="relative z-10 rounded-2xl border-2 border-[#6621BA] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              >
                <h3 className="text-2xl font-semibold">Enquiry Form</h3>

                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  <Field label="Full Name">
                    <Input value={form.full_name} onChange={(e) => update("full_name", e.target.value)} placeholder="Narmatha" />
                  </Field>

                  <Field label="Email Address">
                    <Input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="narm123@gmail.com" />
                  </Field>

                  <Field label="Phone Number">
                    <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="1234567890" />
                  </Field>

                  <Field label="Course Interest">
                    <select
                      className="w-full rounded-xl border-2 border-black/30 bg-white px-4 py-3 text-base outline-none focus:border-[#6621BA]"
                      value={form.course_interest}
                      onChange={(e) => update("course_interest", e.target.value)}
                    >
                      <option value="">Select Course</option>
                      <option>Python Full Stack</option>
                      <option>Java Full Stack</option>
                      <option>Software Testing</option>
                    </select>
                  </Field>

                  <div className="md:col-span-2">
                    <Field label="Message">
                      <textarea
                        className="w-full rounded-xl border-2 border-black/30 px-4 py-3 text-base outline-none focus:border-[#6621BA]"
                        rows={5}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Type here.."
                      />
                    </Field>
                  </div>
                </div>

                <button
                  disabled={loading}
                  className="mt-7 w-full rounded-xl bg-[#FF9C00] py-3 text-lg font-semibold text-white disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>

                {msg ? <div className="mt-4 text-center font-medium text-black/80">{msg}</div> : null}
              </form>
            </div>
          </div>
        </div>

        {/* Purple Bar */}
        <div className="relative h-44 w-full rounded-b-3xl bg-[#6621BA] -mt-28 shrink-0">
          <div className="absolute left-14 top-8 h-14 w-14 rounded-full bg-white/20" />
          <div className="absolute left-64 top-24 h-10 w-10 rounded-full bg-white/20" />
          <div className="absolute right-24 top-20 h-16 w-16 rounded-full bg-white/20" />

          <svg className="absolute left-10 top-7" width="520" height="140" viewBox="0 0 520 140" fill="none">
            <path
              d="M10 95 C120 25, 190 140, 290 70 C360 25, 410 40, 490 15"
              stroke="white"
              strokeOpacity="0.9"
              strokeWidth="2"
              strokeDasharray="5 6"
            />
            <path
              d="M492 18 L510 10 L500 28 L496 22 L492 18 Z"
              fill="white"
              opacity="0.95"
            />
          </svg>
        </div>
<ContactSupportSection />
        {/* Branch Section */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold text-center text-[#6621BA]">
            Visit Our Branch
          </h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2 justify-items-center">

            <div className="w-full max-w-lg rounded-2xl border-4 border-[#6621BA]/40 p-3 shadow-md bg-white text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6621BA]">
                <i className="bi bi-geo-alt-fill text-white text-3xl"></i>
              </div>
              <h3 className="font-bold text-lg">Surandai - April's Complex</h3>
              <p className="text-sm text-black mt-2 leading-relaxed">
                April's Complex, Bus Stand Backside, Surandai - 627859.
              </p>
            </div>

            <div className="w-full max-w-lg rounded-2xl border-4 border-[#6621BA]/40 p-3 shadow-md bg-white text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6621BA]">
                <i className="bi bi-geo-alt-fill text-white text-3xl"></i>
              </div>
              <h3 className="font-bold text-lg">Surandai - Shanthi Complex</h3>
              <p className="text-sm text-black mt-2 leading-relaxed">
                Shanthi Complex, Surandai Old Market, Near Bus Stand, Surandai - 627859.
              </p>
            </div>

            <div className="w-full max-w-lg rounded-2xl border-4 border-[#6621BA]/40 p-3 shadow-md bg-white text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6621BA]">
                <i className="bi bi-geo-alt-fill text-white text-3xl"></i>
              </div>
              <h3 className="font-bold text-lg">Tirunelveli</h3>
              <p className="text-sm text-black mt-2 leading-relaxed">
                Behind Side, Near Bus Stop, Chella Samy Teacher Complex, Surandai, Tirunelveli - 627859.
              </p>
            </div>

            <div className="w-full max-w-lg rounded-2xl border-4 border-[#6621BA]/40 p-3 shadow-md bg-white text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6621BA]">
                <i className="bi bi-geo-alt-fill text-white text-3xl"></i>
              </div>
              <h3 className="font-bold text-lg">Nagercoil</h3>
              <p className="text-sm text-black mt-2 leading-relaxed">
                Address details coming soon.
              </p>
            </div>

          </div>
        </section>

        {/* Learning Environment */}
        <LearningEnvironment />

        {/* FAQ */}
        <FAQSection />

      </section>
    </Layout>
  );
}

/* -----------------------------------------------------------
   FORM FIELD COMPONENTS
------------------------------------------------------------ */
function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-base font-semibold">{label}</div>
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border-2 border-black/30 px-4 py-3 text-base outline-none focus:border-[#6621BA]"
    />
  );
}
