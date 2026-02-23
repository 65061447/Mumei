import { motion } from "framer-motion";
import { Film, Calendar, ExternalLink, Play } from "lucide-react";

interface Highlight {
  title: string;
  description: string;
  date: string;
  category: string;
  youtubeId: string;
  customImage?: string; // New field for manual overrides
}

const highlights: Highlight[] = [
  {
    title: "Debut Stream",
    description: "The day civilization gained its guardian. Mumei introduced herself with a warmth that instantly captured hearts.",
    date: "August 23, 2021",
    category: "Milestone",
    youtubeId: "M2gwJ-7s0Zo"
  },
  {
    title: "First Drawing Stream",
    description: "We discovered her incredible art talent. A casual stream revealed a hauntingly unique style we'd come to love.",
    date: "September 2021",
    category: "Art",
    youtubeId: "_WCG3s4bXPo",
    // Manually setting this to the high-quality MQ thumbnail since MaxRes is broken
    customImage: "https://img.youtube.com/vi/_WCG3s4bXPo/hqdefault.jpg"
  },
  {
    title: "The Unhinged Mumei Era",
    description: "Behind the soft exterior, a chaotic gremlin emerged. Horror games revealed a side of Mumei nobody expected.(I can't leave every beautiful moment behide so i used this complination that i watch everyday instead) :)",
    date: "Through out 2021-2025",
    category: "Iconic",
    youtubeId: "Lk7W6Px_rpk"
  },
  {
    title: "1 Million Subscribers",
    description: "A milestone reaching a million 'Friends' who found comfort in a guardian who remembered them.(Sorry i can't find the actual stream)",
    date: "January 26,2024",
    category: "Milestone",
    youtubeId: "J0pkL-e3Hf8"
  },
  {
    title: "The Final Graduation",
    description: "A beautiful, emotional 3D concert. The final 'thank you' from the Guardian of Civilization to all her Friends.",
    date: "April 28, 2025",
    category: "Memory",
    youtubeId: "tTABc1SlO8U"
  }
];

const Highlights = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="text-center mb-12">
          <Film className="w-10 h-10 text-primary mx-auto mb-3" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
            Stream Highlights
          </h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto italic">
            "It’s not about forgetting... it’s about making new memories to keep."
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-16">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-4 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-2 mt-6 z-10 border-4 border-background" />
                <div className="w-12 flex-shrink-0 md:hidden" />

                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                    
                    <a 
                      href={`https://youtube.com/watch?v=${h.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-video w-full overflow-hidden bg-muted"
                    >
                      <img 
                        // If customImage exists, use it. Otherwise, use the MaxRes thumbnail.
                        src={h.customImage || `https://img.youtube.com/vi/${h.youtubeId}/maxresdefault.jpg`}
                        alt={h.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                    </a>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3 text-xs">
                        <span className="font-bold tracking-tighter uppercase text-primary">
                          {h.category}
                        </span>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {h.date}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {h.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {h.description}
                      </p>

                      <a 
                        href={`https://youtube.com/watch?v=${h.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary flex items-center gap-1 hover:underline"
                      >
                        OPEN ARCHIVE <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Highlights;