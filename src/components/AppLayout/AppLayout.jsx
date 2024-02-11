import { useApp } from "../../contexts/useApp";

import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import BottomOverlay from "../BottomOverlay/BottomOverlay";
import ToastList from "../ToastList/ToastList";
import SpotifyPlayer from "../SpotifyPlayer/SpotifyPlayer";

import KeyVideo from "../KeyVideo/KeyVideo";
import VolumeNavigation from "../VolumeNavigation/VolumeNavigation";
import { Outlet } from "react-router";

const AppLayout = () => {
  const { currentVolumeNumber } = useApp();

  return (
    <>
      <Navigation />
      <Hero />
      <Main>
        <Outlet />
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
};

export default AppLayout;
