import { motion } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";

interface QuoteItem {
  text: string;
  context: string;
  date?: string;
}

const quotes: QuoteItem[] = [
  {
    text: "Hmm? What was I saying?",
    context: "A classic Mumei moment—getting lost mid-sentence and laughing it off with that signature giggle.",
  },
  {
    text: "I drew this for you!",
    context: "The genuine excitement she had every time she shared her art with the Hoomans.",
  },
  {
    text: "Oh! Hi!",
    context: "Her iconic high-pitched greeting that made every stream feel like a warm welcome.",
  },
  {
    text: "Let me just... draw this real quick...",
    context: "The 'famous last words' before a three-hour drawing session where she'd get completely lost in her creativity.",
  },
  {
    text: "I like being here with you all.",
    context: "Simple, honest words that showed how much she truly valued just hanging out with her community.",
  },
  {
    text: "Hoomans are the best!",
    context: "Her way of showing love to her fans, focusing on the people rather than the titles.",
  },
  {
    text: "[Excited Overwatch Noises]",
    context: "The pure, chaotic joy of her 'gaming gremlin' side whenever she was popping off in a match.",
  },
  {
    text: "I'm just a normal owl.",
    context: "A reminder of her humble and silly nature, even when she was doing incredible things.",
  },
];

const Quotes = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <QuoteIcon className="w-10 h-10 text-primary mx-auto mb-3" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
            Silly Moments & Memories
          </h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Small reminders of the joy, the art, and the excitement that made every day better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-parchment/50 border border-border rounded-xl p-6 h-full hover:shadow-md hover:border-primary/20 transition-all relative overflow-hidden">
                {/* Decorative feather */}
                <span className="absolute -top-2 -right-2 text-3xl opacity-10 group-hover:opacity-20 transition-opacity rotate-45">
                  🪶
                </span>

                <QuoteIcon className="w-5 h-5 text-primary/40 mb-3" />
                <blockquote className="font-serif text-lg text-foreground leading-relaxed mb-3 italic">
                  "{q.text}"
                </blockquote>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {q.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Quotes;