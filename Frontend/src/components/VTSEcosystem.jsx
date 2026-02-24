export default function VTSEcosystem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      {/* 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

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
                <h2 className="text-center text-xl font-bold text-[#6621BA] leading-snug px-6">
                  The Complete <br /> VTS Ecosystem
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — CARDS */}
        <div className="space-y-10">

          {/* VTS CARD */}
          <div className="relative -ms-6">
            {/* Orange shadow block */}
            <div className="absolute inset-0 bg-[#FF9C00] rounded-full translate-y-2 mt-2"></div>

            {/* White card */}
            <div className="relative bg-white rounded-full border px-5 -ms-5 shadow-md grid transition-all duration-200 
                hover:-translate-x-4 hover:scale-[1.03] grid-cols-[70px_1fr_auto] gap-6 items-start w-full">
              <img src="/ecosystem/vts.jpg" className="w-16 h-16 object-contain mt-2" />

              <div>
                <h3 className="text-md font-bold text-[#6621BA]">
                  Vetri Technology Solution (VTS)
                </h3>

                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                    <span className="text-black/70 text-sm">IT training programs</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                    <span className="text-black/70 text-sm">Practical skill development</span>
                  </li>
                </ul>

              </div>

              <div className="flex justify-start">
                <a href="#" className="-ms-3 text-[#FF9C00] font-semibold text-sm">
                  Site →
                </a>
              </div>
            </div>
          </div>

          {/* VIS CARD */}
          <div className="relative ms-6">
            <div className="absolute inset-0 bg-[#FF9C00] rounded-full translate-y-2"></div>

            <div className="relative bg-white rounded-full border px-5 -ms-5 shadow-md grid transition-all duration-200 
                hover:-translate-x-4 hover:scale-[1.03] grid-cols-[70px_1fr_auto] gap-6 items-start w-full">
              <img src="/ecosystem/vis.webp" className="w-16 h-16 object-contain mt-2" />

              <div>
                <h3 className="text-lg font-bold text-[#6621BA]">
                  Vetri IT System (VIS)
                </h3>

                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check2 text-[#FF9C00] text-sm "></i>
                    <span className="text-black/70 text-sm">Internship opportunities</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                    <span className="text-black/70 text-sm">Real industry exposure</span>
                  </li>
                </ul>

              </div>

              <div className="flex justify-end">
                <a href="#" className="text-[#FF9C00] font-semibold text-sm">
                  Site →
                </a>
              </div>
            </div>
          </div>

          {/* VCS CARD */}
          <div className="relative -ms-6">
            <div className="absolute inset-0 bg-[#FF9C00] rounded-full translate-y-2"></div>

            <div className="relative bg-white rounded-full border px-5 -ms-5 shadow-md grid transition-all duration-200 
                hover:-translate-x-4 hover:scale-[1.03] grid-cols-[70px_1fr_auto] gap-6 items-start w-full">
              <img src="/ecosystem/vcs.jpg" className="w-16 h-16 object-contain mt-2" />

              <div>
                <h3 className="text-lg font-bold text-[#6621BA]">
                  Vetri Consultancy Services (VCS)
                </h3>

                <ul className="mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                    <span className="text-black/70 text-sm">Career guidance</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <i className="bi bi-check2 text-[#FF9C00] text-sm"></i>
                    <span className="text-black/70 text-sm">Job‑related consultation</span>
                  </li>
                </ul>

              </div>

              <div className="flex justify-end">
                <a href="#" className="text-[#FF9C00] font-semibold text-sm">
                  Site →
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
