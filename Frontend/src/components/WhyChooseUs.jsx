export default function WhyChooseUs() {
    // 🔹 All data lives inside the component now
    const why = {
        heading: "Why Choose Us",
        left_image_url: "/images/why-left.png",

        items: [
            {
                id: 1,
                icon_class: "bi-lightning-charge",
                title: "Fast Learning",
                description: "We provide quick and effective learning methods."
            },
            {
                id: 2,
                icon_class: "bi-people",
                title: "Expert Mentors",
                description: "Learn from industry professionals."
            },
            {
                id: 3,
                icon_class: "bi-award",
                title: "Certified Programs",
                description: "Get recognized certifications."
            },
            {
                id: 4,
                icon_class: "bi-graph-up",
                title: "Career Growth",
                description: "We help you grow with structured guidance."
            }
        ]
    };

    return (
        <section className="mx-auto max-w-7xl px-6 py-16 relative">

            {/* Heading */}
            <h2 className="text-3xl font-bold text-center mb-14 text-[#6621BA]">
                {why.heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE WITH PURPLE SHAPE */}
                {/* LEFT SIDE */}
                <div className="flex items-center md:items-start gap-12">

                    {/* Boy Illustration with Glow */}
                    <div className="relative">
                        <div className="
  absolute w-64 h-64 bg-[#6621BA]/30 top-8 left-6
  rounded-tl-[130px]
  rounded-br-[130px]
  rounded-tr-[30px]
  rounded-bl-[30px]
"></div>


                        <img
                            src="/ecosystem/boy.png"
                            alt="Boy"
                            className="w-[250px] h-[350px] -mt-16 ms-12 md:w-96 z-10 drop-shadow-2xl "
                        />
                    </div>

                    {/* White Circle Title */}
                    <div className="flex justify-center md:justify-start mt-12">
                        <div className=" shadow-2xl rounded-full border-r-[14px] p-8 border-[#6621BA] flex items-center justify-center">
                            <div className="relative w-48 h-48 rounded-full  bg-white border-[#6621BA] flex items-center justify-center">
                                <h2 className="text-center text-xl font-bold leading-snug px-6">
                                    Why Choose Us
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>


                {/* RIGHT SIDE — MATCHED TO VTS ECOSYSTEM STYLE */}
                {/* RIGHT SIDE — CARDS */}
                <div className="space-y-10">

                    {/* CARD 1*/}
                    <div className="relative -ms-6">
                        {/* Orange shadow block */}
                        <div className="absolute w-[550px] inset-0 bg-[#FF9C00] rounded-full translate-y-2 md:-ms-16 mt-3"></div>

                        {/* White card */}
                        <div className="relative w-[590px] bg-white rounded-full border px-2 pt-2 md:-ms-28 shadow-md grid transition-all duration-200 
                hover:-translate-x-4 hover:scale-[1.03] grid-cols-[70px_1fr_auto] gap-1 items-start w-md">
                            <div className="bg-[#6621BA] flex items-center justify-center h-10 w-10 rounded-full">
                                <i className="bi bi-people text-white text-md"></i>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold">
                                    Industry Experience Trainers
                                </h3>

                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                                        <span className="text-black/70 text-xs">Learn from professionala with 10+years of real-world industry experience.</span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                    {/* CARD 2*/}
                    <div className="relative -ms-6">
                        {/* Orange shadow block */}
                        <div className="absolute w-[590px] inset-0 bg-[#FF9C00] rounded-full translate-y-2 mt-2 md:-ms-12"></div>

                        {/* White card */}
                        <div className="relative bg-white rounded-full border px-2 pt-2 md:-ms-20 shadow-md grid transition-all duration-200 
                hover:-translate-x-4 hover:scale-[1.03] grid-cols-[70px_1fr_auto] gap-1 items-start w-full">
                            <div className="bg-[#6621BA] flex items-center justify-center h-10 w-10 rounded-full">
                                <i className="bi bi-camera text-white text-md"></i>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold">
                                   Live Interactive Classes
                                </h3>

                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                                        <span className="text-black/70 text-xs">Engage in real-time discussions and get instant doubt resolutions.</span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                    {/* CARD 3*/}
                    <div className="relative -ms-6">
                        {/* Orange shadow block */}
                        <div className="absolute inset-0 bg-[#FF9C00] rounded-full translate-y-2 mt-2"></div>

                        {/* White card */}
                        <div className="relative bg-white rounded-full border px-2 pt-2 -ms-5 shadow-md grid transition-all duration-200 
                hover:-translate-x-4 hover:scale-[1.03] grid-cols-[70px_1fr_auto] gap-1 items-start w-full">
                            <div className="bg-[#6621BA] flex items-center justify-center h-10 w-10 rounded-full">
                                <i className="bi bi-lightbulb text-white text-md"></i>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold">
                                    Practical Learning Approach
                                </h3>

                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                                        <span className="text-black/70 text-xs">Work on real projects and build a strong portfolio while you learn.</span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                    {/* CARD 4*/}
                    <div className="relative -ms-6">
                        {/* Orange shadow block */}
                        <div className="absolute inset-0 bg-[#FF9C00] rounded-full translate-y-2 mt-2"></div>

                        {/* White card */}
                        <div className="relative bg-white rounded-full border px-2 pt-2 -ms-5 shadow-md grid transition-all duration-200 
                hover:-translate-x-4 hover:scale-[1.03] grid-cols-[70px_1fr_auto] gap-1 items-start w-full">
                            <div className="bg-[#6621BA] flex items-center justify-center h-10 w-10 rounded-full">
                                <i className="bi bi-graph-up text-white text-md"></i>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold">
                                    Career-Focused Training
                                </h3>

                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                                        <span className="text-black/70 text-xs">Course content aligned with current industry requirements and trends</span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                    {/* CARD 5*/}
                    <div className="relative -ms-6">
                        {/* Orange shadow block */}
                        <div className="absolute w-[590px] inset-0 bg-[#FF9C00] rounded-full translate-y-2 mt-2 md:-ms-8"></div>

                        {/* White card */}
                        <div className="relative bg-white rounded-full border px-2 pt-2 md:-ms-12 shadow-md grid transition-all duration-200 
                hover:-translate-x-4 hover:scale-[1.03] grid-cols-[70px_1fr_auto] gap-1 items-start w-full">
                            <div className="bg-[#6621BA] flex items-center justify-center h-10 w-10 rounded-full">
                                <i className="bi bi-heart text-white text-md"></i>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold">
                                    Mentorship & Support
                                </h3>

                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                                        <span className="text-black/70 text-xs">Personalized guidance and continuous support throughout your journey</span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                    {/* CARD 6*/}
                    <div className="relative -ms-22">
                        {/* Orange shadow block */}
                        <div className="absolute w-[540px] inset-0 bg-[#FF9C00] rounded-full translate-y-2 mt-3 ms-0 md:-ms-20"></div>

                        {/* White card */}
                        <div className="relative bg-white rounded-full border px-2 pt-2 md:-ms-32 shadow-md grid transition-all duration-200 
                hover:-translate-x-4 hover:scale-[1.03] grid-cols-[70px_1fr_auto] gap-1 items-start w-full">
                            <div className="bg-[#6621BA] flex items-center justify-center h-10 w-10 rounded-full">
                                <i className="bi-badge-ad text-white text-md"></i>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold">
                                    Industry Certification
                                </h3>

                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                                        <span className="text-black/70 text-xs">Receive recognized certifications to boost your career prospects</span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
}
