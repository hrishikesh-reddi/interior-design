export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-serif font-bold text-white mb-4 block">
              Lumina<span className="text-amber-500">.</span>
            </a>
            <p className="text-sm max-w-sm">
              Digital showroom for your interior business. We transform spaces into beautiful, functional homes tailored to your lifestyle.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-amber-500 transition-colors">Pricing</a></li>
              <li><a href="#calculator" className="hover:text-amber-500 transition-colors">Cost Calculator</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@luminainteriors.demo</li>
              <li>+91 98765 43210</li>
              <li>123 Design Street, Tech Park, Bangalore</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Lumina Interiors. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
