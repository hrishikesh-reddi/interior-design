/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { AIFeature } from './components/AIFeature';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CostCalculator } from './components/CostCalculator';
import { LeadForm } from './components/LeadForm';
import { Chatbot } from './components/Chatbot';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <AIFeature />
      <Pricing />
      <Testimonials />
      <CostCalculator />
      <LeadForm />
      <Footer />
      <Chatbot />
    </div>
  );
}
