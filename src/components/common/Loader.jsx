import React, { useEffect } from "react";

export const Loader = () => {
  useEffect(() => {
    // Wait for DOM to fully render
    const loader = document.querySelector(".loader_bg");
    if (loader) {
      // Hide loader after 1 second
      setTimeout(() => {
        loader.style.display = "none";
      }, 1000);
    }
  }, []);

  return (
    <div className="loader_bg">
      <div className="loader">
        <img src="/assets/images/loading.gif" alt="Loading..." />
      </div>
    </div>
  );
};
