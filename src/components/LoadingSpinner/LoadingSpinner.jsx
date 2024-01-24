const LoadingSpinner = ({ color = "#fff", size = "6.4rem" }) => {
  return (
    <svg
      className="loading-spinner-container"
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="loading-spinner">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3"></circle>
      </g>
    </svg>
  );
};

export default LoadingSpinner;
