import { useEffect, useState } from "react";

import { NAVIGATION_OPAQUE_TRESHOLD } from "../../helpers/variables";

const BackToTop = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const changeBackToTopVisibility = () => {
    if (
      window.scrollY >= NAVIGATION_OPAQUE_TRESHOLD &&
      isBackToTopVisible !== true
    ) {
      setIsBackToTopVisible(true);
    }

    if (
      window.scrollY < NAVIGATION_OPAQUE_TRESHOLD &&
      isBackToTopVisible !== false
    ) {
      setIsBackToTopVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackToTopVisibility);
    changeBackToTopVisibility();

    return () =>
      window.removeEventListener("scroll", changeBackToTopVisibility);
  });

  return (
    <button
      onClick={handleBackToTop}
      aria-label="Back to top of the page"
      className={`back-to-top ${isBackToTopVisible ? "shown" : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41.789"
        height="22.309"
        viewBox="0 0 41.789 22.309"
      >
        <g
          id="Group_5707"
          data-name="Group 5707"
          transform="translate(-1025.586 1794.895) rotate(-90)"
        >
          <line
            id="Line_19"
            data-name="Line 19"
            y1="19.48"
            x2="19.48"
            transform="translate(1774 1046.48)"
            fill="none"
            stroke="#242424"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <line
            id="Line_20"
            data-name="Line 20"
            y1="19.48"
            x2="19.48"
            transform="translate(1774 1046.48) rotate(-90)"
            fill="none"
            stroke="#242424"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </button>
  );
};

export default BackToTop;
