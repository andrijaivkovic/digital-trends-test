import { useState } from "react";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Video = ({
  width = "100%",
  path = "",
  placeholderPath = "",
  controls = false,
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="video-container">
      {!isLoaded && (
        <div className="video-placeholder">
          <img src={placeholderPath} alt={`Video placeholder`} />
          <LoadingSpinner />
        </div>
      )}
      <video
        onLoadedData={() => {
          // setTimeout(() => setIsLoaded(true), 2000);
          setIsLoaded(true);
        }}
        className={`${isLoaded ? "shown" : ""}`}
        width={width}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      >
        <source src={path} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
