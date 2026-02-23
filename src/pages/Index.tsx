import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Music, Film, Image, Quote, Heart } from "lucide-react";

const sections = [
  {
    title: "Songs Archive",
    desc: "Her covers, originals, and karaoke moments that touched our hearts",
    icon: Music,
    path: "/songs",
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "Stream Highlights",
    desc: "Memorable moments captured from streams we'll never forget",
    icon: Film,
    path: "/highlights",
    color: "from-accent/15 to-primary/10",
  },
  {
    title: "Gallery",
    desc: "Beautiful art celebrating the Guardian of Civilization",
    icon: Image,
    path: "/gallery",
    color: "from-forest/10 to-primary/10",
  },
  {
    title: "Quotes & Moments",
    desc: "Words that made us laugh, cry, and everything in between",
    icon: Quote,
    path: "/quotes",
    color: "from-primary/15 to-parchment/40",
  },
  {
    title: "Tribute",
    desc: "A love letter to Mumei — who she is and what she means to us",
    icon: Heart,
    path: "/tribute",
    color: "from-accent/20 to-primary/15",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Warm gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <motion.div
            className="text-7xl md:text-8xl mb-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🪶
          </motion.div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            A Feather in Memory
          </h1>

          <p className="font-serif text-lg md:text-xl text-primary italic mb-2">
            "Even if you forget, the memories still happened."
          </p>

          <p className="text-muted-foreground font-body text-base md:text-lg mt-6 max-w-lg mx-auto">
            A tribute to Nanashi Mumei — the Guardian of Civilization who carved a
            place in our hearts that time cannot erase.
          </p>

          <motion.div
            className="mt-10 text-muted-foreground/50 text-sm"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓ Scroll to explore ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Section cards */}
      <section className="container mx-auto px-4 pb-20 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sections.map((section, i) => (
            <motion.div
              key={section.path}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <Link
                to={section.path}
                className={`group block rounded-xl border border-border bg-gradient-to-br ${section.color} p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30`}
              >
                <section.icon className="w-8 h-8 text-primary mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {section.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
