import React from "react";

export default function Description({ name, desc }) {
  return (
    <div className="col-8 p-0 description-block">
      {name && (
        <h2 style={{ "textTransform": "capitalize" }}>
          {name.replace("_", " ")}
        </h2>
      )}
      {desc && <p>{desc}</p>}
    </div>
  );
}
