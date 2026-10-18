import type { Metadata } from 'next';
import { ArrowLeft, CheckCircle2, House, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteVisitForm from '@/components/SiteVisitForm';

export const metadata: Metadata = {
  title: 'Book a Free Site Visit | PainterGo',
  description: 'Request a PainterGo painting site visit. Share your property location, approximate painting area, service requirements and preferred visit time.'
};

export default function SiteVisitPage() {
  return <>
    <SiteHeader />
    <main className="site-visit-page">
      <div className="site-visit-hero">
        <div className="site-visit-hero-inner">
          <Link href="/#home" className="back-home"><ArrowLeft size={16}/> Back to PainterGo</Link>
          <p className="eyebrow">PAINTERGO · SITE VISIT BOOKING</p>
          <h1>Let&apos;s plan your <span>painting project.</span></h1>
          <p>Share a few details about your property. Our team can use them to understand your requirements and discuss the next steps.</p>
          <div className="site-visit-trust"><span><CheckCircle2 size={17}/> No obligation to proceed</span><span><ShieldCheck size={17}/> Your details are used for this enquiry</span></div>
        </div>
        <div className="site-visit-art"><span className="visit-art-icon"><House size={54}/></span><strong>Painting Projects.<br/><em>Done Right.</em></strong><small>From site visit to finishing touches.</small></div>
      </div>
      <section className="site-visit-main">
        <div className="site-visit-heading"><p className="eyebrow">FREE SITE VISIT FORM</p><h2>Tell us about your site</h2><p>Fields marked with <b>*</b> are required. If you are unsure about the painting area, enter an estimate or choose “Not sure”.</p></div>
        <SiteVisitForm />
      </section>
    </main>
    <footer className="site-visit-footer"><span>© {new Date().getFullYear()} PainterGo. All rights reserved.</span><Link href="/#home">Return to homepage</Link></footer>
  </>;
}
