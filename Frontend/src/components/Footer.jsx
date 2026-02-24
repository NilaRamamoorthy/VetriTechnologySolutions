import { Link } from "react-router-dom";


export default function Footer({ settings }) {
  const logo = settings?.logo_url;

  return (
    <footer className="relative z-50 bg-[#6621BA] text-white">
      <div className="mx-2 max-w-6xl px-6 py-4">

        {/* 5 Columns */}
        <div className="grid gap-10 md:grid-cols-5">

          {/* Column 1: Logo + Address */}
          <div className="flex flex-col items-center text-center">
            <div className="h-28 w-28 rounded-full bg-white shadow-lg overflow-hidden flex items-center justify-center">
              {logo ? (
                <img
                  src={logo}
                  alt="Logo"
                  className="h-full w-full object-cover rounded-full"
                />
              ) : (
                <div className="h-full w-full bg-black/10 rounded-full" />
              )}
            </div>

            <div className="mt-6">
              <div className="text-xl font-semibold tracking-wide">Address</div>
              <div className="mt-3 text-sm text-white/85 leading-relaxed max-w-xs">
                {settings?.address || "Add address from admin"}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="ms-5">
            <div className="text-lg font-semibold mb-4 tracking-wide">Quick Links</div>
            <div className="flex flex-col gap-3 text-sm text-white/90">
              <Link to="/about" className="hover:text-[#FF9C00] transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-[#FF9C00] transition-colors">Contact Us</Link>
              <Link to="/courses" className="hover:text-[#FF9C00] transition-colors">Courses</Link>
            </div>
          </div>

          {/* Column 3: Support */}
          <div>
            <div className="text-lg font-semibold mb-4 tracking-wide">Support</div>
            <div className="flex flex-col gap-3 text-sm text-white/90">
              <Link to="/terms" className="hover:text-[#FF9C00] transition-colors">Terms &amp; Conditions</Link>
              <Link to="/privacy" className="hover:text-[#FF9C00] transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Column 4: Network */}
          <div>
            <div className="text-lg font-semibold mb-4 tracking-wide">Our Network</div>
            <div className="flex flex-col gap-3 text-sm text-white/90">
              <div>Vetri Technology Solution (VTS)</div>
              <div>Vetri IT System (VIS)</div>
              <div>Vetri Consultancy Services (VCS)</div>
            </div>
          </div>

          {/* Column 5: Contact + Social */}
          <div>
            <div className="text-lg font-semibold mb-4 tracking-wide">Get In Touch</div>
            <div className="space-y-2 text-sm text-white/90">
              {settings?.phone && <div>Call: +91- {settings.phone}</div>}
              {settings?.email && <div>Email: {settings.email}</div>}
            </div>

            <div className="mt-6 text-lg font-semibold tracking-wide">Follow Us</div>
            <div className="mt-3 flex items-center gap-4 text-xl">
              {settings?.facebook && (
                <a href={settings.facebook} target="_blank" rel="noreferrer" className="hover:text-[#FF9C00] transition-colors">
                  <i className="bi bi-facebook text-white" />
                </a>
              )}
              {settings?.instagram && (
                <a href={settings.instagram} target="_blank" rel="noreferrer" className="hover:text-[#FF9C00] transition-colors">
                  <i className="bi bi-instagram text-white" />
                </a>
              )}
              {settings?.linkedin && (
                <a href={settings.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#FF9C00] transition-colors">
                  <i className="bi bi-linkedin" />
                </a>
              )}
              {settings?.youtube && (
                <a href={settings.youtube} target="_blank" rel="noreferrer" className="hover:text-[#FF9C00] transition-colors">
                  <i className="bi bi-youtube" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-1 border-t border-white/20 pt-4 text-center text-xs text-white/85 tracking-wide">
          {settings?.footer_note || "© 2026 All Rights Reserved By DITRP"}
        </div>
      </div>
    </footer>
  );
}
