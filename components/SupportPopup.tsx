import React, { useEffect, useState } from "react";

interface SupportPopupProps {
  swishNumber: string;
  qrCodeUrl: string;
  message: string;
  frequencyDays?: number; // default: 30
  title: string;
  dontShow: string;
  closeLabel: string;
}

const STORAGE_KEY = "support_popup_last_shown";
const DONT_SHOW_KEY = "support_popup_dont_show";

const SupportPopup: React.FC<SupportPopupProps> = ({
  swishNumber,
  qrCodeUrl,
  message,
  frequencyDays = 30,
  title,
  dontShow,
  closeLabel,
}) => {
  const [show, setShow] = useState(false);
  const [dontShowChecked, setDontShowChecked] = useState(false);

  useEffect(() => {
    const dontShowValue = localStorage.getItem(DONT_SHOW_KEY);
    if (dontShowValue === "true") {
      setShow(false);
      setDontShowChecked(true);
      return;
    }
    const lastShown = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();
    if (!lastShown || now - parseInt(lastShown, 10) > frequencyDays * 24 * 60 * 60 * 1000) {
      setShow(true);
      localStorage.setItem(STORAGE_KEY, now.toString());
    }
  }, [frequencyDays]);

  const handleClose = () => {
    setShow(false);
  };

  const handleDontShow = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDontShowChecked(e.target.checked);
    localStorage.setItem(DONT_SHOW_KEY, e.target.checked ? "true" : "false");
  };

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 12,
        padding: 32,
        maxWidth: 350,
        textAlign: "center",
        boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
      }}>
        <h2>{title}</h2>
        <p>{message}</p>
        <p style={{ fontWeight: "bold", margin: "12px 0 0 0" }}>Du väljer själv beloppet!</p>
        <img src={qrCodeUrl} alt="Swish QR-kod" style={{ width: 180, margin: "16px auto" }} />
        <p style={{ fontWeight: "bold", fontSize: 18 }}>{swishNumber}</p>
        <div style={{ marginTop: 16 }}>
          <label style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <input
              type="checkbox"
              checked={dontShowChecked}
              onChange={handleDontShow}
              style={{ marginRight: 8 }}
              id="support-popup-dont-show"
              name="support-popup-dont-show"
            />
            {dontShow}
          </label>
          <button
            style={{ padding: "8px 24px", borderRadius: 6, background: "#6f2da8", color: "#fff", border: "none", fontSize: 16 }}
            onClick={handleClose}
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportPopup;
