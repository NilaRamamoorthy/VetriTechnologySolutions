import { useEffect, useMemo, useState } from "react";

export default function EnrollModal({ open, onClose, course, coursesList = [] }) {
  const base = import.meta.env.VITE_API_BASE_URL;

  const [step, setStep] = useState(0); // 0,1,2,3(success)
  const [enrollment, setEnrollment] = useState(null);
  const [paymentResult, setPaymentResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [payMethod, setPayMethod] = useState("upi");

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    message: "",
    course: course?.id || "",
    mode: "",
  });

  useEffect(() => {
    if (!open) return;
    setStep(0);
    setEnrollment(null);
    setPaymentResult(null);
    setErr("");
    setLoading(false);
    setPayMethod("upi");
    setForm((f) => ({
      ...f,
      course: course?.id || f.course || "",
    }));
  }, [open, course?.id]);

  const selectedCourseObj = useMemo(() => {
    if (course?.id) return course;
    const id = Number(form.course);
    return coursesList.find((c) => Number(c.id) === id) || null;
  }, [course, coursesList, form.course]);

  const courseAmount = Number(selectedCourseObj?.course_fee || selectedCourseObj?.course_fee === 0 ? selectedCourseObj.course_fee : enrollment?.amount || 0);
  const gst = Math.round(courseAmount * 0.0333); // demo (like screenshot). later make dynamic
  const total = courseAmount + gst;

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  if (!open) return null;

  const submitDetails = async () => {
    setErr("");
    setLoading(true);
    try {
      const required = ["first_name", "phone", "email", "gender", "address", "city", "state", "pincode", "course", "mode"];
      for (const k of required) {
        if (!String(form[k] || "").trim()) throw new Error("Please fill all required fields.");
      }

      const payload = {
        ...form,
        amount: total, // store total for now (course + gst)
      };

      const res = await fetch(`${base}/api/enrollments/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit enrollment");

      const data = await res.json();
      setEnrollment(data);
      setStep(1);
    } catch (e) {
      setErr(e?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  const confirmDetails = async () => {
    setErr("");
    setLoading(true);
    try {
      const res = await fetch(`${base}/api/enrollments/${enrollment.id}/confirm/`, { method: "POST" });
      if (!res.ok) throw new Error("Failed to confirm");
      const data = await res.json();
      setEnrollment(data);
      setStep(2);
    } catch (e) {
      setErr(e?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  const payNow = async () => {
    setErr("");
    setLoading(true);
    try {
      const res = await fetch(`${base}/api/enrollments/${enrollment.id}/pay/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ method: payMethod }),
      });
      if (!res.ok) throw new Error("Payment failed");
      const data = await res.json();
      setPaymentResult(data.payment);
      setStep(3);
    } catch (e) {
      setErr(e?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 p-4" onClick={onClose}>
      <div
        className="mx-auto w-full max-w-5xl overflow-hidden rounded-[35px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header / stepper */}
        <div className="relative px-10 pt-8">
          <button
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-black/40 text-xl"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>

          <Stepper current={step} />
        </div>

        {/* content */}
        <div className="max-h-[78vh] overflow-auto px-12 pb-10 pt-6">
          {err ? <div className="mb-5 rounded-xl bg-red-50 p-3 text-red-700">{err}</div> : null}

          {step === 0 && (
            <EnterDetails
              form={form}
              update={update}
              coursesList={coursesList}
              loading={loading}
              onSubmit={submitDetails}
            />
          )}

          {step === 1 && enrollment && (
            <ConfirmDetails
              enrollment={enrollment}
              courseTitle={selectedCourseObj?.title || enrollment.course_title || ""}
              onEdit={() => setStep(0)}
              onConfirm={confirmDetails}
              loading={loading}
            />
          )}

          {step === 2 && enrollment && (
            <PaymentStep
              courseAmount={courseAmount}
              gst={gst}
              total={total}
              payMethod={payMethod}
              setPayMethod={setPayMethod}
              loading={loading}
              onPay={payNow}
            />
          )}

          {step === 3 && enrollment && paymentResult && (
            <SuccessStep enrollment={enrollment} payment={paymentResult} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- UI Blocks ---------------- */

function Stepper({ current }) {
  // current: 0 enter, 1 confirm, 2 pay, 3 success
  const enterDone = current > 0;
  const confirmDone = current > 1;
  const payActive = current === 2;

  return (
    <div className="flex items-center justify-between gap-6">
      <Pill label="Enter Details" variant={enterDone ? "done" : current === 0 ? "active" : "idle"} />
      <Line active={enterDone} />

      <Pill label="Confirm Details" variant={confirmDone ? "done" : current === 1 ? "active" : "idle"} />
      <Line active={confirmDone} />

      <Pill label="Payment" variant={current >= 2 ? (current === 2 ? "active" : "done") : "idle"} />
    </div>
  );
}

function Pill({ label, variant }) {
  const cls =
    variant === "active"
      ? "bg-[#FF9C00] text-white"
      : variant === "done"
      ? "bg-[#3E9B43] text-white"
      : "bg-[#EAEAEA] text-black";

  return (
    <div className={`flex min-w-[220px] items-center justify-center rounded-full px-10 py-4 text-lg font-semibold ${cls}`}>
      {label}
      {variant === "done" ? (
        <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#3E9B43] font-extrabold">
          ✓
        </span>
      ) : null}
    </div>
  );
}

function Line({ active }) {
  return <div className={`h-[3px] flex-1 ${active ? "bg-[#3E9B43]" : "bg-black/70"}`} />;
}

function Title({ children }) {
  return <h2 className="text-center text-4xl font-semibold text-black">{children}</h2>;
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-lg font-semibold">
        {label} {required ? <span className="text-red-600">*</span> : null}
      </div>
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={
        "w-full rounded-xl border-[3px] border-[#B9B9B9] px-5 py-4 text-lg outline-none focus:border-[#6621BA] " +
        (props.className || "")
      }
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className={
        "w-full rounded-xl border-[3px] border-[#B9B9B9] bg-white px-5 py-4 text-lg outline-none focus:border-[#6621BA] " +
        (props.className || "")
      }
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={
        "w-full rounded-xl border-[3px] border-[#B9B9B9] px-5 py-4 text-lg outline-none focus:border-[#6621BA] " +
        (props.className || "")
      }
    />
  );
}

/* ---------------- Step 1 ---------------- */

function EnterDetails({ form, update, coursesList, loading, onSubmit }) {
  return (
    <>
      <Title>Enter Correct Details</Title>

      <div className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-3">
        <Field label="First Name" required>
          <Input placeholder="First name" value={form.first_name} onChange={(e) => update("first_name", e.target.value)} />
        </Field>

        <Field label="Last Name">
          <Input placeholder="Last name" value={form.last_name} onChange={(e) => update("last_name", e.target.value)} />
        </Field>

        <Field label="Phone Number" required>
          <Input placeholder="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </Field>

        <Field label="Email Address" required>
          <Input placeholder="Email" value={form.email} onChange={(e) => update("email", e.target.value)} />
        </Field>

        <Field label="Gender" required>
          <Select value={form.gender} onChange={(e) => update("gender", e.target.value)}>
            <option value="">Please Select</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </Select>
        </Field>

        <Field label="Date of Birth" required>
          <Input type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} />
        </Field>

        <Field label="Address" required>
          <Input placeholder="Address" value={form.address} onChange={(e) => update("address", e.target.value)} />
        </Field>

        <Field label="City" required>
          <Input placeholder="City" value={form.city} onChange={(e) => update("city", e.target.value)} />
        </Field>

        <Field label="State" required>
          <Input placeholder="State" value={form.state} onChange={(e) => update("state", e.target.value)} />
        </Field>

        <Field label="Pincode" required>
          <Input placeholder="Pincode" value={form.pincode} onChange={(e) => update("pincode", e.target.value)} />
        </Field>

        <Field label="Select Course" required>
          <Select value={form.course} onChange={(e) => update("course", e.target.value)}>
            <option value="">Please Select</option>
            {coursesList.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Available Mode" required>
          <Select value={form.mode} onChange={(e) => update("mode", e.target.value)}>
            <option value="">Please Select</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Online & Offline</option>
          </Select>
        </Field>

        <div className="md:col-span-3">
          <Field label="Message">
            <Textarea rows={4} placeholder="Type here..." value={form.message} onChange={(e) => update("message", e.target.value)} />
          </Field>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <button
          onClick={onSubmit}
          disabled={loading}
          className="rounded-2xl bg-[#FF9C00] px-10 py-4 text-lg font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </>
  );
}

/* ---------------- Step 2 ---------------- */

function ConfirmDetails({ enrollment, courseTitle, onEdit, onConfirm, loading }) {
  const left = [
    ["First Name", enrollment.first_name],
    ["Last Name", enrollment.last_name || "-"],
    ["Phone No", enrollment.phone],
    ["Email Id", enrollment.email],
    ["Gender", enrollment.gender],
    ["Date of Birth", enrollment.dob || "-"],
  ];

  const right = [
    ["Address", enrollment.address],
    ["City", enrollment.city],
    ["State", enrollment.state],
    ["Pincode", enrollment.pincode],
    ["Course Name", courseTitle || enrollment.course_title || "-"],
    ["Mode", enrollment.mode],
  ];

  return (
    <>
      <Title>Please Confirm Your Details</Title>

      <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-[#EFE6FF] p-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            {left.map(([k, v]) => (
              <ConfirmRow key={k} k={k} v={v} />
            ))}
          </div>
          <div className="space-y-6">
            {right.map(([k, v]) => (
              <ConfirmRow key={k} k={k} v={v} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center gap-10">
        <button
          onClick={onEdit}
          disabled={loading}
          className="min-w-[220px] rounded-2xl border border-[#FF9C00] px-10 py-4 text-lg font-semibold"
        >
          Back to Edit
        </button>
        <button
          onClick={onConfirm}
          disabled={loading}
          className="min-w-[220px] rounded-2xl bg-[#FF9C00] px-10 py-4 text-lg font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Confirming..." : "Confirm"}
        </button>
      </div>
    </>
  );
}

function ConfirmRow({ k, v }) {
  return (
    <div className="flex items-center gap-4 text-xl">
      <div className="w-[150px] font-medium">{k}</div>
      <div className="font-medium">:</div>
      <div className="font-semibold">{v}</div>
    </div>
  );
}

/* ---------------- Step 3 ---------------- */

function PaymentStep({ courseAmount, gst, total, payMethod, setPayMethod, loading, onPay }) {
  return (
    <>
      <Title>Choose Your Payment Option</Title>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {/* Left: amount breakdown */}
        <div className="pt-4">
          <div className="space-y-8 text-2xl">
            <div className="flex justify-between">
              <span>Course Amount</span>
              <span>₹{formatMoney(courseAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST</span>
              <span>₹{formatMoney(gst)}</span>
            </div>
            <div className="h-[2px] bg-black/20" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{formatMoney(total)}</span>
            </div>
          </div>
        </div>

        {/* Right: payment methods */}
        <div className="space-y-8">
          <PayOption
            active={payMethod === "upi"}
            onClick={() => setPayMethod("upi")}
            title="UPI"
            icons={
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-black/70">G Pay</span>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#5B2DAA] text-white font-extrabold text-xl">
                  पे
                </div>
              </div>
            }
          />
          <PayOption
            active={payMethod === "netbanking"}
            onClick={() => setPayMethod("netbanking")}
            title="Net Banking"
            icons={<i className="bi bi-bank2 text-4xl text-[#2B4C92]" />}
          />
          <PayOption
            active={payMethod === "card"}
            onClick={() => setPayMethod("card")}
            title="Card"
            icons={
              <div className="flex items-center gap-6">
                <span className="text-sm font-semibold text-black/60">mastercard</span>
                <span className="text-3xl font-extrabold text-[#1A4DBA]">VISA</span>
              </div>
            }
          />

          <div className="pt-4 flex justify-end">
            <button
              onClick={onPay}
              disabled={loading}
              className="min-w-[220px] rounded-2xl bg-[#FF9C00] px-10 py-4 text-xl font-semibold text-white disabled:opacity-60"
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function PayOption({ active, onClick, title, icons }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border px-6 py-6 text-left ${
        active ? "border-[#FF9C00] shadow-[0_0_0_3px_rgba(255,156,0,0.25)]" : "border-black/30"
      }`}
    >
      <div className="flex items-center gap-6">
        <div className={`h-7 w-7 rounded-full border-2 ${active ? "border-[#FF9C00]" : "border-black/40"} flex items-center justify-center`}>
          {active ? <div className="h-4 w-4 rounded-full bg-[#FF9C00]" /> : null}
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-6">
            {icons}
            <div className="text-2xl font-semibold">{title}</div>
          </div>
        </div>
      </div>
    </button>
  );
}

/* ---------------- Step 4 ---------------- */

function SuccessStep({ enrollment, payment, onClose }) {
  const paidAt = payment?.paid_at ? new Date(payment.paid_at) : new Date();

  // map methods for display
  const methodMap = {
    upi: "Google Pay / UPI",
    netbanking: "Net Banking",
    card: "Card",
    cash: "Pay at Center",
  };

  return (
    <>
      <div className="flex flex-col items-center pt-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#3E9B43] text-white text-5xl font-extrabold">
          ✓
        </div>

        <div className="mt-6 text-4xl font-semibold">Payment Completed</div>

        <div className="mt-8 w-full max-w-xl rounded-2xl bg-[#DDEEDC] p-8">
          <div className="text-center text-3xl font-semibold mb-6">Transaction Details</div>

          <TxRow k="Transaction Id" v={payment.transaction_id} />
          <TxRow k="Date" v={paidAt.toLocaleDateString()} />
          <TxRow k="Payment Method" v={methodMap[payment.method] || payment.method} />
          <TxRow k="Amount Paid" v={`₹ ${formatMoney(enrollment.amount)}`} />
          <TxRow k="Email Id" v={enrollment.email} />
        </div>

        <div className="mt-10 flex gap-4">
          {payment.invoice_url ? (
            <a
              href={payment.invoice_url}
              download
              className="rounded-2xl bg-[#FF9C00] px-12 py-4 text-xl font-semibold text-white"
            >
              Download Invoice
            </a>
          ) : null}

          <button
            onClick={onClose}
            className="rounded-2xl border border-black/20 px-10 py-4 text-xl font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

function TxRow({ k, v }) {
  return (
    <div className="flex items-center justify-between gap-6 py-3 text-xl">
      <div className="w-[180px]">{k}</div>
      <div className="font-medium">:</div>
      <div className="flex-1 font-semibold">{v}</div>
    </div>
  );
}

function formatMoney(n) {
  const num = Number(n || 0);
  return num.toLocaleString("en-IN");
}