import React, { createContext, useContext, useState, useEffect } from "react";
import { initCalendly } from "../lib/calendly";

interface CalendlyContextType {
  isModalOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const CalendlyContext = createContext<CalendlyContextType>({
  isModalOpen: false,
  openBooking: () => {},
  closeBooking: () => {},
});

export const useBooking = () => useContext(CalendlyContext);

export default function CalendlyProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Proactively initialize Calendly script in the background
    initCalendly();
  }, []);

  const openBooking = () => setIsModalOpen(true);
  const closeBooking = () => setIsModalOpen(false);

  return (
    <CalendlyContext.Provider value={{ isModalOpen, openBooking, closeBooking }}>
      {children}
      {/* The actual modal component is imported dynamically or placed here directly to prevent circular references */}
    </CalendlyContext.Provider>
  );
}
