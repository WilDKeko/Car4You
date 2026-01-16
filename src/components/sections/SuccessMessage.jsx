import React from 'react';
import { VEHICLE_CATEGORIES, EXTRAS, COLORS } from '../../data/constants';

export default function SuccessMessage({ formData, totalPrice, onReset }) {
  const vehicle = VEHICLE_CATEGORIES.find(v => v.id === formData.fahrzeugKategorie);

  return (
    <div className="form-container">
      <div className="success-message">
        <div className="success-icon">✅</div>
        <h2>Reservation erfolgreich!</h2>
        <p>Vielen Dank, {formData.vorname} {formData.nachname}!</p>
        <p>Eine Bestätigung wurde an <strong>{formData.email}</strong> gesendet.</p>
        
        <div className="booking-summary">
          <h3>Ihre Reservationsdetails:</h3>
          <div className="summary-row">
            <span>📅 Zeitraum:</span>
            <span>{formData.abholDatum} ({formData.abholZeit}) - {formData.rueckgabeDatum} ({formData.rueckgabeZeit})</span>
          </div>
          <div className="summary-row">
            <span>🚗 Fahrzeug:</span>
            <span>{vehicle?.name} ({vehicle?.examples})</span>
          </div>
          <div className="summary-row">
            <span>⚙️ Getriebe:</span>
            <span>{formData.getriebe === 'automatik' ? 'Automatik' : 'Manuell'}</span>
          </div>
          {formData.farbe && (
            <div className="summary-row">
              <span>🎨 Farbe:</span>
              <span>{COLORS.find(c => c.id === formData.farbe)?.name}</span>
            </div>
          )}
          {formData.extras.length > 0 && (
            <div className="summary-row">
              <span>✨ Extras:</span>
              <span>{formData.extras.map(id => EXTRAS.find(e => e.id === id)?.name).join(', ')}</span>
            </div>
          )}
          <div className="summary-row total">
            <span>💰 Gesamtpreis:</span>
            <span>CHF {totalPrice.toFixed(2)}</span>
          </div>
        </div>
        
        <button 
          className="btn btn-primary btn-large"
          onClick={onReset}
        >
          Neue Reservation
        </button>
      </div>
    </div>
  );
}
