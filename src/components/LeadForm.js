import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/main.css";

const SERVICE_ID = "service_z3agaer";
const TEMPLATE_ID = "g89zk3c";
const PUBLIC_KEY = "CHomT4BXdlw93aWRy";

function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("All fields are required.");
      return;
    }
    setError("");
    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
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
      <button type="submit" className="submit-btn">Request Info / Tour</button>
    </form>
  );
}

export default LeadForm;
