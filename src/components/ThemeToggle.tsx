import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemePreference = "light" | "dark";

const storageKey = "theme-preference";

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getDefaultPreference(): ThemePreference {
  return systemPrefersDark() ? "dark" : "light";
}

function applyTheme(preference: ThemePreference) {
  const isDark = preference === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

function getStoredPreference(): ThemePreference {
  const stored = localStorage.getItem(storageKey);
  return stored === "light" || stored === "dark" ? stored : getDefaultPreference();
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>(getDefaultPreference);

  useEffect(() => {
    const initialPreference = getStoredPreference();
    setPreference(initialPreference);
    applyTheme(initialPreference);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (!localStorage.getItem(storageKey)) {
        const nextPreference = getDefaultPreference();
        setPreference(nextPreference);
        applyTheme(nextPreference);
      }
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const cycleTheme = () => {
    const nextPreference: ThemePreference = preference === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, nextPreference);
    setPreference(nextPreference);
    applyTheme(nextPreference);
  };

  const Icon = preference === "light" ? Sun : Moon;
  const label = `Switch to ${preference === "light" ? "dark" : "light"} mode.`;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={cycleTheme}
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-site-border bg-site-button text-site-primary transition hover:bg-site-button-hover"
    >
      <Icon size={15} />
    </button>
  );
}
