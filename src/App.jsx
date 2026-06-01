import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItineraryPage from "./pages/ItineraryPage";
import TourFilterPage from "./pages/TourFilterPage";
import PlacesToVisitPage from "./pages/PlacesToVisitPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/tours" element={<TourFilterPage />} />
        <Route path="/places" element={<PlacesToVisitPage />} />
      </Routes>
    </BrowserRouter>
  );
}