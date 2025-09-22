import { useEffect, useRef, useState } from 'react';

function AnimatedStateBar({ label, value }: { label: string; value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(counter);
  }, [hasAnimated, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center px-1"
    >
      <div className="text-white text-[10px] md:text-lg font-medium text-center">
        {label}
      </div>
      <div className="text-[#00c4d5] text-sm lg:text-7xl md:text-5xl font-medium leading-tight mb-1">
        {count}
        {label === 'Repeated Clients' ? '%' : '+'}
      </div>
    </div>
  );
}

export default AnimatedStateBar;
