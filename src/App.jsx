import { Navigate, Route, Routes } from "react-router";
import { Helmet } from "react-helmet-async";

import { useApp } from "./contexts/useApp";

import VolumeOne from "./pages/VolumeOne/VolumeOne";
import VolumeTwo from "./pages/VolumeTwo/VolumeTwo";
import VolumeThree from "./pages/VolumeThree/VolumeThree";
import VolumeFour from "./pages/VolumeFour/VolumeFour";
import VolumeFive from "./pages/VolumeFive/VolumeFive";
import VolumeSix from "./pages/VolumeSix/VolumeSix";
import VolumeSeven from "./pages/VolumeSeven/VolumeSeven";
import VolumeEight from "./pages/VolumeEight/VolumeEight";

import LastVisitedVolume from "./components/LastVisited/LastVisitedVolume";

import AppLayout from "./components/AppLayout/AppLayout";

function App() {
  const { language } = useApp();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <meta name="theme-color" content="#E5EAFF" />
      </Helmet>
      <Routes>
        <Route element={<AppLayout />}>
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
