import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./components/screens/Home";
import { New } from "./components/screens/New";
import { ShowUser } from "./components/screens/ShowUser";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/:id" element={<ShowUser />} />
        <Route path="/:id/p5" element={<ShowUser />} />
        <Route path="/:id/rewards/new" element={<ShowUser />} />

        {/* Redirect to default view if the route is not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
