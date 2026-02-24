"use client";
import { useState } from "react";

export default function StudentShowcase() {
  const cards = [
    {
      id: 1,
      title: "E‑Commerce App design",
      author: "Priya",
      category: "UI/UX Designing",
      image: "/projects/ecommerce.png",
    },
    {
      id: 2,
      title: "Food App design",
      author: "Divya",
      category: "UI/UX Designing",
      image: "/projects/foodapp.avif",
    },
    {
      id: 3,
      title: "Fitness Website design",
      author: "Mohan",
      category: "Front End Dev",
      image: "/projects/fitness.jpg",
    },
  ];

  const [active, setActive] = useState(1);

  const getPosition = (index) => {
    if (index === active) return "center";
    if (index === (active === 0 ? 2 : active - 1)) return "left";
    return "right";
  };

  return (
    <section className="py-3 px-6 mt-4 max-w-7xl mx-auto bg-[#6621BA]">
      <h2 className="text-lg font-bold text-center text-white">
        Students Success Projects
      </h2>
      <p className="text-center text-sm text-white mt-2 mb-5">
        See what our students have built and achieved
      </p>

      <div className="relative flex items-center justify-center h-[380px]">

        {cards.map((card, index) => {
          const pos = getPosition(index);

          return (
            <div
              key={card.id}
              onClick={() => setActive(index)}
              className={`
                absolute cursor-pointer transition-all duration-1000 ease-in-out
                ${pos === "center" ? "z-30 scale-110" : ""}
                ${pos === "left" ? "z-20 -translate-x-[25rem] scale-90 " : ""}
                ${pos === "right" ? "z-20 translate-x-[25rem] scale-90 " : ""}
              `}
            >
              <div
                className={`
                  relative w-[360px] h-[360px] rounded-xl overflow-hidden shadow-xl transition-all duration-1000 ease-in-out
                  ${pos === "center" ? "bg-transparent p-0" : "bg-white p-4"}
                `}
              >

                {/* IMAGE — now fills entire card when centered */}
                <div
                  className={`
                    relative overflow-hidden rounded-xl transition-all duration-1000 ease-in-out
                    ${pos === "center" ? "absolute  h-full w-full" : "w-full h-64 rounded-2xl"}
                  `}
                >
                  <img
                    src={card.image}
                    className={`
                      object-cover transition-all duration-1000 ease-in-out
                      ${pos === "center" ? "w-full h-full" : "w-full h-full"}
                    `}
                  />

                  {/* Overlay only on image */}
                  {pos === "center" && (
                    <div className="absolute  bg-black/40 transition-all duration-1000 ease-in-out"></div>
                  )}
                </div>

                {/* DETAILS — now floats above image when centered */}
                <div
                  className={`
                    transition-all duration-700
                    ${pos === "center" ? "absolute bottom-4 left-4 right-4 text-white" : "mt-1 mx-2 text-black"}
                  `}
                >
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="text-sm opacity-80">{card.author}</p>
                  <p className="text-xs opacity-60">{card.category}</p>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-5">
        <a
          href="#"
          className="bg-[#FF9C00] text-black px-6 py-3 rounded-full font-semibold shadow-md"
        >
          View Showcase →
        </a>
      </div>
    </section>
  );
}
