import React from 'react';
import { COUNTRY_CODES } from '../../data/constants';

export default function PersonalDataSection({ formData, errors, onChange }) {
  return (
    <section className="form-section">
      <h2>👤 Persönliche Daten</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="vorname">Vorname *</label>
          <input
            type="text"
            id="vorname"
            name="vorname"
            value={formData.vorname}
            onChange={onChange}
            placeholder="Max"
            className={errors.vorname ? 'error' : ''}
          />
          {errors.vorname && <span className="error-text">{errors.vorname}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="nachname">Nachname *</label>
          <input
            type="text"
            id="nachname"
            name="nachname"
            value={formData.nachname}
            onChange={onChange}
            placeholder="Mustermann"
            className={errors.nachname ? 'error' : ''}
          />
          {errors.nachname && <span className="error-text">{errors.nachname}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">E-Mail-Adresse *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="max.mustermann@beispiel.ch"
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="telefon">Telefonnummer *</label>
        <div className="phone-input">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={onChange}
            className="country-code"
          >
            {COUNTRY_CODES.map(c => (
              <option key={c.code} value={c.code}>{c.country} {c.code}</option>
            ))}
          </select>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={onChange}
            placeholder="79 123 45 67"
            className={errors.telefon ? 'error' : ''}
          />
        </div>
        {errors.telefon && <span className="error-text">{errors.telefon}</span>}
      </div>
    </section>
  );
}
