import React from "react";

export default function Input(props) {
  const { type, className, id, placeholder, value, onChange, field, children } =
    props;
  console.log(field);
  switch (field) {
    case "button":
      console.log("Hello");
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
