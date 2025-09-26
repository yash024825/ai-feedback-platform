import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";
import Reports from "./pages/Reports";   
import { FeedbackProvider } from "./context/FeedbackContext"; // ✅ Context Provider

function App() {
  return (
    // ✅ Wrap entire app so Feedback + Reports share the same context
    <FeedbackProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
