import { useEffect, useState } from "react";
import { fetchHome } from "../api/home";

export function useHome() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHome()
      .then(setData)
      .catch((e) => setError(e?.message || "Error"))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
