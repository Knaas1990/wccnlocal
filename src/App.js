import logo from '../src/Assets/Images/logo/logo2.png';
import './App.css';
import '../src/Assets/CSS/Style.css';
import '../src/Assets/CSS/Header.css';
import '../src/Assets/CSS/Footer.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LayoutHome from './Pages/Layout/LayoutHome';
import LayoutAboutUs from './Pages/Layout/LayoutAboutUs';
import LayoutContactUs from './Pages/Layout/LayoutContactUs';
import LayoutRegistration from './Pages/Layout/LayoutRegistration';
import LayoutAwards from './Pages/Layout/LayoutAwards';
import LayoutGallery from './Pages/Layout/LayoutGallery';
import LayoutProgramme from './Pages/Layout/LayoutProgramme';

function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />} />
        <Route path="/aboutus" element={<LayoutAboutUs />} />
        <Route path="/contactus" element={<LayoutContactUs />} />
        <Route path="/registration" element={<LayoutRegistration />} />
        <Route path="/awards" element={<LayoutAwards />} />
        <Route path="/gallery" element={<LayoutGallery />} />
        <Route path="/programme" element={<LayoutProgramme />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
