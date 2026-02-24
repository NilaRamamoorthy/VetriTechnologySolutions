import { useRef, useState } from "react";
import VideoModal from "./VideoModal";

export default function VideoTestimonials({ items }) {
  const scrollerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");
  const [isFile, setIsFile] = useState(true);

  const drag = useRef({ down: false, x: 0, left: 0 });

  const onMouseDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = { down: true, x: e.pageX, left: el.scrollLeft };
  };

  const onMouseLeave = () => (drag.current.down = false);
  const onMouseUp = () => (drag.current.down = false);

  const onMouseMove = (e) => {
    const el = scrollerRef.current;
    if (!el || !drag.current.down) return;
    e.preventDefault();
    const walk = (e.pageX - drag.current.x) * 1.2;
    el.scrollLeft = drag.current.left - walk;
  };

  const play = (item) => {
    const fileUrl = item.video_file_url;
    const url = item.video_url;

    if (fileUrl) {
      setIsFile(true);
      setSrc(fileUrl);
      setOpen(true);
      return;
    }
    if (url) {
      setIsFile(false);
      setSrc(url);
      setOpen(true);
    }
  };

  return (
    <section className="mx-auto max-w-8xl px-6 py-5">

      {/* Heading */}
      <div className=" mb-10">
        <h2 className="text-2xl font-bold ">
          Stories from Our Successful Learners
        </h2>
        <p className="text-black/60 mt-2">
          Real stories from real students who transformed their careers.
        </p>
      </div>

      {/* Drag note */}
      <div className="flex justify-end text-sm text-black/50 mb-2">
        Drag to explore →
      </div>

      {/* Scroller */}
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => play(item)}
            className="group relative w-[260px] h-[300px] shrink-0 overflow-hidden rounded-2xl border border-[#E5D8FF] shadow-[0_4px_20px_rgba(102,33,186,0.15)] bg-white"
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-black/10">
              {item.thumbnail_url ? (
                <img
                  src={item.thumbnail_url}
                  alt={item.name || "Video testimonial"}
                  className="h-[300px] w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-black/10" />
              )}
            </div>

            {/* Glass Name + Role + Play Button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 
              bg-[#6621BA]/30 backdrop-blur-lg 
              border-t border-white/20 
              flex items-center justify-between">

              {/* Name + Role */}
              <div>
                <div className="font-semibold text-lg text-white leading-tight">
                  {item.name || "Student"}
                </div>
                <div className="text-sm text-white">{item.role}</div>
              </div>

              {/* Play Button */}
              <div className="flex h-12 w-12 items-center justify-center 
                rounded-full bg-black/40 text-white backdrop-blur 
                hover:bg-black/60 transition">
                <i className="bi bi-play-fill text-2xl" />
              </div>

            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        src={src}
        isFile={isFile}
      />
    </section>
  );
}
