import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Play, ExternalLink } from "lucide-react";

type SongType = "Original" | "Cover" | "Karaoke";

interface Song {
  title: string;
  type: SongType;
  description: string;
  date: string;
  youtubeId: string;
}

const songs: Song[] = [
  { 
    title: "mumei", 
    type: "Original", 
    description: "The iconic Kairiki Bear production — a powerful reflection of her journey.", 
    date: "2023-08-04", 
    youtubeId: "oA0CpI0vCK4"
  },
  { 
    title: "A New Start", 
    type: "Original", 
    description: "Her debut original song — the anthem of a new beginning.", 
    date: "2021-09-04", 
    youtubeId: "Py21QCndbxc"
  },
  { 
    title: "Shiny Smily Story", 
    type: "Cover", 
    description: "Hololive's iconic group cover featuring her warm vocals.", 
    date: "2022-01-10", 
    youtubeId: "VcxjGyCRxtY"
  },
  { 
    title: "Country Roads", 
    type: "Karaoke", 
    description: "The legendary performance that became a staple of the channel.", 
    date: "2021-11-15", 
    youtubeId: "3uPQvY8v9n4"
  },
  { 
    title: "Fly Me to the Moon", 
    type: "Cover", 
    description: "A gentle classic rendered in her signature soft style.", 
    date: "2022-04-12", 
    youtubeId: "7sCnUCcaDlY"
  },
  { 
    title: "Unravel", 
    type: "Karaoke", 
    description: "Tokyo Ghoul's haunting OP — absolute chills every time.", 
    date: "2022-06-10", 
    youtubeId: "Zu1phJmrLRg"
  },
  { 
    title: "Gurenge", 
    type: "Karaoke", 
    description: "Demon Slayer OP performed with surprising power.", 
    date: "2022-02-28", 
    youtubeId: "eWJ-mPMLgtM"
  },
  { 
    title: "Cruel Angel's Thesis", 
    type: "Cover", 
    description: "A high-energy cover of the iconic anime opening.", 
    date: "2022-05-20", 
    youtubeId: "X2vsmsyqVG4"
  }
];

const filters: (SongType | "All")[] = ["All", "Original", "Cover", "Karaoke"];

const Songs = () => {
  const [activeFilter, setActiveFilter] = useState<SongType | "All">("All");

  const filtered = activeFilter === "All" ? songs : songs.filter((s) => s.type === activeFilter);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <Music className="w-10 h-10 text-primary mx-auto mb-3" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
            Songs Archive
          </h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto italic">
            "I'll remember the things I forgot, just for you."
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Song grid */}
        <div className="space-y-4">
          {filtered.map((song, i) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:shadow-md hover:border-primary/20 transition-all"
            >
              <a
                href={`https://youtube.com/watch?v=${song.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors cursor-pointer"
              >
                <Play className="w-5 h-5 text-primary fill-primary/20" />
              </a>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <a 
                    href={`https://youtube.com/watch?v=${song.youtubeId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline decoration-primary/50"
                  >
                    <h3 className="font-serif text-lg font-semibold text-foreground truncate">
                      {song.title}
                    </h3>
                  </a>
                  <span className="flex-shrink-0 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent-foreground font-bold">
                    {song.type}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm font-body line-clamp-2">
                  {song.description}
                </p>
                <p className="text-muted-foreground/60 text-xs mt-2 font-body">{song.date}</p>
              </div>
              
              <a
                href={`https://youtube.com/watch?v=${song.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Songs;