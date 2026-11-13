import React, { useEffect, useRef, useState } from 'react';

export default function BackgroundEffects({ mousePos }) {
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Track window scroll for reactive background depth
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Living Neural Constellation Mesh with Laser Interconnects
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate responsive interactive constellation nodes
    const nodeCount = Math.min(Math.floor(window.innerWidth / 18), 75);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1,
        color: Math.random() > 0.45 ? 'rgba(239, 68, 68,' : 'rgba(255, 255, 255,',
        glow: Math.random() > 0.6,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Rare glowing cyber data packets moving along links
    const packets = [];
    for (let p = 0; p < 8; p++) {
      packets.push({
        fromNode: Math.floor(Math.random() * nodes.length),
        toNode: Math.floor(Math.random() * nodes.length),
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012,
      });
    }

    let tick = 0;

    const render = () => {
      tick += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mousePos?.x ?? -1000;
      const my = mousePos?.y ?? -1000;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Bounce gently at screen boundaries
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        // Pulsing radius
        const currentRadius = n.radius + Math.sin(tick + n.pulseOffset) * 0.4;

        // Draw node dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.8, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `${n.color} 0.6)`;
        if (n.glow) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#ef4444';
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();

        // Connect nearby nodes with faint laser lines
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.18;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = n.color.includes('239') 
              ? `rgba(239, 68, 68, ${alpha})`
              : `rgba(255, 255, 255, ${alpha * 0.8})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor when close
        const mdx = n.x - mx;
        const mdy = n.y - my;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < 140) {
          const malpha = (1 - mdist / 140) * 0.45;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(239, 68, 68, ${malpha})`;
          ctx.lineWidth = 1.2;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#ef4444';
          ctx.stroke();
        }
      }

      // Draw moving data packets
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#ef4444';
      packets.forEach((pkt) => {
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          pkt.progress = 0;
          pkt.fromNode = Math.floor(Math.random() * nodes.length);
          pkt.toNode = Math.floor(Math.random() * nodes.length);
        }

        const fn = nodes[pkt.fromNode];
        const tn = nodes[pkt.toNode];
        if (fn && tn) {
          const dist = Math.hypot(fn.x - tn.x, fn.y - tn.y);
          if (dist < 160) {
            const px = fn.x + (tn.x - fn.x) * pkt.progress;
            const py = fn.y + (tn.y - fn.y) * pkt.progress;

            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  // Compute dynamic glow positions based on scroll
  const scrollRatio = typeof window !== 'undefined' && document.body
    ? scrollY / (Math.max(document.body.scrollHeight - window.innerHeight, 1))
    : 0;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#07090e]">
      
      {/* 1. Deep Cyber Grid with Perspective Gradient */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 2. Interactive Living Neural Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* 3. Dynamic Nebula Glow 1: Primary Sentinel Core (Follows scroll smoothly) */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[140px] transition-all duration-700 ease-out pointer-events-none opacity-45"
        style={{
          top: `${20 + scrollRatio * 50}%`,
          left: `${50 + Math.sin(scrollRatio * Math.PI * 2) * 20}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(239,68,68,0.7) 0%, rgba(185,28,28,0.3) 45%, rgba(0,0,0,0) 75%)',
        }}
      />

      {/* 4. Dynamic Nebula Glow 2: Cyber Blue / Cyan Accent (Adds high-end contrast) */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[160px] transition-all duration-1000 ease-out pointer-events-none opacity-25"
        style={{
          top: `${40 + (1 - scrollRatio) * 40}%`,
          right: `${15 + Math.cos(scrollRatio * Math.PI) * 15}%`,
          transform: 'translateY(-50%)',
          background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(14,116,144,0.2) 50%, rgba(0,0,0,0) 80%)',
        }}
      />

      {/* 5. Deep Ambient Crimson Ground Glow */}
      <div 
        className="absolute -bottom-20 inset-x-0 h-[400px] blur-[120px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(239,68,68,0.6) 0%, rgba(153,27,27,0.2) 50%, transparent 80%)',
        }}
      />

      {/* 6. Subtle Vignette Mask (Darkens screen corners for cinematic depth) */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(7,9,14,0.85) 100%)',
        }}
      />

      {/* 7. Subtle Cyber Scanlines (High-tech CRT feel) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  );
}
