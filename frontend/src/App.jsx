import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthPromptModal from "./components/AuthPromptModal";
import Navbar from "./components/Navbar"
import Hero from "./Hero"; // or your main page component
import Solutions from "./pages/solutions/Solutions";
import AISurveillance from "./pages/solutions/AISurveillance";
import ComputerVision from "./pages/solutions/ComputerVision";
import SmartAgriculture from "./pages/solutions/SmartAgriculture";
import SmartCity from "./pages/solutions/SmartCity";
import AudioVisual from "./pages/solutions/AudioVisual";
import Technology from "./pages/technology/Technology";
import AIVisionsystems from "./pages/technology/AIVisionsystems";
import RadarTechnology from "./pages/technology/RadarTechnology";
import StorageBandwidth from "./pages/technology/StorageBandwidth";
import SmartEdgeComputing from "./pages/technology/SmartEdgeComputing";
import AudioVideoIntegration from "./pages/technology/AudioVideoIntegration";
import CloudConnectivity from "./pages/technology/CloudConnectivity";
import Demo from "./pages/Demo";
import Service from "./pages/service/Service";
import AIConsulting from "./pages/service/AIConsulting";
import Security from "./pages/service/Security";
import Installation from "./pages/service/Installation";
import TrainingSupport from "./pages/service/TrainingSupport";
import MaintenanceSupport from "./pages/service/MaintenanceSupport";
import Product from "./pages/products/Product";
import ProductDetail from "./pages/products/ProductDetail";
import Industry from "./pages/Industry";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import EditProfile from "./components/EditProfile";
import ResetPassword from "./components/ResetPassword";
import Contact from "./components/Contact";
import CMSPage from "./pages/CMSPage";
import CMSIndex from "./pages/CMSIndex";
import AdminDashboard from "./pages/admin/AdminDashboard";

const publicRoutes = ["/", "/login", "/register", "/forgotpassword", "/reset-password"];

const AuthGate = () => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading || isAuthenticated) return;

    if (!publicRoutes.includes(location.pathname)) {
      navigate("/", { replace: true });
    }
  }, [loading, isAuthenticated, location.pathname, navigate]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const EngagementPrompt = () => {
  const { isAuthenticated, setGuestTimedOut } = useAuth();
  const [showEngagementPrompt, setShowEngagementPrompt] = useState(false);
  const [promptShown, setPromptShown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated || promptShown) return;

    const timer = setTimeout(() => {
      if (!isAuthenticated && publicRoutes.includes(location.pathname)) {
        setShowEngagementPrompt(true);
        setPromptShown(true);
        // mark that guest has timed out so navigation can be blocked elsewhere
        setGuestTimedOut(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [isAuthenticated, promptShown, location.pathname, setGuestTimedOut]);

  return (
    <AuthPromptModal
      isOpen={showEngagementPrompt}
      title="Register to unlock the full experience"
      description="You are browsing as a guest. Register now to get access to personalized features and stay connected with Honey Vision."
      primaryText="Login"
      secondaryText="Register"
      onPrimary={() => {
        setShowEngagementPrompt(false);
        navigate("/login");
      }}
      onSecondary={() => {
        setShowEngagementPrompt(false);
        navigate("/register");
      }}
      onClose={() => setShowEngagementPrompt(false)}
    />
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <AuthGate />
        <EngagementPrompt />
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/aivisionsystems" element={<AIVisionsystems />} />
        <Route path="/technology/radartechnology" element={<RadarTechnology />} />
        <Route path="/technology/storagebandwidth" element={<StorageBandwidth />} />
        <Route path="/technology/smartedgecomputing" element={<SmartEdgeComputing />} />
        <Route path="/technology/audiovideointegration" element={<AudioVideoIntegration />} />
        <Route path="/technology/cloudconnectivity" element={<CloudConnectivity />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/ai-consulting" element={<AIConsulting />} />
        <Route path="/service/security-consulting" element={<Security />} />
        <Route path="/service/installation" element={<Installation />} />
        <Route path="/service/training-support" element={<TrainingSupport />} />
        <Route path="/service/maintenance" element={<MaintenanceSupport />} />
        <Route path="/solutions/ai-surveillance" element={<AISurveillance />} />
        <Route path="/solutions/computervision" element={<ComputerVision />} />
        <Route path="/solutions/smartagriculture" element={<SmartAgriculture />} />
        <Route path="/solutions/smartcity" element={<SmartCity />} />
        <Route path="/solutions/audiovisuals" element={<AudioVisual />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cms" element={<CMSIndex />} />
        <Route path="/cms/:slug" element={<CMSPage />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/changepassword" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
        <Route path="/editprofile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
      </Routes>
      <BackToTop />
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;