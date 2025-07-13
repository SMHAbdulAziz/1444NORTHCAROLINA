import React, { useState } from "react";
import "../styles/main.css";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7abtIO773-P6ah8vBmZ-HxjA3V511DsroQbyzZm27AoKJiqFoQATDKlP01yoeXHUO/exec";

function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [lastSubmit, setLastSubmit] = useState(0);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9\-\s]{7,20}$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.result === "success") {
        setSubmitted(true);
        window.location.href = "https://www.propertypanorama.com/instaview/ntreis/20970679#tour";
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (err) {
      console.error("Submission error:", err.message);
      setError("Submission failed. Please try again.");
    }
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
      <button type="submit" className="submit-btn">Continue to Virtual Tour</button>
    </form>
  );
}

export default LeadForm;
