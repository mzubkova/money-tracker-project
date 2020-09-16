import React from "react";
import "./header.css";

const LOGO = "./img/logo.svg";

const HeaderLogo = ({ title }) => {
  return (
  
    <div className="header__logo">
      <img src={LOGO} alt="logo" className={`logo`} />
      <h1 className="header-logo__title">{title}</h1>
    </div>
  );
};

export default HeaderLogo;