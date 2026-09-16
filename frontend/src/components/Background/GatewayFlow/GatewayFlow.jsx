import { useEffect, useRef } from "react";
import "./GatewayFlow.css";

export default function GatewayFlow({
  speed = 1,
  density = 1,
  opacity = 1,
  lineOpacity = 0.35,
  particleOpacity = 0.7,
  lineWidth = 1.2,
  particleSize = 3,
  ripple = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId;

    const particles = [];
    const explosions = [];

    const BASE_PATHS = 80;

    // --------------------------------
    // Utility
    // --------------------------------

    const getPathCount = () => {
      return Math.max(
        12,
        Math.round(BASE_PATHS * Math.max(0.25, Math.min(density, 2.5)))
      );
    };

    // --------------------------------
    // Resize Canvas
    // --------------------------------

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createPaths();
    };

    // --------------------------------
    // Create Paths
    // --------------------------------

    const createPaths = () => {
      particles.length = 0;

      const pathCount = getPathCount();

      for (let i = 0; i < pathCount; i++) {
        particles.push({
          isLeft: i % 2 === 0,

          startY:
            (i / pathCount) * height * 1.4 -
            height * 0.2,

          t: Math.random(),

          speed:
            0.0015 +
            Math.random() * 0.002,
        });
      }
    };

    // --------------------------------
    // Bezier Curve
    // --------------------------------

    const getBezierPoint = (
      t,
      p0,
      p1,
      p2,
      p3
    ) => {
      const u = 1 - t;

      return {
        x:
          u ** 3 * p0.x +
          3 * u ** 2 * t * p1.x +
          3 * u * t ** 2 * p2.x +
          t ** 3 * p3.x,

        y:
          u ** 3 * p0.y +
          3 * u ** 2 * t * p1.y +
          3 * u * t ** 2 * p2.y +
          t ** 3 * p3.y,
      };
    };

    // --------------------------------
    // Mouse / Click Ripple
    // --------------------------------

    const handleClick = (event) => {
      if (!ripple) return;

      explosions.push({
        x: event.clientX,
        y: event.clientY,

        radius: 0,

        life: 1,
      });
    };

    // --------------------------------
    // Animation
    // --------------------------------

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // ------------------------------
      // Update Ripple
      // ------------------------------

      explosions.forEach((explosion) => {
        explosion.radius += 15;

        explosion.life -= 0.015;
      });

      // Remove dead ripples

      for (let i = explosions.length - 1; i >= 0; i--) {
        if (explosions[i].life <= 0) {
          explosions.splice(i, 1);
        }
      }

      // ------------------------------
      // Draw Flow Paths
      // ------------------------------

      particles.forEach((path) => {
        const p0 = {
          x: path.isLeft ? 0 : width,
          y: path.startY,
        };

        const p1 = {
          x: path.isLeft
            ? centerX * 0.5
            : width - centerX * 0.5,

          y: path.startY,
        };

        const p2 = {
          x: path.isLeft
            ? centerX * 0.8
            : width - centerX * 0.8,

          y: centerY,
        };

        const p3 = {
          x: centerX,
          y: centerY,
        };

        // Draw curve

        ctx.beginPath();

        ctx.moveTo(
          p0.x,
          p0.y
        );

        ctx.bezierCurveTo(
          p1.x,
          p1.y,
          p2.x,
          p2.y,
          p3.x,
          p3.y
        );

        ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;

        ctx.lineWidth = lineWidth;

        ctx.setLineDash([1, 4]);

        ctx.stroke();

        ctx.setLineDash([]);

        // ------------------------------
        // Particle movement
        // ------------------------------

        path.t +=
          path.speed * speed;

        if (path.t > 1) {
          path.t = 0;

          path.startY +=
            (Math.random() - 0.5) * 10;
        }

        let position = getBezierPoint(
          path.t,
          p0,
          p1,
          p2,
          p3
        );

        // ------------------------------
        // Ripple interaction
        // ------------------------------

        let dxTotal = 0;
        let dyTotal = 0;

        explosions.forEach(
          (explosion) => {
            const dx =
              position.x - explosion.x;

            const dy =
              position.y - explosion.y;

            const distance =
              Math.hypot(dx, dy);

            if (
              distance <
                explosion.radius + 120 &&
              distance >
                explosion.radius - 120 &&
              distance > 0
            ) {
              const force =
                (1 -
                  Math.abs(
                    distance -
                      explosion.radius
                  ) /
                    120) *
                explosion.life;

              dxTotal +=
                (dx / distance) *
                force *
                80;

              dyTotal +=
                (dy / distance) *
                force *
                80;
            }
          }
        );

        position.x += dxTotal;
        position.y += dyTotal;

        // ------------------------------
        // Draw Particle
        // ------------------------------

        ctx.fillStyle = `rgba(
          255,
          255,
          255,
          ${particleOpacity}
        )`;

        const size = particleSize;

        ctx.fillRect(
          position.x - size / 2,
          position.y - size / 2,
          size,
          size
        );
      });

      animationFrameId =
        requestAnimationFrame(render);
    };

    // --------------------------------
    // Events
    // --------------------------------

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "click",
      handleClick
    );

    // Initial setup

    resize();

    render();

    // --------------------------------
    // Cleanup
    // --------------------------------

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "click",
        handleClick
      );

      cancelAnimationFrame(
        animationFrameId
      );
    };
  }, [
    speed,
    density,
    ripple,
    lineOpacity,
    particleOpacity,
    lineWidth,
    particleSize,
  ]);

  return (
    <div
      className="gateway-flow"
      style={{
        opacity,
      }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}