import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Project {
  id: number;
  title: string;
  category: string;
  filter: string;
  image: string;
  budget: string;
  area: string;
  beforeAfter: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Minimalist Villa',
    category: 'Full Home',
    filter: 'full-home',
    image: 'https://www.theoriahomes.com/cdn/shop/articles/5dd10a1188381a2acd76d5bab868bac1_90276a55-14b7-4285-8382-6f52da1d270f.jpg?v=1755507461',
    budget: '₹15L - ₹20L',
    area: '2400 sq.ft',
    beforeAfter: true,
  },
  {
    id: 2,
    title: 'Contemporary 2BHK',
    category: '2BHK',
    filter: '2bhk',
    image: 'https://productimages.withfloats.com/actual/62eb7329d4d9ea0001f98c46.png',
    budget: '₹8L - ₹12L',
    area: '1100 sq.ft',
    beforeAfter: false,
  },
  {
    id: 3,
    title: 'Luxury Living Room',
    category: 'Full Home',
    filter: 'full-home',
    image: 'https://hips.hearstapps.com/hmg-prod/images/edc040121grattan-004-1615410194.jpg',
    budget: '₹25L+',
    area: '3500 sq.ft',
    beforeAfter: true,
  },
  {
    id: 4,
    title: 'Zen Bedroom Retreat',
    category: 'Bedroom',
    filter: 'bedroom',
    image: 'https://hips.hearstapps.com/hmg-prod/images/minimalist-bedroom-ideas-1611677758.jpeg?crop=0.8885714285714286xw%3A1xh%3Bcenter%2Ctop&resize=1200%3A%2A',
    budget: '₹3L - ₹5L',
    area: '400 sq.ft',
    beforeAfter: false,
  },
  {
    id: 5,
    title: 'Modular Smart Kitchen',
    category: 'Kitchen',
    filter: 'kitchen',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    budget: '₹4L - ₹7L',
    area: '250 sq.ft',
    beforeAfter: true,
  },
  {
    id: 6,
    title: 'Executive Home Office',
    category: 'Office',
    filter: 'office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    budget: '₹2L - ₹4L',
    area: '150 sq.ft',
    beforeAfter: false,
  },
];

const filters = [
  { name: 'All', value: 'all' },
  { name: '2BHK', value: '2bhk' },
  { name: 'Kitchen', value: 'kitchen' },
  { name: 'Office', value: 'office' },
  { name: 'Full Home', value: 'full-home' },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [generatedImages, setGeneratedImages] = useState<Record<number, string[]>>({});
  const [generatingProjectId, setGeneratingProjectId] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.filter === activeFilter);

  const openGallery = async (project: Project) => {
    setSelectedProject(project);
    setActiveImage(project.image);

    // If we haven't generated images for this project yet, generate them now using Gemini
    if (!generatedImages[project.id] && generatingProjectId !== project.id) {
      setGeneratingProjectId(project.id);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        const prompts = [
          `A different angle view of a ${project.title}, ${project.category} interior design, highly detailed, photorealistic, 8k resolution, architectural photography, beautiful lighting`,
          `A close up detail shot of a ${project.title}, ${project.category} interior design, highlighting textures and materials, photorealistic, 8k resolution, architectural photography`
        ];

        const generatePromises = prompts.map(async (prompt) => {
          try {
            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash-image',
              contents: {
                parts: [{ text: prompt }],
              },
            });
            
            const parts = response.candidates?.[0]?.content?.parts || [];
            for (const part of parts) {
              if (part.inlineData) {
                const mimeType = part.inlineData.mimeType || 'image/jpeg';
                return `data:${mimeType};base64,${part.inlineData.data}`;
              }
            }
          } catch (e) {
            console.error("Failed to generate image", e);
          }
          return null;
        });

        const results = await Promise.all(generatePromises);
        const validImages = results.filter(Boolean) as string[];

        setGeneratedImages(prev => ({
          ...prev,
          [project.id]: validImages
        }));
      } catch (error) {
        console.error("Error generating gallery:", error);
      } finally {
        setGeneratingProjectId(null);
      }
    }
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setActiveImage('');
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Masterpieces</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects. From cozy 2BHKs to sprawling luxury villas, we bring dreams to reality.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => openGallery(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {project.beforeAfter && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                      Before/After Available
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full flex justify-between items-center">
                      <span className="text-white font-medium">View Gallery</span>
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md">→</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold tracking-wider text-amber-600 uppercase mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Budget</p>
                      <p className="font-semibold text-gray-900">{project.budget}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Area</p>
                      <p className="font-semibold text-gray-900">{project.area}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            Load More Projects
          </button>
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6"
          >
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-md transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="w-full max-w-5xl flex flex-col h-full max-h-[90vh]">
              {/* Main Image */}
              <div className="flex-1 relative rounded-2xl overflow-hidden bg-gray-900/50 mb-4 flex items-center justify-center border border-white/10">
                <img
                  src={activeImage}
                  alt={selectedProject.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="h-24 shrink-0 flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                {/* Original Image */}
                <button
                  onClick={() => setActiveImage(selectedProject.image)}
                  className={`relative h-full aspect-video rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImage === selectedProject.image ? 'border-amber-500' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={selectedProject.image} alt="Original" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-[10px] text-white text-center py-0.5">Original</div>
                </button>

                {/* Generated Images */}
                {generatedImages[selectedProject.id]?.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative h-full aspect-video rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImage === img ? 'border-amber-500' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Generated ${idx + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-amber-600/90 text-[10px] text-white text-center py-0.5 font-medium">AI Generated</div>
                  </button>
                ))}

                {/* Loading Skeletons */}
                {generatingProjectId === selectedProject.id && (
                  <>
                    <div className="h-full aspect-video rounded-lg bg-gray-800 animate-pulse flex flex-col items-center justify-center shrink-0 border-2 border-transparent">
                      <Loader2 size={20} className="text-amber-500 animate-spin mb-1" />
                      <span className="text-[10px] text-gray-400">Generating...</span>
                    </div>
                    <div className="h-full aspect-video rounded-lg bg-gray-800 animate-pulse flex flex-col items-center justify-center shrink-0 border-2 border-transparent">
                      <Loader2 size={20} className="text-amber-500 animate-spin mb-1" />
                      <span className="text-[10px] text-gray-400">Generating...</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
