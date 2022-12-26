import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import BatteryStatus from "./pages/battery-status";
import Daily from "./pages/daily";
import Event from "./pages/event";
import Monthly from "./pages/monthly";
import Yearly from "./pages/yearly";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<BatteryStatus />} />
          <Route path="event" element={<Event />} />
          <Route path="yearly" element={<Yearly />} />
          <Route path="monthly" element={<Monthly />} />
          <Route path="daily" element={<Daily />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
