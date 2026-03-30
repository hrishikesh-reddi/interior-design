import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Bangalore',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'Lumina transformed our bare 3BHK into a stunning modern home. The AI preview feature helped us visualize exactly what we were getting. Delivered 5 days before schedule!',
  },
  {
    name: 'Rahul Verma',
    role: 'IT Professional, Pune',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'The transparency in pricing was refreshing. No hidden costs. The modular kitchen they designed is both beautiful and highly functional. Highly recommended.',
  },
  {
    name: 'Ananya Desai',
    role: 'Entrepreneur, Mumbai',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'I wanted a minimalist, zen-like bedroom and they nailed it. The materials used feel premium and the finish is flawless. Their team is extremely professional.',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Happy Homeowners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their new spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
