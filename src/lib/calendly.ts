export function initCalendly() {
  // If we ever need to load standard Calendly script into the DOM dynamically:
  if (typeof window !== "undefined" && !document.getElementById("calendly-script")) {
    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }
}

export function openCalendlyLink(url: string) {
  if (typeof window !== "undefined" && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({ url });
  } else {
    // Return false to let the fallback modal handle the booking locally inside our beautiful UI!
    return false;
  }
  return true;
}
