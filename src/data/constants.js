// Fahrzeugkategorien gemäss Car4You Vorgabe
// priorities: welche Prioritäten zu diesem Fahrzeug passen
export const VEHICLE_CATEGORIES = [
  { id: 'city', name: 'City', examples: 'Fiat 500, VW Polo', price: 45, icon: '🚗', priorities: ['preis'] },
  { id: 'family', name: 'Family', examples: 'VW Touran, Skoda Octavia', price: 70, icon: '🚙', priorities: ['komfort', 'preis'] },
  { id: 'suv', name: 'SUV', examples: 'VW Tiguan, Volvo XC60', price: 90, icon: '🚐', priorities: ['komfort'] },
  { id: 'sport', name: 'Sport', examples: 'BMW Z4, Audi TT', price: 120, icon: '🏎️', priorities: ['design'] },
  { id: 'ecar', name: 'E-Car', examples: 'Tesla Model 3, Renault Zoe', price: 100, icon: '⚡', priorities: ['nachhaltigkeit', 'design'] },
];

// Extras
export const EXTRAS = [
  { id: 'kindersitz', name: 'Kindersitz', price: 8 },
  { id: 'zusatzfahrer', name: 'Zusatzfahrer', price: 12 },
  { id: 'navi', name: 'Navigationssystem', price: 5 },
  { id: 'dachbox', name: 'Dachbox', price: 15 },
  { id: 'vollkasko', name: 'Vollkasko', price: 25 },
];

// Fahrzeugfarben
export const COLORS = [
  { id: 'schwarz', name: 'Schwarz', hex: '#1a1a1a' },
  { id: 'weiss', name: 'Weiss', hex: '#ffffff' },
  { id: 'silber', name: 'Silber', hex: '#c0c0c0' },
  { id: 'blau', name: 'Blau', hex: '#2563eb' },
  { id: 'rot', name: 'Rot', hex: '#dc2626' },
  { id: 'gruen', name: 'Grün', hex: '#16a34a' },
];

// Prioritäten
export const PRIORITIES = [
  { id: 'preis', label: 'Preis', icon: '💰' },
  { id: 'komfort', label: 'Komfort', icon: '🛋️' },
  { id: 'nachhaltigkeit', label: 'Nachhaltigkeit', icon: '🌱' },
  { id: 'design', label: 'Design', icon: '✨' },
];

// Ländervorwahlen
export const COUNTRY_CODES = [
  { code: '+41', country: 'CH' },
  { code: '+49', country: 'DE' },
  { code: '+43', country: 'AT' },
  { code: '+33', country: 'FR' },
  { code: '+39', country: 'IT' },
];

// Verfügbare Uhrzeiten
export const TIME_SLOTS = [
  '08:00', '09:00', '10:00', '11:00', '12:00', 
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

// Initialer Formular-State
export const INITIAL_FORM_STATE = {
  // Personendaten
  vorname: '',
  nachname: '',
  email: '',
  countryCode: '+41',
  telefon: '',
  
  // Mietdauer
  abholDatum: '',
  abholZeit: '10:00',
  rueckgabeDatum: '',
  rueckgabeZeit: '10:00',
  
  // Fahrzeugwahl
  fahrzeugKategorie: 'city',
  getriebe: 'automatik',
  farbe: '',
  
  // Extras
  extras: [],
  
  // Budget & Zufriedenheit
  preisrahmen: [40, 120],
  prioritaet: '',
  
  // Bemerkungen
  bemerkungen: '',
};
