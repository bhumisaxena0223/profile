"use client";
import React, { useEffect } from "react";
import CalendlyBadge from "./CalendlyBadge";

const socials = [
  {
    label: "GitHub",
    href:  "https://github.com/bhumisaxena0223",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.385.6.111.793-.26.793-.577 0-.285-.01-1.041-.015-2.044-3.338.726-4.042-1.609-4.042-1.609-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.204.085 1.837 1.236 1.837 1.236 1.07 1.835 2.805 1.305 3.49.997.108-.775.419-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.478 11.478 0 0 1 3.003-.403c1.02.005 2.047.137 3.003.403 2.291-1.554 3.297-1.23 3.297-1.23.655 1.653.244 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.431.371.815 1.103.815 2.222 0 1.606-.014 2.899-.014 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.299 24 12 24 5.37 18.63 0 12 0z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href:  "https://linkedin.com/in/bhumisaxena",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-11 20H5V9h3v11zm-1.5-12.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM20 20h-3v-5.5c0-1.3-.4-2.2-1.4-2.2-.8 0-1.3.6-1.5 1.2-.1.2-.1.5-.1.8V20h-3V9h3v1.5c.4-.6 1.1-1.5 2.7-1.5 2 0 3.3 1.3 3.3 4.1V20z" />
      </svg>
    ),
  },
  {
    label: "Website",
    href:  "https://bhumisaxena.net",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const Contact: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src   = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    window.Calendly?.initPopupWidget({ url: "https://calendly.com/bhumisaxena0223/30min" });
  };

  return (
    <section className="py-20 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute top-1/2 left-1/2 w-96 h-96 bg-purple-700 opacity-15 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">Let&rsquo;s connect</span>
          <h2 className="text-4xl font-bold text-white mt-2">Get In Touch</h2>
          <div className="section-line" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Let&rsquo;s build something{" "}
                  <span className="gradient-text">amazing</span> together
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Open to senior frontend engineering roles in fintech or consumer tech —
                  high-ownership, high-impact environments where I can drive both
                  technical and product outcomes.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:bhumisaxena0223@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <span className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-base transition-colors">📧</span>
                    <span className="text-sm">bhumisaxena0223@gmail.com</span>
                  </a>
                  <a
                    href="tel:+919783302312"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <span className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-base transition-colors">📱</span>
                    <span className="text-sm">+91 97833 02312</span>
                  </a>
                  <a
                    href="https://bhumisaxena.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <span className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-base transition-colors">🌐</span>
                    <span className="text-sm">bhumisaxena.net</span>
                  </a>
                </div>

                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="text-center flex flex-col items-center gap-6">
                <div>
                  <div className="text-5xl mb-4">📅</div>
                  <h4 className="text-xl font-bold text-white mb-2">Book a Free Consultation</h4>
                  <p className="text-gray-400 text-sm">
                    Schedule a 30-minute call to discuss your project or an open role.
                  </p>
                </div>
                <button
                  onClick={openCalendly}
                  className="w-full max-w-xs px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-semibold hover:from-purple-500 hover:to-violet-500 transition-all duration-300 glow-purple text-base"
                >
                  Schedule a Call ↗
                </button>
                <CalendlyBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
