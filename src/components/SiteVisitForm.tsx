'use client';

import { FormEvent, useState } from 'react';
import { CalendarDays, CheckCircle2, MessageCircle, Send } from 'lucide-react';

const services = [
  'Interior Painting', 'Exterior Painting', 'Wall Putty',
  'Texture & Designer Walls', 'Commercial Projects', 'Society Painting', 'Waterproofing', 'Other'
];

export default function SiteVisitForm() {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('');
    setBusy(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string, fallback = 'Not provided') => String(data.get(key) || '').trim() || fallback;
    const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210').replace(/\D/g, '');
    const message = [
      'PAINTERGO — FREE SITE VISIT REQUEST',
      '',
      'CUSTOMER DETAILS',
      `Name: ${get('name')}`,
      `Phone: ${get('phone')}`,
      `Email: ${get('email')}`,
      '',
      'PROJECT DETAILS',
      `Service: ${get('service')}`,
      `Property type: ${get('propertyType')}`,
      `Site address / area: ${get('address')}`,
      `City: ${get('city')}`,
      `PIN code: ${get('pincode')}`,
      `Approximate area: ${get('area')} ${get('areaUnit', '')}`.trim(),
      `Rooms / floors: ${get('roomsFloors')}`,
      `Property status: ${get('propertyStatus')}`,
      `Project timeline: ${get('timeline')}`,
      `Estimated budget: ${get('budget')}`,
      '',
      'SITE VISIT PREFERENCE',
      `Preferred date: ${get('visitDate')}`,
      `Preferred time: ${get('visitTime')}`,
      '',
      `Additional details: ${get('details')}`
    ].join('\n');
    setBusy(false);
    setStatus('Your request is prepared in WhatsApp. Please review the details and press Send to submit your site-visit request.');
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="site-visit-form" onSubmit={handleSubmit}>
      <div className="form-section-title"><span>01</span><div><h3>Contact details</h3><p>How can our team reach you?</p></div></div>
      <div className="site-visit-grid">
        <label>Full name <b>*</b><input name="name" autoComplete="name" required minLength={2} maxLength={80} placeholder="Your full name" /></label>
        <label>Mobile number <b>*</b><input name="phone" type="tel" autoComplete="tel" required pattern="[0-9+() -]{8,18}" maxLength={18} placeholder="+91 98765 43210" /></label>
        <label>Email address <span className="optional">Optional</span><input name="email" type="email" autoComplete="email" maxLength={120} placeholder="you@example.com" /></label>
      </div>

      <div className="form-section-title"><span>02</span><div><h3>Property & project details</h3><p>Help us understand the work you need.</p></div></div>
      <div className="site-visit-grid">
        <label>Service required <b>*</b><select name="service" required defaultValue="Interior Painting">{services.map((service) => <option key={service}>{service}</option>)}</select></label>
        <label>Property type <b>*</b><select name="propertyType" required defaultValue=""><option value="" disabled>Select property type</option><option>Apartment / Flat</option><option>Independent House / Villa</option><option>Office / Commercial</option><option>Housing Society / Building</option><option>Shop / Showroom</option><option>Industrial / Warehouse</option><option>Other</option></select></label>
        <label className="wide-field">Full site address / area <b>*</b><input name="address" autoComplete="street-address" required maxLength={220} placeholder="Building, street, area or landmark" /></label>
        <label>City <b>*</b><input name="city" required defaultValue="Mumbai" maxLength={80} placeholder="City" /></label>
        <label>PIN code <input name="pincode" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} placeholder="6-digit PIN code" /></label>
        <label>Approx. painting area <b>*</b><div className="area-input"><input name="area" type="number" min="1" max="10000000" required placeholder="e.g. 1200" /><select name="areaUnit" aria-label="Area unit" defaultValue="sq ft"><option>sq ft</option><option>sq m</option><option>Not sure</option></select></div></label>
        <label>Number of rooms / floors <span className="optional">Optional</span><input name="roomsFloors" maxLength={100} placeholder="e.g. 3 rooms, 2 floors" /></label>
        <label>Current property status <select name="propertyStatus" defaultValue="Occupied"><option>Occupied</option><option>Vacant</option><option>Under construction</option><option>Commercial / operational</option></select></label>
        <label>When do you plan to start? <select name="timeline" defaultValue="Within 2–4 weeks"><option>As soon as possible</option><option>Within 1 week</option><option>Within 2–4 weeks</option><option>Within 1–3 months</option><option>Just exploring options</option></select></label>
        <label>Estimated budget <span className="optional">Optional</span><select name="budget" defaultValue="Not decided"><option>Not decided</option><option>Under ₹25,000</option><option>₹25,000–₹50,000</option><option>₹50,000–₹1,00,000</option><option>₹1,00,000–₹3,00,000</option><option>Above ₹3,00,000</option><option>Need guidance</option></select></label>
      </div>

      <div className="form-section-title"><span>03</span><div><h3>Site visit preference</h3><p>Choose a convenient date and time, if known.</p></div></div>
      <div className="site-visit-grid">
        <label>Preferred date <span className="optional">Optional</span><input name="visitDate" type="date" min={new Date().toISOString().split('T')[0]} /></label>
        <label>Preferred time <span className="optional">Optional</span><select name="visitTime" defaultValue="Any time"><option>Any time</option><option>Morning (9 AM–12 PM)</option><option>Afternoon (12 PM–4 PM)</option><option>Evening (4 PM–7 PM)</option></select></label>
        <label className="wide-field">Project notes <span className="optional">Optional</span><textarea name="details" rows={4} maxLength={1200} placeholder="Tell us about the surfaces, current condition, paint preference or any special requirements." /></label>
      </div>

      <label className="consent-row"><input name="consent" type="checkbox" required /> <span>I agree that PainterGo may contact me about this site-visit request. <b>*</b></span></label>
      <button className="button button-yellow site-visit-submit" type="submit" disabled={busy}><CalendarDays size={18} /> {busy ? 'Preparing request…' : 'Request Free Site Visit'} <Send size={17} /></button>
      {status && <p className="form-status" role="status"><CheckCircle2 size={17} />{status}</p>}
      <p className="form-note"><MessageCircle size={14} /> Your details will open in WhatsApp. You must press Send in WhatsApp to complete the request.</p>
    </form>
  );
}
