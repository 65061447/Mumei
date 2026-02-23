import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const milestones = [
  "Debuted as part of Hololive Council (HoloEN Gen 2)",
  "Revealed incredible art skills that stunned the community",
  "Released original songs that touched thousands of hearts",
  "Reached 1 million subscribers",
  "Created countless memories through streams, art, and music",
  "Built a community — the Hoomans — united by warmth and love",
];

const Tribute = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <Heart className="w-10 h-10 text-primary mx-auto mb-3" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
            A Tribute to Mumei
          </h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            For the Guardian of Civilization — who taught us that remembering is
            an act of love.
          </p>
        </div>

        {/* Who is Mumei */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Who is Nanashi Mumei?
          </h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              Nanashi Mumei is the Guardian of Civilization, a member of
              Hololive Council (HoloEN Generation 2). Represented by an owl —
              the symbol of wisdom — she carries the weight of all of humanity's
              history, yet forgets the small things. It's this beautiful
              contradiction that made her so deeply relatable and endearing.
            </p>
            <p>
              Behind the gentle voice and frequent forgetfulness was an
              incredibly talented artist, a surprisingly powerful singer, and
              someone who could shift from wholesome comfort to absolute chaos
              in the span of a single sentence. She was unpredictable, genuine,
              and inevitably beloved.
            </p>
            <p>
              She drew breathtaking illustrations live on stream, sang with a
              voice that could break your heart, and created a space where
              thousands of people felt truly welcomed. Her community — the
              Hoomans — became a family bound not by obligation, but by the
              simple joy of being together.
            </p>
          </div>
        </motion.section>

        {/* Milestones */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Milestones 🪶
          </h2>
          <div className="space-y-3">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
              >
                <span className="text-primary mt-0.5">🪶</span>
                <p className="text-foreground font-body text-sm">{m}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Letter */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-parchment/60 border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <span className="absolute top-4 right-4 text-4xl opacity-10">
              🪶
            </span>
            <span className="absolute bottom-4 left-4 text-3xl opacity-10 rotate-45">
              🪶
            </span>

            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              Dear Mumei,
            </h2>

            <div className="space-y-4 font-body text-foreground/90 leading-relaxed italic">
              <p>
                I just wanted to say how much I love the silly side of you. Your
                cuteness, the way you'd get so excited playing Overwatch, and
                the sounds of pure joy you'd make—those are the moments I
                treasure. Honestly, every time you were enjoying yourself, you
                made my day.
              </p>

              <p>
                When you sang, your voice really melted my heart. I wanted to
                cherish those moments forever, but I know that "forever" is a
                hard thing to hold onto.
              </p>

              <p>
                In the end, all we really have are the memories we make. This
                site is my way of keeping the memories I created while watching
                you. It's a place to hold onto the happiness you gave me.
              </p>

              <p>
                Thank you for being you, Mumei. You'll always have a place in my
                heart.
              </p>
              <p className="text-right font-semibold not-italic text-primary">
                — With love, from the Hoomans who really enjoy you being you 🪶
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Tribute;
