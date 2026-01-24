import { useState, useEffect } from "react";

export default function useLocation() {
  const [country, setCountry] = useState("DE"); // Default: Germany
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try auto-detect by IP
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const detected = data.country_code;
        const supported = ["DE", "FR", "UK", "PL", "IT", "ES", "NL"];

        if (supported.includes(detected)) {
          setCountry(detected);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false); // Error → keep default (DE)
      });
  }, []);

  return { country, setCountry, loading };
}
