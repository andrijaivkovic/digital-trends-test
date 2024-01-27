import { useState } from "react";

import { motion } from "framer-motion";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Embed = ({
  type,
  src,
  title,
  site,
  className = "",
  backgroundImage,
  allowFullScreen,
  allow = "",
  frameBorder = "0",
  scrolling = "no",
  motionProps = {},
}) => {
  const [isShown, setIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (type === "horizontal") {
    return (
      <motion.div
        {...motionProps}
        className={`volume__embed volume__embed--horizontal  ${className}`}
      >
        {isShown && (
          <iframe
            className={!isLoading ? "loaded" : ""}
            onLoad={() => {
              setIsLoading(false);
            }}
            title={title}
            src={src}
            allowFullScreen={allowFullScreen}
            allow={allow}
            scrolling={scrolling}
            frameBorder={frameBorder}
          />
        )}

        {(!isShown || isLoading) && (
          <button
            onClick={() => {
              setIsShown(true);
              setIsLoading(true);
            }}
            className="embed__placeholder"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <>
              <div className="embed__placeholder-overlay">
                {!isLoading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="86"
                    viewBox="0 0 75 86"
                  >
                    <path
                      id="Polygon_1"
                      data-name="Polygon 1"
                      d="M39.53,6.053a4,4,0,0,1,6.94,0l36.1,62.958A4,4,0,0,1,79.1,75H6.9a4,4,0,0,1-3.47-5.99Z"
                      transform="translate(75) rotate(90)"
                      fill="#fff"
                    />
                  </svg>
                )}
                {isLoading && <LoadingSpinner />}
              </div>
            </>
          </button>
        )}
      </motion.div>
    );
  }

  if (type === "vertical") {
    return (
      <motion.div
        {...motionProps}
        className={`volume__embed volume__embed--vertical ${className}`}
      >
        {isShown && (
          <iframe
            className={`${!isLoading ? "loaded" : ""} ${site}`}
            onLoad={() => {
              setIsLoading(false);
            }}
            title={title}
            src={src}
            allowFullScreen={allowFullScreen}
            scrolling={scrolling}
          />
        )}

        {(!isShown || isLoading) && (
          <button
            onClick={() => {
              setIsShown(true);
              setIsLoading(true);
            }}
            className="embed__placeholder"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <>
              <div className="embed__placeholder-overlay">
                {!isLoading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="86"
                    viewBox="0 0 75 86"
                  >
                    <path
                      id="Polygon_1"
                      data-name="Polygon 1"
                      d="M39.53,6.053a4,4,0,0,1,6.94,0l36.1,62.958A4,4,0,0,1,79.1,75H6.9a4,4,0,0,1-3.47-5.99Z"
                      transform="translate(75) rotate(90)"
                      fill="#fff"
                    />
                  </svg>
                )}
                {isLoading && <LoadingSpinner />}
              </div>
            </>
          </button>
        )}
      </motion.div>
    );
  }
};

export default Embed;
