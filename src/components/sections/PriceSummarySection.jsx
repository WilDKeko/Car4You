import React from 'react';
import { VEHICLE_CATEGORIES, EXTRAS } from '../../data/constants';

export default function PriceSummarySection({ formData, daysCount, totalPrice }) {
  const selectedVehicle = VEHICLE_CATEGORIES.find(v => v.id === formData.fahrzeugKategorie);

  return (
    <section className="form-section price-section">
      <h2>💳 Preisübersicht</h2>
      
      <div className="price-breakdown">
        <div className="price-row">
          <span>Fahrzeug ({selectedVehicle?.name})</span>
          <span>CHF {(selectedVehicle?.price || 0) * daysCount}</span>
        </div>
        
        {formData.extras.length > 0 && formData.extras.map(extraId => {
          const extra = EXTRAS.find(e => e.id === extraId);
          return (
            <div className="price-row" key={extraId}>
              <span>{extra?.name}</span>
              <span>CHF {(extra?.price || 0) * daysCount}</span>
            </div>
          );
        })}
        
        <div className="price-row total">
          <span>Gesamtpreis ({daysCount} Tag(e))</span>
          <span>CHF {totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-large">
        Jetzt verbindlich reservieren
      </button>

      <p className="legal-hint">
        Mit der Reservation akzeptieren Sie unsere AGB und Datenschutzbestimmungen.
      </p>
    </section>
  );
}
