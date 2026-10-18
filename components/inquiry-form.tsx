"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("I couldn’t send your inquiry. Please try again.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const inquiry = {
      name: formData.get("name"),
      email: formData.get("email"),
      product: formData.get("product"),
      deliverables: formData.get("deliverables"),
      timeline: formData.get("timeline"),
      details: formData.get("details"),
    };

    setStatus("submitting");
    setErrorMessage("I couldn’t send your inquiry. Please try again.");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "I couldn't send your inquiry. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      if (error instanceof Error && error.message) {
        setErrorMessage(error.message);
      }
      setStatus("error");
    }
  }

  return (
    <form className="studio-inquiry-form" onSubmit={handleSubmit}>
      <div className="studio-form-row">
        <label>
          Name <span>*</span>
          <input name="name" autoComplete="name" maxLength={120} required />
        </label>
        <label>
          Work email <span>*</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
      </div>
      <label>
        Product or brand <span>*</span>
        <input name="product" autoComplete="organization" placeholder="What product are you working on?" maxLength={200} required />
      </label>
      <label>
        What deliverables do you need? <span>*</span>
        <select name="deliverables" defaultValue="" required>
          <option value="" disabled>Select deliverables</option>
          <option>Product imagery</option>
          <option>Product animation</option>
          <option>Campaign visuals</option>
          <option>Multiple product variations</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        Ideal timeline <span>*</span>
        <select name="timeline" defaultValue="" required>
          <option value="" disabled>Select a timeline</option>
          <option>As soon as possible</option>
          <option>Within one month</option>
          <option>One to three months</option>
          <option>Flexible</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>
        Project details or reference links <span className="studio-optional">Optional</span>
        <textarea name="details" rows={3} maxLength={5000} placeholder="A few lines about the product, timing, or content you need." />
      </label>
      <button className="studio-button studio-button-dark studio-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending inquiry…" : "Send inquiry"} <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      {status === "success" ? (
        <p className="studio-form-status" role="status">Thanks for getting in touch. I’ve received your inquiry and will reply by email.</p>
      ) : status === "error" ? (
        <p className="studio-form-status" role="alert">
          {errorMessage} Please email <a href="mailto:hello@designyuv.com">hello@designyuv.com</a> or <a href="https://cal.com/yuv-raj-pao2g5/30min" target="_blank" rel="noopener noreferrer">book a discovery call</a>.
        </p>
      ) : (
        <p className="studio-form-note">I’ll reply to your inquiry by email.</p>
      )}
    </form>
  );
}
