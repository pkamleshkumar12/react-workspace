import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layout/PlanLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layout/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/invite" element={<PhoneConfirmation />} />
          <Route exact path="/code_confirm" element={<CodeConfirm />} />
          <Route
            exact
            path="/allow_notification"
            element={<AllowNotification />}
          />
        </Routes>
      </PlanLayout>
      <AppLayout>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
