import React from "react";

export default function Input(props) {
  const { type, className, id, placeholder, value, onChange, field, children } =
    props;
  switch (field) {
    case "button":
      return (
        <button type={type} className={`btn btn-primary ${className}`}>
          {children}
        </button>
      );
    default:
      return (
        <input
          type={type}
          className={`form-control ${className}`}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
  }
}
