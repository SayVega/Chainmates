import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pentagons, setPentagons] = useState<
    { x: number; y: number; size: number; row: number; col: number }[]
  >([]);

  useEffect(() => {
    const generatePentagons = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;

      const newPentagons = [];
      const gridSize = 4;
      const pentagonSize = Math.min(containerWidth / gridSize, containerHeight / gridSize) * 0.35;

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const x = (containerWidth / gridSize) * (j + 0.5);
          const y = (containerHeight / gridSize) * (i + 0.5);
          newPentagons.push({ x, y, size: pentagonSize, row: i, col: j });
        }
      }
      setPentagons(newPentagons);
    };

    generatePentagons();
    window.addEventListener('resize', generatePentagons);

    return () => {
      window.removeEventListener('resize', generatePentagons);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden -z-1 top-[90px] fixed"
    >
      <svg className="absolute inset-0 w-screen h-screen">
        {pentagons.map((pentagon, index) => (
          <React.Fragment key={`pentagon-group-${index}`}>
            <Pentagon
              key={`gray-${index}`}
              x={pentagon.x}
              y={pentagon.y}
              size={pentagon.size}
              color="#FFFFFF"
            />
            <AnimatedPentagon
              key={`white-${index}`}
              x={pentagon.x}
              y={pentagon.y}
              size={pentagon.size}
              color="#FFFFFF"
              reverse={pentagon.col < 2}
              faster={pentagon.row === 1 || pentagon.row === 3} // Determine if this row is faster
            />
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

const Pentagon = ({ x, y, size, color }: { x: number; y: number; size: number; color: string }) => {
  const points = [];

  for (let i = 0; i < 5; i++) {
    const angle = ((2 * Math.PI) / 5) * i - Math.PI / 2;
    const pointX = x + size * Math.cos(angle);
    const pointY = y + size * Math.sin(angle);
    points.push(`${pointX},${pointY}`);
  }
  const polygonPoints = points.join(' ');

  return (
    <polygon
      points={polygonPoints}
      fill="none"
      stroke={color}
      strokeWidth="1"
    />
  );
};

const AnimatedPentagon = ({ x, y, size, color, reverse, faster }: { x: number; y: number; size: number; color: string; reverse?: boolean, faster?: boolean }) => {
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    let animationFrameId: number;
    let timeoutId: NodeJS.Timeout;
    let start: number | undefined;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      if (isRotating) {
        const direction = reverse ? -1 : 1;
          // Adjust the rotation speed based on the faster prop
        const baseSpeed = 34000; // Base rotation speed
        const speedMultiplier = faster ? 0.5 : 1; // 25% faster
        const rotateValue = direction * (progress / (baseSpeed * speedMultiplier)) * 360;
        setRotation(rotateValue % 360);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    if (isRotating) {
      animationFrameId = requestAnimationFrame(animate);

      // Set timeout to stop rotation after a full rotation and delay for 3 seconds
      timeoutId = setTimeout(() => {
        setIsRotating(false);
        setTimeout(() => {
          setIsRotating(true);
          start = undefined; // Reset start time
        }, 500); // Delay for 3 seconds after stopping
      }, 34000);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [isRotating, reverse, faster]);

  const points = [];
  for (let i = 0; i < 5; i++) {
    const angle = ((2 * Math.PI) / 5) * i - Math.PI / 2 + (rotation * Math.PI) / 180;
    const pointX = x + size * Math.cos(angle);
    const pointY = y + size * Math.sin(angle);
    points.push(`${pointX},${pointY}`);
  }
  const polygonPoints = points.join(' ');

  return (
    <polygon
      points={polygonPoints}
      fill="none"
      stroke={color}
      strokeWidth="2"
      style={{ transition: 'stroke 3s ease-in-out' }}
    />
  );
};

export default AnimatedBackground;
