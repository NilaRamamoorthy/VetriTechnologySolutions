import { Link, NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

function useWordFadeLoop(sentence) {
  const words = useMemo(() => sentence.split(" "), [sentence]);

  // stage: "in" (word-by-word reveal) -> "hold" -> "out" (all fade out) -> repeat
  const [count, setCount] = useState(0);
  const [stage, setStage] = useState("in");

  useEffect(() => {
    let t;

    if (stage === "in") {
      t = setInterval(() => {
        setCount((c) => {
          if (c >= words.length) {
            setStage("hold");
            return c;
          }
          return c + 1;
        });
      }, 220); // speed per word
    }

    if (stage === "hold") {
      t = setTimeout(() => setStage("out"), 700);
    }

    if (stage === "out") {
      t = setTimeout(() => {
        setCount(0);
        setStage("in");
      }, 520); // must be >= vtsAllOut duration
    }

    return () => clearTimeout(t) || clearInterval(t);
  }, [stage, words.length]);

  const visibleWords = words.slice(0, count);
  const fadeOut = stage === "out";

  return { visibleWords, fadeOut };
}

export default function Header({ settings }) {
  const logo = settings?.logo_url;
  const email = settings?.email;
  const phone = settings?.phone;

  const sentence =
    "India's First IT Training Institute With 100% Placement";

  const { visibleWords, fadeOut } = useWordFadeLoop(sentence);

  const activeClass = "text-[#FF9C00] font-semibold";
  const normalClass = "text-white font-semibold hover:text-white/90";

  return (
    <header className="w-full">
      {/* TOP WHITE STRIP */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm">
          <div className="font-semibold text-black">
            Welcome to{" "}
            <span className="text-[#EF1400]">
              {settings?.site_name || "VETRI TECHNOLOGY SOLUTIONS"}
            </span>
          </div>

          <div className="flex items-center gap-8">
            {email ? (
              <div className="hidden sm:flex items-center gap-3">
                <i className="bi bi-envelope-fill text-[#EF1400] text-xl" />
                <span className="font-semibold text-black">{email}</span>
              </div>
            ) : null}

            {phone ? (
              <div className="flex items-center gap-3">
                <i className="bi bi-telephone-fill text-[#EF1400] text-xl" />
                <span className="font-semibold text-black">{phone}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

    
{/* MESSAGE BAR — word-by-word fade in + yellow thumb as last word */}
<div className="bg-[#6621BA] mb-7">
  <div className="mx-auto flex max-w-6xl items-center justify-center px-4">
    {/* fixed height prevents shrinking */}
    <div className="h-[54px] w-full flex items-center justify-center">
      <div className="relative h-[30px] w-[920px] max-w-full overflow-hidden text-center">
        {/* wrapper controls full fade-out */}
        <div className="absolute inset-0 flex items-center justify-center animate-vtsSentence">
          {[
            "India's",
            "First",
            "IT",
            "Training",
            "Institute",
            "With",
            "100%",
            "Placement",
          ].map((word, i) => (
            <span
              key={i}
              className="inline-block animate-vtsWord text-2xl font-extrabold tracking-wide text-white"
              style={{
                animationDelay: `${i * 0.18}s`,
                animationFillMode: "both",
              }}
            >
              {word}&nbsp;
            </span>
          ))}

          {/* Yellow thumbs-up as final animated item */}
          <span
            className="inline-flex items-center animate-vtsWord"
            style={{
              animationDelay: `${8 * 0.18}s`,
              animationFillMode: "both",
            }}
          >
            <i className="bi bi-hand-thumbs-up-fill text-[#FF9C00] text-2xl ml-1" />
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* NAV BAR (separate block) */}
      <div className="relative bg-[#6621BA] border-t border-white/20">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-5">
          {/* Logo bubble that pops upward like screenshot */}
          <div className="relative -mt-12 shrink-0">
            <Link to="/" className="block">
              <div className="h-[92px] w-[92px] rounded-full bg-white p-[5px] shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  {logo ? (
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-[78px] w-[78px] rounded-full object-contain"
                    />
                  ) : (
                    <div className="h-[78px] w-[78px] rounded-full bg-black/10" />
                  )}
                </div>
              </div>
            </Link>
          </div>

          {/* Search (matches screenshot spacing) */}
          <div className="relative hidden flex-1 md:block">
            <i className="bi bi-search absolute left-5 top-1/2 -translate-y-1/2 text-black/50 text-2xl" />
            <input
              placeholder="Search here"
              className="w-full max-w-[640px] rounded-full bg-white px-14 py-3 text-lg font-medium text-black placeholder:text-black/45 shadow-sm outline-none"
            />
          </div>

          {/* Nav links */}
          <nav className="hidden items-center gap-12 md:flex">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Home
            </NavLink>
            <NavLink to="/courses" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Courses
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Contact Us
            </NavLink>
          </nav>

          {/* CTA button */}
      <Link
  to="/courses"
  className="ml-auto rounded-2xl bg-[#FF9C00] px-10 py-3 text-lg font-bold text-white shadow hover:opacity-95"
>
  Enroll Now
</Link>


        </div>

        {/* Mobile row (simple & clean) */}
        <div className="md:hidden px-4 pb-4">
          <div className="flex gap-3">
            <a
              href="/"
              className="flex-1 rounded-xl bg-white/10 py-2 text-center text-white font-semibold"
            >
              Menu
            </a>
            <Link
              to={settings?.header_cta_url || "/contact"}
              className="flex-1 rounded-xl bg-[#FF9C00] py-2 text-center text-white font-bold"
            >
              Enroll
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}