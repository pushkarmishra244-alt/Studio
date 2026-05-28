import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { useBooking } from "../../providers/CalendlyProvider";
import emailjs from "@emailjs/browser";

// =========================================================================
// EMAILJS CONFIGURATION PLACEHOLDERS
// Replace these placeholders with your actual EmailJS key/ID credentials!
// =========================================================================
const EMAILJS_PUBLIC_KEY = "xJKYKhipYpTnRtT9y";
const EMAILJS_SERVICE_ID = "service_qajrtod";
const EMAILJS_TEMPLATE_ID = "template_4th7fzt";

export function CalendlyModal() {
  const { isModalOpen, closeBooking } = useBooking();
  const [step, setStep] = useState(1);
  const [focus, setFocus] = useState("Brand Experience Design");
  const [date, setDate] = useState("2026-06-03");
  const [timeSlot, setTimeSlot] = useState("10:00 AM UTC");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const steps = [
    { title: "Define Focus", desc: "Select product scope" },
    { title: "Select Slots", desc: "Pick date & time" },
    { title: "Your Details", desc: "Add contact coordinates" },
    { title: "Confirmed", desc: "Session secured" },
  ];

  const focusOptions = [
    { name: "Brand Experience Design", desc: "High-end visual identities & vector systems." },
    { name: "Interactive 3D Canvas", desc: "Procedural WebGL & canvas frame implementations." },
    { name: "Digital Production", desc: "Full-scale creative studio & architecture deployments." },
  ];

  const timeSlots = ["09:00 AM UTC", "10:30 AM UTC", "01:00 PM UTC", "03:30 PM UTC"];

  // Mock days
  const days = [
    { name: "Mon", date: "Jun 1" },
    { name: "Tue", date: "Jun 2" },
    { name: "Wed", date: "Jun 3" },
    { name: "Thu", date: "Jun 4" },
    { name: "Fri", date: "Jun 5" },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    const bookingData = { focus, date, timeSlot, name, email, goal, timestamp: new Date().toISOString() };

    const templateParams = {
      user_name: name,
      user_email: email,
      booking_focus: focus,
      booking_date: date,
      booking_time: timeSlot,
      booking_goal: goal || "No additional goals specified.",
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log("EmailJS transmission successful:", result.status, result.text);
        setIsSubmitting(false);

        // Persist to local bookings
        const currentBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
        currentBookings.push(bookingData);
        localStorage.setItem("bookings", JSON.stringify(currentBookings));

        setStep(4);
      })
      .catch((error) => {
        console.error("EmailJS transmission failure:", error);
        setIsSubmitting(false);
        alert(`Booking transmission failure: ${error?.text || "Please verify your EmailJS configurations."}`);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/75 backdrop-blur-md cursor-pointer"
        onClick={closeBooking}
      />
      
      {/* Dialog container */}
      <div className="relative w-full max-w-2xl bg-card-bg-custom border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 md:p-8 cursor-default card-surface shadow-2xl overflow-hidden safari-optimize">
        {/* Progress indicator */}
        <div className="flex items-center justify-between mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-5">
          <div>
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-accent">SESSION SCHEDULER</span>
            <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground-custom mt-1">Consultation Session</h3>
          </div>
          <button 
            onClick={closeBooking}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800/40 text-zinc-500 hover:text-foreground-custom cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step tracker bullets */}
        <div className="grid grid-cols-4 gap-2 mb-8 select-none">
          {steps.map((_, i) => (
            <div key={i} className="space-y-1">
              <div 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step > i ? "bg-accent" : step === i + 1 ? "bg-accent/40 animate-pulse" : "bg-zinc-200 dark:bg-zinc-800"
                }`}
              />
              <span className={`block font-mono text-[9px] uppercase tracking-wider ${
                step === i + 1 ? "text-foreground-custom font-semibold" : "text-zinc-400"
              }`}>
                {step === i + 1 ? `Step ${i+1}` : ""}
              </span>
            </div>
          ))}
        </div>

        {/* STEP 1: Focus Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h4 className="font-sans text-sm font-semibold text-foreground-custom">Define project direction</h4>
              <p className="font-sans text-xs text-muted-custom mt-1">Select the main goal of your experience strategy session:</p>
            </div>
            <div className="space-y-4">
              {focusOptions.map((opt) => (
                <button
                  key={opt.name}
                  onClick={() => setFocus(opt.name)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-sm flex items-start gap-4 cursor-pointer ${
                    focus === opt.name 
                      ? "border-accent bg-accent/5 dark:bg-accent/10" 
                      : "border-zinc-200/50 dark:border-zinc-800/40 hover:border-zinc-300/60 dark:hover:border-zinc-700/60"
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    focus === opt.name ? "border-accent" : "border-zinc-300 dark:border-zinc-700"
                  }`}>
                    {focus === opt.name && <div className="w-2 h-2 rounded-full bg-accent" />}
                  </div>
                  <div>
                    <span className="font-sans text-sm font-semibold text-foreground-custom block">{opt.name}</span>
                    <span className="font-sans text-xs text-muted-custom mt-1 block">{opt.desc}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-end pt-4">
              <button 
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-mono text-xs uppercase font-bold tracking-widest cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Select Slots</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Slots Selector */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h4 className="font-sans text-sm font-semibold text-foreground-custom font-medium">Select time structure</h4>
              <p className="font-sans text-xs text-muted-custom mt-1 animate-fade-in">Book a designated coordinate slot on our interactive timeline:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date Column */}
              <div className="space-y-3">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-muted-custom">SELECT WEEKDAY</span>
                <div className="grid grid-cols-5 gap-2">
                  {days.map((d) => (
                    <button
                      key={d.date}
                      onClick={() => setDate(`2026-06-0${d.date.slice(-1)}`)}
                      className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                        date.endsWith(d.date.slice(-1))
                          ? "border-accent bg-accent/5"
                          : "border-zinc-200/60 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700"
                      }`}
                    >
                      <span className="font-mono text-[9px] uppercase text-zinc-400">{d.name}</span>
                      <span className="font-sans text-xs font-bold text-foreground-custom">{d.date.split(" ")[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Session slots */}
              <div className="space-y-3">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-muted-custom">AVAILABLE TIMELINE (SLOTS)</span>
                <div className="space-y-2">
                  {timeSlots.map((ts) => (
                    <button
                      key={ts}
                      onClick={() => setTimeSlot(ts)}
                      className={`w-full text-left py-2.5 px-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        timeSlot === ts
                          ? "border-accent bg-accent/5 font-semibold text-accent"
                          : "border-zinc-200/60 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 text-foreground-custom text-xs"
                      }`}
                    >
                      <span className="font-sans text-xs">{ts}</span>
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-zinc-100 dark:border-zinc-850">
              <button 
                onClick={handleBack}
                className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 font-mono text-xs uppercase font-medium tracking-wider cursor-pointer hover:bg-zinc-100/30 dark:hover:bg-zinc-800/30"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button 
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-mono text-xs uppercase font-bold tracking-widest cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Final Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Details Coordinates Form */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h4 className="font-sans text-sm font-semibold text-foreground-custom font-medium">Add professional profile coordinates</h4>
              <p className="font-sans text-xs text-muted-custom mt-1">Complete the parameters to secure booking confirmation:</p>
            </div>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-zinc-400">ORGANIZATION / NAME</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name / Brand"
                    className="w-full py-3 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm focus:outline-none focus:border-accent bg-transparent"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-zinc-400">DIRECT EMAIL</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full py-3 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm focus:outline-none focus:border-accent bg-transparent"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block font-mono text-[9px] uppercase tracking-wider text-zinc-400">BRIEF STRATEGY SCOPE & OBJECTIVE</label>
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Outline any specific design or 3D engineering goals..."
                  rows={3}
                  className="w-full py-3 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm focus:outline-none focus:border-accent bg-transparent resize-none"
                />
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <button 
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 font-mono text-xs uppercase font-medium tracking-wider cursor-pointer hover:bg-zinc-100/30 dark:hover:bg-zinc-800/30"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button 
                type="submit"
                disabled={isSubmitting || !name || !email}
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-accent text-white font-mono text-xs uppercase font-bold tracking-widest cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                {isSubmitting ? "Securing..." : "Confirm Booking"}
                <CheckCircle className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Success Details */}
        {step === 4 && (
          <div className="text-center py-8 space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-2">
              <CheckCircle className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h4 className="font-sans text-xl font-bold text-foreground-custom tracking-tight">Session Confirmed!</h4>
              <p className="font-sans text-xs text-muted-custom max-w-md mx-auto">
                Your high-end design strategy session is secured. An calendar coordinate invitation has been dispatched to <strong className="text-foreground-custom">{email}</strong>.
              </p>
            </div>

            {/* Summary Ticket */}
            <div className="max-w-md mx-auto p-5 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-left space-y-3.5">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-muted-custom border-b border-zinc-100 dark:border-zinc-800 pb-2">BOOKING COORDINATE SPEC</span>
              <div className="grid grid-cols-2 gap-y-2 text-xs">
                <span className="text-zinc-400">Services focus:</span>
                <span className="text-foreground-custom font-semibold text-right">{focus}</span>
                <span className="text-zinc-400">Date:</span>
                <span className="text-foreground-custom font-semibold text-right">{date}</span>
                <span className="text-zinc-400">Time Segment:</span>
                <span className="text-foreground-custom font-semibold text-right">{timeSlot}</span>
                <span className="text-zinc-400">Representative:</span>
                <span className="text-foreground-custom font-semibold text-right">{name}</span>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={closeBooking}
                className="px-6 py-3.5 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-mono text-xs uppercase font-bold tracking-wider cursor-pointer"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default CalendlyModal;
