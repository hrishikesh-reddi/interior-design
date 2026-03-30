import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    description: 'Essential interior design for compact homes.',
    price: '₹2.5L',
    features: [
      '2D Floor Plans',
      'Basic Material Selection',
      'Standard Modular Kitchen',
      '1 Wardrobe',
      'Basic Lighting Setup',
      '45 Days Delivery',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    description: 'Premium finish and smart storage solutions.',
    price: '₹5L',
    features: [
      '3D Renderings & Walkthrough',
      'Premium Material Selection',
      'Smart Modular Kitchen',
      'Custom Wardrobes in all rooms',
      'False Ceiling & Ambient Lighting',
      'Dedicated Project Manager',
      '60 Days Delivery',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    description: 'Luxury interiors with imported materials.',
    price: '₹10L+',
    features: [
      'VR Experience of Design',
      'Imported Luxury Materials',
      'High-end Italian Kitchen',
      'Walk-in Closets',
      'Smart Home Automation',
      'Bespoke Furniture',
      'White-glove Installation',
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden costs. Choose a package that fits your budget and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 bg-white border ${
                plan.popular ? 'border-amber-500 shadow-2xl shadow-amber-500/10 scale-105 z-10' : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500"> / starting</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-colors ${
                  plan.popular 
                    ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
