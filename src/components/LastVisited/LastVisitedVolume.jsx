import { useEffect, useState } from "react";

import { Navigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import numberToWords from "number-to-words";

import { useApp } from "../../contexts/useApp";

const LastVisitedVolume = () => {
  const { dispatch } = useApp();

  const [lastVisitedVolume, setLastVisitedVolume] = useState(null);

  useEffect(() => {
    setLastVisitedVolume(
      () => JSON.parse(localStorage.getItem("lastVisitedVolume")) || 1
    );
  }, []);

  useEffect(() => {
    if (lastVisitedVolume) {
      dispatch({
        type: "toast/added",
        payload: {
          id: uuidv4(),
          icon: "save",
          messageEN: `We've loaded the last Volume you visited.`,
          messageRS: `Učitali smo poslednji Volume koji ste čitali.`,
        },
      });
    }
  }, [lastVisitedVolume, dispatch]);

  return (
    lastVisitedVolume && (
      <Navigate to={`/volume-${numberToWords.toWords(lastVisitedVolume)}`} />
    )
  );
};

export default LastVisitedVolume;
