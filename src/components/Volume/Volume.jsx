import { useEffect } from "react";

import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import numberToWords from "number-to-words";

import { useApp } from "../../contexts/useApp";

import { VOLUME_READ_OBSERVER_DELAY } from "../../helpers/variables";

const volumeVariants = {
  initial: { opacity: 0, scale: 0.99 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.99 },
};

const volumeMotionProps = {
  variants: volumeVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: {
    y: { duration: 0.2 },
    opacity: { duration: 0.2 },
  },
};

const Volume = ({
  className,
  children,
  isVolumeRead,
  setIsVolumeRead,
  lastSection,
  volumeTitle,
  volumeNumber,
}) => {
  const { readVolumes, dispatch } = useApp();

  useEffect(() => {
    document.body.classList.add(
      `volume-${numberToWords.toWords(volumeNumber)}`
    );

    return () => {
      document.body.classList.remove(
        `volume-${numberToWords.toWords(volumeNumber)}`
      );
    };
  });

  useEffect(() => {
    if (isVolumeRead === false && volumeNumber !== 1)
      volumeTitle.current.scrollIntoView();
  }, [isVolumeRead, volumeTitle, volumeNumber]);

  useEffect(() => {
    localStorage.setItem("lastVisitedVolume", volumeNumber);
  }, [volumeNumber]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch({ type: "volume/read", payload: volumeNumber });
        }
      },
      { threshold: 1 }
    );

    setTimeout(
      () => observer.observe(lastSection.current),
      VOLUME_READ_OBSERVER_DELAY
    );

    observer.disconnect();

    return () => observer.disconnect();
  }, [dispatch, lastSection, volumeNumber]);

  useEffect(() => {
    if (readVolumes.includes(volumeNumber)) {
      setIsVolumeRead(true);
      dispatch({
        type: "toast/added",
        payload: {
          id: uuidv4(),
          icon: "checkmark",
          messageEN: `Congrats! You've completed Volume 0${volumeNumber}!`,
          messageRS: `Čestitamo! Završili ste Volume 0${volumeNumber}!`,
        },
      });

      return;
    }

    setIsVolumeRead(false);
  }, [readVolumes, dispatch, setIsVolumeRead, volumeNumber]);

  useEffect(() => {
    dispatch({ type: "volume/changed", payload: volumeNumber });
  }, [dispatch, volumeNumber]);

  return (
    <motion.article {...volumeMotionProps} className={`volume ${className}`}>
      {children}
    </motion.article>
  );
};

export default Volume;
