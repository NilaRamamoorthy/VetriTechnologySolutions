import { useEffect, useState } from "react";

export function useSiteSettings() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL;

    fetch(`${base}/api/home/`) // site_settings is already included here
      .then((r) => r.json())
      .then((data) => setSettings(data.site_settings || null))
      .finally(() => setLoading(false));
  }, []);

  return { settings, loading };
}