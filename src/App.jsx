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
<div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-4 shadow-lg z-50">
  <Link to="/" className="flex flex-col items-center text-gray-800 hover:text-green-700 transition-colors">
    <Home className="w-8 h-8" />
  </Link>

  <Link to="/ideas" className="flex flex-col items-center text-gray-800 hover:text-green-700 transition-colors">
    <Lightbulb className="w-8 h-8" />
  </Link>

  <Link to="/help" className="flex flex-col items-center text-gray-800 hover:text-green-700 transition-colors">
    <HelpCircle className="w-8 h-8" />
  </Link>
</div>

      </div>
    </Router>
  );
}

export default App;
