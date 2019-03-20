import React from "react";

export default function Description({ name, desc }) {
  return (
    <div>
      <div>{name}</div>
      <div>{desc}</div>
    </div>
  );
}
