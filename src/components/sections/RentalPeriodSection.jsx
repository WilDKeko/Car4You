import React from 'react';
import { TIME_SLOTS } from '../../data/constants';

export default function RentalPeriodSection({ 
  formData, 
  errors, 
  today, 
  daysCount,
  onChange 
}) {
  return (
    <section className="form-section">
      <h2>📅 Mietdauer</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="abholDatum">Abholdatum *</label>
          <input
            type="date"
            id="abholDatum"
            name="abholDatum"
            value={formData.abholDatum}
            onChange={onChange}
            min={today}
            className={errors.abholDatum ? 'error' : ''}
          />
          {errors.abholDatum && <span className="error-text">{errors.abholDatum}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="abholZeit">Abholzeit</label>
          <select 
            id="abholZeit" 
            name="abholZeit" 
            value={formData.abholZeit} 
            onChange={onChange}
          >
            {TIME_SLOTS.map(time => (
              <option key={time} value={time}>{time} Uhr</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="rueckgabeDatum">Rückgabedatum *</label>
          <input
            type="date"
            id="rueckgabeDatum"
            name="rueckgabeDatum"
            value={formData.rueckgabeDatum}
            onChange={onChange}
            min={formData.abholDatum || today}
            className={errors.rueckgabeDatum ? 'error' : ''}
          />
          {errors.rueckgabeDatum && <span className="error-text">{errors.rueckgabeDatum}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="rueckgabeZeit">Rückgabezeit</label>
          <select 
            id="rueckgabeZeit" 
            name="rueckgabeZeit" 
            value={formData.rueckgabeZeit} 
            onChange={onChange}
          >
            {TIME_SLOTS.map(time => (
              <option key={time} value={time}>{time} Uhr</option>
            ))}
          </select>
        </div>
      </div>

      {formData.abholDatum && formData.rueckgabeDatum && (
        <div className="info-badge">
          📆 Mietdauer: <strong>{daysCount} Tag(e)</strong>
        </div>
      )}
    </section>
  );
}
