import React from 'react';
import { EXTRAS } from '../../data/constants';

export default function ExtrasSection({ selectedExtras, onToggle }) {
  return (
    <section className="form-section">
      <h2>✨ Extras</h2>
      <p className="section-hint">Wählen Sie beliebig viele Extras</p>
      
      <div className="extras-grid">
        {EXTRAS.map(extra => (
          <label
            key={extra.id}
            className={`extra-card ${selectedExtras.includes(extra.id) ? 'selected' : ''}`}
          >
            <input
              type="checkbox"
              checked={selectedExtras.includes(extra.id)}
              onChange={() => onToggle(extra.id)}
            />
            <span className="extra-name">{extra.name}</span>
            <span className="extra-price">+CHF {extra.price}/Tag</span>
          </label>
        ))}
      </div>
    </section>
  );
}
