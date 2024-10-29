"use client";
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
    >
      <img
        src="\WhatsApp.svg.webp" 
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
};

export default WhatsAppButton;