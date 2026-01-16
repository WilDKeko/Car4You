import React from 'react';
import { VEHICLE_CATEGORIES, PRIORITIES } from '../../data/constants';

export default function BudgetSection({ 
  formData, 
  errors,
  onSliderChange,
  onPriorityChange 
}) {
  const matchingCategories = VEHICLE_CATEGORIES
    .filter(v => v.price <= formData.preisrahmen[1])
    .map(v => v.name)
    .join(', ') || 'Keine';

  return (
    <section className="form-section">
      <h2>💰 Budget & Präferenzen</h2>
      
      {/* Preisrahmen Slider */}
      <div className="form-group">
        <label htmlFor="preisrahmen">
          Maximaler Preis pro Tag: <strong>CHF {formData.preisrahmen[1]}</strong>
        </label>
        <div className="slider-container">
          <span className="slider-min">CHF 40</span>
          <input
            type="range"
            id="preisrahmen"
            name="preisrahmen"
            min="40"
            max="120"
            step="5"
            value={formData.preisrahmen[1]}
            onChange={onSliderChange}
            className="price-slider"
          />
          <span className="slider-max">CHF 120</span>
        </div>
        <div className="slider-hint">
          Passende Kategorien: {matchingCategories}
        </div>
      </div>

      {/* Priorität - Radiobuttons */}
      <div className="form-group">
        <label>Wichtigste Priorität *</label>
        <div className="priority-grid">
          {PRIORITIES.map(priority => (
            <label
              key={priority.id}
              className={`priority-card ${formData.prioritaet === priority.id ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name="prioritaet"
                value={priority.id}
                checked={formData.prioritaet === priority.id}
                onChange={onPriorityChange}
              />
              <span className="priority-icon">{priority.icon}</span>
              <span className="priority-label">{priority.label}</span>
            </label>
          ))}
        </div>
        {errors.prioritaet && <span className="error-text">{errors.prioritaet}</span>}
      </div>
    </section>
  );
}
