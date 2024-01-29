import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import { useApp } from "../../contexts/useApp";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import { SPOTIFY_VISIBILTY_TRESHOLD_DESKTOP } from "../../helpers/variables";
import { SPOTIFY_VISIBILTY_TRESHOLD_MOBILE } from "../../helpers/variables";
import { spotifyEpisodesLinks } from "../../helpers/variables";

const SpotifyPlayer = () => {
  const { language, currentVolumeNumber } = useApp();

  const [isSpotifyPlayerVisible, setIsSpotifyPlayerVisible] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const isMobile = useMediaQuery("(max-width: 90em)");
  const visibilityTreshold = useRef(null);

  useEffect(() => {
    visibilityTreshold.current = isMobile
      ? SPOTIFY_VISIBILTY_TRESHOLD_MOBILE
      : SPOTIFY_VISIBILTY_TRESHOLD_DESKTOP;
  }, [isMobile]);

  useEffect(() => {
    if (!isSpotifyPlayerVisible) {
      setIsLoading(true);
    }
  }, [isSpotifyPlayerVisible]);

  const changeSpotifyPlayerVisibility = () => {
    if (
      window.scrollY >= visibilityTreshold.current &&
      isSpotifyPlayerVisible !== true
    ) {
      setIsSpotifyPlayerVisible(true);
    }

    if (
      window.scrollY < visibilityTreshold.current &&
      isSpotifyPlayerVisible !== false
    ) {
      setIsSpotifyPlayerVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeSpotifyPlayerVisibility);
    changeSpotifyPlayerVisibility();

    return () =>
      window.removeEventListener("scroll", changeSpotifyPlayerVisibility);
  });

  return (
    <AnimatePresence>
      {isSpotifyPlayerVisible && (
        <motion.div
          transition={{
            y: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
            opacity: { duration: 0.4 },
          }}
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          className="spotify-player"
        >
          <div className="player-container">
            <iframe
              style={{
                borderRadius: "12px",
                display: isLoading ? "none" : "block",
              }}
              src={`https://open.spotify.com/embed/episode/${spotifyEpisodesLinks.at(
                currentVolumeNumber - 1
              )}?utm_source=generator&t=0`}
              width="100%"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              onLoad={() => {
                setTimeout(() => setIsLoading(false), 500);
                // setIsLoading(false);
              }}
            />
            {isLoading && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="spotify-loading"
                >
                  <LoadingSpinner size="4rem" color="#242424" />
                  {language === "en-US" ? (
                    <p>Spotify player is loading...</p>
                  ) : (
                    <p>Spotify plejer se učitava...</p>
                  )}
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpotifyPlayer;
