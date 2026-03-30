import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod/images/edc040121grattan-004-1615410194.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wider uppercase mb-6">
            Digital Showroom for your Interior Business
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Transform Your Space <br className="hidden md:block" />
            Into a <span className="text-amber-400 italic">Masterpiece</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
            Award-winning interior design tailored to your lifestyle. We bring your vision to life with precision, elegance, and smart technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full text-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Quote <ArrowRight size={20} />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-lg font-medium transition-all flex items-center justify-center"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>
    </div>
  );
}
