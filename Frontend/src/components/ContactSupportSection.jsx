// If using src/assets:
import mapImg from "../assets/contact-map.jpeg";
// If using public folder instead, remove the import and use src="/contact-map.png"

export default function ContactSupportSection() {
  // placeholder location (replace later)
  const mapLink = "https://www.google.com/maps?q=Vetri+Technology+Solution&z=15";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-2xl font-semibold text-black">We are here for You</h3>

        <div className="mt-10 grid gap-10 lg:grid-cols-[390px_1fr] items-start">
          {/* LEFT: cards */}
          <div className="space-y-8">
            <InfoCard
              icon={<i className="bi bi-envelope-fill text-2xl text-white" />}
              title="Email Us"
              lines={["vetrimachinerysolutions@gmail.com"]}
            />
            <InfoCard
              icon={<i className="bi bi-telephone-fill text-2xl text-white" />}
              title="Call Us"
              lines={["8438558527", "8438164827"]}
            />
            <InfoCard
              icon={<i className="bi bi-clock-fill text-2xl text-white" />}
              title="Office Hours"
              lines={["Mon - Sat : 10:00 AM - 5:00 PM", "Sunday closed"]}
            />
          </div>

          {/* RIGHT: map */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
              <img
                src={mapImg /* or "/contact-map.png" if public */}
                alt="VTS Location Map"
                className="h-[505px] w-full object-cover"
              />
            </div>

            {/* bottom overlay like search bar */}
            <div className="absolute bottom-5 left-1/2 w-[86%] -translate-x-1/2">
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl bg-white px-5 py-3 shadow-md border border-black/10"
              >
                <span className="text-base font-medium text-black">
                  Vetri Technology solution
                </span>

                <span className="flex h-7 w-8 items-center justify-center rounded-lg bg-[#6621BA]/10 text-[#6621BA]">
                  <i className="bi bi-box-arrow-up-right text-xl" />
                </span>
              </a>
              <p className="mt-2 text-sm text-black/60">
                Click to open location (placeholder)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, lines }) {
  return (
    <div className="rounded-2xl border-2 border-[#BFA6E8] bg-white p-7 shadow-sm">
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6621BA]">
          {icon}
        </div>

        <div>
          <div className="text-xl font-semibold text-black">{title}</div>
          <div className="mt-3 space-y-2 text-base text-black/80">
            {lines.map((t, idx) => (
              <div key={idx}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}