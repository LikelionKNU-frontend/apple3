import React from "react";

function Feature({ icon, text }) {
  return (
    <div className="feature">
      <img src={`/${icon}`} alt="feature icon" className="feature-icon" />
      <p>{text}</p>
    </div>
  );
}

export default Feature;
