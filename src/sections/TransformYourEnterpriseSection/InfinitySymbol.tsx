import { useEffect, useRef } from "react";

const InfinitySymbol = () => {
  const ballRef = useRef<SVGImageElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const ball = ballRef.current;
    const path = pathRef.current;

     if (!ball || !path) return;

    const pathLength = path.getTotalLength();

    let progress = 0;
    const speed = 3;

    const animate = () => {
      progress += speed;
      if (progress > pathLength) progress = 0;

      const point = path.getPointAtLength(progress);
      ball.setAttribute("x", String(point.x - 62.5));
      ball.setAttribute("y", String(point.y - 62.5));

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <svg viewBox="0 0 1400 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <image
        href="https://tecoreng.com//_next/static/media/infinite.c057ea68.webp"
        width="100%"
        height="100%"
      />

      <path
        ref={pathRef}
        d="M200,400 C300,200 500,100 700,200 S1100,600 1200,400 C1100,200 900,100 700,200 S300,600 200,400"
        stroke="transparent"
        fill="none"
      />

      <image
        ref={ballRef}
        href="https://tecoreng.com//_next/static/media/ball.9fdf93ca.webp"
        width="125"
        height="125"
        x="0"
        y="0"
      />

      <image
        href="https://tecoreng.com//_next/static/media/front_part.852abef4.webp"
        width="100%"
        height="100%"
        style={{ display: "none" }}
      />
    </svg>
  );
};

export default InfinitySymbol;
