"use client";

import { useMemo, useState } from "react";
import { siteContent } from "@/content/siteContent";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => {
    return name.trim().length > 1 && email.includes("@") && message.trim().length > 10;
  }, [name, email, message]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      setState("submitting");

      const subject = encodeURIComponent(`CustomStrat Advisory inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}\n`
      );

      const to = siteContent.company.email;
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      setState("success");
    } catch {
      setState("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-gray-900">Send a message</h3>
        <div className="text-sm text-gray-500">Response typically within 1–2 business days</div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Name</span>
          <input
            className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/40 transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input
            className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/40 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-gray-700">Company (optional)</span>
          <input
            className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/40 transition"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Your organization"
            autoComplete="organization"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-gray-700">Message</span>
          <textarea
            className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/40 transition min-h-[140px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What are you working on, and where can we help?"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button
          type="submit"
          className={`btn-primary ${
            !canSubmit || state === "submitting" ? "opacity-60 pointer-events-none" : ""
          }`}
        >
          {state === "submitting" ? "Sending..." : "Send message"}
        </button>

        <div className="text-sm">
          {state === "success" && <span className="text-green-700">Email draft opened — hit send when ready.</span>}
          {state === "error" && <span className="text-red-700">Something went wrong. Please try again.</span>}
          {state === "idle" && <span className="text-gray-500">Prefer email? Use the button above.</span>}
        </div>
      </div>
    </form>
  );
}
