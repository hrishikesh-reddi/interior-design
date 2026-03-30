import { useState } from 'react';
import { Calculator } from 'lucide-react';

export function CostCalculator() {
  const [area, setArea] = useState(1000);
  const [type, setType] = useState('essential');

  const calculateCost = () => {
    const baseRate = type === 'essential' ? 1200 : type === 'premium' ? 1800 : 2500;
    const total = area * baseRate;
    
    // Format to Indian Rupees (Lakhs)
    if (total >= 100000) {
      return `₹${(total / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${total.toLocaleString('en-IN')}`;
  };

  return (
    <section id="calculator" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                <Calculator size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Instant Cost Estimator</h2>
                <p className="text-gray-500 text-sm">Get a rough idea of your interior budget</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Area Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Property Area (Sq.ft)</label>
                  <span className="font-bold text-amber-600">{area} sq.ft</span>
                </div>
                <input 
                  type="range" 
                  min="300" 
                  max="5000" 
                  step="50"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>300</span>
                  <span>5000+</span>
                </div>
              </div>

              {/* Quality Type */}
              <div>
                <label className="font-medium text-gray-700 block mb-4">Finish Quality</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'essential', name: 'Essential', desc: 'Basic materials, functional' },
                    { id: 'premium', name: 'Premium', desc: 'High quality, durable' },
                    { id: 'luxury', name: 'Luxury', desc: 'Imported, bespoke finish' }
                  ].map((q) => (
                    <button
                      key={q.id}
                      onClick={() => setType(q.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        type === q.id 
                          ? 'border-amber-500 bg-amber-50 ring-1 ring-amber-500' 
                          : 'border-gray-200 bg-white hover:border-amber-300'
                      }`}
                    >
                      <div className="font-bold text-gray-900 mb-1">{q.name}</div>
                      <div className="text-xs text-gray-500">{q.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="mt-8 p-6 bg-gray-900 rounded-2xl flex flex-col md:flex-row items-center justify-between text-white">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Estimated Cost</p>
                  <p className="text-3xl md:text-4xl font-bold text-amber-400">{calculateCost()}</p>
                  <p className="text-xs text-gray-500 mt-2">*This is a rough estimate. Actual cost may vary.</p>
                </div>
                <a 
                  href="#contact" 
                  className="mt-6 md:mt-0 px-6 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors w-full md:w-auto text-center"
                >
                  Get Exact Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
