import { createContext, useState, useEffect } from "react";
import Translation from "@/locale";
import { useLocalStorage } from "@/hooks";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const DEFAULT_LOCALE = "mn";
  const [locale, setLocales] = useLocalStorage("locale", DEFAULT_LOCALE);
  const [staticText, setStaticText] = useState(Translation[locale]);
  const setLocale = (newLocale) => setLocales(newLocale);
  useEffect(() => {
    setStaticText(Translation[locale]);
  }, [locale]);

  return (
    <UserContext.Provider value={{ locale, staticText, setLocale }}>
      {children}
    </UserContext.Provider>
  );
};
