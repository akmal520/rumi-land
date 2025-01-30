import React from "react";

const RumiLandLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="100"
      viewBox="0 0 400 100"
    >
      <rect width="400" height="100" fill="none" />
      <text
        x="10"
        y="70"
        fill="#1B5E20"
        fontFamily="Poppins, sans-serif"
        fontSize="60"
        fontWeight="bold"
      >
        RUM
      </text>
      <g transform="translate(140, 30)">
        {/* Bunga */}
        <circle cx="0" cy="0" r="8" fill="#FF4081" />
        <circle cx="12" cy="0" r="8" fill="#FF4081" />
        <circle cx="0" cy="12" r="8" fill="#FF4081" />
        <circle cx="12" cy="12" r="8" fill="#FF4081" />
        <circle cx="6" cy="6" r="5" fill="#FFEA00" />
        {/* Batang */}
        <rect x="5" y="10" width="2" height="40" fill="#1B5E20" />
      </g>
      <text
        x="160"
        y="70"
        fill="#1B5E20"
        fontFamily="Poppins, sans-serif"
        fontSize="60"
        fontWeight="bold"
      >
        LAND
      </text>
    </svg>
  );
};

export default RumiLandLogo;
