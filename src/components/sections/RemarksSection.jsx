import React from 'react';

export default function RemarksSection({ value, onChange }) {
  return (
    <section className="form-section">
      <h2>📝 Bemerkungen</h2>
      
      <div className="form-group">
        <label htmlFor="bemerkungen">
          Zusätzliche Wünsche oder Anmerkungen (optional)
        </label>
        <textarea
          id="bemerkungen"
          name="bemerkungen"
          value={value}
          onChange={onChange}
          placeholder="z.B. Kindersitz für 3-jähriges Kind, späte Abholung gewünscht..."
          maxLength={250}
          rows={4}
        />
        <div className="char-counter">
          {value.length}/250 Zeichen
        </div>
      </div>
    </section>
  );
}
