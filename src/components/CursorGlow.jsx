import React, { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5]"
      style={{
        background: `radial-gradient(120px_120px_at_${pos.x}px_${pos.y}px, rgba(124,255,178,0.12), transparent 60%)`
      }}
    />
  );
}
