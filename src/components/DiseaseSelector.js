import React from 'react';
import './DiseaseSelector.css'; // Add custom styles for the disease selector

const DiseaseSelector = ({ onSelectDisease, diseaseData }) => {
  return (
    <div className="disease-selector">
      <label htmlFor="disease" className="disease-label">Choose a disease:</label>
      <select
  id="disease"
  className="disease-select"
  defaultValue=""
  onChange={(e) => onSelectDisease(e.target.value)}
>
  <option value="" disabled>
    -- Select a disease --
  </option>
  {diseaseData.map((disease, index) => (
    <option key={index} value={disease}>
      {disease}
    </option>
  ))}
</select>

      <p className="disclaimer">
        <strong> Select a disease </strong>
        to reveal the corresponding pairings. Each disease is followed by a list of food pairings that are suitable for veg, non-veg, and vegan diets. This interactive guide is designed to provide information on healthy food choices specific to various health conditions.
      </p>

    </div>
  );
};

export default DiseaseSelector;
