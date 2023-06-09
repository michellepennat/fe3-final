import React from "react";
import "./footer.css";
import { useContextGlobal } from "./utils/global.context";
import THEME from "./utils/theme-colors";

const Footer = () => {
  const {
    state: { theme },
  } = useContextGlobal();
  return (
    <footer
      className="footer"
      style={{ backgroundColor: THEME[theme].footer.backgroundColor }}
    >
      <div className="footer-logoDH">
        <p style={{ color: THEME[theme].footer.text }}>Powered by</p>
        <img style={{ filter: THEME[theme].footer.logoDH }} src="/images/DH.png" alt="DH-logo" />
      </div>
      <div className="footer-logos">
        <img src="/images/ico-facebook.png" alt="Logo de Facebook" />
        <img src="/images/ico-instagram.png" alt="Logo de Instagram" />
        <img src="/images/ico-tiktok.png" alt="Logo de TikTok" />
        <img src="/images/ico-whatsapp.png" alt="Logo de Whatsapp" />
      </div>
    </footer>
  );
};

export default Footer;
