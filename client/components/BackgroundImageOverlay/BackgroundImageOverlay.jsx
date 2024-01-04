import React from "react";

function BackgroundImageOverlay({ imageUrl, children }) {
  return (
    <>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "100%",
          backgroundColor: "transparent",
        }}
      >
        <div className="background-overlay">{children}</div>
      </div>
    </>
  );
}

export default BackgroundImageOverlay;
