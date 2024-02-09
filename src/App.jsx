import { Navigate, Route, Routes } from "react-router";
import { Helmet } from "react-helmet-async";

import { useApp } from "./contexts/useApp";

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

import VolumeNavigation from "./components/VolumeNavigation/VolumeNavigation";
import KeyVideo from "./components/KeyVideo/KeyVideo";

import BottomOverlay from "./components/BottomOverlay/BottomOverlay";
import ToastList from "./components/ToastList/ToastList";
import SpotifyPlayer from "./components/SpotifyPlayer/SpotifyPlayer";

function App() {
  const { language, currentVolumeNumber } = useApp();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <meta name="theme-color" content="#E5EAFF" />
      </Helmet>
      <Navigation />
      <Hero />
      <Main>
        <Routes>
          <Route index element={<LastVisitedVolume />} />
          <Route path="/volume-one" element={<VolumeOne />} />
          <Route path="/volume-two" element={<VolumeTwo />} />
          <Route path="/volume-three" element={<VolumeThree />} />
          <Route path="/volume-four" element={<VolumeFour />} />
          <Route path="/volume-five" element={<VolumeFive />} />
          <Route path="/volume-six" element={<VolumeSix />} />
          <Route path="/volume-seven" element={<VolumeSeven />} />
          <Route path="/volume-eight" element={<VolumeEight />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <KeyVideo key={currentVolumeNumber} />
      </Main>
      <VolumeNavigation key={currentVolumeNumber} />
      <Footer />
      <BottomOverlay>
        <ToastList />
        <SpotifyPlayer key={currentVolumeNumber} />
      </BottomOverlay>
    </>
  );
}

export default App;
