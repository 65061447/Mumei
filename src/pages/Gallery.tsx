import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Share2, MoreHorizontal, ExternalLink, Search, PenTool } from "lucide-react";

interface ArtPiece {
  id: number;
  imageUrl: string;
  sourceUrl: string;
  title: string;
  description: string;
}

const mumeiOriginals: ArtPiece[] = [
  { 
    id: 1, 
    imageUrl: "https://preview.redd.it/mumei-draws-holoen-the-full-collection-v0-93wzyzijqbj81.png?width=1080&crop=smart&auto=webp&s=39f860684b0545bf7c87b2081855fe685da229ab", 
    sourceUrl: "https://www.reddit.com/r/Hololive/comments/sy8msh/mumei_draws_holoen_the_full_collection/", 
    title: "The HoloEN Art", 
    description: "The complete set of her Council and Myth friends. A true masterpiece." 
  },
  { 
    id: 2, 
    imageUrl: "https://i.redd.it/bllavyp3cqo71.png", 
    sourceUrl: "https://www.reddit.com/r/Hololive/comments/ps7v8p/mumei_is_actually_a_pretty_good_artist/", 
    title: "A mistake", 
    description: "The Drawing Mumei draw after seeing Hoshimachi Suisei called her 'very cute'." 
  },
  { 
    id: 3, 
    imageUrl: "https://preview.redd.it/z784wvwycel71.png?auto=webp&s=b86b6903d35cca892106eb9c6541ca0a91636a46", 
    sourceUrl: "https://www.reddit.com/r/Hololive/comments/phj206/mumei_showing_off_her_incredible_art_skills/", 
    title: "An Owl", 
    description: "A hyper-realistic interpretation of Owl. Perfection in every stroke." 
  },
  { 
    id: 4, 
    imageUrl: "https://preview.redd.it/eagavu2r1mk71.png?width=1080&crop=smart&auto=webp&s=85577bc1be053bb2e2baef7e27ccdfa9bbe0ee42", 
    sourceUrl: "https://www.reddit.com/r/Hololive/comments/pexl7h/mumeis_art_is_certainly_very_different_from_the/", 
    title: "Expectation vs Reality", 
    description: "Mumei's Beautiful First drawing stream. Truly melt my heart since that day." 
  },
  { 
    id: 5, 
    imageUrl: "https://i.redd.it/jd4ccqzcano81.png", 
    sourceUrl: "https://www.reddit.com/r/Hololive/comments/tj0mre/mumeis_drawing_of_the_council_myth_is_finally/", 
    title: "Haachama", 
    description: "A masterpiece... Very cute Hachaama indeed" 
  },
];

const Gallery = () => {
  const [selected, setSelected] = useState<ArtPiece | null>(null);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] pb-20 font-sans">
      {/* HEADERBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-[#4a3f35] rounded-xl flex items-center justify-center text-white shadow-md">
             <PenTool className="w-5 h-5" />
           </div>
           <div>
             <h1 className="font-bold text-lg tracking-tight">Mumei's Sketchbook</h1>
             <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Authentic Memories</p>
           </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
           <div className="text-sm font-medium text-gray-400 underline decoration-orange-200 decoration-2">
             Archive Vol. 1
           </div>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto px-6 mt-12">
        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {mumeiOriginals.map((art) => (
            <motion.div
              key={art.id}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelected(art)}
            >
              <div className="bg-white p-5 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#f3f3f3] mb-5">
                  <img 
                    src={art.imageUrl} 
                    alt={art.title} 
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="px-3 pb-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-xl text-gray-800">{art.title}</h4>
                    <span className="text-[10px] bg-orange-50 text-orange-700 px-2 py-1 rounded-full font-bold">SKETCH</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2 italic font-serif">"Drawn with love by Mumei"</p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* PLACEHOLDER */}
          <div className="border-2 border-dashed border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center p-12 min-h-[300px]">
             <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
               <PenTool className="w-6 h-6 text-gray-200" />
             </div>
             <p className="text-gray-300 text-sm font-medium">Seeking more memories...</p>
          </div>
        </div>

        {/* FOOTER QUOTE */}
        <div className="mt-32 text-center opacity-60 hover:opacity-100 transition-opacity max-w-2xl mx-auto px-4">
            <h3 className="text-xl md:text-2xl font-serif italic text-gray-600 leading-relaxed">
              "I'll remember you, Mumei. Please smile through your hardest days, I will do the same too. :)"
            </h3>
            <div className="mt-4 h-px w-12 bg-orange-200 mx-auto" />
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1a1a1a]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="bg-white max-w-5xl w-full rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#fcfcfc] p-8 md:p-12 flex items-center justify-center border-b border-gray-50">
                <img src={selected.imageUrl} className="max-h-[60vh] object-contain" alt="Large Memory" />
              </div>

              <div className="p-10 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-4xl font-black text-gray-800 mb-2">{selected.title}</h2>
                  <p className="text-gray-500 italic font-serif text-lg leading-relaxed">"{selected.description}"</p>
                </div>
                
                <div className="flex gap-4 w-full md:w-auto">
                  <a 
                    href={selected.sourceUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 md:flex-none px-10 py-4 bg-[#4a3f35] text-white rounded-2xl font-bold hover:bg-black transition-all text-center"
                  >
                    View Origin
                  </a>
                  <button 
                    onClick={() => setSelected(null)}
                    className="px-6 py-4 bg-gray-100 text-gray-400 rounded-2xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;