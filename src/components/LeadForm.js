import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/main.css";

// WARNING: Exposing keys in frontend is insecure. Move these to environment variables or backend if possible.
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_z3agaer";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_qkd4y43";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "CHomT4BXdlw93aWRy";

function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Email and phone regex for stricter validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9\-\s]{7,20}$/;

  // Simple rate limiting: block repeated submissions for 5 minutes (300,000 ms)
  const [lastSubmit, setLastSubmit] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("All fields are required.");
      return;
    }
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phoneRegex.test(form.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }
    const now = Date.now();
    if (now - lastSubmit < 300000) {
      setError("Please wait at least 5 minutes before submitting again.");
      return;
    }
    setLastSubmit(now);
    setError("");
    // Map form fields to EmailJS template variables (matching template: {name}, {email}, {phone})
    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        window.location.href = "https://www.propertypanorama.com/instaview/ntreis/20970679#tour";
      })
      .catch(() => setError("Submission failed. Please try again."));
  };

  if (submitted) return null;

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
      />
      {error && <div className="form-error">{error}</div>}
      {/* CAPTCHA could be added here for further protection */}
      <button type="submit" className="submit-btn">Continue to Virtual Tour</button>
    </form>
  );
}

export default LeadForm;
