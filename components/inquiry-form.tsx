"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

export default function InquiryForm() {
  const [draftReady, setDraftReady] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = `Project inquiry from ${formData.get("name")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Work email: ${formData.get("email")}`,
      `Company or brand: ${formData.get("company") || "Not provided"}`,
      `What I need help with: ${formData.get("need")}`,
      `Project details or references: ${formData.get("details") || "Not provided"}`,
    ].join("\n");
    const composeUrl = new URL("https://mail.google.com/mail/");
    composeUrl.search = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "hello@designyuv.com",
      su: subject,
      body,
    }).toString();

    window.open(composeUrl.toString(), "_blank", "noopener,noreferrer");
    setDraftReady(true);
  }

  return (
    <form className="studio-inquiry-form" onSubmit={handleSubmit}>
      <div className="studio-form-row">
        <label>
          Name <span>*</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Work email <span>*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        Company or brand
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        What do you need help with? <span>*</span>
        <select name="need" defaultValue="" required>
          <option value="" disabled>Select a project type</option>
          <option>Product imagery</option>
          <option>Product animation</option>
          <option>Campaign visuals</option>
          <option>Multiple product variations</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        Project details or reference links <span className="studio-optional">Optional</span>
        <textarea name="details" rows={3} placeholder="A few lines about the product, timing, or content you need." />
      </label>
      <button className="studio-button studio-button-dark studio-submit" type="submit">
        Prepare inquiry <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      {draftReady ? (
        <p className="studio-form-status" role="status">
          Your draft should be open in a new tab. Send it there to complete your inquiry. If it did not open, email <a href="mailto:hello@designyuv.com">hello@designyuv.com</a> directly.
        </p>
      ) : (
        <p className="studio-form-note">This opens a prefilled email draft. You can review it before sending.</p>
      )}
    </form>
  );
}