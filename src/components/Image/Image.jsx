import { useState } from "react";

import { motion } from "framer-motion";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Image = ({
  className = "",
  webpPath = "",
  path = "",
  placeholderPath = "",
  altText = "",
  motionProps = {},
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div {...motionProps} className="image-container">
      {!isLoaded && (
        <div className="image-placeholder">
          <img src={placeholderPath} alt={`${altText} - placeholder`} />
          <LoadingSpinner />
        </div>
      )}
      <picture className={`${className} ${isLoaded ? "shown" : ""}`}>
        <source type="image/webp" srcSet={webpPath} />
        <source type="image/jpg" srcSet={path} />
        <img
          onLoad={() => {
            setTimeout(() => setIsLoaded(true), 500);
          }}
          src={path}
          alt={altText}
        />
      </picture>
    </motion.div>
  );
};

export default Image;
