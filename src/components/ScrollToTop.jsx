// ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const styles = {
    position: "fixed",
    bottom: "30px",
    left: "30px",
    width: "50px",
    height: "50px",
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: "50%",
    display: visible ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    transition: "opacity 0.3s",
  };

  return (
    <div style={styles} onClick={scrollToTop}>
      <ArrowUp size={24} />
    </div>
  );
};

export default ScrollToTop;
