"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData((prev) => ({ ...prev, budget }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Don't leave us hanging!";
    if (!formData.email.trim()) newErrors.email = "Don't leave us hanging!";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Hmm, check that email?";
    if (!formData.message.trim()) newErrors.message = "Don't leave us hanging!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      {/* HERO + FORM */}
      <section className="section-pad" style={{ position: "relative", overflow: "hidden" }}>
        <div
          className="blob"
          data-parallax="36"
          style={{
            width: "200px",
            height: "200px",
            top: "6%",
            left: "-50px",
            opacity: ".85",
          }}
        ></div>
        <div
          className="blob"
          data-parallax="-28"
          style={{
            width: "90px",
            height: "90px",
            bottom: "8%",
            right: "4%",
            background: "var(--ink)",
            animationDelay: "-2s",
          }}
        ></div>

        <div className="wrap contact-grid" style={{ position: "relative", zIndex: 2 }}>
          {/* LEFT */}
          <div>
            <span className="eyebrow reveal">Start a blockout</span>
            <h1 className="display h-xl reveal" data-d="1" style={{ margin: "14px 0 18px" }}>
              Let's build
              <br />
              something <span className="text-orange">bold.</span>
            </h1>
            <p className="lead reveal" data-d="2" style={{ maxWidth: "42ch" }}>
              Tell us what you're dreaming up. We read every message and reply within one working day – no bots, no runaround.
            </p>

            <div className="stack-md reveal" data-d="3" style={{ marginTop: "36px" }}>
              <div className="contact-line">
                <span className="contact-ico">+</span>
                <div>
                  <div className="contact-k">Email</div>
                  <a href="mailto:hello@blockout.digital">hello@blockout.digital</a>
                </div>
              </div>
              <div className="contact-line">
                <span className="contact-ico">+</span>
                <div>
                  <div className="contact-k">Phone</div>
                  <a href="tel:+447931876340">+44 (0)7931 876340</a>
                </div>
              </div>
              <div className="contact-line">
                <span className="contact-ico">+</span>
                <div>
                  <div className="contact-k">Studio</div>
                  <span>Nuneaton, Warwickshire</span>
                </div>
              </div>
            </div>

            <div className="row reveal" data-d="4" style={{ marginTop: "30px", gap: "10px" }}>
              <span className="pill">Mon–Fri, 9–6</span>
              <span className="pill">Reply in 24h</span>
            </div>
          </div>

          {/* RIGHT: FORM CARD */}
          <div>
            {!submitted ? (
              <div className="card" id="form-card" style={{ padding: "38px" }}>
                <h2 className="h-md" style={{ marginBottom: "6px" }}>
                  Tell us about it
                </h2>
                <p style={{ color: "var(--ink-soft)", marginBottom: "26px" }}>
                  Fields with <span className="text-orange" style={{ fontWeight: 800 }}>*</span> are required.
                </p>
                <form className="form" id="contact-form" noValidate onSubmit={handleSubmit}>
                  <div className="field-row">
                    <div className={`field ${errors.name ? "field--err" : ""}`}>
                      <label>
                        Your name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Jamie Doe"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && <div className="field__err">{errors.name}</div>}
                    </div>
                    <div className={`field ${errors.email ? "field--err" : ""}`}>
                      <label>
                        Email <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="jamie@company.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <div className="field__err">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>Company</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Ltd"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Optional"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label>What do you need? <span style={{ color: "var(--ink-soft)", fontWeight: 600, fontSize: ".9rem" }}>(pick any)</span></label>
                    <div className="chips">
                      {["Website", "Branding", "Marketing", "Exhibition", "3D Design"].map((service) => (
                        <button
                          key={service}
                          type="button"
                          className={`svc-chip ${selectedServices.includes(service) ? "on" : ""}`}
                          onClick={() => handleServiceToggle(service)}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label>Ballpark budget</label>
                    <div className="chips">
                      {[
                        { label: "Under £5k", val: "<5k" },
                        { label: "£5k–15k", val: "5-15k" },
                        { label: "£15k–40k", val: "15-40k" },
                        { label: "£40k+", val: "40k+" },
                      ].map((option) => (
                        <button
                          key={option.val}
                          type="button"
                          className={`chip ${formData.budget === option.val ? "on" : ""}`}
                          onClick={() => handleBudgetSelect(option.val)}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={`field ${errors.message ? "field--err" : ""}`}>
                    <label>
                      Tell us the plan <span className="req">*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="We're launching a new product and need a brand + site that turns heads…"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    {errors.message && <div className="field__err">{errors.message}</div>}
                  </div>

                  <button type="submit" className="btn btn--lg" data-magnetic style={{ alignSelf: "flex-start" }}>
                    Send it over <span className="arr">→</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="card card--orange" id="form-success" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "18px", padding: "48px 30px", minHeight: "420px" }}>
                <h2 className="h-lg text-paper">Boom – message sent!</h2>
                <p style={{ maxWidth: "38ch", opacity: ".95" }}>
                  Thanks for reaching out. One of the crew will get back to you within one working day. Time to build something brilliant.
                </p>
                <Link href="/" className="btn btn--paper btn--lg" data-magnetic>
                  Back to home <span className="arr">→</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid{ display:grid; grid-template-columns:.85fr 1.15fr; gap:54px; align-items:start; }
        .contact-line{ display:flex; gap:16px; align-items:center; }
        .contact-ico{ width:50px; height:50px; flex:none; display:flex; align-items:center; justify-content:center; font-size:1.4rem; background:var(--orange); color:#fff; border:3px solid var(--ink); border-radius:var(--r-md); box-shadow:var(--shadow-pop); }
        .contact-k{ font-family:var(--display); font-weight:700; font-size:.85rem; text-transform:uppercase; letter-spacing:.08em; color:var(--ink-soft); }
        .contact-line a, .contact-line span{ font-size:1.1rem; font-weight:600; }
        @media (max-width:880px){ .contact-grid{ grid-template-columns:1fr; gap:40px; } }
      `}</style>
    </>
  );
}
