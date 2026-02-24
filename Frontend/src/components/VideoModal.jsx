export default function VideoModal({ open, onClose, src, isFile }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl overflow-hidden rounded-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 text-white">
          <div className="text-sm text-white/70">Testimonial</div>
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
          >
            Close
          </button>
        </div>

        <div className="aspect-video bg-black">
          {isFile ? (
            <video className="h-full w-full" controls autoPlay playsInline src={src} />
          ) : (
            <iframe
              className="h-full w-full"
              src={src}
              title="Video testimonial"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}
