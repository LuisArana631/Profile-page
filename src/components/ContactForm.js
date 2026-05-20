"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "@/styles/ContactForm.module.css";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const INITIAL = { name: "", email: "", subject: "", message: "" };

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.flex}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Submit"}
      </button>

      {status === "success" && (
        <p className={styles.success}>Message sent! I&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className={styles.error}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
};

export default ContactForm;
