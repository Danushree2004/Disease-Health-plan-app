import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage.js'; // HomePage Component
import DiseaseSpecificHealthBenefits from './pages/DiseaseSpecificHealthBenefits.js'; // Disease Specific Health Benefits Page
import NutrientSpecificPairings from './pages/NutrientSpecificPairings.js'; // Nutrient-Specific Pairings Page 
import Footer from './Footer.js'; // Footer Component
import './App.css';
import MythsAndFacts from './components/MythsAndFacts.js';
import FAQ from './pages/FAQ.js';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Main navigation */}
        <nav className="navbar">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/disease-specific" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Disease Specific Pairings
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/nutrient-specific" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Nutrient Specific Pairings
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/myths" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Myths 
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/faq" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  FAQ 
              </NavLink>
            </li>
          </ul>
        </nav>
<br></br>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/disease-specific" element={<DiseaseSpecificHealthBenefits />} />
          <Route path="/nutrient-specific" element={<NutrientSpecificPairings />} />
          <Route path="/myths" element={<MythsAndFacts />} />
          <Route path="/faq" element={<FAQ />} />

        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
