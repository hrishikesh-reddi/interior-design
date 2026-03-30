import { Home, ChefHat, LayoutGrid, PaintRoller } from 'lucide-react';

const services = [
  {
    title: 'Full Home Interiors',
    description: 'End-to-end interior design and execution for your entire home.',
    icon: Home,
    price: '₹3.5L',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Modular Kitchens',
    description: 'Smart, space-saving, and elegant kitchen designs tailored to you.',
    icon: ChefHat,
    price: '₹1.2L',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Wardrobes & Storage',
    description: 'Custom wardrobes that maximize space without compromising style.',
    icon: LayoutGrid,
    price: '₹45k',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Renovation',
    description: 'Give your old space a completely new, modern, and fresh look.',
    icon: PaintRoller,
    price: '₹2L',
    color: 'bg-purple-50 text-purple-600',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive interior solutions under one roof. Transparent pricing, zero hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">{service.description}</p>
              
              <div className="pt-6 border-t border-gray-200 flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Starting from</p>
                  <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-amber-100 group-hover:text-amber-600 flex items-center justify-center transition-colors">
                  <span className="text-lg leading-none">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
