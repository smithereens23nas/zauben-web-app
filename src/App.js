import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Locations from "./pages/locations/locations";
import SideMenu from "./components/SideMenu/SideMenu";
import Metrics from "./pages/Metrics/metrics";
import Plants from "./pages/Plant-walls/plants"
import MetricsMenu from "./pages/MetricsListMenu/MetricsListPage";
import Energy from "./pages/ESG & Energy/Energy"
import Wellness from "./pages/Wellness/Wellness";
import { Bar } from 'react-chartjs-2';

import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  BarElement,
} from "chart.js";

function App() {
  // const URL = "http://localhost:3002/";
  const URL = "https://zaubendashboard.netlify.app/";
  Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Filler
  );
  
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/home" element={<Home URL={URL} />} />
        <Route exact path="/locations" element={<Locations URL={URL} />} />
        <Route exact path="/performance" element={<Metrics URL={URL} />} />
        <Route exact path="/livingwalls" element={<Plants URL={URL} />} />
        <Route exact path="/metricsDashboard" element={<MetricsMenu URL={URL} />} />
        <Route exact path="/energy" element={<Energy URL={URL} />} />
        <Route exact path="/wellness" element={<Wellness URL={URL} />} />
      </Routes>
    </div>
  );
}

export default App;
