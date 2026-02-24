import BoyImg from "../assets/boy.png";

export default function HowVTSWorks({ steps = [] }) {
    if (!steps.length) return null;

    const items = steps.slice(0, 4);

    const topIcon = (idx) => {
        const icons = ["bi-journal-text", "bi-mortarboard", "bi-laptop", "bi-trophy"];
        return icons[idx] || "bi-stars";
    };

    return (
        <section className="relative py-20 overflow-hidden">

            {/* Bigger Boy Image */}
            <div className="absolute right-[5%] top-4 hidden lg:block z-20">
                <img
                    src={BoyImg}
                    alt="Student"
                    className="h-[400px] w-[260px] drop-shadow-2xl"
                />
            </div>

            {/* SMALLER CENTERED CONTAINER */}
            <div className="mx-auto max-w-4xl">

                {/* Title */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">How VTS Works</h2>
                    <p className="mt-2 text-base text-black/70">
                        Your Journey from Student to Tech Professional
                    </p>
                </div>

                {/* Animated Frame */}
                <div className="vts-frame mt-12">

                    <div className="relative z-10 px-10 py-12">

                        {/* TOP FLOW LINE */}
                        <div className="absolute left-[12%] right-[12%] top-4 h-[4px]  bg-gradient-to-r from-[#6621BA] via-[#FF9C00] to-[#6621BA]" />

                        {/* Cards Row */}
                        <div className="relative flex justify-between mt-12">

                            {items.map((s, idx) => (
                                <div key={s.id} className="relative w-[23%]">

                                    {/* CONNECTOR LINES (RECTANGLE STYLE) */}
                                    {idx !== items.length - 1 && (
                                        <>
                                            {/* horizontal */}
                                            <div className="absolute top-1/2 right-[-55%] h-[2px] w-[110%] bg-gradient-to-r from-[#6621BA] to-[#FF9C00]" />
                                            {/* vertical drop */}
                                            <div className="absolute right-[-55%] top-1/2 h-10 w-[2px] bg-[#FF9C00]" />
                                        </>
                                    )}

                                    {/* CARD */}
                                    <div className="relative rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.25)] overflow-hidden">

                                        {/* Smooth Conic Gradient */}
                                        <div className="absolute inset-0 bg-[conic-gradient(at_30%_30%,_#FFE7B3,_#F8D38F,_#FFE7B3)]" />

                                        {/* soft overlay */}
                                        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

                                        <div className="relative z-10 px-5 py-8 text-center">

                                            <div className="flex justify-center">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
                                                    {s.icon_url ? (
                                                        <img
                                                            src={s.icon_url}
                                                            alt={s.title}
                                                            className="h-8 w-8 object-contain"
                                                        />
                                                    ) : (
                                                        <div className="h-8 w-8 rounded bg-black/10" />
                                                    )}
                                                </div>
                                            </div>


                                            <div className="mt-4 flex justify-center">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6621BA] text-white text-sm font-semibold">
                                                    {idx + 1}
                                                </div>
                                            </div>

                                            <h3 className="mt-4 text-base font-semibold">
                                                {s.title}
                                            </h3>

                                            <p className="mt-2 text-sm text-black/70">
                                                {s.description}
                                            </p>

                                        </div>
                                    </div>

                                    {/* Bottom Line Segment */}
                                    <div className="mx-auto mt-6 h-2 w-24 rounded-full bg-gradient-to-r from-[#6621BA] to-[#FF9C00]" />

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
