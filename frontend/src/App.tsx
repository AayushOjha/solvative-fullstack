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
import { ShowP5 } from "./components/screens/ShowP5";
import { ShowRewards } from "./components/screens/ShowRewards";
import { CreateReward } from "./components/screens/CreateReward";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/:id" element={<ShowUser />} />
        <Route path="/:id/p5" element={<ShowP5 />} />
        <Route path="/:id/reward" element={<ShowRewards />} />
        <Route path="/:id/rewards/new" element={<CreateReward />} />

        {/* Redirect to default view if the route is not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
