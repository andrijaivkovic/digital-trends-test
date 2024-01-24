import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Image = ({
  className = "",
  webpPath = "",
  path = "",
  placeholderPath = "",
  altText = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="image-container">
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
            // setIsLoaded(true);
          }}
          src={path}
          alt={altText}
        />
      </picture>
    </div>
  );
};

export default Image;
