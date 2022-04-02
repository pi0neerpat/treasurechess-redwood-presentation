import React from "react";

export default ({ children, color }) => (
  <div
    style={{
      display: "grid",
      columnGap: "90px",
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color === "red" ? "rgb(191, 71, 34)" : "#47433f",
    }}
  >
    {children}
  </div>
);
