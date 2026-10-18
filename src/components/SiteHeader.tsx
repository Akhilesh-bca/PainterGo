'use client';
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, House } from 'lucide-react';

const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+91 98765 43210';
const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello PainterGo, I would like to discuss a painting project.')}`;
const links = [{ label: 'Home', href: '/#home' }, { label: 'Services', href: '/#services' }, { label: 'Our Work', href: '/#projects' }, { label: 'About Us', href: '/#why-us' }, { label: 'Areas We Serve', href: '/#areas' }, { label: 'Contact', href: '/#contact' }];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="/#home" aria-label="PainterGo home"><span className="brand-mark"><House size={31} strokeWidth={2.7}/></span><span className="brand-copy"><strong>Painter<span>Go</span></strong><small>Painting Projects. Done Right.</small></span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
    <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav>
    <div className="header-actions"><a className="phone-link" href={`tel:${phone.replace(/[^+\d]/g, '')}`}><Phone size={19}/><span><strong>{phone}</strong><small>Call Us</small></span></a><a className="button button-green header-wa" href={waLink} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp Us</a></div>
  </header>;
}
