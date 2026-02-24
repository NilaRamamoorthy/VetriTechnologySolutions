import { useState } from "react";

export default function LearningEnvironment() {
  const images = [
    "/learning/env1.webp",
    "/learning/env2.jpg",
    "/learning/env3.jpg",
    "/learning/env4.jpg",
    "/learning/env5.jpg",
    "/learning/env6.jpg",
    "/learning/env7.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const itemsPerView = 4;
  const maxIndex = Math.ceil(images.length / itemsPerView) - 1;

  const handleScroll = () => {
    if (!expanded) {
      setExpanded(true);
      return;
    }
    setIndex((prev) => {
      if (prev < maxIndex) return prev + 1;
      return 0;
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-[#6621BA]">
          Our Learning Environment
        </h2>

        <button
          onClick={handleScroll}
          className="flex items-center gap-2 text-[#6621BA] font-semibold text-lg"
        >
          View All
          <span className="text-2xl">
            {!expanded ? "→" : index < maxIndex ? "→" : "←"}
          </span>
        </button>
      </div>

      {/* Carousel */}
      <div className="relative mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-4"
          style={{
            transform: `translateX(-${index * 100}%)`,
            width: `${(images.length / itemsPerView) * 100}%`,
          }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-[18%] flex-shrink-0">
              <img
                src={src}
                className="w-full h-[350px] object-cover rounded-xl cursor-pointer shadow"
                onClick={() => {
                  setLightbox(true);
                  setLightboxIndex(i);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setLightbox(false)}
          >
            ✕
          </button>

          <button
            onClick={() =>
              setLightboxIndex((i) => (i - 1 + images.length) % images.length)
            }
            className="absolute left-10 text-white text-5xl"
          >
            ‹
          </button>

          <img
            src={images[lightboxIndex]}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />

          <button
            onClick={() =>
              setLightboxIndex((i) => (i + 1) % images.length)
            }
            className="absolute right-10 text-white text-5xl"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
