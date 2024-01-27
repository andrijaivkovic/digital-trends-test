import { useCallback, useEffect, useState } from "react";

import { Route, Routes } from "react-router";
import { Helmet } from "react-helmet-async";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import VolumeOne from "./pages/VolumeOne/VolumeOne";
import VolumeTwo from "./pages/VolumeTwo/VolumeTwo";
import VolumeThree from "./pages/VolumeThree/VolumeThree";
import VolumeFour from "./pages/VolumeFour/VolumeFour";
import VolumeFive from "./pages/VolumeFive/VolumeFive";
import VolumeSix from "./pages/VolumeSix/VolumeSix";
import VolumeSeven from "./pages/VolumeSeven/VolumeSeven";
import VolumeEight from "./pages/VolumeEight/VolumeEight";

import LastVisitedVolume from "./components/LastVisited/LastVisitedVolume";

import SpotifyPlayer from "./components/SpotifyPlayer/SpotifyPlayer";
import VolumeNavigation from "./components/VolumeNavigation/VolumeNavigation";

import ClearLocalStorage from "./components/ClearLocalStorage/ClearLocalStorage";
import KeyVideo from "./components/KeyVideo/KeyVideo";

const getPreferredLanuage = () => {
  return localStorage.getItem("preferredLanguage");
};

const getReadVolumes = () => {
  const readVolumes = JSON.parse(localStorage.getItem("readVolumes"));
  if (!readVolumes) return [];

  return readVolumes;
};

function App() {
  const [language, setLanguage] = useState(getPreferredLanuage);
  const [currentVolumeNumber, setCurrentVolumeNumber] = useState(null);
  const [readVolumes, setReadVolumes] = useState(getReadVolumes);

  const handleChangeCurrentVolumeNumber = useCallback((volumeNumber) => {
    setCurrentVolumeNumber(volumeNumber);
  }, []);

  const handleAddReadVolume = useCallback((volumeNumber) => {
    setReadVolumes((current) => {
      if (current.includes(volumeNumber)) return current;
      return [...current, volumeNumber];
    });
  }, []);

  const handleSwitchLanguage = () => {
    if (language === "en-US") setLanguage("sr-Lat");
    if (language === "sr-Lat") setLanguage("en-US");
  };

  useEffect(() => {
    if (language) localStorage.setItem("preferredLanguage", language);
  }, [language]);

  useEffect(() => {
    if (!language) {
      const userSystemLanguage = navigator.language;

      if (!userSystemLanguage.includes("sr")) {
        setLanguage("en-US");
      }

      if (userSystemLanguage.includes("sr")) {
        setLanguage("sr-Lat");
      }
    }
  }, [language]);

  useEffect(() => {
    if (!readVolumes) return;
    localStorage.setItem("readVolumes", JSON.stringify(readVolumes));
  }, [readVolumes]);

  return (
    <>
      <Helmet>
        <html lang={language} />
        <meta name="theme-color" content="#E5EAFF" />
      </Helmet>
      <Navigation
        language={language}
        handleSwitchLanguage={handleSwitchLanguage}
      />
      <Hero />
      <Main>
        <Routes>
          <Route path="/" element={<LastVisitedVolume />} />
          <Route
            path="/volume-one"
            element={
              <VolumeOne
                handleAddReadVolume={handleAddReadVolume}
                readVolumes={readVolumes}
                handleChangeCurrentVolumeNumber={
                  handleChangeCurrentVolumeNumber
                }
                language={language}
              />
            }
          />
          <Route
            path="/volume-two"
            element={
              <VolumeTwo
                readVolumes={readVolumes}
                handleAddReadVolume={handleAddReadVolume}
                handleChangeCurrentVolumeNumber={
                  handleChangeCurrentVolumeNumber
                }
                language={language}
              />
            }
          />
          <Route
            path="/volume-three"
            element={
              <VolumeThree
                readVolumes={readVolumes}
                handleAddReadVolume={handleAddReadVolume}
                handleChangeCurrentVolumeNumber={
                  handleChangeCurrentVolumeNumber
                }
                language={language}
              />
            }
          />
          <Route
            path="/volume-four"
            element={
              <VolumeFour
                readVolumes={readVolumes}
                handleAddReadVolume={handleAddReadVolume}
                handleChangeCurrentVolumeNumber={
                  handleChangeCurrentVolumeNumber
                }
                language={language}
              />
            }
          />
          <Route
            path="/volume-five"
            element={
              <VolumeFive
                readVolumes={readVolumes}
                handleAddReadVolume={handleAddReadVolume}
                handleChangeCurrentVolumeNumber={
                  handleChangeCurrentVolumeNumber
                }
                language={language}
              />
            }
          />
          <Route
            path="/volume-six"
            element={
              <VolumeSix
                readVolumes={readVolumes}
                handleAddReadVolume={handleAddReadVolume}
                handleChangeCurrentVolumeNumber={
                  handleChangeCurrentVolumeNumber
                }
                language={language}
              />
            }
          />
          <Route
            path="/volume-seven"
            element={
              <VolumeSeven
                readVolumes={readVolumes}
                handleAddReadVolume={handleAddReadVolume}
                handleChangeCurrentVolumeNumber={
                  handleChangeCurrentVolumeNumber
                }
                language={language}
              />
            }
          />
          <Route
            path="/volume-eight"
            element={
              <VolumeEight
                readVolumes={readVolumes}
                handleAddReadVolume={handleAddReadVolume}
                handleChangeCurrentVolumeNumber={
                  handleChangeCurrentVolumeNumber
                }
                language={language}
              />
            }
          />
        </Routes>
        <KeyVideo language={language} />
      </Main>
      <VolumeNavigation
        language={language}
        currentVolumeNumber={currentVolumeNumber}
      />
      <Footer />
      <SpotifyPlayer
        language={language}
        key={currentVolumeNumber}
        currentVolumeNumber={currentVolumeNumber}
      />
      <ClearLocalStorage />
    </>
  );
}

export default App;
