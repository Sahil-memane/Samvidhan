import React from "react";

function PasswordStrengthBar({ password }) {
  function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) {
      strength += 1;
    }
    if (password.length >= 12) {
      strength += 1;
    }
    if (password.match(/(?=.*[a-z])(?=.*[A-Z])/)) {
      strength += 1;
    }
    if (password.match(/(?=.*[0-9])/)) {
      strength += 1;
    }
    if (password.match(/(?=.*[!@#$%^&*])/)) {
      strength += 1;
    }
    if (password.length < 8) {
      strength = strength - 1;
    }
    if (strength <= 2 && password.length >= 12) {
      strength = 3;
    }
    if (strength <= 3 && password.length >= 16) {
      strength = 4;
    }

    return strength;
  }


  const strength = calculatePasswordStrength(password);
  let barWidth = "70px"

  let barColor;
  let strengthText;
  switch (strength) {
    case 0:
      barColor = "#dc3545";
      strengthText = "Weak";
      barWidth = "20%";
      break;
    case 1:
      barColor = "#ffc107";
      strengthText = "Normal";
      barWidth = "35%";
      break;
    case 2:
      barColor = "#17a2b8";
      strengthText = "Strong";
      barWidth = "58%";
      break;
    case 3:
      barColor = "#28a745";
      strengthText = "Very Strong";
      barWidth = "80%";
      break;
    case 4:
      barColor = "#28a745";
      strengthText = "Perfect";
      barWidth = "100%"
      break;
    default:
      barColor = "#dc3545";
      strengthText = "Weak";
      barWidth = "20%"
      break;
  }

  return (
    <div className="password-strength-bar-container">
      <div
        className="password-strength-bar"
        style={{ backgroundColor: barColor, width: barWidth }}
      />
      <div className="password-strength-text">{strengthText}</div>
    </div>
  );
}

export default PasswordStrengthBar;
