import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Lightbulb, HelpCircle } from "lucide-react";

// Pages import
import Dashboard from "./pages/Dashboard.jsx";
import Ideas from "./pages/Ideas.jsx";
import Help from "./pages/Help.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 relative pb-14">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/help" element={<Help />} />
        </Routes>

        {/* Bottom Nav */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
          <Link to="/">
            <Home className="w-6 h-6 text-gray-600" />
          </Link>
          <Link to="/ideas">
            <Lightbulb className="w-6 h-6 text-gray-600" />
          </Link>
          <Link to="/help">
            <HelpCircle className="w-6 h-6 text-gray-600" />
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
