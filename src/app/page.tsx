import Image from 'next/image';
import { ArrowRight, Building2, Check, Clock3, HardHat, House, Mail, MapPin, MessageCircle, PaintRoller, Phone, ShieldCheck, Users, Zap } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import EnquiryForm from '@/components/EnquiryForm';

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello PainterGo, I would like to book a free painting site visit.')}`;
const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+91 98765 43210';
const email = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@paintergo.in';
const services = [
  { title: 'Interior Painting', desc: 'Smooth, clean and professional finishes for your interiors.', image: 'photo-1600210492486-724fe5c67fb0', icon: House },
  { title: 'Exterior Painting', desc: 'Durable exterior solutions for buildings and properties.', image: 'photo-1486406146926-c627a92ad1ab', icon: Building2 },
  { title: 'Wall Putty', desc: 'Proper surface preparation for a longer-lasting finish.', image: 'photo-1562259949-e8e7689d7828', icon: PaintRoller },
  { title: 'Texture & Designer Walls', desc: 'Modern and stylish finishes for homes and commercial spaces.', image: 'photo-1600607687939-ce8a6c25118c', icon: PaintRoller },
  { title: 'Commercial Projects', desc: 'Teams and manpower for larger, time-bound projects.', image: 'photo-1497366754035-f200968a6e72', icon: Building2 },
  { title: 'Society Painting', desc: 'Complete building painting and maintenance projects.', image: 'photo-1545324418-cc1a3fa10c00', icon: Building2 },
];
const benefits = [
  { title: 'Skilled Workforce', desc: 'Deploy manpower according to project requirements.', icon: Users },
  { title: 'Fast Project Execution', desc: 'Suitable for projects with tight deadlines.', icon: Zap },
  { title: 'Professional Site Management', desc: 'Better coordination from site visit to completion.', icon: HardHat },
  { title: 'Quality-Focused Work', desc: 'Proper preparation, finishing and cleanup.', icon: ShieldCheck },
];
const projects = [
  { title: 'Living Room — Interior Painting', place: 'Malad, Mumbai', before: 'photo-1600210492486-724fe5c67fb0', after: 'photo-1600607687939-ce8a6c25118c' },
  { title: 'Apartment Building — Exterior Painting', place: 'Kandivali, Mumbai', before: 'photo-1545324418-cc1a3fa10c00', after: 'photo-1486406146926-c627a92ad1ab' },
  { title: 'Texture Wall Finish', place: 'Jogeshwari, Mumbai', before: 'photo-1562259949-e8e7689d7828', after: 'photo-1600607687939-ce8a6c25118c' },
  { title: 'Office Space — Commercial Painting', place: 'Andheri, Mumbai', before: 'photo-1497366754035-f200968a6e72', after: 'photo-1497366811353-6870744d04b2' },
];
const areas = ['Jogeshwari', 'Goregaon', 'Malad', 'Kandivali', 'Borivali', 'Andheri', 'Mumbai'];
function photo(id: string, width = 900) { return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`; }

export default function HomePage() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero section-anchor" id="home">
        <div className="hero-content"><p className="eyebrow">PAINTING &amp; FINISHING CONTRACTOR | MUMBAI</p><h1>Professional Painting.<br/><span>Fast Execution.</span><br/>Reliable Finish.</h1><p className="hero-copy">Residential, commercial &amp; large-scale painting projects across Mumbai. We aim to deliver quality work, clear communication and a reliable finish.</p>
          <div className="hero-stats"><div><Users/><span><strong>Skilled Teams</strong><small>Project-ready workforce</small></span></div><div><Zap/><span><strong>Fast Execution</strong><small>Planned delivery</small></span></div><div><ShieldCheck/><span><strong>Site Visit</strong><small>Assessment &amp; quote</small></span></div></div>
          <div className="hero-buttons"><a className="button button-yellow" href="/site-visit"><CalendarDaysIcon/> Get Free Site Visit</a><a className="button button-green" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp Us</a></div>
        </div><div className="hero-image"><Image src={photo('photo-1562259949-e8e7689d7828', 1400)} alt="Painter applying a smooth finish to an interior wall" fill priority sizes="(max-width: 760px) 100vw, 50vw" unoptimized/><div className="image-badge"><span className="badge-icon"><Check size={18}/></span><span><strong>Finish with confidence</strong><small>From preparation to clean-up</small></span></div></div>
      </section>

      <section className="section services-section section-anchor" id="services"><div className="section-heading"><div><p className="eyebrow">OUR SERVICES</p><h2>What We Do</h2></div><p>From fresh coats to complete makeovers,<br className="desktop-break"/> we handle painting and finishing work.</p></div><div className="services-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="service-image"><Image src={photo(service.image, 650)} alt={`${service.title} project`} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 16vw" unoptimized/></div><div className="service-card-content"><Icon size={24} strokeWidth={2.2}/><h3>{service.title}</h3><p>{service.desc}</p><a href="#contact" aria-label={`Enquire about ${service.title}`}>Enquire <ArrowRight size={15}/></a></div></article>; })}</div></section>

      <section className="why-section section-anchor" id="why-us"><div className="paint-art"><PaintRoller size={92} strokeWidth={1.3}/><span>PAINT<br/>BETTER</span></div><div className="why-content"><p className="eyebrow">WHY CHOOSE PAINTERGO</p><h2>Why PainterGo?</h2><p className="why-intro">We go beyond just painting. We focus on clear communication, careful preparation and a finish you can feel good about.</p><div className="benefits-grid">{benefits.map((benefit) => { const Icon = benefit.icon; return <div className="benefit" key={benefit.title}><Icon size={29}/><h3>{benefit.title}</h3><p>{benefit.desc}</p></div>; })}</div></div></section>

      <section className="section projects-section section-anchor" id="projects"><div className="section-heading"><div><p className="eyebrow">OUR PROJECTS</p><h2>Our Recent Work</h2><p className="heading-sub">A look at the spaces we help transform.</p></div><a className="button button-navy" href="#contact">Discuss Your Project <ArrowRight size={16}/></a></div><div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-pair"><div><Image src={photo(project.before, 600)} alt={`${project.title} reference view`} fill sizes="(max-width: 600px) 90vw, 25vw" unoptimized/><span>Project view</span></div><div><Image src={photo(project.after, 600)} alt={`${project.title} finish inspiration`} fill sizes="(max-width: 600px) 90vw, 25vw" unoptimized/><span>Finish inspiration</span></div></div><h3>{project.title}</h3><p><MapPin size={14}/>{project.place}</p></article>)}</div><p className="demo-note">Images are illustrative placeholders. Replace them with PainterGo's actual project photos before publishing.</p></section>

      <section className="areas-section section-anchor" id="areas"><div><p className="eyebrow">AREAS WE SERVE</p><h2>We Are <span>Available In</span></h2><p>Contact us to confirm availability for your project location.</p></div><div className="areas-list">{areas.map((area) => <span key={area}><MapPin size={16}/>{area}</span>)}</div><div className="skyline" aria-hidden="true"/></section>

      <section className="contact-section section-anchor" id="contact"><div className="contact-promo"><span className="paint-swipe">Let’s Build<br/>Something Beautiful</span><div><p className="eyebrow">HAVE A PAINTING PROJECT?</p><h2>Tell us about your project.</h2><p>Share a few details and we’ll help you plan the next step.</p></div><a className="button button-yellow" href="/site-visit"><CalendarDaysIcon/> Book Free Site Visit</a></div><div className="contact-layout"><div className="contact-info"><p className="eyebrow">LET'S GET STARTED</p><h2>Ready to refresh your space?</h2><p>Tell us what you have in mind. We can discuss your needs and arrange a site visit.</p><a href={`tel:${phone.replace(/[^+\d]/g, '')}`}><Phone/> <span><strong>Call us</strong><small>{phone}</small></span></a><a href={`mailto:${email}`}><Mail/> <span><strong>Email us</strong><small>{email}</small></span></a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle/> <span><strong>WhatsApp</strong><small>Chat with our team</small></span></a></div><div className="form-panel" id="enquiry"><h3>Request a free site visit</h3><p>Fill in the form and tell us about your painting project.</p><EnquiryForm/></div></div></section>
    </main>
    <footer className="site-footer"><div className="footer-main"><a className="brand brand-footer" href="#home"><span className="brand-mark"><House size={31}/></span><span className="brand-copy"><strong>Painter<span>Go</span></strong><small>Painting Projects. Done Right.</small></span></a><div className="footer-contact"><a href={`tel:${phone.replace(/[^+\d]/g, '')}`}><Phone size={17}/><span><strong>{phone}</strong><small>Call Us</small></span></a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/><span><strong>WhatsApp Us</strong><small>Quick enquiries</small></span></a><a href={`mailto:${email}`}><Mail size={18}/><span><strong>{email}</strong><small>Email</small></span></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} PainterGo. All rights reserved.</span><span>Mumbai, Maharashtra</span></div></footer>
    <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with PainterGo on WhatsApp"><MessageCircle size={24}/><span>WhatsApp</span></a>
  </>;
}
function CalendarDaysIcon() { return <Clock3 size={18}/>; }
