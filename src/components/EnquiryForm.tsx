'use client';
import { FormEvent, useState } from 'react';
import { CalendarDays, Send } from 'lucide-react';

export default function EnquiryForm() {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('');
    const form = event.currentTarget;
    const data = new FormData(form);
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      const message = `Hello PainterGo, I would like a site visit.\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nLocation: ${data.get('location')}\nService: ${data.get('service')}\nDetails: ${data.get('details') || 'Not provided'}`;
      const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      setStatus('Your WhatsApp enquiry is ready. Please send the message in WhatsApp to complete your request.');
      return;
    }
    setBusy(true);
    try {
      const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Submission failed');
      form.reset(); setStatus('Thanks! Your enquiry has been submitted. We will contact you soon.');
    } catch { setStatus('We could not submit the form. Please contact us on WhatsApp or by phone.'); }
    finally { setBusy(false); }
  }
  return <form className="enquiry-form" onSubmit={handleSubmit}>
    <div className="form-grid"><label>Your name<input name="name" autoComplete="name" required minLength={2} placeholder="Enter your name"/></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" required pattern="[0-9+() -]{8,18}" placeholder="Your contact number"/></label><label>Project location<input name="location" required placeholder="Area / city"/></label><label>Service required<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Interior Painting</option><option>Exterior Painting</option><option>Wall Putty</option><option>Texture & Designer Walls</option><option>Commercial Projects</option><option>Society Painting</option><option>Other</option></select></label></div>
    <label>Project details (optional)<textarea name="details" rows={3} placeholder="Property type, approximate area, preferred visit date..."/></label>
    <button className="button button-yellow form-submit" type="submit" disabled={busy}><CalendarDays size={18}/>{busy ? 'Submitting…' : 'Request a Free Site Visit'} <Send size={16}/></button>
    {status && <p className="form-status" role="status">{status}</p>}
    <p className="form-note">Your details will only be used to respond to this enquiry.</p>
  </form>;
}
