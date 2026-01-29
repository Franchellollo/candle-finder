import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-38B7FV5WL5";

// Pārbauda vai lietotājs piekrita cookies
const hasConsent = () => {
  return localStorage.getItem("cookieConsent") === "accepted";
};

export const initGA = () => {
  if (!hasConsent()) {
    console.log("GA4: Waiting for user consent");
    return false;
  }

  ReactGA.initialize(MEASUREMENT_ID, {
    gaOptions: {
      anonymize_ip: true, // GDPR atbilstībai
      cookie_expires: 63072000, // 2 gadi
    },
  });
  console.log("GA4 initialized");
  return true;
};

export const logPageView = (path) => {
  if (!hasConsent()) return;

  ReactGA.send({
    hitType: "pageview",
    page: path || window.location.pathname,
  });
};

export const logEvent = (category, action, label) => {
  if (!hasConsent()) return;

  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
