import { useState } from 'react';
import { Upload, Sparkles, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const styles = ['Modern', 'Minimalist', 'Bohemian', 'Industrial', 'Scandinavian'];

export function AIFeature() {
  const [step, setStep] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState('Modern');
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultReady, setResultReady] = useState(false);

  const handleUpload = () => {
    setStep(2);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setResultReady(true);
      setStep(3);
    }, 2500);
  };

  const reset = () => {
    setStep(1);
    setResultReady(false);
  };

  return (
    <section id="ai-preview" className="py-24 bg-gray-900 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-amber-600/20 blur-[120px]" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20">
            <Sparkles size={16} />
            <span>AI Room Preview</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Visualize Your Dream Space</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Upload a photo of your empty room, choose a style, and let our AI instantly generate a stunning interior design concept.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <div className="border-2 border-dashed border-gray-600 rounded-2xl p-12 hover:border-amber-500 transition-colors cursor-pointer group" onClick={handleUpload}>
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <Upload size={32} className="text-gray-400 group-hover:text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Upload Room Photo</h3>
                  <p className="text-gray-400 mb-6">Drag and drop or click to browse</p>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                    Select Image
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                    <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden relative border border-gray-700">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <ImageIcon size={48} className="opacity-50 mb-2" />
                        <span className="absolute bottom-4 text-sm">room_photo.jpg</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-6">
                    <h3 className="text-2xl font-bold">Choose a Style</h3>
                    <div className="flex flex-wrap gap-3">
                      {styles.map(style => (
                        <button
                          key={style}
                          onClick={() => setSelectedStyle(style)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedStyle === style
                              ? 'bg-amber-500 text-gray-900'
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20"
                    >
                      {isGenerating ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Generating Magic...
                        </>
                      ) : (
                        <>
                          <Sparkles size={20} /> Generate Design
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && resultReady && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 border border-white/10">
                  <img 
                    src="https://hips.hearstapps.com/hmg-prod/images/edc040121grattan-004-1615410194.jpg" 
                    alt="AI Generated Interior" 
                    className="w-full h-auto object-cover max-h-[500px]"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/10">
                    Style: <span className="text-amber-400">{selectedStyle}</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <button onClick={reset} className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium transition-colors">
                    Try Another
                  </button>
                  <a href="#contact" className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-amber-900/20">
                    Get Quote for this Design
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
