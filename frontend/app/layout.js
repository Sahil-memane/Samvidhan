"use client"; // Convert layout.js to a Client Component

import { Inter } from "next/font/google";
import Script from "next/script";
import { useEffect } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    // Load Google Translate once the script is ready
    const loadGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "hi,kn,ml,mr,ta,te,pa,bn,gu,or,si",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    const interval = setInterval(() => {
      if (window.google && window.google.translate) {
        clearInterval(interval);
        loadGoogleTranslate();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <head>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateInit"
          strategy="lazyOnload"
        />
      </head>
      <body className={inter.className}>
        {/* Persistent Google Translate Widget */}
        <div
          id="google_translate_element"
          style={{ position: "fixed", top: "20px", right: "300px", zIndex: 9999 }}
        ></div>

        {children}
      </body>
    </html>
  );
}
