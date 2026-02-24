import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSiteSettings } from "../hooks/useSiteSettings";

export default function Layout({ children }) {
  const { settings } = useSiteSettings();

  return (
    <div className="min-h-screen bg-white">
      <Header settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
    </div>
  );
}