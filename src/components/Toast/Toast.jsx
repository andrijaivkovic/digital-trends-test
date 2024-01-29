import { useEffect } from "react";

import { motion } from "framer-motion";

import { useApp } from "../../contexts/useApp";

import { TOAST_AUTOREMOVE_TIMER } from "../../helpers/variables";

const toastNotificationIcon = (icon) => {
  if (icon === "checkmark")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 36 36"
      >
        <g
          id="Group_10998"
          data-name="Group 10998"
          transform="translate(-1351 -846)"
        >
          <circle
            id="Ellipse_1"
            data-name="Ellipse 1"
            cx="18"
            cy="18"
            r="18"
            transform="translate(1351 846)"
            fill="#242424"
          />
          <g
            id="Group_10997"
            data-name="Group 10997"
            transform="translate(-1.101 -2.354)"
          >
            <line
              id="Line_18"
              data-name="Line 18"
              x2="5"
              y2="5"
              transform="translate(1361.101 868.054)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_19"
              data-name="Line 19"
              y1="12.5"
              x2="12.092"
              transform="translate(1366.401 860.354)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    );

  if (icon === "save") {
    return (
      <svg
        id="Group_11331"
        data-name="Group 11331"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_3830"
              data-name="Rectangle 3830"
              width="20"
              height="20"
              fill="none"
            />
          </clipPath>
        </defs>
        <g id="Group_11330" data-name="Group 11330" clipPath="url(#clip-path)">
          <path
            id="Path_6287"
            data-name="Path 6287"
            d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0"
            fill="#1b1a1a"
          />
          <path
            id="Path_6288"
            data-name="Path 6288"
            d="M13.457,5.384H6.543a.875.875,0,0,0-.873.873v8.281a.628.628,0,0,0,.369.577.639.639,0,0,0,.268.059.627.627,0,0,0,.411-.154L10,12.208l3.281,2.812a.635.635,0,0,0,1.049-.482V6.257a.874.874,0,0,0-.873-.873m.357,9.154a.12.12,0,0,1-.069.11.122.122,0,0,1-.129-.019l-3.449-2.955a.254.254,0,0,0-.335,0L6.383,14.629a.119.119,0,0,1-.128.019.121.121,0,0,1-.07-.11V6.257A.359.359,0,0,1,6.543,5.9h6.914a.359.359,0,0,1,.357.359Z"
            fill="#fff"
          />
          <path
            id="Path_6289"
            data-name="Path 6289"
            d="M13.457,5.384H6.543a.875.875,0,0,0-.873.873v8.281a.628.628,0,0,0,.369.577.639.639,0,0,0,.268.059.627.627,0,0,0,.411-.154L10,12.208l3.281,2.812a.635.635,0,0,0,1.049-.482V6.257A.874.874,0,0,0,13.457,5.384Zm.357,9.154a.12.12,0,0,1-.069.11.122.122,0,0,1-.129-.019l-3.449-2.955a.254.254,0,0,0-.335,0L6.383,14.629a.119.119,0,0,1-.128.019.121.121,0,0,1-.07-.11V6.257A.359.359,0,0,1,6.543,5.9h6.914a.359.359,0,0,1,.357.359Z"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.114"
          />
        </g>
      </svg>
    );
  }
};

const Toast = ({ toast }) => {
  const { language, dispatch } = useApp();

  useEffect(() => {
    const autoRemoveTimer = setTimeout(() => {
      dispatch({ type: "toast/removed", payload: { id: toast.id } });
    }, TOAST_AUTOREMOVE_TIMER);

    return () => clearTimeout(autoRemoveTimer);
  }, [dispatch, toast.id]);

  return (
    <motion.div
      layout={"toast"}
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.33, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
      className="toast"
    >
      {toastNotificationIcon(toast.icon)}
      {language === "en-US" ? (
        <p>{toast.messageEN}</p>
      ) : (
        <p>{toast.messageRS}</p>
      )}
    </motion.div>
  );
};

export default Toast;
