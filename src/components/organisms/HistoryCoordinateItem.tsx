import { useRef, useEffect, useState } from 'react';

const HistoryCoordinateItem = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si moins de 50% visible, on floute
        setIsBlurred(entry.intersectionRatio < 0.7);
      },
      { threshold: [0.7] }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${isBlurred ? 'blur-sm opacity-70' : ''}`}
    >
      {children}
    </div>
  );
};

export default HistoryCoordinateItem