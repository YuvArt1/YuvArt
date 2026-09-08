"use client"

import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    otherService: "",
    budget: "",
    details: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const selectedService = formData.service === "Other" ? formData.otherService || "Other" : formData.service
    const subject = encodeURIComponent(`Project Inquiry: ${selectedService}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${selectedService}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.details}`
    )

    window.location.href = `mailto:hello@designyuv.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <header className="fixed top-0 left-0 w-full bg-white z-20 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:text-gray-600 transition-colors font-space-grotesk"
          >
            Yuv
          </Link>
          <div className="flex items-center space-x-4 md:space-x-8 font-inter">
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-semibold">
              Contact Me
            </Link>
            <a
              href="https://cal.com/yuv-raj-pao2g5/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-semibold"
            >
              Book a Call
            </a>
          </div>
        </nav>
      </header>

      <main className="px-6 py-16 pt-24 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3 font-inter">Let&apos;s work together</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black font-space-grotesk">Tell me about your project</h1>
            <div className="mt-5 flex justify-center gap-5 text-sm font-inter">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 underline hover:text-black transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 underline hover:text-black transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 font-inter">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 font-inter">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-800 font-inter">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-black focus:outline-none"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Motion Graphics">Motion Graphics</option>
                  <option value="Branding">Branding</option>
                  <option value="Social Media Content">Social Media Content</option>
                  <option value="Web Visual Content">Web Visual Content</option>
                  <option value="Creative Direction">Creative Direction</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.service === "Other" && (
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="otherService" className="block text-sm font-medium text-gray-800 font-inter">
                    Please tell us what you&apos;re looking for
                  </label>
                  <input
                    id="otherService"
                    name="otherService"
                    type="text"
                    value={formData.otherService}
                    onChange={handleChange}
                    placeholder="Describe your project"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none"
                  />
                </div>
              )}

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-800 font-inter">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-black focus:outline-none"
                  required
                >
                  <option value="">Select a range</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                  <option value="$2,000+">$2,000+</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="details" className="block text-sm font-medium text-gray-800 font-inter">
                  Project details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your goals, timeline, and any references you have in mind..."
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none resize-none"
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
