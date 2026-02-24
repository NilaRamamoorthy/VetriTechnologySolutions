export default function FAQSection() {
  return (
    <section className="mx-auto max-w-4xl px-3 py-2 mb-10">
      <h2 className="text-2xl font-bold text-center ">
        Frequently Asked Questions
      </h2>

      <div className="mt-12  space-y-3">

        <div className="rounded-lg 0 p-4 bg-[#6621BA]/30 shadow-md">
          <h3 className="font-semibold text-xl ">
            What are the course timings?
          </h3>
          <p className="text-black/70 mt-1  leading-relaxed">
            We offer flexible timings including weekday evenings (6–9 PM) and weekend batches (10 AM – 5 PM).
          </p>
        </div>

        <div className="rounded-lg bg-[#6621BA]/30 p-4  shadow-md">
          <h3 className="font-semibold text-xl ">
            Do you offer placement assistance?
          </h3>
          <p className="text-black/70 mt-1 leading-relaxed">
            Yes! VCS provides comprehensive placement support including resume building, interview preparation, and job referrals.
          </p>
        </div>

        <div className="rounded-lg bg-[#6621BA]/30 p-4 shadow-md">
          <h3 className="font-semibold text-xl ">
            What is the batch size?
          </h3>
          <p className="text-black/70 mt-1 leading-relaxed">
            We maintain small batch sizes of 15–20 students to ensure personalized attention and effective learning.
          </p>
        </div>

      </div>
    </section>
  );
}
