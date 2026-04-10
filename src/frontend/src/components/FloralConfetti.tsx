import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  delay: number;
}

const COLORS = [
  "oklch(0.88 0.06 325)",
  "oklch(0.92 0.04 70)",
  "oklch(0.72 0.17 70)",
  "oklch(0.82 0.08 325)",
  "oklch(0.95 0.02 80)",
];

function createPetal(canvasWidth: number): Petal {
  return {
    x: Math.random() * canvasWidth,
    y: -20,
    size: 6 + Math.random() * 10,
    speed: 0.8 + Math.random() * 1.5,
    drift: (Math.random() - 0.5) * 1.2,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 2,
    opacity: 0.5 + Math.random() * 0.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    delay: Math.random() * 3000,
  };
}

export default function FloralConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const petals: Petal[] = Array.from({ length: 24 }, () =>
      createPetal(canvas.width),
    );

    let animId: number;
    let lastTime = 0;

    const draw = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const petal of petals) {
        if (time < petal.delay) continue;

        petal.y += petal.speed * (delta / 16);
        petal.x += petal.drift;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > canvas.height + 20) {
          const reset = createPetal(canvas.width);
          Object.assign(petal, reset, { y: -20, delay: 0 });
        }

        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate((petal.rotation * Math.PI) / 180);
        ctx.globalAlpha = petal.opacity * 0.7;
        ctx.fillStyle = petal.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, petal.size / 2, petal.size, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
}
