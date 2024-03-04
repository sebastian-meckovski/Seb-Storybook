import React from "react";
import "./LoadingSpinner.scss"; // Import your SCSS file

export const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
