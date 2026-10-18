import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PainterGo | Professional Painting & Finishing in Mumbai',
  description: 'Residential, commercial and society painting services across Mumbai. Book a free site visit and quotation with PainterGo.',
  applicationName: 'PainterGo',
  keywords: ['painting services Mumbai', 'interior painting', 'exterior painting', 'wall putty', 'commercial painting'],
  openGraph: { title: 'PainterGo | Painting Projects. Done Right.', description: 'Professional painting. Fast execution. Reliable finish.', type: 'website' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#06344a' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
