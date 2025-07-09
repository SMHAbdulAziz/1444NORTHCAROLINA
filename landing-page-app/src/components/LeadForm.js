import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/main.css';

const SERVICE_ID = 'service_z3agaer';
const TEMPLATE_ID = 'g89zk3c';
const PUBLIC_KEY = 'CHomT4BXdlw93aWRy';

const LeadForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: form.name,
      email: form.email,
      phone: form.phone,
      to_email: '1444northcarolina@houselotandland.org',
      subject: '1444 N CAROLINA Lead Submission'
    }, PUBLIC_KEY)
      .then(() => {
        window.location.href = "https://www.propertypanorama.com/instaview/ntreis/20970679#tour";
      })
      .catch(() => {
        alert('There was an error sending your message. Please try again.');
        setSubmitting(false);
      });
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label>
        Full Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default LeadForm;