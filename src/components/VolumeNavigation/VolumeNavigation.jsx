import { Link } from "react-router-dom";
import numberToWords from "number-to-words";

const VolumeNavigation = ({ language, currentVolumeNumber }) => {
  return (
    <nav className="volume-navigation">
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
          {language === "en-US" ? (
            <p>{`Previous Volume (Volume ${currentVolumeNumber - 1})`}</p>
          ) : (
            <p>{`Prošli Volume (Volume ${currentVolumeNumber - 1})`}</p>
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
          {language === "en-US" ? (
            <p>{`Next Volume (Volume ${currentVolumeNumber + 1})`}</p>
          ) : (
            <p>{`Sledeći Volume (Volume ${currentVolumeNumber + 1})`}</p>
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
    </nav>
  );
};

export default VolumeNavigation;
