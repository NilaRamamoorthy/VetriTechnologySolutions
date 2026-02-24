import { useEffect, useRef, useState } from "react";

export default function TrainingJourney() {
  const [active, setActive] = useState(-1); // -1 means hidden/reset
  const ref = useRef(null);
  const timerRef = useRef(null);

  // Clockwise reveal: TL -> TM -> TR -> BR -> BM -> BL
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      // clear any running interval
      if (timerRef.current) clearInterval(timerRef.current);

      setActive(0);
      let step = 0;

      timerRef.current = setInterval(() => {
        step += 1;
        setActive((prev) => (prev < 5 ? prev + 1 : prev));
        if (step >= 5) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      }, 320);
    };

    const resetAnimation = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setActive(-1); // everything fades out
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          resetAnimation();
        }
      },
      {
        threshold: 0.25, // section must be ~25% visible to start
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Replace these with your image paths (public/journey/*)
  const items = [
    { title: "Entry & Counseling", desc: "Get guidance to choose the right career.", img: "/journey/entry.png" },
    { title: "Joining", desc: "Enroll and receive course access and schedule.", img: "/journey/joining.webp" },
    { title: "Training Phase", desc: "Learn through practical sessions and real projects.", img: "/journey/training.png" },
    { title: "Completion & Certification", desc: "Finish the course and earn your certificate.", img: "/journey/certificate.png" },
    { title: "Best Performer Opportunity", desc: "Top performers get hands-on internship experience.", img: "/journey/best.webp" },
    { title: "Job Opportunity", desc: "Outstanding students may receive job opportunities.", img: "/journey/job.avif" },
  ];

  // Arrow reveal mapping:
  // a1: TL->TM  (active>=1)
  // a2: TM->TR  (active>=2)
  // a3: TR->BR  (active>=3)
  // a4: BR->BM  (active>=4)
  // a5: BM->BL  (active>=5)
  const arrowVisible = {
    a1: active >= 1,
    a2: active >= 2,
    a3: active >= 3,
    a4: active >= 4,
    a5: active >= 5,
  };

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 pb-24">
      <h3 className="text-center text-3xl font-bold text-black">
        “Your Training Journey”
      </h3>

      {/* Desktop */}
      <div className="relative mt-14 hidden md:block">
        <Arrows visible={arrowVisible} />

        <div className="grid grid-cols-3 gap-x-16 gap-y-28">
          {/* Top row */}
          <JourneyItem item={items[0]} show={active >= 0} />
          <JourneyItem item={items[1]} show={active >= 1} />
          <JourneyItem item={items[2]} show={active >= 2} />

          {/* Bottom row */}
          <JourneyItem item={items[5]} show={active >= 5} />
          <JourneyItem item={items[4]} show={active >= 4} />
          <JourneyItem item={items[3]} show={active >= 3} />
        </div>
      </div>

      {/* Mobile (stacked) */}
      <div className="mt-10 space-y-10 md:hidden">
        {items.map((it, idx) => (
          <div key={it.title}>
            <JourneyItem item={it} show={active >= idx} align="left" />
            {idx !== items.length - 1 && (
              <div className="mt-6 flex justify-center">
                <i className="bi bi-arrow-down text-2xl text-black/40" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function JourneyItem({ item, show, align = "center" }) {
  return (
    <div
      className={[
        "transition-all duration-500",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        item.muted ? "opacity-30" : "",
        align === "left" ? "text-left" : "text-center",
      ].join(" ")}
    >
      <div className={align === "left" ? "" : "flex justify-center"}>
        <div className="flex h-16 w-16 items-center justify-center">
          <img
            src={item.img}
            alt={item.title}
            className="h-14 w-14 object-contain"
            draggable={false}
          />
        </div>
      </div>

      <div className="mt-3 text-lg font-semibold text-black">{item.title}</div>
      <div className="mt-3 text-base text-black/70 leading-relaxed">{item.desc}</div>
    </div>
  );
}

function Arrows({ visible }) {
  // Less dots => increase dasharray spacing, reduce stroke opacity a bit
  const dash = "2 20"; // smaller dash + bigger gap (fewer dots)
  const strokeOpacity = 0.7;

  const fade = (on) => (on ? "opacity-100" : "opacity-0");

  return (
    <svg className="pointer-events-none absolute inset-0" viewBox="0 0 1200 520" preserveAspectRatio="none">
      {/* TL -> TM */}
      <g className={`transition-opacity duration-500 ${fade(visible.a1)}`}>
        <line x1="250" y1="95" x2="480" y2="95" stroke="black" strokeWidth="2" strokeOpacity={strokeOpacity} strokeDasharray={dash} />
        <polygon points="480,95 470,90 470,100" fill="black" opacity={strokeOpacity} />
      </g>

      {/* TM -> TR */}
      <g className={`transition-opacity duration-500 ${fade(visible.a2)}`}>
        <line x1="720" y1="95" x2="950" y2="95" stroke="black" strokeWidth="2" strokeOpacity={strokeOpacity} strokeDasharray={dash} />
        <polygon points="950,95 940,90 940,100" fill="black" opacity={strokeOpacity} />
      </g>

      {/* TR -> BR */}
      <g className={`transition-opacity duration-500 ${fade(visible.a3)}`}>
        <line x1="1020" y1="170" x2="1020" y2="330" stroke="black" strokeWidth="2" strokeOpacity={strokeOpacity} strokeDasharray={dash} />
        <polygon points="1020,330 1015,320 1025,320" fill="black" opacity={strokeOpacity} />
      </g>

      {/* BR -> BM */}
      <g className={`transition-opacity duration-500 ${fade(visible.a4)}`}>
        <line x1="950" y1="410" x2="720" y2="410" stroke="black" strokeWidth="2" strokeOpacity={strokeOpacity} strokeDasharray={dash} />
        <polygon points="720,410 730,405 730,415" fill="black" opacity={strokeOpacity} />
      </g>

      {/* BM -> BL */}
      <g className={`transition-opacity duration-500 ${fade(visible.a5)}`}>
        <line x1="480" y1="410" x2="250" y2="410" stroke="black" strokeWidth="2" strokeOpacity={strokeOpacity} strokeDasharray={dash} />
        <polygon points="250,410 260,405 260,415" fill="black" opacity={strokeOpacity} />
      </g>
    </svg>
  );
}