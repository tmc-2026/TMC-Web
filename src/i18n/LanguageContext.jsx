import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "tmc-lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "ar" || saved === "en" ? saved : "en";
    } catch {
      return "en";
    }
  });

  const setLang = (next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = (key) => {
    const parts = key.split(".");
    let cur = translations[lang];
    for (const part of parts) {
      cur = cur?.[part];
    }
    if (cur === undefined) {
      let fallback = translations.en;
      for (const part of parts) {
        fallback = fallback?.[part];
      }
      return fallback ?? key;
    }
    return cur;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
        isRtl: lang === "ar",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export function TextSegments({ segments, breakAfterIndexes = [] }) {
  if (!Array.isArray(segments)) return null;
  return segments.map((segment, index) => (
    <span key={index}>
      <span className={segment.color}>{segment.text}</span>
      {breakAfterIndexes.includes(index) ? <br /> : null}
    </span>
  ));
}
