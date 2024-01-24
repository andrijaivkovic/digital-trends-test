import { useState } from "react";

import LottieReact from "lottie-react";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import { useMediaQuery } from "../../hooks/useMediaQuery";

const Decoration = ({ path, style = {}, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1439px)");

  if (!isMobile) {
    return (
      <div style={style} className={`volume__decoration ${className}`}>
        {!isLoaded && <LoadingSpinner />}
        <LottieReact
          className={`animation ${isLoaded ? "shown" : ""}`}
          onDataReady={() => {
            setTimeout(() => setIsLoaded(true), 500);
            // setIsLoaded(true);
          }}
          path={path}
          loop={true}
          autoplay={true}
        />
      </div>
    );
  }
};

export default Decoration;
