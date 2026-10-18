"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const FORMSPREE_URL = "https://formspree.io/f/xyekvzbz";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const json = await res.json();

      if (!res.ok) {
        const msg =
          json?.errors?.map((e: { message: string }) => e.message).join(", ") ||
          "Something went wrong. Please try again.";
        setErrorMessage(msg);
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="studio-inquiry-form studio-form-success" role="status">
        <p className="studio-eyebrow">MESSAGE RECEIVED</p>
        <p>
          Thanks — your inquiry is in my inbox. I&apos;ll follow up within 1–2
          business days.
        </p>
        <p className="studio-form-note">
          In the meantime, you can{" "}
          <a
            href="https://cal.com/yuv-raj-pao2g5/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            book a free discovery call <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </p>
      </div>
    );
  }

  return (
    <form className="studio-inquiry-form" onSubmit={handleSubmit}>
      <div className="studio-form-row">
        <label>
          Name <span>*</span>
          <input
            name="name"
            autoComplete="name"
            required
            disabled={status === "loading"}
          />
        </label>
        <label>
          Work email <span>*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={status === "loading"}
          />
        </label>
      </div>
      <label>
        Product or brand <span>*</span>
        <input
          name="product"
          autoComplete="organization"
          placeholder="What product are you working on?"
          required
          disabled={status === "loading"}
        />
      </label>
      <label>
        What deliverables do you need? <span>*</span>
        <select
          name="deliverables"
          defaultValue=""
          required
          disabled={status === "loading"}
        >
          <option value="" disabled>
            Select deliverables
          </option>
          <option>Product imagery</option>
          <option>Product animation</option>
          <option>Campaign visuals</option>
          <option>Multiple product variations</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        Ideal timeline <span>*</span>
        <select
          name="timeline"
          defaultValue=""
          required
          disabled={status === "loading"}
        >
          <option value="" disabled>
            Select a timeline
          </option>
          <option>As soon as possible</option>
          <option>Within one month</option>
          <option>One to three months</option>
          <option>Flexible</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>
        Project details or reference links{" "}
        <span className="studio-optional">Optional</span>
        <textarea
          name="details"
          rows={3}
          placeholder="A few lines about the product, timing, or content you need."
          disabled={status === "loading"}
        />
      </label>
      <button
        className="studio-button studio-button-dark studio-submit"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          "Sending…"
        ) : (
          <>
            Send inquiry <ArrowUpRight size={17} aria-hidden="true" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="studio-form-status studio-form-error" role="alert">
          {errorMessage} You can also email{" "}
          <a href="mailto:hello@designyuv.com">hello@designyuv.com</a> directly.
        </p>
      )}
      <p className="studio-form-note">
        Your message goes straight to my inbox — no email app needed.
      </p>
    </form>
  );
}