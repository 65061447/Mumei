import { useEffect, useState } from "react";

interface Feather {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const FloatingFeathers = () => {
  const [feathers, setFeathers] = useState<Feather[]>([]);

  useEffect(() => {
    const generated: Feather[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 12 + Math.random() * 10,
      size: 14 + Math.random() * 14,
      opacity: 0.15 + Math.random() * 0.3,
    }));
    setFeathers(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {feathers.map((f) => (
        <div
          key={f.id}
          className="absolute text-feather"
          style={{
            left: `${f.left}%`,
            top: "-5%",
            fontSize: `${f.size}px`,
            opacity: f.opacity,
            animation: `feather-fall ${f.duration}s linear ${f.delay}s infinite`,
          }}
        >
          🪶
        </div>
      ))}
    </div>
  );
};

export default FloatingFeathers;
