import React, { useState } from 'react';
import './CarRentalForm.css';

// Data & Constants
import { 
  VEHICLE_CATEGORIES, 
  EXTRAS, 
  INITIAL_FORM_STATE 
} from '../data/constants';

// Utils
import { 
  validateForm, 
  calculateDays, 
  calculateTotal, 
  getTodayISO 
} from '../utils/formHelpers';

// Section Components
import {
  FormHeader,
  RentalPeriodSection,
  BudgetSection,
  VehicleSection,
  ExtrasSection,
  PersonalDataSection,
  RemarksSection,
  PriceSummarySection,
  SuccessMessage
} from './sections';

export default function CarRentalForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const today = getTodayISO();
  const daysCount = calculateDays(formData.abholDatum, formData.rueckgabeDatum);
  const totalPrice = calculateTotal(formData, VEHICLE_CATEGORIES, EXTRAS);

  // Handler Funktionen
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleExtraToggle = (extraId) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.includes(extraId)
        ? prev.extras.filter(id => id !== extraId)
        : [...prev.extras, extraId]
    }));
  };

  const handleSliderChange = (e) => {
    setFormData(prev => ({
      ...prev,
      preisrahmen: [40, parseInt(e.target.value)]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Reservation erfolgreich:', formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setIsSubmitted(false);
  };

  // Erfolgsmeldung anzeigen
  if (isSubmitted) {
    return (
      <SuccessMessage 
        formData={formData}
        totalPrice={totalPrice}
        onReset={handleReset}
      />
    );
  }

  // Formular anzeigen
  return (
    <div className="form-container">
      <FormHeader />

      <form onSubmit={handleSubmit} noValidate>
        <RentalPeriodSection
          formData={formData}
          errors={errors}
          today={today}
          daysCount={daysCount}
          onChange={handleChange}
        />

        <BudgetSection
          formData={formData}
          errors={errors}
          onSliderChange={handleSliderChange}
          onPriorityChange={handleChange}
        />

        <VehicleSection
          formData={formData}
          maxBudget={formData.preisrahmen[1]}
          selectedPriority={formData.prioritaet}
          onCategoryChange={(id) => setFormData(prev => ({ ...prev, fahrzeugKategorie: id }))}
          onGetriebeChange={handleChange}
          onColorChange={(id) => setFormData(prev => ({ ...prev, farbe: id }))}
          onColorClear={() => setFormData(prev => ({ ...prev, farbe: '' }))}
        />

        <ExtrasSection
          selectedExtras={formData.extras}
          onToggle={handleExtraToggle}
        />

        <PersonalDataSection
          formData={formData}
          errors={errors}
          onChange={handleChange}
        />

        <RemarksSection
          value={formData.bemerkungen}
          onChange={handleChange}
        />

        <PriceSummarySection
          formData={formData}
          daysCount={daysCount}
          totalPrice={totalPrice}
        />
      </form>
    </div>
  );
}
