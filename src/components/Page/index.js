import React from "react";

export default ({ children, color = "white" }) => {
  return <p style={{ background: color }}>{children}</p>;
};
