import { useEffect, useState } from "react";

import { Navigate } from "react-router";
import numberToWords from "number-to-words";

const LastVisitedVolume = () => {
  const [lastVisitedVolume, setLastVisitedVolume] = useState(null);

  useEffect(() => {
    setLastVisitedVolume(
      JSON.parse(localStorage.getItem("lastVisitedVolume")) || 1
    );
  }, []);

  return (
    lastVisitedVolume && (
      <Navigate to={`/volume-${numberToWords.toWords(lastVisitedVolume)}`} />
    )
  );
};

export default LastVisitedVolume;
