import React from "react";
import "./button.css";

// Use following code to add button component

{
  /* <Button
  type="button"
  buttonStyle="btn--success--outline"
  buttonSize="btn--medium"
>
  Home
</Button> */
}

const STYLES = [
  "btn--standard",
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
  "btn--mobile--primary",
  "btn--primary--cart",
];

const SIZES = [
  "btn--medium",
  "btn--large",
  "btn--small",
  "btn--mobile",
  "btn--cart",
];

export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onclick}
      type={type}
    >
      {children}
    </button>
  );
};
