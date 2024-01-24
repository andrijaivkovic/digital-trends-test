import { useEffect, useRef, useState } from "react";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import { SPOTIFY_VISIBILTY_TRESHOLD_DESKTOP } from "../../helpers/variables";
import { SPOTIFY_VISIBILTY_TRESHOLD_MOBILE } from "../../helpers/variables";
import { spotifyEpisodesLinks } from "../../helpers/variables";

import { useMediaQuery } from "../../hooks/useMediaQuery";

const SpotifyPlayer = ({ currentVolumeNumber, language }) => {
  const [isSpotifyPlayerVisible, setIsSpotifyPlayerVisible] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const isMobile = useMediaQuery("(max-width: 90em)");
  const visibilityTreshold = useRef(null);

  useEffect(() => {
    visibilityTreshold.current = isMobile
      ? SPOTIFY_VISIBILTY_TRESHOLD_MOBILE
      : SPOTIFY_VISIBILTY_TRESHOLD_DESKTOP;
  }, [isMobile]);

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
    <div className={`spotify-player ${isSpotifyPlayerVisible ? "shown" : ""}`}>
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
            setIsLoading(false);
          }}
        />
        {isLoading && (
          <>
            <div className="spotify-loading">
              <LoadingSpinner size="4rem" color="#242424" />
              {language === "en-US" ? (
                <p>Spotify player is loading...</p>
              ) : (
                <p>Spotify plejer se učitava...</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SpotifyPlayer;
