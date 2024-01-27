import { useState } from "react";

import { motion } from "framer-motion";

import LottieReact from "lottie-react";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import { useMediaQuery } from "../../hooks/useMediaQuery";

const Decoration = ({ path, style = {}, className = "", motionProps = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1439px)");

  if (!isMobile) {
    return (
      <motion.div
        {...{
          ...motionProps,
          transition: {
            y: { duration: 0.45, delay: 0.2 },
            opacity: { duration: 0.55, delay: 0.2 },
          },
        }}
        style={style}
        className={`volume__decoration ${className}`}
      >
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
      </motion.div>
    );
  }
};

export default Decoration;
