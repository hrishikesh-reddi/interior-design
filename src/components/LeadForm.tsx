import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Left Side - Image/Text */}
          <div className="w-full md:w-5/12 bg-amber-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-700 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-4">Let's Build Your Dream Space</h3>
              <p className="text-amber-100 mb-8">
                Book a free consultation with our expert designers today.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-medium">Free 3D Design Consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-medium">Transparent Cost Estimate</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-medium">Dedicated Project Manager</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-7/12 p-10 bg-white">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Get Free Design</h4>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Estimated Budget</label>
                    <select
                      id="budget"
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
                    >
                      <option value="" disabled>Select a budget range</option>
                      <option value="under-3l">Under ₹3 Lakhs</option>
                      <option value="3l-5l">₹3 Lakhs - ₹5 Lakhs</option>
                      <option value="5l-10l">₹5 Lakhs - ₹10 Lakhs</option>
                      <option value="above-10l">Above ₹10 Lakhs</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mt-8"
                  >
                    Get Free Design <ArrowRight size={20} />
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting, you agree to our Terms & Privacy Policy.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h4>
                  <p className="text-gray-600 mb-8">
                    Thank you, {formData.name || 'there'}. Our design expert will call you shortly to discuss your dream home.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', budget: '' });
                    }}
                    className="text-amber-600 font-medium hover:text-amber-700 underline underline-offset-4"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
