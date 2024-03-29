import { Link } from "react-router-dom";
import numberToWords from "number-to-words";

import { useApp } from "../../contexts/useApp";

const congratsText = (readVolumesArr, language) => {
  if (readVolumesArr.length === 8) {
    if (language === "en-US") {
      return <p>{"Congratulations!\nYou’ve completed every Volume!"}</p>;
    }

    if (language === "sr-Lat") {
      return <p>{"Čestitamo!\nZavršili ste svaki Volume!"}</p>;
    }
  }

  if (readVolumesArr.length < 8) {
    if (language === "en-US") {
      return <p>{"Congratulations!\nYou’ve completed this Volume!"}</p>;
    }

    if (language === "sr-Lat") {
      return <p>{"Čestitamo!\nZavršili ste ovaj Volume!"}</p>;
    }
  }
};

const VolumeNavigation = () => {
  const { language, currentVolumeNumber, readVolumes } = useApp();

  return (
    <>
      <nav className="volume-navigation">
        <div className="volume-navigation__congrats">
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
          {congratsText(readVolumes, language)}
        </div>
        <div className="volume-navigation__links">
          {currentVolumeNumber > 1 && (
            <Link
              to={`/volume-${numberToWords.toWords(currentVolumeNumber - 1)}`}
              className={`volume-navigation__link volume-navigation__link--previous volume-navigation__link--volume-${numberToWords.toWords(
                currentVolumeNumber - 1
              )}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="13"
                viewBox="0 0 20 36.707"
              >
                <path
                  id="Union_1"
                  data-name="Union 1"
                  d="M22,3416,4,3434Zm-36,0,18,18Z"
                  transform="translate(-3415.646 22.353) rotate(-90)"
                  fill="none"
                  stroke="#242424"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
              {language === "en-US" && (
                <p>{`Previous Volume (Volume 0${currentVolumeNumber - 1})`}</p>
              )}
              {language === "sr-Lat" && (
                <p>{`Prošli Volume (Volume 0${currentVolumeNumber - 1})`}</p>
              )}
            </Link>
          )}
          {currentVolumeNumber <= 7 && (
            <Link
              to={`/volume-${numberToWords.toWords(currentVolumeNumber + 1)}`}
              className={`volume-navigation__link volume-navigation__link--next volume-navigation__link--volume-${numberToWords.toWords(
                currentVolumeNumber + 1
              )}`}
            >
              {language === "en-US" && (
                <p>{`Next Volume (Volume 0${currentVolumeNumber + 1})`}</p>
              )}
              {language === "sr-Lat" && (
                <p>{`Sledeći Volume (Volume 0${currentVolumeNumber + 1})`}</p>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="13"
                viewBox="0 0 20 36.707"
              >
                <path
                  id="Union_1"
                  data-name="Union 1"
                  d="M22,3416,4,3434Zm-36,0,18,18Z"
                  transform="translate(-3415.646 22.353) rotate(-90)"
                  fill="none"
                  stroke="#242424"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default VolumeNavigation;
