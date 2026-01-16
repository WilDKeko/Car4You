import React from 'react';
import { VEHICLE_CATEGORIES, COLORS, PRIORITIES } from '../../data/constants';

export default function VehicleSection({ 
  formData, 
  maxBudget,
  selectedPriority,
  onCategoryChange,
  onGetriebeChange,
  onColorChange,
  onColorClear
}) {
  // Finde das Label der ausgewählten Priorität
  const priorityLabel = PRIORITIES.find(p => p.id === selectedPriority)?.label;

  return (
    <section className="form-section">
      <h2>🚙 Fahrzeugkategorie</h2>
      <p className="section-hint">
        {selectedPriority 
          ? `Fahrzeuge passend zu "${priorityLabel}" werden empfohlen`
          : 'Wählen Sie erst eine Priorität um Empfehlungen zu sehen'}
      </p>
      
      <div className="vehicle-grid">
        {VEHICLE_CATEGORIES.map(vehicle => {
          const isInBudget = vehicle.price <= maxBudget;
          const matchesPriority = !selectedPriority || vehicle.priorities.includes(selectedPriority);
          const isAvailable = isInBudget && matchesPriority;
          
          // Badge-Text bestimmen
          let badgeText = null;
          if (!isInBudget) badgeText = 'Über Budget';
          else if (!matchesPriority) badgeText = 'Nicht empfohlen';
          
          return (
            <button
              key={vehicle.id}
              type="button"
              className={`vehicle-card ${formData.fahrzeugKategorie === vehicle.id ? 'selected' : ''} ${!isAvailable ? 'out-of-budget' : ''}`}
              onClick={() => isAvailable && onCategoryChange(vehicle.id)}
              disabled={!isAvailable}
            >
              <span className="vehicle-icon">{vehicle.icon}</span>
              <span className="vehicle-name">{vehicle.name}</span>
              <span className="vehicle-examples">{vehicle.examples}</span>
              <span className="vehicle-price">CHF {vehicle.price}/Tag</span>
              {badgeText && <span className={`budget-badge ${!isInBudget ? 'red' : 'orange'}`}>{badgeText}</span>}
            </button>
          );
        })}
      </div>

      {/* Getriebe - Radiobuttons für exklusive Auswahl */}
      <div className="form-group">
        <label>Getriebe *</label>
        <div className="radio-group">
          <label className={`radio-card ${formData.getriebe === 'automatik' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="getriebe"
              value="automatik"
              checked={formData.getriebe === 'automatik'}
              onChange={onGetriebeChange}
            />
            <span>🅰️ Automatik</span>
          </label>
          <label className={`radio-card ${formData.getriebe === 'manuell' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="getriebe"
              value="manuell"
              checked={formData.getriebe === 'manuell'}
              onChange={onGetriebeChange}
            />
            <span>🅼 Manuell</span>
          </label>
        </div>
      </div>

      {/* Fahrzeugfarbe - Optional */}
      <div className="form-group">
        <label htmlFor="farbe">Fahrzeugfarbe (optional)</label>
        <div className="color-picker">
          {COLORS.map(color => (
            <button
              key={color.id}
              type="button"
              className={`color-swatch ${formData.farbe === color.id ? 'selected' : ''}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => onColorChange(color.id)}
              title={color.name}
            >
              {formData.farbe === color.id && <span className="color-check">✓</span>}
            </button>
          ))}
          {formData.farbe && (
            <button
              type="button"
              className="color-clear"
              onClick={onColorClear}
            >
              ✕
            </button>
          )}
        </div>
        {formData.farbe && (
          <small className="color-label">
            Gewählt: {COLORS.find(c => c.id === formData.farbe)?.name}
          </small>
        )}
      </div>
    </section>
  );
}
