

export async function fetchHome() {
  const base = import.meta.env.VITE_API_BASE_URL;
  const res = await fetch(`${base}/api/home/`);
  if (!res.ok) throw new Error("Failed to load home data");
  return res.json();
}
