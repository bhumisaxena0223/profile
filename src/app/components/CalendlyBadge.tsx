"use client";
import React, { useEffect } from 'react';

const CalendlyBadge: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/bhumisaxena0223/30min',
        text: 'Schedule time with me',
        color: '#9600ff',
        textColor: '#ffffff',
      });
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup when the component is removed
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null; // The badge is automatically appended to the page by Calendly
};

export default CalendlyBadge;
