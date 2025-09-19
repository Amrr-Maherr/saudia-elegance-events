// WhatsAppButton.jsx
import React from "react";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = ({
  phoneNumber = "+966531606234",
  message = "مرحبًا!",
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const styles = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    zIndex: 1000,
    cursor: "pointer",
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={styles}
    >
      <MessageSquare size={30} />
    </a>
  );
};

export default WhatsAppButton;
