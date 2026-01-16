// E-Mail Validierung
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Formular Validierung
export function validateForm(formData) {
  const errors = {};

  if (!formData.vorname.trim()) errors.vorname = 'Vorname ist erforderlich';
  if (!formData.nachname.trim()) errors.nachname = 'Nachname ist erforderlich';
  
  if (!formData.email.trim()) {
    errors.email = 'E-Mail ist erforderlich';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Ungültige E-Mail-Adresse';
  }
  
  if (!formData.telefon.trim()) errors.telefon = 'Telefonnummer ist erforderlich';
  if (!formData.abholDatum) errors.abholDatum = 'Abholdatum ist erforderlich';
  if (!formData.rueckgabeDatum) errors.rueckgabeDatum = 'Rückgabedatum ist erforderlich';
  
  if (formData.abholDatum && formData.rueckgabeDatum) {
    if (new Date(formData.rueckgabeDatum) < new Date(formData.abholDatum)) {
      errors.rueckgabeDatum = 'Rückgabe muss nach Abholung sein';
    }
  }

  if (!formData.prioritaet) errors.prioritaet = 'Bitte wählen Sie eine Priorität';

  return errors;
}

// Mietdauer berechnen
export function calculateDays(abholDatum, rueckgabeDatum) {
  if (!abholDatum || !rueckgabeDatum) return 1;
  const start = new Date(abholDatum);
  const end = new Date(rueckgabeDatum);
  const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 1;
}

// Gesamtpreis berechnen
export function calculateTotal(formData, vehicleCategories, extras) {
  const days = calculateDays(formData.abholDatum, formData.rueckgabeDatum);
  const vehicle = vehicleCategories.find(v => v.id === formData.fahrzeugKategorie);
  const vehiclePrice = vehicle ? vehicle.price * days : 0;
  
  const extrasPrice = formData.extras.reduce((sum, extraId) => {
    const extra = extras.find(e => e.id === extraId);
    return sum + (extra ? extra.price * days : 0);
  }, 0);
  
  return vehiclePrice + extrasPrice;
}

// Heutiges Datum im ISO-Format
export function getTodayISO() {
  return new Date().toISOString().split('T')[0];
}
