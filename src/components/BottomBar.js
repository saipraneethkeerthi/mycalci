/**
 * Importing REACT
 * The below code is used to display the footer of the page
 * Footer will redirect to about us page
 *
 */
import React from "react";
const Bottombar = () => {
  return (
    <div style={{ position: "absolute", bottom: "0" }}>
      <a href="/about">footer</a>
    </div>
  );
};
export default Bottombar;
