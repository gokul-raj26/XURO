// fluid.ts
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
};

export function createFluid(canvas: HTMLCanvasElement) {
  let particles: Particle[] = [];

  const splash = (x: number, y: number) => {
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 2;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        size: Math.random() * 6 + 2,
        color: `hsla(${Math.random() * 360}, 100%, 60%, 1)`,
      });
    }
  };

  const update = () => {
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.95;
      p.vy *= 0.95;
      p.alpha -= 0.02;
    });

    particles = particles.filter((p) => p.alpha > 0);
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.fillStyle = p.color.replace("1)", `${p.alpha})`);
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  return { splash, update, draw };
}
