import { useRef, useEffect, useState } from "react";
import OurDevelopementProcessCard from "./components/OurDevelopementProcessCard";

const cardsData = [
  {
    title: "Research and Analysis",
    description:
      "Idea, Consultation, Research, Goal Definition, & Requirements Gathering",
    img: "https://tecoreng.com/_next/static/media/kickOff.1c1198b2.webp",
  },
  {
    title: "Design",
    description:
      "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping",
    img: "https://tecoreng.com/_next/static/media/Design.8f887f30.webp",
  },
  {
    title: "Development",
    description: "Functional Implementation, Software Coding & Optimization",
    img: "https://tecoreng.com/_next/static/media/Development.8d074c15.webp",
  },
  {
    title: "Testing",
    description: "Quality Assurance, Troubleshooting, & Testing",
    img: "https://tecoreng.com/_next/static/media/TestingN.96b15640.webp",
  },
  {
    title: "Deployment",
    description: "Launch, Beta Live, & Live",
    img: "https://tecoreng.com/_next/static/media/Deployment.764287e6.webp",
  },
  {
    title: "Evaluation",
    description: "Performance Evaluation, & Analytics Implementation",
    img: "https://tecoreng.com/_next/static/media/Evaluation.b6ba0e9d.webp",
  },
  {
    title: "Maintenance",
    description: "Maintenance",
    img: "https://tecoreng.com/_next/static/media/Maintenance.f5f233ad.webp",
  },
];

const SPEED_MULTIPLIER = 1.6; // >1 makes the ball move faster than scroll

function OurDevelopementProcessSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const ballRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [svgSize, setSvgSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [pathD, setPathD] = useState<string>("");

  // Build a snaking path that alternates left/right horizontally as it goes down
  useEffect(() => {
    const buildPath = () => {
      const section = sectionRef.current;
      const overlay = overlayRef.current;
      if (!section || !overlay) return;

      const height = section.offsetHeight;
      const width = overlay.offsetWidth;

      setSvgSize({ width, height });

      const centerX = width / 2;
      const leftX = Math.max(40, width * 0.10);
      const horizontalOffset = Math.min(240, Math.max(120, width * 0.25));

      const totalStops = cardsData.length; // only intermediate steps
      const stepY = height / (totalStops + 1);

      // Start from left side at the top
      let d = `M ${leftX},0`;
      let prevX = leftX;
      let prevY = 0;

      // Create alternating curves for intermediate steps (exclude final straight to end)
      for (let i = 1; i < totalStops; i++) {
        const y = stepY * i;
        const isEven = i % 2 === 0;
        const x = centerX + (isEven ? -horizontalOffset : horizontalOffset);

        const cp1X = prevX;
        const cp1Y = prevY + stepY * 0.35;
        const cp2X = x;
        const cp2Y = y - stepY * 0.35;

        d += ` C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${x},${y}`;
        prevX = x;
        prevY = y;
      }

      // Finish with a straight line to the ending point (raise further above the last step)
      const targetAboveLast = stepY * (totalStops - 0.5); // half step above the last
      const endY = Math.max(0, Math.min(height - 160, targetAboveLast));
      d += ` L ${centerX},${endY}`;

      setPathD(d);
    };

    buildPath();
    const onResize = () => buildPath();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const ball = ballRef.current;
      const path = pathRef.current;
      const overlay = overlayRef.current;
      if (!section || !ball || !path || !overlay) return;

      const rect = section.getBoundingClientRect();

      // Progress based on scroll through the section
      const scrolled = Math.min(Math.max(-rect.top, 0), rect.height);
      const progress = scrolled / Math.max(1, rect.height);
      const fastProgress = Math.min(progress * SPEED_MULTIPLIER, 1);

      const totalLength = path.getTotalLength();
      const point = path.getPointAtLength(fastProgress * totalLength);

      // Position ball relative to overlay (which overlays the section)
      const x = point.x;
      const y = point.y;

      ball.style.left = `${x}px`;
      ball.style.top = `${y}px`;
      ball.style.transform = `translate(-50%, -50%)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathD, svgSize.height, svgSize.width]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-secondary w-full py-32 lg:py-64"
      >
        <div className="container relative">
          <h3 className="text-5xl relative bottom-45 text-custom-shadow">Our Development Process</h3>
          <img
            src="https://tecoreng.com/_next/static/media/ballEntry.a4003503.svg"
            alt="starting point"
            className="hidden lg:block absolute -top-17 left-0 z-50 w-18 h-18"
            style={{ transform: "translateX(0)" }}
          />

          {/* SVG path overlay and ball */}
          <div
            ref={overlayRef}
            className="hidden lg:block pointer-events-none absolute inset-0 z-40"
          >
            {svgSize.height > 0 && svgSize.width > 0 && (
              <svg
                width={svgSize.width}
                height={svgSize.height}
                viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
                preserveAspectRatio="none"
                style={{ display: "block" }}
              >
                <path
                  ref={pathRef}
                  d={pathD}
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth={2}
                />
              </svg>
            )}
            <div
              ref={ballRef}
              className="absolute transition-transform duration-150 ease-linear"
              style={{ width: "80px", height: "80px" }}
            >
              <img
                src="https://tecoreng.com/_next/static/media/ball3d.c278183e.svg"
                alt="scrolling ball"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Process Cards */}
          <div className="flex flex-col gap-8 relative z-10">
            {cardsData.map((data, index) => (
              <OurDevelopementProcessCard
                key={index}
                title={data.title}
                description={data.description}
                img={data.img}
                isEven={index % 2 === 1}
              />
            ))}
          </div>

          {/* Ending point */}
          <img
            src="https://tecoreng.com/_next/static/media/ballExit.4239f567.webp"
            alt="ending point"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 mt-16 z-50 w-8 h-8"
          />
        </div>
      </section>
    </>
  );
}

export default OurDevelopementProcessSection;
