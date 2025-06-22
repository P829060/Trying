import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";

import LogoImage from './components/header.jpg';

const pageWrapperStyle = {
  position: 'relative',
  minHeight: '100vh',
  backgroundImage: `url(${LogoImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const backgroundOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // ✅ This actually overlays the image
  zIndex: 0,
};

const contentWrapperStyle = {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};


function App() {
  return (
    <div style={pageWrapperStyle}>
      {/* 🔹 Background and overlay */}
      <div style={backgroundOverlayStyle}></div>

      {/* 🔹 Actual page content */}
      <div style={contentWrapperStyle}>
        <Header />
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
