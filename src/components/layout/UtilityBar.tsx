import React from "react";

export type SupportedLanguage = "en" | "ne" | "mai";

interface UtilityBarProps {
  currentLang?: SupportedLanguage;
  onLanguageChange?: (lang: SupportedLanguage) => void;
}

export function UtilityBar({}: UtilityBarProps) {
  return null;
}
