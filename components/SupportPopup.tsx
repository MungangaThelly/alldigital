import React, { useEffect, useState } from "react";

interface SupportPopupProps {
  swishNumber: string;
  qrCodeUrl: string;
  message: string;
  frequencyDays?: number; // default: 30
}

const STORAGE_KEY = "support_popup_last_shown";

const SupportPopup: React.FC<SupportPopupProps> = ({
  swishNumber,
  qrCodeUrl,
  message,
  frequencyDays = 30,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

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
        <h2>Stöd oss med Swish</h2>
        <p>{message}</p>
        <img src={qrCodeUrl} alt="Swish QR-kod" style={{ width: 180, margin: "16px auto" }} />
        <p style={{ fontWeight: "bold", fontSize: 18 }}>{swishNumber}</p>
        <button
          style={{ marginTop: 16, padding: "8px 24px", borderRadius: 6, background: "#6f2da8", color: "#fff", border: "none", fontSize: 16 }}
          onClick={() => setShow(false)}
        >
          Stäng
        </button>
      </div>
    </div>
  );
};

export default SupportPopup;
